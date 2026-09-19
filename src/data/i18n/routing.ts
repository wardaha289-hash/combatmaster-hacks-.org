import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'combatmaster-esp'
	| 'combatmaster-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'anti-cheat'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'combatmaster-esp': '/combatmaster-esp/',
	'combatmaster-aimbot': '/combatmaster-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-combatmaster-hacks/',
	wallhack: '/combatmaster-wallhack/',
	radar: '/combatmaster-radar-hack/',
	'anti-cheat': '/anti-cheat-bypass/',
	'cheats-2026': '/combatmaster-hacks-2026/',
	hacks: '/combatmaster-hacks/',
	'cheat-download': '/combatmaster-cheat-download/',
	'mod-menu': '/combatmaster-mod-menu/',
	'soft-aim': '/combatmaster-soft-aim/',
	'best-cheats': '/best-combatmaster-hacks/',
	'aimbot-hack': '/combatmaster-aimbot-hack/',
	'esp-hack': '/combatmaster-esp-hack/',
	'unlock-all': '/combatmaster-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'combatmaster-esp': {
		en: 'combatmaster-esp',
		es: 'trucos-combatmaster-esp',
		fr: 'triche-combatmaster-esp',
		de: 'combatmaster-esp-wallhack',
		pt: 'cheats-combatmaster-esp',
		it: 'trucchi-combatmaster-esp',
		nl: 'combatmaster-esp-wallhack',
		pl: 'cheaty-combatmaster-esp',
		ru: 'combatmaster-esp-chity',
		tr: 'combatmaster-esp-hile',
		ar: 'combatmaster-esp-wallhack',
		ja: 'combatmaster-esp-wallhack',
		ko: 'combatmaster-esp-wallhack',
		zh: 'combatmaster-esp-wallhack',
		hi: 'combatmaster-esp-wallhack',
		id: 'combatmaster-esp-wallhack',
		th: 'combatmaster-esp-wallhack',
		vi: 'combatmaster-esp-wallhack',
		uk: 'combatmaster-esp-chity',
		cs: 'combatmaster-esp-wallhack',
		ro: 'combatmaster-esp-wallhack',
		sv: 'combatmaster-esp-wallhack',
	},
	'combatmaster-aimbot': {
		en: 'combatmaster-aimbot',
		es: 'trucos-combatmaster-aimbot',
		fr: 'triche-combatmaster-aimbot',
		de: 'combatmaster-aimbot',
		pt: 'cheats-combatmaster-aimbot',
		it: 'trucchi-combatmaster-aimbot',
		nl: 'combatmaster-aimbot',
		pl: 'cheaty-combatmaster-aimbot',
		ru: 'combatmaster-aimbot-chity',
		tr: 'combatmaster-aimbot-hile',
		ar: 'combatmaster-aimbot',
		ja: 'combatmaster-aimbot',
		ko: 'combatmaster-aimbot',
		zh: 'combatmaster-aimbot',
		hi: 'combatmaster-aimbot',
		id: 'combatmaster-aimbot',
		th: 'combatmaster-aimbot',
		vi: 'combatmaster-aimbot',
		uk: 'combatmaster-aimbot-chity',
		cs: 'combatmaster-aimbot',
		ro: 'combatmaster-aimbot',
		sv: 'combatmaster-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-combatmaster',
		fr: 'fonctionnalites-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-funktionen',
		pt: 'recursos-cheats-combatmaster',
		it: 'funzioni-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-functies',
		pl: 'funkcje-cheatow-combatmaster',
		ru: 'funkcii-chitov-combatmaster',
		tr: 'combatmaster-hile-ozellikleri',
		ar: 'escape-from-combatmaster-hacks-features',
		ja: 'escape-from-combatmaster-hacks-features',
		ko: 'escape-from-combatmaster-hacks-features',
		zh: 'escape-from-combatmaster-hacks-features',
		hi: 'escape-from-combatmaster-hacks-features',
		id: 'escape-from-combatmaster-hacks-features',
		th: 'escape-from-combatmaster-hacks-features',
		vi: 'escape-from-combatmaster-hacks-features',
		uk: 'funkcii-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-funkce',
		ro: 'functii-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-combatmaster',
		fr: 'prix-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-preise',
		pt: 'precos-cheats-combatmaster',
		it: 'prezzi-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-prijzen',
		pl: 'ceny-cheatow-combatmaster',
		ru: 'ceny-chitov-combatmaster',
		tr: 'combatmaster-hile-fiyatlari',
		ar: 'escape-from-combatmaster-hacks-pricing',
		ja: 'escape-from-combatmaster-hacks-pricing',
		ko: 'escape-from-combatmaster-hacks-pricing',
		zh: 'escape-from-combatmaster-hacks-pricing',
		hi: 'escape-from-combatmaster-hacks-pricing',
		id: 'escape-from-combatmaster-hacks-pricing',
		th: 'escape-from-combatmaster-hacks-pricing',
		vi: 'escape-from-combatmaster-hacks-pricing',
		uk: 'ciny-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-ceny',
		ro: 'preturi-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-combatmaster',
		fr: 'installation-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-installation',
		pt: 'instalacao-cheats-combatmaster',
		it: 'installazione-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-installatie',
		pl: 'instalacja-cheatow-combatmaster',
		ru: 'ustanovka-chitov-combatmaster',
		tr: 'combatmaster-hile-kurulum',
		ar: 'escape-from-combatmaster-hacks-setup',
		ja: 'escape-from-combatmaster-hacks-setup',
		ko: 'escape-from-combatmaster-hacks-setup',
		zh: 'escape-from-combatmaster-hacks-setup',
		hi: 'escape-from-combatmaster-hacks-setup',
		id: 'escape-from-combatmaster-hacks-setup',
		th: 'escape-from-combatmaster-hacks-setup',
		vi: 'escape-from-combatmaster-hacks-setup',
		uk: 'vstanovka-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-instalace',
		ro: 'instalare-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-combatmaster',
		fr: 'mises-a-jour-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-updates',
		pt: 'atualizacoes-cheats-combatmaster',
		it: 'aggiornamenti-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-updates',
		pl: 'aktualizacje-cheatow-combatmaster',
		ru: 'obnovleniya-chitov-combatmaster',
		tr: 'combatmaster-hile-guncellemeleri',
		ar: 'escape-from-combatmaster-hacks-updates',
		ja: 'escape-from-combatmaster-hacks-updates',
		ko: 'escape-from-combatmaster-hacks-updates',
		zh: 'escape-from-combatmaster-hacks-updates',
		hi: 'escape-from-combatmaster-hacks-updates',
		id: 'escape-from-combatmaster-hacks-updates',
		th: 'escape-from-combatmaster-hacks-updates',
		vi: 'escape-from-combatmaster-hacks-updates',
		uk: 'onovlennya-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-aktualizace',
		ro: 'actualizari-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-combatmaster',
		fr: 'faq-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-faq',
		pt: 'faq-cheats-combatmaster',
		it: 'faq-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-faq',
		pl: 'faq-cheatow-combatmaster',
		ru: 'faq-chitov-combatmaster',
		tr: 'combatmaster-hile-sss',
		ar: 'escape-from-combatmaster-hacks-faq',
		ja: 'escape-from-combatmaster-hacks-faq',
		ko: 'escape-from-combatmaster-hacks-faq',
		zh: 'escape-from-combatmaster-hacks-faq',
		hi: 'escape-from-combatmaster-hacks-faq',
		id: 'escape-from-combatmaster-hacks-faq',
		th: 'escape-from-combatmaster-hacks-faq',
		vi: 'escape-from-combatmaster-hacks-faq',
		uk: 'faq-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-faq',
		ro: 'faq-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-combatmaster',
		fr: 'support-triche-combatmaster',
		de: 'escape-from-combatmaster-hacks-support',
		pt: 'suporte-cheats-combatmaster',
		it: 'supporto-trucchi-combatmaster',
		nl: 'escape-from-combatmaster-hacks-support',
		pl: 'wsparcie-cheatow-combatmaster',
		ru: 'podderzhka-chitov-combatmaster',
		tr: 'combatmaster-hile-destek',
		ar: 'escape-from-combatmaster-hacks-support',
		ja: 'escape-from-combatmaster-hacks-support',
		ko: 'escape-from-combatmaster-hacks-support',
		zh: 'escape-from-combatmaster-hacks-support',
		hi: 'escape-from-combatmaster-hacks-support',
		id: 'escape-from-combatmaster-hacks-support',
		th: 'escape-from-combatmaster-hacks-support',
		vi: 'escape-from-combatmaster-hacks-support',
		uk: 'pidtrymka-chitiv-combatmaster',
		cs: 'escape-from-combatmaster-hacks-podpora',
		ro: 'suport-cheats-combatmaster',
		sv: 'escape-from-combatmaster-hacks-support',
	},
	undetected: {
		en: 'undetected-combatmaster-hacks',
		es: 'trucos-combatmaster-indetectables',
		fr: 'triche-combatmaster-indetectable',
		de: 'unentdeckte-escape-from-combatmaster-hacks',
		pt: 'cheats-combatmaster-indetectaveis',
		it: 'trucchi-combatmaster-indetectabili',
		nl: 'undetected-combatmaster-hacks',
		pl: 'niewykrywalne-cheats-combatmaster',
		ru: 'nedecektiruemye-chity-combatmaster',
		tr: 'tespit-edilemeyen-combatmaster-hileleri',
		ar: 'undetected-combatmaster-hacks',
		ja: 'undetected-combatmaster-hacks',
		ko: 'undetected-combatmaster-hacks',
		zh: 'undetected-combatmaster-hacks',
		hi: 'undetected-combatmaster-hacks',
		id: 'undetected-combatmaster-hacks',
		th: 'undetected-combatmaster-hacks',
		vi: 'undetected-combatmaster-hacks',
		uk: 'nedecektovani-chity-combatmaster',
		cs: 'undetected-combatmaster-hacks',
		ro: 'cheats-combatmaster-nedetectabile',
		sv: 'undetected-combatmaster-hacks',
	},
	wallhack: {
		en: 'combatmaster-wallhack',
		es: 'wallhack-trucos-combatmaster',
		fr: 'wallhack-triche-combatmaster',
		de: 'combatmaster-wallhack',
		pt: 'wallhack-cheats-combatmaster',
		it: 'wallhack-trucchi-combatmaster',
		nl: 'combatmaster-wallhack',
		pl: 'wallhack-cheatow-combatmaster',
		ru: 'wallhack-chity-combatmaster',
		tr: 'combatmaster-wallhack-hile',
		ar: 'combatmaster-wallhack',
		ja: 'combatmaster-wallhack',
		ko: 'combatmaster-wallhack',
		zh: 'combatmaster-wallhack',
		hi: 'combatmaster-wallhack',
		id: 'combatmaster-wallhack',
		th: 'combatmaster-wallhack',
		vi: 'combatmaster-wallhack',
		uk: 'wallhack-chity-combatmaster',
		cs: 'combatmaster-wallhack',
		ro: 'wallhack-cheats-combatmaster',
		sv: 'combatmaster-wallhack',
	},
	radar: {
		en: 'combatmaster-radar-hack',
		es: 'radar-hack-trucos-combatmaster',
		fr: 'radar-hack-triche-combatmaster',
		de: 'combatmaster-radar-hack',
		pt: 'radar-hack-cheats-combatmaster',
		it: 'radar-hack-trucchi-combatmaster',
		nl: 'combatmaster-radar-hack',
		pl: 'radar-hack-cheatow-combatmaster',
		ru: 'radar-hack-chity-combatmaster',
		tr: 'combatmaster-radar-hack',
		ar: 'combatmaster-radar-hack',
		ja: 'combatmaster-radar-hack',
		ko: 'combatmaster-radar-hack',
		zh: 'combatmaster-radar-hack',
		hi: 'combatmaster-radar-hack',
		id: 'combatmaster-radar-hack',
		th: 'combatmaster-radar-hack',
		vi: 'combatmaster-radar-hack',
		uk: 'radar-hack-chity-combatmaster',
		cs: 'combatmaster-radar-hack',
		ro: 'radar-hack-cheats-combatmaster',
		sv: 'combatmaster-radar-hack',
	},
	'anti-cheat': {
		en: 'anti-cheat-bypass',
		es: 'anti-cheat-bypass-trucos',
		fr: 'anti-cheat-bypass-triche',
		de: 'anti-cheat-bypass',
		pt: 'anti-cheat-bypass-cheats',
		it: 'anti-cheat-bypass-trucchi',
		nl: 'anti-cheat-bypass',
		pl: 'anti-cheat-bypass-cheatow',
		ru: 'anti-cheat-bypass-chity',
		tr: 'anti-cheat-bypass',
		ar: 'anti-cheat-bypass',
		ja: 'anti-cheat-bypass',
		ko: 'anti-cheat-bypass',
		zh: 'anti-cheat-bypass',
		hi: 'anti-cheat-bypass',
		id: 'anti-cheat-bypass',
		th: 'anti-cheat-bypass',
		vi: 'anti-cheat-bypass',
		uk: 'anti-cheat-bypass-chity',
		cs: 'anti-cheat-bypass',
		ro: 'anti-cheat-bypass-cheats',
		sv: 'anti-cheat-bypass',
	},
	'cheats-2026': {
		en: 'combatmaster-hacks-2026',
		es: 'trucos-combatmaster-2026',
		fr: 'triche-combatmaster-2026',
		de: 'combatmaster-hacks-2026',
		pt: 'cheats-combatmaster-2026',
		it: 'trucchi-combatmaster-2026',
		nl: 'combatmaster-hacks-2026',
		pl: 'cheaty-combatmaster-2026',
		ru: 'chity-combatmaster-2026',
		tr: 'combatmaster-hileleri-2026',
		ar: 'combatmaster-hacks-2026',
		ja: 'combatmaster-hacks-2026',
		ko: 'combatmaster-hacks-2026',
		zh: 'combatmaster-hacks-2026',
		hi: 'combatmaster-hacks-2026',
		id: 'combatmaster-hacks-2026',
		th: 'combatmaster-hacks-2026',
		vi: 'combatmaster-hacks-2026',
		uk: 'chity-combatmaster-2026',
		cs: 'combatmaster-hacks-2026',
		ro: 'cheats-combatmaster-2026',
		sv: 'combatmaster-hacks-2026',
	},
	hacks: {
		en: 'combatmaster-hacks',
		es: 'hacks-trucos-combatmaster',
		fr: 'hacks-triche-combatmaster',
		de: 'combatmaster-hacks',
		pt: 'hacks-cheats-combatmaster',
		it: 'hacks-trucchi-combatmaster',
		nl: 'combatmaster-hacks',
		pl: 'hacks-cheatow-combatmaster',
		ru: 'haksy-chity-combatmaster',
		tr: 'combatmaster-hile-hacks',
		ar: 'combatmaster-hacks',
		ja: 'combatmaster-hacks',
		ko: 'combatmaster-hacks',
		zh: 'combatmaster-hacks',
		hi: 'combatmaster-hacks',
		id: 'combatmaster-hacks',
		th: 'combatmaster-hacks',
		vi: 'combatmaster-hacks',
		uk: 'haksy-chity-combatmaster',
		cs: 'combatmaster-hacks',
		ro: 'hacks-cheats-combatmaster',
		sv: 'combatmaster-hacks',
	},
	'cheat-download': {
		en: 'combatmaster-cheat-download',
		es: 'descarga-trucos-combatmaster',
		fr: 'telechargement-triche-combatmaster',
		de: 'combatmaster-cheat-download',
		pt: 'download-cheats-combatmaster',
		it: 'download-trucchi-combatmaster',
		nl: 'combatmaster-cheat-download',
		pl: 'pobieranie-cheatow-combatmaster',
		ru: 'skachat-chity-combatmaster',
		tr: 'combatmaster-hile-indir',
		ar: 'combatmaster-cheat-download',
		ja: 'combatmaster-cheat-download',
		ko: 'combatmaster-cheat-download',
		zh: 'combatmaster-cheat-download',
		hi: 'combatmaster-cheat-download',
		id: 'combatmaster-cheat-download',
		th: 'combatmaster-cheat-download',
		vi: 'combatmaster-cheat-download',
		uk: 'zavantazhennya-chitiv-combatmaster',
		cs: 'combatmaster-cheat-download',
		ro: 'descarcare-cheats-combatmaster',
		sv: 'combatmaster-cheat-download',
	},
	'mod-menu': {
		en: 'combatmaster-mod-menu',
		es: 'menu-mod-trucos-combatmaster',
		fr: 'menu-mod-triche-combatmaster',
		de: 'combatmaster-mod-menu',
		pt: 'menu-mod-cheats-combatmaster',
		it: 'menu-mod-trucchi-combatmaster',
		nl: 'combatmaster-mod-menu',
		pl: 'menu-mod-cheatow-combatmaster',
		ru: 'mod-menu-chity-combatmaster',
		tr: 'combatmaster-mod-menu',
		ar: 'combatmaster-mod-menu',
		ja: 'combatmaster-mod-menu',
		ko: 'combatmaster-mod-menu',
		zh: 'combatmaster-mod-menu',
		hi: 'combatmaster-mod-menu',
		id: 'combatmaster-mod-menu',
		th: 'combatmaster-mod-menu',
		vi: 'combatmaster-mod-menu',
		uk: 'mod-menu-chity-combatmaster',
		cs: 'combatmaster-mod-menu',
		ro: 'meniu-mod-cheats-combatmaster',
		sv: 'combatmaster-mod-menu',
	},
	'soft-aim': {
		en: 'combatmaster-soft-aim',
		es: 'soft-aim-trucos-combatmaster',
		fr: 'soft-aim-triche-combatmaster',
		de: 'combatmaster-soft-aim',
		pt: 'soft-aim-cheats-combatmaster',
		it: 'soft-aim-trucchi-combatmaster',
		nl: 'combatmaster-soft-aim',
		pl: 'soft-aim-cheatow-combatmaster',
		ru: 'soft-aim-chity-combatmaster',
		tr: 'combatmaster-soft-aim',
		ar: 'combatmaster-soft-aim',
		ja: 'combatmaster-soft-aim',
		ko: 'combatmaster-soft-aim',
		zh: 'combatmaster-soft-aim',
		hi: 'combatmaster-soft-aim',
		id: 'combatmaster-soft-aim',
		th: 'combatmaster-soft-aim',
		vi: 'combatmaster-soft-aim',
		uk: 'soft-aim-chity-combatmaster',
		cs: 'combatmaster-soft-aim',
		ro: 'soft-aim-cheats-combatmaster',
		sv: 'combatmaster-soft-aim',
	},
	'best-cheats': {
		en: 'best-combatmaster-hacks',
		es: 'mejores-trucos-combatmaster',
		fr: 'meilleures-triches-combatmaster',
		de: 'beste-escape-from-combatmaster-hacks',
		pt: 'melhores-cheats-combatmaster',
		it: 'migliori-trucchi-combatmaster',
		nl: 'beste-escape-from-combatmaster-hacks',
		pl: 'najlepsze-cheats-combatmaster',
		ru: 'luchshie-chity-combatmaster',
		tr: 'en-iyi-combatmaster-hileleri',
		ar: 'best-combatmaster-hacks',
		ja: 'best-combatmaster-hacks',
		ko: 'best-combatmaster-hacks',
		zh: 'best-combatmaster-hacks',
		hi: 'best-combatmaster-hacks',
		id: 'best-combatmaster-hacks',
		th: 'best-combatmaster-hacks',
		vi: 'best-combatmaster-hacks',
		uk: 'naykrashchi-chity-combatmaster',
		cs: 'nejlepsi-escape-from-combatmaster-hacks',
		ro: 'cele-mai-bune-cheats-combatmaster',
		sv: 'basta-escape-from-combatmaster-hacks',
	},
	'aimbot-hack': {
		en: 'combatmaster-aimbot-hack',
		es: 'aimbot-hack-trucos-combatmaster',
		fr: 'aimbot-hack-triche-combatmaster',
		de: 'combatmaster-aimbot-hack',
		pt: 'aimbot-hack-cheats-combatmaster',
		it: 'aimbot-hack-trucchi-combatmaster',
		nl: 'combatmaster-aimbot-hack',
		pl: 'aimbot-hack-cheatow-combatmaster',
		ru: 'aimbot-hack-chity-combatmaster',
		tr: 'combatmaster-aimbot-hack',
		ar: 'combatmaster-aimbot-hack',
		ja: 'combatmaster-aimbot-hack',
		ko: 'combatmaster-aimbot-hack',
		zh: 'combatmaster-aimbot-hack',
		hi: 'combatmaster-aimbot-hack',
		id: 'combatmaster-aimbot-hack',
		th: 'combatmaster-aimbot-hack',
		vi: 'combatmaster-aimbot-hack',
		uk: 'aimbot-hack-chity-combatmaster',
		cs: 'combatmaster-aimbot-hack',
		ro: 'aimbot-hack-cheats-combatmaster',
		sv: 'combatmaster-aimbot-hack',
	},
	'esp-hack': {
		en: 'combatmaster-esp-hack',
		es: 'esp-hack-trucos-combatmaster',
		fr: 'esp-hack-triche-combatmaster',
		de: 'combatmaster-esp-hack',
		pt: 'esp-hack-cheats-combatmaster',
		it: 'esp-hack-trucchi-combatmaster',
		nl: 'combatmaster-esp-hack',
		pl: 'esp-hack-cheatow-combatmaster',
		ru: 'esp-hack-chity-combatmaster',
		tr: 'combatmaster-esp-hack',
		ar: 'combatmaster-esp-hack',
		ja: 'combatmaster-esp-hack',
		ko: 'combatmaster-esp-hack',
		zh: 'combatmaster-esp-hack',
		hi: 'combatmaster-esp-hack',
		id: 'combatmaster-esp-hack',
		th: 'combatmaster-esp-hack',
		vi: 'combatmaster-esp-hack',
		uk: 'esp-hack-chity-combatmaster',
		cs: 'combatmaster-esp-hack',
		ro: 'esp-hack-cheats-combatmaster',
		sv: 'combatmaster-esp-hack',
	},
	'unlock-all': {
		en: 'combatmaster-unlock-all',
		es: 'unlock-all-trucos-combatmaster',
		fr: 'unlock-all-triche-combatmaster',
		de: 'combatmaster-unlock-all',
		pt: 'unlock-all-cheats-combatmaster',
		it: 'unlock-all-trucchi-combatmaster',
		nl: 'combatmaster-unlock-all',
		pl: 'unlock-all-cheatow-combatmaster',
		ru: 'unlock-all-chity-combatmaster',
		tr: 'combatmaster-unlock-all',
		ar: 'combatmaster-unlock-all',
		ja: 'combatmaster-unlock-all',
		ko: 'combatmaster-unlock-all',
		zh: 'combatmaster-unlock-all',
		hi: 'combatmaster-unlock-all',
		id: 'combatmaster-unlock-all',
		th: 'combatmaster-unlock-all',
		vi: 'combatmaster-unlock-all',
		uk: 'unlock-all-chity-combatmaster',
		cs: 'combatmaster-unlock-all',
		ro: 'unlock-all-cheats-combatmaster',
		sv: 'combatmaster-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('combatmaster-aimbot', locale), pageId: 'combatmaster-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('combatmaster-esp', locale), pageId: 'combatmaster-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
