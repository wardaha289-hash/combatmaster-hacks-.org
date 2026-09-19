export type ForumCategory = 'features' | 'setup' | 'instructions';

export type ForumThread = {
	slug: string;
	category: ForumCategory;
	title: string;
	description: string;
	paragraphs: readonly string[];
	relatedLinks?: readonly { label: string; href: string }[];
};

export const forumThreads: readonly ForumThread[] = [
	{
		slug: 'configuration-profiles',
		category: 'features',
		title: 'Combat Master Configuration: Save, Load and Profile Tuning',
		description:
			'Save ESP, radar, and aimbot profiles for BR and TDM. Load a preset before you queue so overlays match the mode you play.',
		paragraphs: [
			'Combat Master Hacks lets you store separate configs for Battle Royale and Team Deathmatch. Save player ESP categories, radar range, and aimbot smoothness once — then load the right profile before each session.',
			'Use in-client hotkeys to switch profiles mid-match when you move from BR to TDM without reopening menus. Pair with the Features page for the full control list.',
		],
		relatedLinks: [
			{ label: 'All features', href: '/features/' },
			{ label: 'Mod menu toggles', href: '/combatmaster-hacks/' },
		],
	},
	{
		slug: 'radar-features',
		category: 'features',
		title: 'Combat Master Radar Features',
		description:
			'2D radar for players and vehicles in fast BR lobbies. See flanks outside your FOV before you commit to a push.',
		paragraphs: [
			'The radar overlay shows nearby threats on a flat minimap-style panel. Directional cues highlight players approaching from rooftops, windows, or third-party angles.',
			'Adjust range for early rotations versus tight final circles. Radar ships with ESP and aimbot in one Combat Master Hacks license.',
		],
		relatedLinks: [
			{ label: 'Radar hack page', href: '/combatmaster-radar-hack/' },
			{ label: 'ESP wallhack', href: '/combatmaster-esp/' },
		],
	},
	{
		slug: 'recoil-configuration',
		category: 'features',
		title: 'Combat Master Recoil Configuration',
		description:
			'No recoil, no spread, and soft aim tuning for AR and SMG loadouts. Keep beams stable during long-range fights.',
		paragraphs: [
			'Recoil control and spread reduction help during full-auto sprays in BR and TDM. Tune alongside soft aim smoothness so assist feels natural, not snappy.',
			'Start conservative after patches — check Updates before queueing when weapon balance changes.',
		],
		relatedLinks: [
			{ label: 'Soft aim settings', href: '/combatmaster-aimbot/' },
			{ label: 'Aimbot controls', href: '/combatmaster-aimbot/' },
		],
	},
	{
		slug: 'performance-settings',
		category: 'setup',
		title: 'Performance Settings for ESP and Radar Tools',
		description:
			'Keep FPS stable while overlays run. Toggle categories you do not need and lower radar refresh during low-end PCs.',
		paragraphs: [
			'Disable loot markers or distant ESP boxes if your GPU struggles in large BR lobbies. Radar range can be lowered to reduce draw calls while keeping close threats visible.',
			'Close conflicting overlay apps before launch. Full install steps live on the Setup page.',
		],
		relatedLinks: [
			{ label: 'Setup walkthrough', href: '/setup/' },
			{ label: 'Features list', href: '/features/' },
		],
	},
	{
		slug: 'player-esp-explained',
		category: 'features',
		title: 'Combat Master Player ESP Explained for Large Lobbies',
		description:
			'Boxes, skeletons, and team colors in 100-player fights. Read squads before you take a third-party.',
		paragraphs: [
			'Player ESP draws outlines, distance readouts, and optional snaplines for enemies and bots. Team and enemy colour coding helps in BR and TDM when multiple squads collapse on one POI.',
			'Toggle boss, loot, and container markers separately so only match-critical overlays stay on screen.',
		],
		relatedLinks: [
			{ label: 'ESP page', href: '/combatmaster-esp/' },
			{ label: 'Wallhack overview', href: '/combatmaster-esp/' },
		],
	},
	{
		slug: 'aimbot-settings',
		category: 'instructions',
		title: 'Combat Master Aimbot Settings',
		description:
			'FOV, smoothing, and bone selection for BR and TDM. Hotkeys let you toggle assist mid-match.',
		paragraphs: [
			'Set FOV wide for CQB rooms and tighter for long-range AR beams. Smoothness and bone priority (head, chest, dynamic) control how assist feels during squad fights.',
			'Save per-weapon profiles for AR, SMG, and marksman classes. Read maintenance notes on Updates after anti-cheat patches before raising aggressiveness.',
		],
		relatedLinks: [
			{ label: 'Aimbot page', href: '/combatmaster-aimbot/' },
			{ label: 'Pricing', href: '/pricing/' },
		],
	},
] as const;

export function getForumThread(slug: string): ForumThread | undefined {
	return forumThreads.find((t) => t.slug === slug);
}

export function getForumPath(slug: string): string {
	return `/forums/${slug}/`;
}

export const forumIndexPath = '/forums/';

/** English forum routes for sitemap-en.xml. */
export function getForumSitemapEntries() {
	const lastmod = '2026-03-20';
	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: forumIndexPath,
			lastmod,
			priority: 0.82,
			changefreq: 'weekly',
			images: [],
		},
	];

	for (const thread of forumThreads) {
		entries.push({
			path: getForumPath(thread.slug),
			lastmod,
			priority: 0.72,
			changefreq: 'monthly',
			images: [],
		});
	}

	return entries;
}
