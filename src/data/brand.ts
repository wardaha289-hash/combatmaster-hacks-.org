/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Combat Master Hacks',
	/** Short product label if needed */
	shortName: 'Combat Master',
	/** Canonical origin — no trailing slash */
	url: 'https://combatmasterhacks.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@combatmasterhacks.org',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fcombat-master',

	/** Game this template instance targets */
	game: 'Combat Master',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'anti-cheat',

	logo: '/images/combatmaster-hacks-logo.webp',
	logoRaster: '/images/combatmaster-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Combat Master Hacks logo',
	defaultOgImage: '/images/combatmaster-hacks-hero-1024w.webp',
	heroImage: '/images/combatmaster-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#a855f7',
		bg: '#0b0c10',
		soft: '#c084fc',
		deep: '#7c3aed',
		hover: '#9333ea',
		panel: '#0d0e14',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'combatmaster hacks',
		list: [
			'combatmaster hacks',
			'Combat Master',
			'Combat Master game',
			'Combat Master FPS',
			'Combat Master PC',
			'Combat Master Steam',
			'Combat Master multiplayer',
			'Combat Master gameplay',
			'Combat Master weapons',
			'Combat Master maps',
			'Combat Master game modes',
			'Combat Master Battle Royale',
			'Combat Master loadouts',
			'Combat Master gunsmith',
			'Combat Master movement',
			'Combat Master Season 5',
			'Combat Master tactical shooter',
			'Combat Master competitive multiplayer',
			'combatmaster hacks',
			'combatmaster esp',
			'combatmaster aimbot',
			'combatmaster wallhack',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /combatmaster-hacks/ owns the head term. */
		homeTitle: 'Combat Master Hacks | Official Windows PC Site',
		homeDescription:
			'Official Combat Master Hacks site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today.',
		/** Money page meta — primary target for "combatmaster hacks". */
		previewTitle: 'Combat Master Hacks | ESP & Aimbot',
		previewDescription:
			'Buy combatmaster hacks for Combat Master on Windows PC. ESP, soft aim, radar, and game patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can match faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Combat Master — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Combat Master on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Notes for {game} — match tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who match.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: '{primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is a {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'combatmaster hacks — Player ESP, aimbot, no recoil, radar minimap, and stream-proof overlay for Windows PC.',
		blogLabel: 'Combat Master Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you match.',
		previewIntro:
			'{brand} for Combat Master — ESP wallhack, soft aim, 2D radar, and anti-cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'Player ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Radar minimap',
		chipUpdates: 'Stream-proof',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/combatmaster-hacks-esp.webp',
				title: 'ESP overlay in Combat Master',
				caption: 'Player ESP boxes and distance readouts during a match',
			},
			{
				src: '/images/combatmaster-hacks-wallhack.webp',
				title: 'Wallhack visibility for Combat Master matchs',
				caption: 'players and bots outlines through walls and terrain',
			},
			{
				src: '/images/combatmaster-hacks-aimbot.webp',
				title: 'Soft aim assist for Combat Master',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/combatmaster-hacks-aimbot-view.webp',
				title: 'Aimbot view in Combat Master Hacks',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/combatmaster-hacks-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near matchs',
			},
			{
				src: '/images/combatmaster-hacks-raid.webp',
				title: 'Combat Master Hacks license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
