/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'combatmaster-esp', 'combatmaster-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anti-cheat',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple combatmaster hacks keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/combatmaster-hacks-esp.webp',
	'combatmaster-esp': '/images/combatmaster-hacks-radar.webp',
	'combatmaster-aimbot': '/images/combatmaster-hacks-aimbot.webp',
	features: '/images/combatmaster-hacks-aimbot-view.webp',
	pricing: '/images/combatmaster-hacks-match.webp',
	setup: '/images/combatmaster-hacks-radar.webp',
	updates: '/images/combatmaster-hacks-esp.webp',
	faq: '/images/combatmaster-hacks-aimbot-view.webp',
	support: '/images/combatmaster-hacks-match.webp',
	undetected: '/images/combatmaster-hacks-wallhack.webp',
	wallhack: '/images/combatmaster-hacks-wallhack.webp',
	radar: '/images/combatmaster-hacks-radar.webp',
	'anti-cheat': '/images/combatmaster-hacks-aimbot.webp',
	'cheats-2026': '/images/combatmaster-hacks-esp.webp',
	hacks: '/images/combatmaster-hacks-match.webp',
	'cheat-download': '/images/combatmaster-hacks-match.webp',
	'mod-menu': '/images/combatmaster-hacks-radar.webp',
	'soft-aim': '/images/combatmaster-hacks-aimbot-view.webp',
	'best-cheats': '/images/combatmaster-hacks-esp.webp',
	'aimbot-hack': '/images/combatmaster-hacks-aimbot-view.webp',
	'esp-hack': '/images/combatmaster-hacks-wallhack.webp',
	'unlock-all': '/images/combatmaster-hacks-radar.webp',
	privacy: '/images/combatmaster-hacks-aimbot.webp',
	refund: '/images/combatmaster-hacks-match.webp',
	terms: '/images/combatmaster-hacks-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'combatmaster-esp' | 'combatmaster-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Combat Master Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://www.escapefromcombatmaster.com/" target="_blank" rel="noopener noreferrer">Combat Master</a>',
	combatmaster:
		'<a href="https://www.escapefromcombatmaster.com/" target="_blank" rel="noopener noreferrer">Combat Master</a>',
	status:
		'<a href="https://www.escapefromcombatmaster.com/support" target="_blank" rel="noopener noreferrer">Combat Master Support</a>',
	'anti-cheat':
		'<a href="https://www.anti-cheat.com/" target="_blank" rel="noopener noreferrer">anti-cheat Anti-Cheat</a>',
};
