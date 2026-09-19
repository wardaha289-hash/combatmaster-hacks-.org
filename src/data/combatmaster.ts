import { siteConfig } from './site';

/** Screenshots used across product pages — simple combatmaster hacks keyword alts. */
export const combatmasterImages = {
	hero: '/images/combatmaster-hacks-hero-full.png',
	espWallhack: '/images/combatmaster-hacks-wallhack.webp',
	aimbotCombat: '/images/combatmaster-hacks-aimbot.webp',
	aimbotSkeleton: '/images/combatmaster-hacks-aimbot-view.webp',
	playerEsp: '/images/combatmaster-hacks-radar.webp',
	cheatsCombat: '/images/combatmaster-hacks-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/combatmaster-hacks-raid.webp',
	loadoutBuilder: '/images/combatmaster-hacks-radar.webp',
	squadFight: '/images/combatmaster-hacks-aimbot-view.webp',
	cheatsPackage: '/images/combatmaster-hacks-radar.webp',
	headerArt: '/images/combatmaster-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/combatmaster-hacks-raid.webp',
	matchFight: '/images/combatmaster-hacks-aimbot.webp',
	rebootFight: '/images/combatmaster-hacks-aimbot.webp',
	scavRunCombat: '/images/combatmaster-hacks-wallhack.webp',
	scavRunMode: '/images/combatmaster-hacks-esp.webp',
	battleRoyaleIsland: '/images/combatmaster-hacks-esp.webp',
	matchMap: '/images/combatmaster-hacks-esp.webp',
	product: [
		{ src: '/images/combatmaster-hacks-esp.webp', alt: 'ESP player boxes in an Combat Master match' },
		{ src: '/images/combatmaster-hacks-wallhack.webp', alt: 'Wallhack outlines for players and bots' },
		{ src: '/images/combatmaster-hacks-aimbot.webp', alt: 'Soft aim assist overlay for Combat Master' },
		{ src: '/images/combatmaster-hacks-esp.webp', alt: 'Loot and match ESP markers' },
		{ src: '/images/combatmaster-hacks-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/combatmaster-hacks-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/combatmaster-hacks-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/combatmaster-hacks-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/combatmaster-hacks-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/combatmaster-hacks-esp.webp', alt: 'Container and loot ESP pins' },
		{ src: '/images/combatmaster-hacks-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/** Cheats / Store / Status gallery — lobby + gunsmith + aimbot (valid WebP srcset variants). */
	cheatsStoreStatusGallery: [
		{ src: '/images/combatmaster-hacks-esp.webp', alt: 'Combat Master operator loadout in the main menu' },
		{ src: '/images/combatmaster-hacks-wallhack.webp', alt: 'Combat Master gunsmith weapon mods screen' },
		{ src: '/images/combatmaster-hacks-aimbot-view.webp', alt: 'Combat Master soft aim overlay in a match' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/combatmaster-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/combatmaster-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/combatmaster-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/combatmaster-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/combatmaster-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/combatmaster-hacks-raid.webp', title: '', caption: '' },
	],
} as const;
