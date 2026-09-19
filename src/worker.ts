/**
 * Cloudflare Worker — host canonicalization + path redirects before static assets.
 * Cannibal/locale 301s live here (not _redirects) — Workers Assets caps dynamic rules at 100.
 * Canonical site: https://combatmasterhacks.org (matches brand.url)
 */
import cannibalRedirects from './data/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'combatmasterhacks.org';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set(['bestcombatmastercheats.com', 'www.bestcombatmastercheats.com']);

function canonicalHostUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	return cannibalRedirects[pathname as keyof typeof cannibalRedirects] ?? null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const hostTarget = canonicalHostUrl(request);

		const redirectPath = pathRedirect(url.pathname);
		if (redirectPath) {
			const target = new URL(redirectPath + url.search, CANONICAL_ORIGIN);
			return Response.redirect(target.toString(), 301);
		}

		if (hostTarget) {
			return Response.redirect(hostTarget.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
