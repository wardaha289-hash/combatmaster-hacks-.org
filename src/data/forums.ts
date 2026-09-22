export type ForumCategory =
	| 'setup'
	| 'buying'
	| 'features'
	| 'gameplay'
	| 'troubleshooting'
	| 'updates';

export type ForumThread = {
	slug: string;
	category: ForumCategory;
	title: string;
	description: string;
	paragraphs: readonly string[];
	relatedLinks?: readonly { label: string; href: string }[];
};

/** Display order on /forums/ and category nav. */
export const forumCategoryOrder: readonly ForumCategory[] = [
	'setup',
	'buying',
	'features',
	'gameplay',
	'troubleshooting',
	'updates',
];

export const forumThreads: readonly ForumThread[] = [
	{
		slug: 'performance-settings',
		category: 'setup',
		title: 'Performance Settings for ESP and Radar Tools',
		description:
			'Keep FPS stable while overlays run. Toggle categories you do not need and lower radar refresh on low-end PCs.',
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
		slug: 'aimbot-settings',
		category: 'setup',
		title: 'Combat Master Aimbot Setup and Hotkeys',
		description:
			'FOV, smoothing, and bone selection for BR and TDM. Hotkeys let you toggle assist mid-match.',
		paragraphs: [
			'Set FOV wide for CQB rooms and tighter for long-range AR beams. Smoothness and bone priority (head, chest, dynamic) control how assist feels during squad fights.',
			'Save per-weapon profiles for AR, SMG, and marksman classes. Read maintenance notes on Updates after anti-cheat patches before raising aggressiveness.',
		],
		relatedLinks: [
			{ label: 'Aimbot page', href: '/combatmaster-aimbot/' },
			{ label: 'Setup guide', href: '/setup/' },
		],
	},
	{
		slug: 'license-delivery-and-activation',
		category: 'buying',
		title: 'License Delivery and Activation After Checkout',
		description:
			'What happens after you buy — email delivery, key activation, and when access starts on Windows PC.',
		paragraphs: [
			'After checkout confirms payment, your Combat Master Hacks license arrives by email. Follow the activation steps in that message — no physical shipment.',
			'Keep your order ID for support. If nothing arrives within a few minutes, check spam and contact Support with your receipt.',
		],
		relatedLinks: [
			{ label: 'Store plans', href: '/pricing/' },
			{ label: 'Support', href: '/support/' },
		],
	},
	{
		slug: 'choosing-the-right-plan',
		category: 'buying',
		title: 'Choosing the Right Plan: Monthly vs Lifetime',
		description:
			'Compare monthly and lifetime licenses — what is included, renewal, and which plan fits casual vs daily players.',
		paragraphs: [
			'Every plan includes the full feature set: ESP, radar, aimbot, and patch updates. Monthly works if you want a short trial window; lifetime suits players who queue daily.',
			'Refund rules are on the Refund Policy page. When in doubt, start monthly and upgrade through Support if you switch later.',
		],
		relatedLinks: [
			{ label: 'Pricing', href: '/pricing/' },
			{ label: 'Refund policy', href: '/refund-policy/' },
		],
	},
	{
		slug: 'configuration-profiles',
		category: 'features',
		title: 'Configuration Profiles: Save, Load and Profile Tuning',
		description:
			'Save ESP, radar, and aimbot profiles for BR and TDM. Load a preset before you queue so overlays match the mode you play.',
		paragraphs: [
			'Combat Master Hacks lets you store separate configs for Battle Royale and Team Deathmatch. Save player ESP categories, radar range, and aimbot smoothness once — then load the right profile before each session.',
			'Use in-client hotkeys to switch profiles mid-match when you move from BR to TDM without reopening menus. Pair with the Features page for the full control list.',
		],
		relatedLinks: [
			{ label: 'All features', href: '/features/' },
			{ label: 'Cheats hub', href: '/combatmaster-hacks/' },
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
			{ label: 'Features', href: '/features/' },
		],
	},
	{
		slug: 'player-esp-explained',
		category: 'gameplay',
		title: 'Player ESP Explained for Large Lobbies',
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
		slug: 'br-rotation-with-radar',
		category: 'gameplay',
		title: 'BR Rotations and Third-Party Reads with Radar',
		description:
			'Use radar range and ESP together to rotate early, avoid collapses, and pick third-party timing in BR.',
		paragraphs: [
			'Set radar to medium range during mid-game rotations so you see flanks before committing to a POI. Pair with distance ESP to know when a third squad is closing.',
			'Tighten radar in final circles and raise ESP priority on nearby boxes only. Save a BR profile so you can load it before every ranked queue.',
		],
		relatedLinks: [
			{ label: 'Radar features', href: '/forums/radar-features/' },
			{ label: 'Updates', href: '/updates/' },
		],
	},
	{
		slug: 'tdm-cqb-aimbot-tuning',
		category: 'gameplay',
		title: 'TDM and CQB Aimbot Tuning for Close Fights',
		description:
			'Wide FOV, higher smoothness, and chest priority for room clears and fast TDM respawn chains.',
		paragraphs: [
			'In TDM, fights happen in smaller spaces — widen aimbot FOV and use moderate smoothness so tracking feels human in hallways and stairwells.',
			'Switch to a TDM profile with lower radar range and fewer loot markers. Hotkey aimbot off during spectate or menu time to avoid accidental toggles.',
		],
		relatedLinks: [
			{ label: 'Aimbot setup', href: '/forums/aimbot-settings/' },
			{ label: 'Aimbot page', href: '/combatmaster-aimbot/' },
		],
	},
	{
		slug: 'loader-not-starting',
		category: 'troubleshooting',
		title: 'Loader Will Not Start After Install or Update',
		description:
			'Fix common launch failures — admin rights, antivirus blocks, and conflicting overlay software on Windows PC.',
		paragraphs: [
			'Run the loader as administrator once after each major update. Add the install folder to Windows Defender exclusions if SmartScreen or AV quarantines files.',
			'Close Discord overlay, GeForce Experience overlay, and other injectors before launch. If it still fails, reinstall from your license email and contact Support with your order ID.',
		],
		relatedLinks: [
			{ label: 'Setup guide', href: '/setup/' },
			{ label: 'Support', href: '/support/' },
		],
	},
	{
		slug: 'overlay-and-fps-fixes',
		category: 'troubleshooting',
		title: 'ESP Flickering, Overlay Conflicts and FPS Drops',
		description:
			'Stop flickering boxes, fix double overlays, and recover FPS when ESP or radar stutters in big lobbies.',
		paragraphs: [
			'Flickering often comes from two overlay apps fighting for the same hook. Disable third-party FPS tools and run only Combat Master Hacks.',
			'Lower ESP draw distance and radar refresh if FPS drops in 100-player BR. Restart the client after changing categories — do not toggle ten options mid-match.',
		],
		relatedLinks: [
			{ label: 'Performance settings', href: '/forums/performance-settings/' },
			{ label: 'Features', href: '/features/' },
		],
	},
	{
		slug: 'patch-day-checklist',
		category: 'updates',
		title: 'Patch Day Checklist for Combat Master Hacks',
		description:
			'What to do when Combat Master patches — check Status, wait for rebuild notes, and avoid risky settings on day one.',
		paragraphs: [
			'Open the Updates page before your first match after a game patch. If status shows maintenance, wait for the all-clear instead of forcing an old loader.',
			'Use conservative ESP and aimbot settings on patch day. Re-save profiles after the rebuild email lands so hotkeys match the new build.',
		],
		relatedLinks: [
			{ label: 'Live status', href: '/updates/' },
			{ label: 'FAQ', href: '/faq/' },
		],
	},
	{
		slug: 'reading-the-status-page',
		category: 'updates',
		title: 'How to Read the Status and Update Notes',
		description:
			'Understand undetected, updating, and maintenance labels — and when it is safe to queue again.',
		paragraphs: [
			'Undetected means the current build matches the live game version. Updating means a rebuild is in progress — do not use outdated files.',
			'Maintenance covers launcher or backend work. Subscribe to update emails and bookmark Updates so you never queue blind after anti-cheat changes.',
		],
		relatedLinks: [
			{ label: 'Updates page', href: '/updates/' },
			{ label: 'Support', href: '/support/' },
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

/** One headline thread per category for the homepage preview. */
export function getFeaturedForumThreads(): ForumThread[] {
	const featured: ForumThread[] = [];
	for (const category of forumCategoryOrder) {
		const thread = forumThreads.find((t) => t.category === category);
		if (thread) featured.push(thread);
	}
	return featured;
}

export function groupForumThreadsByCategory(
	threads: readonly ForumThread[],
): { category: ForumCategory; threads: ForumThread[] }[] {
	return forumCategoryOrder
		.map((category) => ({
			category,
			threads: threads.filter((t) => t.category === category),
		}))
		.filter((group) => group.threads.length > 0);
}

/** English forum routes for sitemap-en.xml. */
export function getForumSitemapEntries() {
	const lastmod = '2026-09-23';
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
