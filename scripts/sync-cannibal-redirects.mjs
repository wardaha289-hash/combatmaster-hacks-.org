#!/usr/bin/env node
/**
 * Syncs locale 301s for cannibal pageIds → pillar pageIds into public/_redirects
 * and functions/cannibal-redirects.json (used by Workers middleware).
 * Targets are read from src/data/seo-canonical.ts (single source of truth).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const CANONICAL = path.join(ROOT, 'src/data/seo-cannibal-map.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/cannibal-redirects.json');

function readCannibalTargets() {
	const src = readFileSync(CANONICAL, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing in seo-cannibal-map.ts');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	if (!Object.keys(targets).length) throw new Error('No cannibal targets parsed');
	return targets;
}

function readEnglishPaths() {
	const src = readFileSync(ROUTING, 'utf8');
	const block = src.match(/englishPaths:\s*Record[^=]*=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths missing in routing.ts');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*'([^']+)'/g)) {
		paths[row[1]] = row[2];
	}
	return paths;
}

function matchSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

const TARGETS = readCannibalTargets();
const EN_PATHS = readEnglishPaths();
const routing = readFileSync(ROUTING, 'utf8');
const map = {};
const enLines = [
	'',
	'# Auto-generated EN cannibal redirects (scripts/sync-cannibal-redirects.mjs)',
	'# Do not edit by hand — regenerated on sync:brand / prebuild',
];

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromPath = EN_PATHS[fromId];
	const toPath = EN_PATHS[toId];
	if (!fromPath || !toPath) continue;
	enLines.push(`${fromPath.replace(/\/$/, '')} ${toPath} 301`);
	enLines.push(`${fromPath} ${toPath} 301`);
}

const lines = [
	'',
	'# Auto-generated cannibal locale redirects (scripts/sync-cannibal-redirects.mjs)',
	'# Do not edit by hand — regenerated on sync:brand / prebuild',
];

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromSlugs = matchSlugBlock(routing, fromId);
	const toSlugs = matchSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		const fromPath = `/${locale}/${fromSlug}/`;
		const toPath = `/${locale}/${toSlug}/`;
		map[fromPath] = toPath;
		map[`/${locale}/${fromSlug}`] = toPath;
		lines.push(`${fromPath.slice(0, -1)} ${toPath} 301`);
		lines.push(`${fromPath} ${toPath} 301`);
	}
}

function stripGeneratedBlock(content, markerStart) {
	const start = content.indexOf(markerStart);
	if (start < 0) return content;
	const lineStart = content.lastIndexOf('\n', start);
	return `${content.slice(0, lineStart >= 0 ? lineStart : start).trimEnd()}\n`;
}

let redirects = readFileSync(REDIRECTS, 'utf8');
redirects = stripGeneratedBlock(redirects, '# Auto-generated EN cannibal redirects');
redirects = stripGeneratedBlock(redirects, '# Auto-generated cannibal locale redirects');

redirects = `${redirects.trimEnd()}\n${enLines.join('\n')}\n${lines.join('\n')}\n`;
writeFileSync(REDIRECTS, redirects);
writeFileSync(JSON_OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(
	`Synced ${Object.keys(map).length / 2} cannibal locale redirect pairs (${Object.keys(TARGETS).length} pageIds)`,
);
