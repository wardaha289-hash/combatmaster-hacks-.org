import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'combatmaster-esp' | 'combatmaster-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — ESP, Aimbot & Wallhack",
					accentShort: "combatmaster hacks 2026",
					subtitle: "combatmaster hacks with combatmaster esp, radar hack and combatmaster aimbot for Windows PC — anti-cheat maintenance included.",
					subtitleShort: "Combat Master esp, radar & aimbot for PC",
					buyNow: "Buy Combat Master Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Combat Master Hacks — combatmaster hacks live for Combat Master on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheat maintenance supported",
					antiCheatShort: "anti-cheat supported",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "combatmaster hacks",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Combat Master Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Combat Master Hacks",
					readGuide: "Read more",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "combatmaster hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Aimbot & Wallhack",
					description: "combatmaster hacks for Windows PC — ESP, soft aim, radar, and game updates. Compare plans and buy.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "Combat Master Hacks is the combatmaster hacks package for Windows PC — built for Combat Master on Windows PC. Combat Master esp wallhack, 2D radar, and combatmaster aimbot with anti-cheat maintenance after every major patch.",
					imageAlt: "Combat Master Hacks homepage hero — ESP and aimbot for Combat Master",
					galleryTitle: "Combat Master Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose combatmaster hacks in 2026",
							paragraphs: [
								"Combat Master rewards map awareness. Combat Master Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> and <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include anti-cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/combatmaster-hacks/\">combatmaster hacks pillar</a>, <a href=\"/combatmaster-esp/\">ESP </a>, <a href=\"/combatmaster-aimbot/\">Aimbot controls</a>, and <a href=\"/combatmaster-hacks/\">live status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Combat Master Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one package built for PMC matchs and scav-runs — covering both “combatmaster hacks” and “combat master cheats” search intent.",
								"Browse the <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, <a href=\"/combatmaster-esp/\">wallhack</a>, and <a href=\"/combatmaster-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-esp.webp",
				},
				"combatmaster-esp": {
					title: "Combat Master ESP 2026 | Player Boxes & Wallhack",
					description: "Combat Master ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our combatmaster hacks for Combat Master.",
					h1: "Combat Master ESP — Player Boxes & Wallhack",
					intro: "Combat Master esp visibility tools for match and scav-run. Read enemy squads, players, bots, loot, and distance before you commit — toggleable combatmaster esp wallhack overlays bundled in our combatmaster hacks package.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP overlay visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Combat Master wallhack",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "What Combat Master ESP solves in matchs",
							paragraphs: [
								"Combat Master maps punish incomplete information. Combat Master Hacks ESP wallhack helps you spot enemy squads early, spot players and bots before they push your angle, and mark loadout drops worth the detour.",
								"On match, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Combat Master’s live seasons and map updates are published by Battlestate Games (<a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, match cues, and loot pins so only match-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC matchs and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/combatmaster-esp/\">wallhack page</a> and pair visibility with the <a href=\"/combatmaster-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and match awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "ESP with anti-cheat maintenance",
							paragraphs: [
								"Combat Master Hacks ESP wallhack is maintained for Combat Master with rebuilds after anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent status.",
								"Read <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">anti-cheat bypass maintenance page</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup</a> and tune overlays before your first match.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/combatmaster-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/combatmaster-hacks/\">combatmaster hacks pillar</a> and <a href=\"/combatmaster-hacks/\">2026 buyer checklist</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-radar.webp",
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot 2026 | Soft Aim for Windows PC",
					description: "Combat Master aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our combatmaster hacks package.",
					h1: "Combat Master Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Combat Master firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one license.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot combat previews",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Combat Master combat pace",
							paragraphs: [
								"Combat Master mixes long-range AR fights with close-quarters SMG pushes. Combat Master Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every match.",
								"Prefer softer tracking? Read the <a href=\"/combatmaster-aimbot/\">soft aim page</a>.",
								"Aimbot ships alongside <a href=\"/combatmaster-esp/\">ESP wallhack</a> and <a href=\"/combatmaster-radar-hack/\">2D radar</a> in the same Combat Master Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "anti-cheat maintenance for Aimbot",
							paragraphs: [
								"Combat Master Hacks rebuilds Aimbot behavior when anti-cheat or major Combat Master patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> and anti-cheat context on <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a>, then follow our <a href=\"/updates/\">anti-cheat maintenance page</a> before queueing on patch day.",
								"Responsible settings matter — status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
				},
				features: {
					title: "Combat Master Hacks Features | ESP, Soft Aim & Radar",
					description: "Full combatmaster hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Combat Master Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Combat Master Hacks package for Combat Master on Windows PC — with anti-cheat maintenance after major patches.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Combat Master Hacks feature gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and match awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.",
								"Team and enemy colour coding supports PMC matchs and scav-runs. Deep-dive the <a href=\"/combatmaster-esp/\">ESP page</a> and <a href=\"/combatmaster-esp/\">wallhack page</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-match matchs, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Combat Master sessions. See <a href=\"/combatmaster-radar-hack/\">radar</a> and <a href=\"/combatmaster-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/combatmaster-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and anti-cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@combatmasterhacks.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/combatmaster-hacks/\">how maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "Combat Master Hacks Pricing | $35/mo or $150 Life",
					description: "combatmaster hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Combat Master Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to Combat Master Hacks — ESP wallhack, radar hack, and Aimbot for Combat Master on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Combat Master Hacks package visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Read setup",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Combat Master Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same Combat Master Hacks package — ideal if you play Combat Master regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after anti-cheat or major Combat Master patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/combatmaster-hacks/\">combatmaster hacks</a>, <a href=\"/combatmaster-hacks/\">live status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-match.webp",
				},
				setup: {
					title: "Combat Master Hacks Setup | Windows PC",
					description: "Set up combatmaster hacks on Windows PC — activate ESP boxes, soft aim profiles, and radar. Check game updates before your first queue.",
					h1: "Combat Master Hacks Setup — Windows PC",
					intro: "Install and configure Combat Master Hacks for Combat Master on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.",
					imageAlt: "Combat Master Hacks setup screenshot for Windows PC",
					galleryTitle: "Combat Master Hacks setup visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Combat Master Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest anti-cheat maintenance build before launching Combat Master.",
								"Also glance at <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.",
								"Combat Master Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, bots, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for anti-cheat module live on <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, and <a href=\"/combatmaster-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/combatmaster-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Combat Master or anti-cheat patches",
							paragraphs: [
								"When Battlestate Games ships a major Combat Master update or anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">anti-cheat bypass page</a> and <a href=\"/combatmaster-hacks/\">live status</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-radar.webp",
				},
				updates: {
					title: "Combat Master Hacks Updates | anti-cheat Maintenance Log",
					description: "combatmaster hacks update log: anti-cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Combat Master Hacks Updates — Maintenance Log",
					intro: "Track anti-cheat maintenance and Combat Master patch rebuilds for the ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Combat Master patch and maintenance visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Live status",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Combat Master and anti-cheat receive frequent patches. Combat Master Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> for Battlestate Games platform health and this page for Combat Master Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on match and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">anti-cheat bypass page</a> and <a href=\"/combatmaster-hacks/\"> combatmaster hacks</a> explainer.",
							],
						},
						{
							h2: "Staying maintained after patches",
							paragraphs: [
								"No cheat guarantees permanent status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a game update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-esp.webp",
				},
				faq: {
					title: "Combat Master Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "combatmaster hacks FAQ: ESP boxes, soft aim, anti-cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Combat Master Hacks FAQ — Common Questions",
					intro: "Answers about Combat Master Hacks — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Combat Master compatibility on Windows PC.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "Combat Master Hacks FAQ visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Combat Master Hacks?",
							paragraphs: [
								"Combat Master Hacks is a cheat package for Combat Master on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.",
								"Packages cover match and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/combatmaster-esp/\">ESP</a> / <a href=\"/combatmaster-aimbot/\">Aimbot</a> for module detail.",
								"Combat Master itself is published by Battlestate Games (<a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Combat Master Hacks maintained in 2026?",
							paragraphs: [
								"Combat Master Hacks is maintained with rebuilds after anti-cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent operation.",
								"Read <a href=\"/combatmaster-hacks/\"> combatmaster hacks</a> and the <a href=\"/updates/\">anti-cheat page</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@combatmasterhacks.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
				},
				support: {
					title: "Combat Master Hacks Support | Help & Contact",
					description: "Contact combatmaster hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Combat Master Hacks Support — Contact Us",
					intro: "Get help with Combat Master Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Combat Master on Windows PC.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Combat Master Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup ",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Combat Master Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.",
								"Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup , Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat bypass notes live on the dedicated <a href=\"/updates/\">anti-cheat page</a>.",
								"Email: support@combatmasterhacks.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-match.webp",
				},
				undetected: {
					title: "Combat Master Hacks 2026 | anti-cheat Maintenance",
					description: "combatmaster hacks with anti-cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: " Combat Master Hacks — anti-cheat Maintenance",
					intro: "How Combat Master Hacks stays maintained for Combat Master after anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Combat Master Hacks status overview for Windows PC",
					galleryTitle: " Combat Master Hacks visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "anti-cheat bypass ",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What maintenance means for Combat Master Hacks",
							paragraphs: [
								" Combat Master Hacks means the package is actively maintained against anti-cheat and major Combat Master patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after game patches security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a>; Combat Master client updates ship through <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "anti-cheat maintenance workflow",
							paragraphs: [
								"When anti-cheat or Combat Master updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">anti-cheat bypass Combat Master </a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/combatmaster-hacks/\">combatmaster hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
				},
				wallhack: {
					title: "Combat Master Wallhack 2026 | ESP Boxes & Visibility",
					description: "Combat Master wallhack ESP with player boxes and loot markers for Windows PC. combatmaster hacks — learn overlays and buy.",
					h1: "Combat Master Wallhack — ESP Boxes & Visibility",
					intro: "Combat Master wallhack ESP for Combat Master — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC matchs and scav-runs.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master wallhack ESP gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Combat Master ESP page",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Combat Master wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Combat Master Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and match holds.",
								"For the broader ESP keyword page see <a href=\"/combatmaster-esp/\">Combat Master ESP</a>; for combat assist see <a href=\"/combatmaster-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support match, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/combatmaster-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: " wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after anti-cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/combatmaster-hacks/\"> combatmaster hacks</a> and <a href=\"/updates/\">anti-cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/combatmaster-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
				},
				radar: {
					title: "Combat Master Radar Hack 2026 | 2D Threat Overlay",
					description: "Combat Master radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our combatmaster hacks package.",
					h1: "Combat Master Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Combat Master — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Combat Master radar hack visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Combat Master",
							paragraphs: [
								"matchs fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Combat Master Hacks radar complements <a href=\"/combatmaster-esp/\">ESP wallhack</a> markers during squad pushes and match camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight match holds. Directional cues highlight flanks during building clears and flank pushes across match and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/combatmaster-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/combatmaster-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive anti-cheat maintenance rebuilds with the full Combat Master Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Combat Master patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/combatmaster-hacks/\">live status</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-radar.webp",
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass Combat Master | Combat Master Hacks",
					description: "How combatmaster hacks rebuild after game patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Anti-Cheat Bypass — Combat Master Hacks Maintenance",
					intro: "Understand anti-cheat maintenance for Combat Master Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Combat Master security updates.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "anti-cheat maintenance visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "anti-cheat overview",
							paragraphs: [
								"anti-cheat is Battlestate Games' anti-cheat for Combat Master on PC (see <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for packages.",
								"Combat Master Hacks monitors game patch notes and Combat Master seasonal updates from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> to schedule module reviews.",
								"“anti-cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a game patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Battlestate Games service health on <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/combatmaster-hacks/\"> combatmaster hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"anti-cheat bypass in practice means timely maintenance. Read the <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best combatmaster hacks 2026: ESP boxes, soft aim, and radar for Windows PC. combatmaster hacks with anti-cheat maintenance — compare and buy.",
					h1: "Combat Master Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Combat Master Hacks package for Combat Master — ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026 gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why combatmaster hacks buyers choose Combat Master Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and anti-cheat updates. Combat Master Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover match and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/combatmaster-hacks/\">combatmaster hacks pillar</a>, <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, <a href=\"/combatmaster-esp/\">wallhack</a>, <a href=\"/combatmaster-radar-hack/\">radar</a>, <a href=\"/combatmaster-hacks/\">cheats hub</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/combatmaster-hacks/\">combatmaster hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/combatmaster-hacks/\">combatmaster hacks</a> checklist, <a href=\"/forums/\">2026 blog post</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@combatmasterhacks.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-esp.webp",
				},
				hacks: {
					title: "Combat Master Hacks 2026 | ESP Aimbot",
					description: "combatmaster hacks for Windows PC: ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance. Compare combatmaster hacks options and buy the full",
					h1: "Combat Master Hacks — ESP, Aimbot & Wallhack",
					intro: "combatmaster hacks for match and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one Windows PC license — maintained after anti-cheat patches. This is the pillar for combatmaster hacks in 2026.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "combatmaster hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "See live status",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "What combatmaster hacks include in 2026",
							paragraphs: [
								"Players searching for combatmaster hacks usually want visibility and combat tools without stacking separate downloads. Combat Master Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called combatmaster hacks.",
								"Coverage spans match and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this combatmaster hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/combatmaster-hacks/\">combatmaster hacks 2026</a> and <a href=\"/combatmaster-hacks/\">combatmaster hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/combatmaster-esp/\">Combat Master ESP</a>, <a href=\"/combatmaster-aimbot/\">Combat Master Aimbot</a>, <a href=\"/combatmaster-esp/\">wallhack</a>, <a href=\"/combatmaster-radar-hack/\">radar hack</a>, and <a href=\"/combatmaster-aimbot/\">soft aim</a>.",
								"Blog posts expand anti-cheat keyword: <a href=\"/forums/\">hacks complete post</a>, <a href=\"/forums/\">cheats buyers post</a>, and <a href=\"/forums/\">anti-cheat notes</a>.",
							],
						},
						{
							h2: "combatmaster hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Combat Master Hacks maps the full match loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/combatmaster-hacks/\">mod menu</a>, <a href=\"/combatmaster-aimbot/\">aimbot</a>, <a href=\"/combatmaster-esp/\">ESP</a>.",
							],
						},
						{
							h2: "combatmaster hacks with anti-cheat maintenance",
							paragraphs: [
								"combatmaster hacks require rebuilds after anti-cheat and major Combat Master patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent status.",
								"See <a href=\"https://www.anti-cheat.com/\" target=\"_blank\" rel=\"noopener noreferrer\">anti-cheat Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">anti-cheat bypass page</a> for the practical workflow. Pair with <a href=\"/combatmaster-hacks/\"> combatmaster hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-match.webp",
				},
				"cheat-download": {
					title: "Combat Master Hack Download 2026 | Instant Access",
					description: "combatmaster hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Combat Master Hack Download — Instant License Delivery",
					intro: "How combatmaster hack download works for Combat Master — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "combatmaster hack download visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Setup",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How combatmaster hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, Combat Master Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup</a> and Support requests.",
								"If Battlestate Games services are down, check <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every combatmaster hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC matchs and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Combat Master or anti-cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/combatmaster-hacks/\">live status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-match.webp",
				},
				"mod-menu": {
					title: "Combat Master Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Combat Master mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. combatmaster hacks package.",
					h1: "Combat Master Mod Menu — In-Client Control Panel",
					intro: "Combat Master mod menu controls for Combat Master — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Combat Master session on Windows PC.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master mod menu gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Combat Master mod menu controls",
							paragraphs: [
								"A Combat Master mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Combat Master Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Combat Master.",
								"Control deep-dives: <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, <a href=\"/combatmaster-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for PMC matchs and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and match holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.combatmaster} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/combatmaster-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after game patches",
							paragraphs: [
								"Combat Master mod menu behavior is rebuilt when anti-cheat or major Combat Master updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">anti-cheat bypass page</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-radar.webp",
				},
				"soft-aim": {
					title: "Combat Master Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Combat Master soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our combatmaster hacks with ESP boxes.",
					h1: "Combat Master Soft Aim — Smooth Aimbot Controls",
					intro: "Combat Master soft aim settings for Combat Master — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one license.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master soft aim gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "What Combat Master soft aim means",
							paragraphs: [
								"Combat Master soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Combat Master Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/combatmaster-aimbot/\">Combat Master Aimbot</a>. Alternate wording: <a href=\"/combatmaster-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/combatmaster-esp/\">ESP wallhack</a> and <a href=\"/combatmaster-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "soft aim with anti-cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Combat Master Hacks 2026 | Buyer Checklist",
					description: "Best combatmaster hacks for 2026: ESP boxes, soft aim, and anti-cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Combat Master Hacks — 2026 Buyer Checklist",
					intro: "Compare the combatmaster hacks for Combat Master in 2026 — ESP wallhack, radar hack, and Aimbot in one maintained package with anti-cheat rebuilds and instant delivery.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Best combatmaster hacks gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the combatmaster hacks in 2026",
							paragraphs: [
								"The combatmaster hacks combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Combat Master Hacks covers match and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromcombatmaster.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best combatmaster hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Combat Master patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/combatmaster-hacks/\">live status</a>, and <a href=\"/combatmaster-hacks/\">combatmaster hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/combatmaster-esp/\">ESP</a>, <a href=\"/combatmaster-aimbot/\">Aimbot</a>, <a href=\"/combatmaster-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the combatmaster hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack 2026 | Soft Aim Assist",
					description: "Combat Master aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our combatmaster hacks package.",
					h1: "Combat Master Aimbot Hack — Soft Aim Assist",
					intro: "Combat Master aimbot hack tools for Combat Master — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one license.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master aimbot hack gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master aimbot hack vs visibility tools",
							paragraphs: [
								"A Combat Master aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Combat Master Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Combat Master combat pace across PMC matchs and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/combatmaster-aimbot/\">soft aim</a>. Full settings: <a href=\"/combatmaster-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-match matchs.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after anti-cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">anti-cheat bypass page</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/combatmaster-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Combat Master ESP Hack 2026 | Player Boxes & Loot",
					description: "Combat Master ESP hack with player boxes and loot markers for Windows PC. combatmaster hacks — see overlays and buy.",
					h1: "Combat Master ESP Hack — Player Boxes",
					intro: "Combat Master ESP hack overlays for Combat Master — player outlines, boss threat cues, loot and container markers with distance readouts across match and scav-run.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP hack gallery",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "What a Combat Master ESP hack shows",
							paragraphs: [
								"A Combat Master ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility: <a href=\"/combatmaster-esp/\">Combat Master ESP</a>. Wallhack wording: <a href=\"/combatmaster-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for matchs",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports PMC matchs and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "ESP hack with anti-cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after anti-cheat and Combat Master patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/combatmaster-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/combatmaster-hacks/\">live status</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "Combat Master Unlock All 2026 | What It Really Means",
					description: "Combat Master unlock all explained vs real combatmaster hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Combat Master Unlock All — What Players Search For",
					intro: "Combat Master unlock all is a common search term for Combat Master — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Combat Master Hacks actually provides on Windows PC.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master unlock all visuals",
					ctaPrimary: "Buy Combat Master Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Combat Master unlock all usually means",
							paragraphs: [
								"Combat Master unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Combat Master Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromcombatmaster.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Combat Master</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and loadout drops during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/combatmaster-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/combatmaster-hacks/\">combatmaster hacks</a> and <a href=\"/combatmaster-hacks/\">combatmaster hacks</a>.",
							],
						},
						{
							h2: "Buying Combat Master Hacks for the right reasons",
							paragraphs: [
								"If you need ESP wallhack, radar hack, and Aimbot for Combat Master on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after anti-cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Combat Master Hacks",
					description: "Privacy policy for Combat Master Hacks. How we handle support emails, order data, and checkout for combatmaster hacks licenses on combatmasterhacks.org.",
					h1: "Privacy Policy",
					intro: "How Combat Master Hacks handles information when you browse combatmasterhacks.org or contact support about a Combat Master license.",
					imageAlt: "Combat Master Hacks privacy policy page",
					galleryTitle: "Combat Master Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Combat Master Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@combatmasterhacks.org with your request details.",
								"Policy updates publish on this page. Continued use of combatmasterhacks.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Combat Master Hacks",
					description: "Refund policy for Combat Master Hacks. Digital delivery terms and eligibility for combatmaster hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Combat Master Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Combat Master.",
					imageAlt: "Combat Master Hacks refund policy page",
					galleryTitle: "Combat Master Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Combat Master Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@combatmasterhacks.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-match.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Combat Master Hacks Rules",
					description: "Terms of use for combatmasterhacks.org and Combat Master Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of combatmasterhacks.org and Combat Master Hacks licenses for Combat Master on Windows PC.",
					imageAlt: "Combat Master Hacks terms of use page",
					galleryTitle: "Combat Master Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Combat Master Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Combat Master on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Combat Master may violate Battlestate Games terms and result in account penalties. Combat Master Hacks provides maintenance but does not guarantee status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/combatmaster-hacks/\">live status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@combatmasterhacks.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Combat Master s",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para Combat Master en PC Windows — mantenimiento anti-cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Combat Master PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Combat Master Hacks está activo para Combat Master en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento anti-cheat incluido",
					antiCheatShort: "anti-cheat incluido",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Combat Master",
					platformBadge: "PC Windows",
					statusBadge: "Paquete ",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Combat Master Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer más",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot s para Combat Master — checkout en Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Combat Master indetectables para Combat Master en PC. ESP wallhack, radar hack y Aimbot con mantenimiento anti-cheat. Entrega digital instantánea.",
					h1: "Combat Master Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete para Combat Master en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento anti-cheat tras cada parche.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galería Combat Master Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Combat Master Hacks en 2026",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Cajas de jugador y wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. — Windows PC.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Controles soft aim",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. — Windows PC.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. — Windows PC.",
					h1: "Funciones",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Funciones.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. — Windows PC.",
					h1: "Precios",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Precios.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. — Windows PC.",
					h1: "Instalación",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Instalación.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro anti-cheat",
					description: "Actualizaciones: game patch status and rebuild notes. entrega digital instantánea. — Windows PC.",
					h1: "Actualizaciones",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Actualizaciones.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. game patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. entrega digital instantánea. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. — Windows PC.",
					h1: "Soporte",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Soporte.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: maintenance after anti-cheat patches. entrega digital instantánea. — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Trucos indetectables.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. maintenance after anti-cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | Visibilidad ESP",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. entrega digital instantánea. — Windows PC.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. — Windows PC.",
					h1: "Radar hack",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Mantenimiento de parches",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. entrega digital instantánea. — Windows PC.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. how game updates are handled for Combat Master hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Combat Master 2026 | Guía del comprador",
					description: "Trucos Combat Master 2026: 2026 combatmaster hacks checklist before checkout. entrega digital instantánea. — Windows PC.",
					h1: "Trucos Combat Master 2026",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Trucos Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Trucos Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Trucos Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Combat Master | Guía ESP y Aimbot",
					description: "Trucos Combat Master: the Combat Master hacks pillar for ESP and Aimbot. entrega digital instantánea. — Windows PC.",
					h1: "Trucos Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Trucos Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Combat Master Hacks | Acceso instantáneo",
					description: "Descarga Combat Master Hacks: digital license download after payment. entrega digital instantánea. — Windows PC.",
					h1: "Descarga Combat Master Hacks",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Descarga Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Descarga Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Combat Master | Controles en partida",
					description: "Menú mod Combat Master: in-client ESP and soft aim toggles. entrega digital instantánea. — Windows PC.",
					h1: "Menú mod Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Menú mod Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Menú mod Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Ajustes soft aim",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. entrega digital instantánea. — Windows PC.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Combat Master | Lista de compra",
					description: "Mejores trucos Combat Master: what to compare before buying combatmaster hacks. entrega digital instantánea. — Windows PC.",
					h1: "Mejores trucos Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Mejores trucos Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Mejores trucos Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. what to compare before buying combatmaster hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Asistencia soft aim",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. entrega digital instantánea. — Windows PC.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Aimbot hack assist for Combat Master.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Cajas y loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. entrega digital instantánea. — Windows PC.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | Qué significa",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. — Windows PC.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Combat Master Hacks",
					description: "Política de privacidad for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Política de privacidad for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Combat Master Hacks",
					description: "Política de reembolso for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Política de reembolso for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Combat Master Hacks",
					description: "Términos de uso for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Términos de uso for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen anti-cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Combat Master Hacks ofrece ESP wallhack, radar hack y combatmaster aimbot  para Combat Master en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@combatmasterhacks.org para solicitudes legales o de soporte.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Combat Master s",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Combat Master sur PC Windows — maintenance anti-cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Combat Master PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Combat Master Hacks est actif pour Combat Master sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance anti-cheat incluse",
					antiCheatShort: "anti-cheat inclus",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Combat Master",
					platformBadge: "PC Windows",
					statusBadge: "Pack ",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Combat Master Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot s pour Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Combat Master indétectables pour Combat Master sur PC. ESP wallhack, radar hack et Aimbot avec maintenance anti-cheat. Livraison numérique instantanée.",
					h1: "Combat Master Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack pour Combat Master sur PC Windows: ESP wallhack, radar et Aimbot avec maintenance anti-cheat après chaque patch.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galerie Combat Master Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Combat Master Hacks en 2026",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Boîtes joueur et wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Contrôles soft aim",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. — PC Windows.",
					h1: "Fonctions",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Fonctions.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. — PC Windows.",
					h1: "Tarifs",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Tarifs.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | page d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. — PC Windows.",
					h1: "Installation",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Installation.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal anti-cheat",
					description: "Mises à jour: game patch status and rebuild notes. livraison numérique instantanée. — PC Windows.",
					h1: "Mises à jour",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Mises à jour.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. game patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. livraison numérique instantanée. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. — PC Windows.",
					h1: "Support",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Support.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance after anti-cheat patches. livraison numérique instantanée. — PC Windows.",
					h1: "Triches indétectables",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Triches indétectables.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. maintenance after anti-cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | Visibilité ESP",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. livraison numérique instantanée. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Maintenance des patchs",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. livraison numérique instantanée. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. how game updates are handled for Combat Master hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Combat Master 2026 | page acheteur",
					description: "Triches Combat Master 2026: 2026 combatmaster hacks checklist before checkout. livraison numérique instantanée. — PC Windows.",
					h1: "Triches Combat Master 2026",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Triches Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Triches Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Triches Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Combat Master | page ESP et Aimbot",
					description: "Triches Combat Master: the Combat Master hacks pillar for ESP and Aimbot. livraison numérique instantanée. — PC Windows.",
					h1: "Triches Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Triches Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Combat Master Hacks | Accès instantané",
					description: "Téléchargement Combat Master Hacks: digital license download after payment. livraison numérique instantanée. — PC Windows.",
					h1: "Téléchargement Combat Master Hacks",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Téléchargement Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Téléchargement Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Combat Master | Contrôles en jeu",
					description: "Menu mod Combat Master: in-client ESP and soft aim toggles. livraison numérique instantanée. — PC Windows.",
					h1: "Menu mod Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Menu mod Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Menu mod Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Réglages soft aim",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. livraison numérique instantanée. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Combat Master | Checklist acheteur",
					description: "Meilleures triches Combat Master: what to compare before buying combatmaster hacks. livraison numérique instantanée. — PC Windows.",
					h1: "Meilleures triches Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Meilleures triches Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Meilleures triches Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. what to compare before buying combatmaster hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Assistance soft aim",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. livraison numérique instantanée. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Aimbot hack assist for Combat Master.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boîtes et loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | Ce que ça signifie",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acheter Combat Master Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Combat Master Hacks",
					description: "Politique de confidentialité for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Politique de confidentialité for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Combat Master Hacks",
					description: "Politique de remboursement for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Politique de remboursement for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Combat Master Hacks",
					description: "Conditions d'utilisation for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Conditions d'utilisation for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance anti-cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Combat Master Hacks combine ESP wallhack, radar hack et combatmaster aimbot  pour Combat Master sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@combatmasterhacks.org pour le support ou les demandes légales.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: " Combat Master Hacks",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Combat Master auf Windows PC — anti-cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Combat Master PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Combat Master Hacks Paket ist live für Combat Master auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheat-Wartung unterstützt",
					antiCheatShort: "anti-cheat Support",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: " Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Combat Master Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: " lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: " ESP, Wallhack, Radar und Aimbot für Combat Master — Checkout über Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Combat Master Hacks für Combat Master auf PC. ESP Wallhack, Radar Hack und Aimbot mit anti-cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "Windows PC Paket für Combat Master: ESP Wallhack, Radar und Aimbot mit anti-cheat-Wartung nach jedem Patch.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Combat Master Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Combat Master Hacks 2026 führt",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Spielerboxen & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft-Aim Steuerung",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. — Windows PC.",
					h1: "Features",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Features.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. — Windows PC.",
					h1: "Preise",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Preise.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. — Windows PC.",
					h1: "Setup",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Setup.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | anti-cheat Wartungslog",
					description: "Updates: game patch status and rebuild notes. sofortige digitale Lieferung. — Windows PC.",
					h1: "Updates",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Updates.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. game patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. sofortige digitale Lieferung. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. — Windows PC.",
					h1: "Support",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Support.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats | live status",
					description: "Cheats: maintenance after anti-cheat patches. sofortige digitale Lieferung. — Windows PC.",
					h1: "Cheats",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. maintenance after anti-cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Sichtbarkeit",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch-Wartung",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. sofortige digitale Lieferung. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. how game updates are handled for Combat Master hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | Käuferleitfaden",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Sofortzugang",
					description: "Combat Master Cheat Download: digital license download after payment. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod-Menü | In-Game Toggles",
					description: "Combat Master Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Mod-Menü",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Mod-Menü.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod-Menü",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod-Menü",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Soft-Aim Einstellungen",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Combat Master Hacks | Käufer-Checkliste",
					description: "Beste Combat Master Hacks: what to compare before buying combatmaster hacks. sofortige digitale Lieferung. — Windows PC.",
					h1: "Beste Combat Master Hacks",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Beste Combat Master Hacks.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Beste Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. what to compare before buying combatmaster hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack | Soft-Aim Assist",
					description: "Combat Master Aimbot Hack: Aimbot hack assist for Combat Master. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Aimbot Hack",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Aimbot Hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hack",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Aimbot hack assist for Combat Master.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hack | Boxen & Loot",
					description: "Combat Master ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master ESP Hack",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master ESP Hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hack",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | Was es bedeutet",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Combat Master Hacks",
					description: "Datenschutz for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Datenschutz for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Combat Master Hacks",
					description: "Rückerstattung for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Rückerstattung for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Live-Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Combat Master Hacks",
					description: "Nutzungsbedingungen for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Nutzungsbedingungen for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. anti-cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Combat Master Hacks bündelt ESP wallhack, radar hack und combatmaster aimbot als  Paket für Combat Master auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@combatmasterhacks.org für Support und rechtliche Anfragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Combat Master ",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para Combat Master no PC Windows — manutenção anti-cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Combat Master PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Combat Master Hacks está ativo para Combat Master no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção anti-cheat incluída",
					antiCheatShort: "anti-cheat incluído",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Combat Master",
					platformBadge: "PC Windows",
					statusBadge: "Pacote ",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Combat Master Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot para Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Combat Master indetectáveis para Combat Master no PC. ESP wallhack, radar hack e Aimbot com manutenção anti-cheat. Entrega digital instantánea.",
					h1: "Combat Master Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote para Combat Master no Windows PC: ESP wallhack, radar e Aimbot com manutenção anti-cheat após cada patch.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galeria Combat Master Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Combat Master Hacks em 2026",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Caixas de jogador e wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Controles soft aim",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. — PC Windows.",
					h1: "Recursos",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Recursos.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. — PC Windows.",
					h1: "Preços",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Preços.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. — PC Windows.",
					h1: "Instalação",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Instalação.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro anti-cheat",
					description: "Atualizações: game patch status and rebuild notes. entrega digital instantânea. — PC Windows.",
					h1: "Atualizações",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Atualizações.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. game patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. entrega digital instantânea. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. — PC Windows.",
					h1: "Suporte",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Suporte.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: maintenance after anti-cheat patches. entrega digital instantânea. — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Cheats indetectáveis.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. maintenance after anti-cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | Visibilidade ESP",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. entrega digital instantânea. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Manutenção de patches",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. entrega digital instantânea. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. how game updates are handled for Combat Master hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Combat Master 2026 | Guia do comprador",
					description: "Cheats Combat Master 2026: 2026 combatmaster hacks checklist before checkout. entrega digital instantânea. — PC Windows.",
					h1: "Cheats Combat Master 2026",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Cheats Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheats Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Combat Master | Guia ESP e Aimbot",
					description: "Cheats Combat Master: the Combat Master hacks pillar for ESP and Aimbot. entrega digital instantânea. — PC Windows.",
					h1: "Cheats Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Cheats Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Combat Master Hacks | Acesso instantâneo",
					description: "Download Combat Master Hacks: digital license download after payment. entrega digital instantânea. — PC Windows.",
					h1: "Download Combat Master Hacks",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Download Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Download Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Combat Master | Controles in-game",
					description: "Menu mod Combat Master: in-client ESP and soft aim toggles. entrega digital instantânea. — PC Windows.",
					h1: "Menu mod Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Menu mod Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Menu mod Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Ajustes soft aim",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. entrega digital instantânea. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Combat Master | Checklist do comprador",
					description: "Melhores cheats Combat Master: what to compare before buying combatmaster hacks. entrega digital instantânea. — PC Windows.",
					h1: "Melhores cheats Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Melhores cheats Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Melhores cheats Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. what to compare before buying combatmaster hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Assistência soft aim",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. entrega digital instantânea. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Aimbot hack assist for Combat Master.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Caixas e loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. entrega digital instantânea. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | O que significa",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Comprar Combat Master Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Combat Master Hacks",
					description: "Política de privacidade for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Política de privacidade for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Combat Master Hacks",
					description: "Política de reembolso for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Política de reembolso for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Combat Master Hacks",
					description: "Termos de uso for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Termos de uso for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks reúne ESP wallhack, radar hack e combatmaster aimbot  para Combat Master no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@combatmasterhacks.org para suporte ou questões legais.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Combat Master ",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per Combat Master su PC Windows — manutenzione anti-cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Combat Master PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Combat Master Hacks è attivo per Combat Master su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione anti-cheat supportata",
					antiCheatShort: "anti-cheat supportato",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Combat Master",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto ",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Combat Master Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot per Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Combat Master indetectable per Combat Master su PC. ESP wallhack, radar hack e Aimbot con manutenzione anti-cheat. Consegna digitale istantanea.",
					h1: "Combat Master Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto per Combat Master su PC Windows: ESP wallhack, radar e Aimbot con manutenzione anti-cheat dopo ogni patch.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galleria Combat Master Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Combat Master Hacks nel 2026",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Box giocatore e wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Controlli soft aim",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. — PC Windows.",
					h1: "Funzioni",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Funzioni.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. — PC Windows.",
					h1: "Prezzi",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Prezzi.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. — PC Windows.",
					h1: "Setup",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Setup.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione anti-cheat",
					description: "Aggiornamenti: game patch status and rebuild notes. consegna digitale istantanea. — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Aggiornamenti.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. game patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. consegna digitale istantanea. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. — PC Windows.",
					h1: "Supporto",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Supporto.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: maintenance after anti-cheat patches. consegna digitale istantanea. — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Cheat indetectable.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. maintenance after anti-cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | Visibilità ESP",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. consegna digitale istantanea. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Manutenzione patch",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. consegna digitale istantanea. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. how game updates are handled for Combat Master hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Combat Master 2026 | Guida acquirente",
					description: "Cheat Combat Master 2026: 2026 combatmaster hacks checklist before checkout. consegna digitale istantanea. — PC Windows.",
					h1: "Cheat Combat Master 2026",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Cheat Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheat Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Combat Master | Guida ESP e Aimbot",
					description: "Cheat Combat Master: the Combat Master hacks pillar for ESP and Aimbot. consegna digitale istantanea. — PC Windows.",
					h1: "Cheat Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Cheat Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Combat Master Hacks | Accesso istantaneo",
					description: "Download Combat Master Hacks: digital license download after payment. consegna digitale istantanea. — PC Windows.",
					h1: "Download Combat Master Hacks",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Download Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Download Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Combat Master | Toggle in-game",
					description: "Mod menu Combat Master: in-client ESP and soft aim toggles. consegna digitale istantanea. — PC Windows.",
					h1: "Mod menu Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Mod menu Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Mod menu Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Impostazioni soft aim",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. consegna digitale istantanea. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Combat Master | Checklist acquirente",
					description: "Migliori cheat Combat Master: what to compare before buying combatmaster hacks. consegna digitale istantanea. — PC Windows.",
					h1: "Migliori cheat Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Migliori cheat Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Migliori cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. what to compare before buying combatmaster hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Assist soft aim",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. consegna digitale istantanea. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Aimbot hack assist for Combat Master.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Box e loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | Cosa significa",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Acquista Combat Master Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Combat Master Hacks",
					description: "Informativa privacy for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Informativa privacy for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Combat Master Hacks",
					description: "Politica di rimborso for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Politica di rimborso for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Combat Master Hacks",
					description: "Termini di utilizzo for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Termini di utilizzo for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks unisce ESP wallhack, radar hack e combatmaster aimbot  per Combat Master su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@combatmasterhacks.org per supporto o richieste legali.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Combat Master Hacks",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Combat Master op Windows PC — anti-cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Combat Master PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Combat Master Hacks pakket is live voor Combat Master op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheat-onderhoud ondersteund",
					antiCheatShort: "anti-cheat support",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Combat Master Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees meer",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "ESP, wallhack, radar en Aimbot voor Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "combatmaster hacks voor Combat Master op PC. ESP wallhack, radar hack en Aimbot met anti-cheat-onderhoud. Directe digitale levering.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "Windows PC pakket voor Combat Master: ESP wallhack, radar en Aimbot met anti-cheat-onderhoud na elke patch.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Combat Master Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Combat Master Hacks in 2026",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. — Windows PC.",
					h1: "Functies",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Functies.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. — Windows PC.",
					h1: "Prijzen",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Prijzen.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. — Windows PC.",
					h1: "Setup",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Setup.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | anti-cheat Maintenance Log",
					description: "Updates: game patch status and rebuild notes. directe digitale levering. — Windows PC.",
					h1: "Updates",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Updates.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. game patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. directe digitale levering. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. — Windows PC.",
					h1: "Support",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Support.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats | anti-cheat Safe Status",
					description: "Cheats: maintenance after anti-cheat patches. directe digitale levering. — Windows PC.",
					h1: "Cheats",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. maintenance after anti-cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. directe digitale levering. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. how game updates are handled for Combat Master hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. directe digitale levering. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. directe digitale levering. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Instant Access",
					description: "Combat Master Cheat Download: digital license download after payment. directe digitale levering. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod Menu | In-Game Toggles",
					description: "Combat Master Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. — Windows PC.",
					h1: "Combat Master Mod Menu",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Mod Menu.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod Menu",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod Menu",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Combat Master Hacks | Buyer Checklist",
					description: "Beste Combat Master Hacks: what to compare before buying combatmaster hacks. directe digitale levering. — Windows PC.",
					h1: "Beste Combat Master Hacks",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Beste Combat Master Hacks.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Beste Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. what to compare before buying combatmaster hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack | Soft Aim Assist",
					description: "Combat Master Aimbot Hack: Aimbot hack assist for Combat Master. directe digitale levering. — Windows PC.",
					h1: "Combat Master Aimbot Hack",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Aimbot Hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hack",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Aimbot hack assist for Combat Master.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hack | Boxes & Loot",
					description: "Combat Master ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. — Windows PC.",
					h1: "Combat Master ESP Hack",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master ESP Hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hack",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
								"support@combatmasterhacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Combat Master Hacks",
					description: "Privacybeleid for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Privacybeleid for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org voor support en juridische vragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Combat Master Hacks",
					description: "Restitutiebeleid for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Restitutiebeleid for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na anti-cheat-patches. Geen cheat garandeert permanent live status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org voor support en juridische vragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Combat Master Hacks",
					description: "Gebruiksvoorwaarden for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Gebruiksvoorwaarden for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks bundelt ESP wallhack, radar hack en combatmaster aimbot als  pakket voor Combat Master op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org voor support en juridische vragen.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "cheaty Combat Master",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do Combat Master na PC Windows — konserwacja anti-cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Combat Master PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Combat Master Hacks jest aktywny dla Combat Master na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji anti-cheat",
					antiCheatShort: "anti-cheat wsparcie",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Combat Master",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Combat Master Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj więcej",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "ESP, wallhack, radar i Aimbot dla Combat Master — checkout przez Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "cheaty Combat Master dla Combat Master na PC. ESP wallhack, radar hack i Aimbot z konserwacją anti-cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Combat Master Hacks — ESP, Wallhack i Aimbot",
					intro: "Pakiet dla Combat Master na Windows PC: ESP wallhack, radar i Aimbot z konserwacją anti-cheat po każdym patchu.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galeria Combat Master Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Combat Master Hacks w 2026",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Funkcje",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Funkcje.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Cennik",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Cennik.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Instalacja",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Instalacja.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | anti-cheat Maintenance Log",
					description: "Aktualizacje: game patch status and rebuild notes. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Aktualizacje",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Aktualizacje.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. game patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Wsparcie",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Wsparcie.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty | anti-cheat Safe Status",
					description: "Cheaty: maintenance after anti-cheat patches. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Cheaty",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Cheaty.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheaty",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheaty",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. maintenance after anti-cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. how game updates are handled for Combat Master hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Combat Master 2026 | buyer checklist",
					description: "Cheaty Combat Master 2026: 2026 combatmaster hacks checklist before checkout. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Cheaty Combat Master 2026",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Cheaty Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheaty Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheaty Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Combat Master | ESP Aimbot page",
					description: "Cheaty Combat Master: the Combat Master hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Cheaty Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Cheaty Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Combat Master Hacks | Instant Access",
					description: "Pobieranie Combat Master Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Pobieranie Combat Master Hacks",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Pobieranie Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Pobieranie Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Combat Master | In-Game Toggles",
					description: "Mod menu Combat Master: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Mod menu Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Mod menu Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Mod menu Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Combat Master | Buyer Checklist",
					description: "Najlepsze cheaty Combat Master: what to compare before buying combatmaster hacks. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Najlepsze cheaty Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Najlepsze cheaty Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Najlepsze cheaty Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. what to compare before buying combatmaster hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Soft Aim Assist",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Aimbot hack assist for Combat Master.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boxes & Loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Kup Combat Master Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Combat Master Hacks",
					description: "Polityka prywatności for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Polityka prywatności for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Combat Master Hacks",
					description: "Polityka zwrotów for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Polityka zwrotów for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach anti-cheat. Żaden cheat nie gwarantuje permanentnego live statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Combat Master Hacks",
					description: "Warunki użytkowania for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Warunki użytkowania for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks łączy ESP wallhack, radar hack i combatmaster aimbot jako pakiet  dla Combat Master na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org w sprawach wsparcia i prawnych.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "читы Combat Master",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для Combat Master на Windows PC — обслуживание anti-cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Combat Master PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Combat Master Hacks активен для Combat Master на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания anti-cheat",
					antiCheatShort: "anti-cheat поддержка",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Combat Master Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать далее",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "ESP, wallhack, radar и Aimbot для Combat Master — оплата через Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "читы Combat Master для Combat Master на PC. ESP wallhack, radar hack и Aimbot с обслуживанием anti-cheat. Мгновенная цифровая доставка.",
					h1: "Combat Master Hacks — ESP, Wallhack и Aimbot",
					intro: "пакет для Combat Master на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием anti-cheat после патчей.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Галерея Combat Master Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Combat Master Hacks в 2026",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Боксы игроков и wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. — Windows PC.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Управление soft aim",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. — Windows PC.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. — Windows PC.",
					h1: "Функции",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Функции.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. — Windows PC.",
					h1: "Цены",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Цены.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. — Windows PC.",
					h1: "Установка",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Установка.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал anti-cheat",
					description: "Обновления: game patch status and rebuild notes. мгновенная цифровая доставка. — Windows PC.",
					h1: "Обновления",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Обновления.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. game patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. мгновенная цифровая доставка. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. — Windows PC.",
					h1: "Поддержка",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Поддержка.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "читы | Статус",
					description: "читы: maintenance after anti-cheat patches. мгновенная цифровая доставка. — Windows PC.",
					h1: "читы",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. читы.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "читы",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "читы",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. maintenance after anti-cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | Видимость ESP",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. — Windows PC.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. — Windows PC.",
					h1: "Radar hack",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Обслуживание патчей",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. мгновенная цифровая доставка. — Windows PC.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. how game updates are handled for Combat Master hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Combat Master 2026 | Гайд покупателя",
					description: "Читы Combat Master 2026: 2026 combatmaster hacks checklist before checkout. мгновенная цифровая доставка. — Windows PC.",
					h1: "Читы Combat Master 2026",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Читы Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Читы Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Читы Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Combat Master | Гайд ESP и Aimbot",
					description: "Читы Combat Master: the Combat Master hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. — Windows PC.",
					h1: "Читы Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Читы Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Combat Master Hacks | Мгновенный доступ",
					description: "Скачать Combat Master Hacks: digital license download after payment. мгновенная цифровая доставка. — Windows PC.",
					h1: "Скачать Combat Master Hacks",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Скачать Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Скачать Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Combat Master | Игровые переключатели",
					description: "Мод-меню Combat Master: in-client ESP and soft aim toggles. мгновенная цифровая доставка. — Windows PC.",
					h1: "Мод-меню Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Мод-меню Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Мод-меню Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Настройки soft aim",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. — Windows PC.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Combat Master | Чеклист покупателя",
					description: "Лучшие читы Combat Master: what to compare before buying combatmaster hacks. мгновенная цифровая доставка. — Windows PC.",
					h1: "Лучшие читы Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Лучшие читы Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Лучшие читы Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. what to compare before buying combatmaster hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Combat Master | Soft aim ассист",
					description: "Хак aimbot Combat Master: Aimbot hack assist for Combat Master. мгновенная цифровая доставка. — Windows PC.",
					h1: "Хак aimbot Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Хак aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Aimbot hack assist for Combat Master.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Combat Master | Боксы и лут",
					description: "Хак ESP Combat Master: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. — Windows PC.",
					h1: "Хак ESP Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Хак ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Хак ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | Что это значит",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. — Windows PC.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купить Combat Master Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Combat Master Hacks",
					description: "Политика конфиденциальности for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Политика конфиденциальности for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Combat Master Hacks",
					description: "Политика возврата for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Политика возврата for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей anti-cheat. Ни один чит не гарантирует постоянный постоянный статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Combat Master Hacks",
					description: "Условия использования for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Условия использования for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks объединяет ESP wallhack, radar hack и combatmaster aimbot в  пакете для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org для поддержки и юридических вопросов.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Combat Master hileleri",
					accentShort: "Combat Master Hacks",
					subtitle: "Combat Master Windows PC için ESP wallhack, radar hack ve Aimbot — anti-cheat bakımı dahil.",
					subtitleShort: "Combat Master PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Combat Master Hacks paketi Combat Master Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "anti-cheat bakım desteği",
					antiCheatShort: "anti-cheat destek",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Combat Master Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Devamını oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Combat Master için ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "Combat Master için hileler. ESP wallhack, radar hack ve Aimbot — anti-cheat bakımı. Anında dijital teslimat.",
					h1: "Combat Master Hacks — ESP, Wallhack ve Aimbot",
					intro: "Combat Master Windows PC paketi: ESP wallhack, radar ve Aimbot — anti-cheat bakımı dahil.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Combat Master Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Ayrı araçlar yerine tek lisans.",
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. — Windows PC.",
					h1: "Özellikler",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Özellikler.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. — Windows PC.",
					h1: "Fiyatlar",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Fiyatlar.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. — Windows PC.",
					h1: "Kurulum",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Kurulum.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | anti-cheat Maintenance Log",
					description: "Güncellemeler: game patch status and rebuild notes. anında dijital teslimat. — Windows PC.",
					h1: "Güncellemeler",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Güncellemeler.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. game patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and anti-cheat questions. anında dijital teslimat. — Windows PC.",
					h1: "SSS",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. SSS.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. ESP, soft aim, delivery, and anti-cheat questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. — Windows PC.",
					h1: "Destek",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Destek.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				undetected: {
					title: "hileler | anti-cheat Safe Status",
					description: "hileler: maintenance after anti-cheat patches. anında dijital teslimat. — Windows PC.",
					h1: "hileler",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. hileler.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "hileler",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "hileler",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. maintenance after anti-cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. — Windows PC.",
					h1: "Radar hack",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "anti-cheat bypass | Patch Maintenance",
					description: "anti-cheat bypass: how game updates are handled for Combat Master hacks. anında dijital teslimat. — Windows PC.",
					h1: "anti-cheat bypass",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. anti-cheat bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "anti-cheat bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "anti-cheat bypass",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. how game updates are handled for Combat Master hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hileleri 2026 | buyer checklist",
					description: "Combat Master Hileleri 2026: 2026 combatmaster hacks checklist before checkout. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Hileleri 2026",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Hileleri 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hileleri 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hileleri 2026",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. 2026 combatmaster hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hileleri | ESP Aimbot page",
					description: "Combat Master Hileleri: the Combat Master hacks pillar for ESP and Aimbot. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Hileleri",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Hileleri.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hileleri",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hileleri",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. the Combat Master hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Hile İndir | Instant Access",
					description: "Combat Master Hile İndir: digital license download after payment. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Hile İndir",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Hile İndir.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Hile İndir",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Hile İndir",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod Menü | In-Game Toggles",
					description: "Combat Master Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Mod Menü",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Mod Menü.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod Menü",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod Menü",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Combat Master Hileleri | Buyer Checklist",
					description: "En İyi Combat Master Hileleri: what to compare before buying combatmaster hacks. anında dijital teslimat. — Windows PC.",
					h1: "En İyi Combat Master Hileleri",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. En İyi Combat Master Hileleri.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "En İyi Combat Master Hileleri",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Combat Master Hileleri",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. what to compare before buying combatmaster hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hilesi | Soft Aim Assist",
					description: "Combat Master Aimbot Hilesi: Aimbot hack assist for Combat Master. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Aimbot Hilesi",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Aimbot Hilesi.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hilesi",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hilesi",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Aimbot hack assist for Combat Master.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hilesi | Boxes & Loot",
					description: "Combat Master ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master ESP Hilesi",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master ESP Hilesi.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hilesi",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hilesi",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Combat Master Hacks",
					description: "Gizlilik politikası for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Gizlilik politikası for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Support responses, order resolution, and legal compliance when required.",
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Combat Master Hacks",
					description: "İade politikası for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. İade politikası for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Support responses, order resolution, and legal compliance when required.",
								"anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı kalıcı güvenlik garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Combat Master Hacks",
					description: "Kullanım şartları for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Kullanım şartları for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks, Combat Master için Windows PC üzerinde ESP wallhack, radar hack ve combatmaster aimbot  paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@combatmasterhacks.org.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Combat Master غير مكتشف",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Combat Master على Windows PC — صيانة anti-cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Combat Master PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Combat Master Hacks نشطة لـ Combat Master على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة anti-cheat",
					antiCheatShort: "دعم anti-cheat",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Combat Master Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ المزيد",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Combat Master — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش Combat Master لـ Combat Master على PC. ESP wallhack ورadar hack وAimbot مع صيانة anti-cheat. تسليم رقمي فوري.",
					h1: "Combat Master Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة لـ Combat Master على Windows PC: ESP wallhack ورadar وAimbot مع صيانة anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "معرض Combat Master Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Combat Master Hacks في 2026",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. — Windows PC.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. — Windows PC.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. — Windows PC.",
					h1: "الميزات",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. الميزات.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. — Windows PC.",
					h1: "الأسعار",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. الأسعار.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. — Windows PC.",
					h1: "التثبيت",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. التثبيت.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | anti-cheat Maintenance Log",
					description: "التحديثات: game patch status and rebuild notes. تسليم رقمي فوري. — Windows PC.",
					h1: "التحديثات",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. التحديثات.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. game patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and anti-cheat questions. تسليم رقمي فوري. — Windows PC.",
					h1: "الأسئلة",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. الأسئلة.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. — Windows PC.",
					h1: "الدعم",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. الدعم.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش | anti-cheat Safe Status",
					description: "غش: maintenance after anti-cheat patches. تسليم رقمي فوري. — Windows PC.",
					h1: "غش",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. غش.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "غش",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "غش",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. maintenance after anti-cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. — Windows PC.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. — Windows PC.",
					h1: "Radar hack",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. تسليم رقمي فوري. — Windows PC.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. how game updates are handled for Combat Master hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Combat Master 2026 | buyer checklist",
					description: "غش Combat Master 2026: 2026 combatmaster hacks checklist before checkout. تسليم رقمي فوري. — Windows PC.",
					h1: "غش Combat Master 2026",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. غش Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "غش Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "غش Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Combat Master | ESP Aimbot page",
					description: "غش Combat Master: the Combat Master hacks pillar for ESP and Aimbot. تسليم رقمي فوري. — Windows PC.",
					h1: "غش Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. غش Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Combat Master Hacks | Instant Access",
					description: "تحميل Combat Master Hacks: digital license download after payment. تسليم رقمي فوري. — Windows PC.",
					h1: "تحميل Combat Master Hacks",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. تحميل Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "تحميل Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Combat Master | In-Game Toggles",
					description: "قائمة مود Combat Master: in-client ESP and soft aim toggles. تسليم رقمي فوري. — Windows PC.",
					h1: "قائمة مود Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. قائمة مود Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "قائمة مود Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. تسليم رقمي فوري. — Windows PC.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Combat Master | Buyer Checklist",
					description: "أفضل غش Combat Master: what to compare before buying combatmaster hacks. تسليم رقمي فوري. — Windows PC.",
					h1: "أفضل غش Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. أفضل غش Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "أفضل غش Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. what to compare before buying combatmaster hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Combat Master | Soft Aim Assist",
					description: "هاك Aimbot Combat Master: Aimbot hack assist for Combat Master. تسليم رقمي فوري. — Windows PC.",
					h1: "هاك Aimbot Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. هاك Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Aimbot hack assist for Combat Master.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Combat Master | Boxes & Loot",
					description: "هاك ESP Combat Master: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. — Windows PC.",
					h1: "هاك ESP Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. هاك ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "هاك ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. — Windows PC.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "اشترِ Combat Master Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Combat Master Hacks",
					description: "سياسة الخصوصية for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. سياسة الخصوصية for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Combat Master Hacks",
					description: "سياسة الاسترداد for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. سياسة الاسترداد for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches anti-cheat. لا يضمن أي غش حالة آمنة دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Combat Master Hacks",
					description: "شروط الاستخدام for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. شروط الاستخدام for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة anti-cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Combat Master Hacks يجمع ESP wallhack وradar hack وcombatmaster aimbot  لـ Combat Master على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@combatmasterhacks.org للدعم والطلبات القانونية.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Combat Masterチート",
					accentShort: "Combat Master Hacks",
					subtitle: "Combat Master Windows PC向けESP wallhack、radar hack、Aimbot — anti-cheatメンテナンス付き。",
					subtitleShort: "Combat Master PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Combat Master HacksパッケージはCombat Master Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheatメンテナンス対応",
					antiCheatShort: "anti-cheat対応",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "パッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Combat Master Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "続きを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Combat Master向けESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "Combat Master向けチート。ESP wallhack、radar hack、Aimbot、anti-cheatメンテナンス。即時デジタル配信。",
					h1: "Combat Master Hacks — ESP・Wallhack・Aimbot",
					intro: "Combat Master Windows PC向けパッケージ：ESP wallhack、radar、Aimbot、anti-cheatメンテナンス付き。",
					imageAlt: "combatmaster hacks hero ESP aimbot wallhack",
					galleryTitle: "Combat Master Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にCombat Master Hacksを選ぶ理由",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。別ツールではなく1ライセンス。",
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. — Windows PC.",
					h1: "機能",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。機能.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. — Windows PC.",
					h1: "料金",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。料金.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. — Windows PC.",
					h1: "セットアップ",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。セットアップ.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | anti-cheat Maintenance Log",
					description: "更新: game patch status and rebuild notes. 即時デジタル配信. — Windows PC.",
					h1: "更新",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。更新.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "更新",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。game patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. 即時デジタル配信. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。ESP, soft aim, delivery, and anti-cheat questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. — Windows PC.",
					h1: "サポート",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。サポート.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				undetected: {
					title: "チート | anti-cheat Safe Status",
					description: "チート: maintenance after anti-cheat patches. 即時デジタル配信. — Windows PC.",
					h1: "チート",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。チート.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "チート",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "チート",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。maintenance after anti-cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. 即時デジタル配信. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。how game updates are handled for Combat Master hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。2026 combatmaster hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。the Combat Master hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Instant Access",
					description: "Combat Master Cheat Download: digital license download after payment. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod Menu | In-Game Toggles",
					description: "Combat Master Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Mod Menu",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Mod Menu.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod Menu",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod Menu",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Combat Masterチート | Buyer Checklist",
					description: "最強Combat Masterチート: what to compare before buying combatmaster hacks. 即時デジタル配信. — Windows PC.",
					h1: "最強Combat Masterチート",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。最強Combat Masterチート.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "最強Combat Masterチート",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Combat Masterチート",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。what to compare before buying combatmaster hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack | Soft Aim Assist",
					description: "Combat Master Aimbot Hack: Aimbot hack assist for Combat Master. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Aimbot Hack",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Aimbot Hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hack",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Aimbot hack assist for Combat Master.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hack | Boxes & Loot",
					description: "Combat Master ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master ESP Hack",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master ESP Hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hack",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
								"サポート・法務: support@combatmasterhacks.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Combat Master Hacks",
					description: "プライバシーポリシー for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。プライバシーポリシー for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Combat Master Hacks",
					description: "返金ポリシー for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。返金ポリシー for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"anti-cheatパッチ後はUpdatesページを確認。永久の安全は保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Combat Master Hacks",
					description: "利用規約 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。利用規約 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにanti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Combat Master HacksはCombat Master向けWindows PC用ESP wallhack、radar hack、combatmaster aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Combat Master 치트",
					accentShort: "Combat Master Hacks",
					subtitle: "Combat Master Windows PC용 ESP wallhack, radar hack, Aimbot — anti-cheat 유지보수 포함.",
					subtitleShort: "Combat Master PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Combat Master Hacks 패키지는 Combat Master Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheat 유지보수 지원",
					antiCheatShort: "anti-cheat 지원",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Combat Master Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "더 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Combat Master용 ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "Combat Master 치트. ESP wallhack, radar hack, Aimbot, anti-cheat 유지보수. 즉시 디지털 배송.",
					h1: "Combat Master Hacks — ESP, Wallhack, Aimbot",
					intro: "Combat Master Windows PC 패키지: ESP wallhack, radar, Aimbot, anti-cheat 유지보수 포함.",
					imageAlt: "combatmaster hacks hero ESP aimbot wallhack",
					galleryTitle: "Combat Master Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Combat Master Hacks를 선택하는 이유",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 별도 도구 대신 단일 라이선스.",
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. — Windows PC.",
					h1: "기능",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 기능.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. — Windows PC.",
					h1: "가격",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 가격.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. — Windows PC.",
					h1: "설치",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 설치.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | anti-cheat Maintenance Log",
					description: "업데이트: game patch status and rebuild notes. 즉시 디지털 배송. — Windows PC.",
					h1: "업데이트",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 업데이트.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. game patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. 즉시 디지털 배송. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. ESP, soft aim, delivery, and anti-cheat questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. — Windows PC.",
					h1: "지원",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 지원.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				undetected: {
					title: "치트 | anti-cheat Safe Status",
					description: "치트: maintenance after anti-cheat patches. 즉시 디지털 배송. — Windows PC.",
					h1: "치트",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 치트.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "치트",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "치트",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. maintenance after anti-cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. 즉시 디지털 배송. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. how game updates are handled for Combat Master hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 2026 combatmaster hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. the Combat Master hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Instant Access",
					description: "Combat Master Cheat Download: digital license download after payment. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master 모드 메뉴 | In-Game Toggles",
					description: "Combat Master 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master 모드 메뉴",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master 모드 메뉴.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master 모드 메뉴",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master 모드 메뉴",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Combat Master 치트 | Buyer Checklist",
					description: "최고의 Combat Master 치트: what to compare before buying combatmaster hacks. 즉시 디지털 배송. — Windows PC.",
					h1: "최고의 Combat Master 치트",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 최고의 Combat Master 치트.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "최고의 Combat Master 치트",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Combat Master 치트",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. what to compare before buying combatmaster hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master 에임봇 핵 | Soft Aim Assist",
					description: "Combat Master 에임봇 핵: Aimbot hack assist for Combat Master. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master 에임봇 핵",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master 에임봇 핵.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master 에임봇 핵",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master 에임봇 핵",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Aimbot hack assist for Combat Master.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP 핵 | Boxes & Loot",
					description: "Combat Master ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master ESP 핵",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master ESP 핵.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP 핵",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP 핵",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
								"지원 및 법무: support@combatmasterhacks.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Combat Master Hacks",
					description: "개인정보 처리방침 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 개인정보 처리방침 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Combat Master Hacks",
					description: "환불 정책 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 환불 정책 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"anti-cheat 패치 후 Updates 페이지 확인. 영구 안전 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Combat Master Hacks",
					description: "이용 약관 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. 이용 약관 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks는 Combat Master Windows PC용 ESP wallhack, radar hack, combatmaster aimbot  패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Combat Master作弊",
					accentShort: "Combat Master Hacks",
					subtitle: "适用于Combat Master Windows PC的ESP wallhack、radar hack和Aimbot — 含anti-cheat维护。",
					subtitleShort: "Combat Master PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Combat Master Hacks套餐已在Combat Master Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持anti-cheat维护",
					antiCheatShort: "anti-cheat支持",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Combat Master Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读更多",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Combat Master ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "Combat Master 作弊。ESP wallhack、radar hack、Aimbot、anti-cheat维护。即时数字交付。",
					h1: "Combat Master Hacks — ESP、Wallhack、Aimbot",
					intro: "Combat Master Windows PC 套餐：ESP wallhack、radar、Aimbot，含anti-cheat维护。",
					imageAlt: "combatmaster hacks hero ESP aimbot wallhack",
					galleryTitle: "Combat Master Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Combat Master Hacks的原因",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。一个许可证而非多个工具。",
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. — Windows PC.",
					h1: "功能",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。功能.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. — Windows PC.",
					h1: "价格",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。价格.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. — Windows PC.",
					h1: "安装",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。安装.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | anti-cheat Maintenance Log",
					description: "更新: game patch status and rebuild notes. 即时数字交付. — Windows PC.",
					h1: "更新",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。更新.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "更新",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。game patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and anti-cheat questions. 即时数字交付. — Windows PC.",
					h1: "常见问题",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。常见问题.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。ESP, soft aim, delivery, and anti-cheat questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. — Windows PC.",
					h1: "支持",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。支持.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				undetected: {
					title: "作弊 | anti-cheat Safe Status",
					description: "作弊: maintenance after anti-cheat patches. 即时数字交付. — Windows PC.",
					h1: "作弊",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。作弊.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "作弊",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "作弊",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。maintenance after anti-cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. 即时数字交付. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。how game updates are handled for Combat Master hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master作弊 2026 | buyer checklist",
					description: "Combat Master作弊 2026: 2026 combatmaster hacks checklist before checkout. 即时数字交付. — Windows PC.",
					h1: "Combat Master作弊 2026",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master作弊 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master作弊 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master作弊 2026",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。2026 combatmaster hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master作弊 | ESP Aimbot page",
					description: "Combat Master作弊: the Combat Master hacks pillar for ESP and Aimbot. 即时数字交付. — Windows PC.",
					h1: "Combat Master作弊",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master作弊.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master作弊",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master作弊",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。the Combat Master hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master作弊下载 | Instant Access",
					description: "Combat Master作弊下载: digital license download after payment. 即时数字交付. — Windows PC.",
					h1: "Combat Master作弊下载",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master作弊下载.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master作弊下载",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master作弊下载",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master修改菜单 | In-Game Toggles",
					description: "Combat Master修改菜单: in-client ESP and soft aim toggles. 即时数字交付. — Windows PC.",
					h1: "Combat Master修改菜单",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master修改菜单.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master修改菜单",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master修改菜单",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Combat Master作弊 | Buyer Checklist",
					description: "最佳Combat Master作弊: what to compare before buying combatmaster hacks. 即时数字交付. — Windows PC.",
					h1: "最佳Combat Master作弊",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。最佳Combat Master作弊.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "最佳Combat Master作弊",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Combat Master作弊",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。what to compare before buying combatmaster hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master自瞄外挂 | Soft Aim Assist",
					description: "Combat Master自瞄外挂: Aimbot hack assist for Combat Master. 即时数字交付. — Windows PC.",
					h1: "Combat Master自瞄外挂",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master自瞄外挂.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master自瞄外挂",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master自瞄外挂",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Aimbot hack assist for Combat Master.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP外挂 | Boxes & Loot",
					description: "Combat Master ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. — Windows PC.",
					h1: "Combat Master ESP外挂",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master ESP外挂.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP外挂",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP外挂",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "购买 Combat Master Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
								"支持与法务：support@combatmasterhacks.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Combat Master Hacks",
					description: "隐私政策 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。隐私政策 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Combat Master Hacks",
					description: "退款政策 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。退款政策 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"anti-cheat补丁后请查看Updates页面。无任何作弊保证永久の安全。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Combat Master Hacks",
					description: "使用条款 for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。使用条款 for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含anti-cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks为Combat MasterWindows PC提供ESP wallhack、radar hack和combatmaster aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "combatmaster hacks",
					accentShort: "Combat Master Hacks",
					subtitle: "Combat Master Windows PC के लिए ESP wallhack, radar hack और Aimbot — anti-cheat maintenance शामिल।",
					subtitleShort: "Combat Master PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Combat Master Hacks पैकेज Combat Master Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "anti-cheat maintenance समर्थित",
					antiCheatShort: "anti-cheat समर्थित",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Combat Master Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "और पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Combat Master के लिए ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "Combat Master cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.",
					h1: "Combat Master Hacks — ESP, Wallhack और Aimbot",
					intro: "Combat Master Windows PC पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.",
					imageAlt: "combatmaster hacks hero ESP aimbot wallhack",
					galleryTitle: "Combat Master Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Combat Master Hacks क्यों",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "कीमत",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। कीमत.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "सेटअप",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। सेटअप.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | anti-cheat Maintenance Log",
					description: "अपडेट: game patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "अपडेट",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। अपडेट.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। game patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। ESP, soft aim, delivery, and anti-cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "सहायता",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। सहायता.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				undetected: {
					title: "cheats | anti-cheat Safe Status",
					description: "cheats: maintenance after anti-cheat patches. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "cheats",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "cheats",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। maintenance after anti-cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। how game updates are handled for Combat Master hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। 2026 combatmaster hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। the Combat Master hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Instant Access",
					description: "Combat Master Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod Menu | In-Game Toggles",
					description: "Combat Master Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Mod Menu",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Mod Menu.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod Menu",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod Menu",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Combat Master Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ Combat Master Hacks: what to compare before buying combatmaster hacks. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "सर्वश्रेष्ठ Combat Master Hacks",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। सर्वश्रेष्ठ Combat Master Hacks.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "सर्वश्रेष्ठ Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। what to compare before buying combatmaster hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack | Soft Aim Assist",
					description: "Combat Master Aimbot Hack: Aimbot hack assist for Combat Master. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Aimbot Hack",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Aimbot Hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hack",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Aimbot hack assist for Combat Master.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hack | Boxes & Loot",
					description: "Combat Master ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master ESP Hack",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master ESP Hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hack",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Combat Master Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "",
							paragraphs: [
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
								"सहायता: support@combatmasterhacks.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Combat Master Hacks",
					description: "गोपनीयता नीति for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। गोपनीयता नीति for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Combat Master Hacks",
					description: "रिफंड नीति for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। रिफंड नीति for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent live status गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Combat Master Hacks",
					description: "उपयोग की शर्तें for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। उपयोग की शर्तें for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks Combat Master के लिए Windows PC पर ESP wallhack, radar hack और combatmaster aimbot  पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@combatmasterhacks.org",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Combat Master",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Combat Master di PC Windows — pemeliharaan anti-cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Combat Master PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Combat Master Hacks aktif untuk Combat Master di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan anti-cheat didukung",
					antiCheatShort: "anti-cheat didukung",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "Paket",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Combat Master Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca selengkapnya",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot untuk Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Combat Master untuk Combat Master di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan anti-cheat. Pengiriman digital instan.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "Paket Combat Master di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galeri Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Combat Master Hacks di 2026",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. — PC Windows.",
					h1: "Fitur",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Fitur.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. — PC Windows.",
					h1: "Harga",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Harga.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. — PC Windows.",
					h1: "Setup",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Setup.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | anti-cheat Maintenance Log",
					description: "Pembaruan: game patch status and rebuild notes. pengiriman digital instan. — PC Windows.",
					h1: "Pembaruan",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Pembaruan.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. game patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. pengiriman digital instan. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. — PC Windows.",
					h1: "Dukungan",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Dukungan.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat | anti-cheat Safe Status",
					description: "Cheat: maintenance after anti-cheat patches. pengiriman digital instan. — PC Windows.",
					h1: "Cheat",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Cheat.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheat",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. maintenance after anti-cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. pengiriman digital instan. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. pengiriman digital instan. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. how game updates are handled for Combat Master hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Combat Master 2026 | buyer checklist",
					description: "Cheat Combat Master 2026: 2026 combatmaster hacks checklist before checkout. pengiriman digital instan. — PC Windows.",
					h1: "Cheat Combat Master 2026",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Cheat Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheat Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Combat Master | ESP Aimbot page",
					description: "Cheat Combat Master: the Combat Master hacks pillar for ESP and Aimbot. pengiriman digital instan. — PC Windows.",
					h1: "Cheat Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Cheat Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Combat Master | Instant Access",
					description: "Download Cheat Combat Master: digital license download after payment. pengiriman digital instan. — PC Windows.",
					h1: "Download Cheat Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Download Cheat Combat Master.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Download Cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Combat Master | In-Game Toggles",
					description: "Menu mod Combat Master: in-client ESP and soft aim toggles. pengiriman digital instan. — PC Windows.",
					h1: "Menu mod Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Menu mod Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Menu mod Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. pengiriman digital instan. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Combat Master terbaik | Buyer Checklist",
					description: "Cheat Combat Master terbaik: what to compare before buying combatmaster hacks. pengiriman digital instan. — PC Windows.",
					h1: "Cheat Combat Master terbaik",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Cheat Combat Master terbaik.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Cheat Combat Master terbaik",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Combat Master terbaik",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. what to compare before buying combatmaster hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Soft Aim Assist",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. pengiriman digital instan. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Aimbot hack assist for Combat Master.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boxes & Loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. pengiriman digital instan. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Beli Combat Master Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
								"support@combatmasterhacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Combat Master Hacks",
					description: "Kebijakan privasi for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Kebijakan privasi for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org untuk dukungan dan legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Combat Master Hacks",
					description: "Kebijakan refund for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Kebijakan refund for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch anti-cheat. Tidak ada cheat yang menjamin keamanan permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org untuk dukungan dan legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Combat Master Hacks",
					description: "Syarat penggunaan for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Syarat penggunaan for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks menyediakan ESP wallhack, radar hack, dan combatmaster aimbot  untuk Combat Master di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org untuk dukungan dan legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "combatmaster hacks ไม่ถูกตรวจจับ",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Combat Master บน Windows PC — รวมการดูแล anti-cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Combat Master PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Combat Master Hacks พร้อมใช้งานสำหรับ Combat Master บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล anti-cheat",
					antiCheatShort: "anti-cheat รองรับ",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Combat Master Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านเพิ่มเติม",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Combat Master — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Combat Master สำหรับ Combat Master บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Combat Master Hacks — ESP, Wallhack และ Aimbot",
					intro: "แพ็ก สำหรับ Combat Master บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "แกลเลอรี Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Combat Master Hacks ปี 2026",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ฟีเจอร์.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "ราคา",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ราคา.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ติดตั้ง.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | anti-cheat Maintenance Log",
					description: "อัปเดต: game patch status and rebuild notes. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "อัปเดต",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC อัปเดต.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC game patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ESP, soft aim, delivery, and anti-cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "สนับสนุน",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC สนับสนุน.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats | anti-cheat Safe Status",
					description: "Cheats: maintenance after anti-cheat patches. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Cheats",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC maintenance after anti-cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC how game updates are handled for Combat Master hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC 2026 combatmaster hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC the Combat Master hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Combat Master Hacks | Instant Access",
					description: "ดาวน์โหลด Combat Master Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "ดาวน์โหลด Combat Master Hacks",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ดาวน์โหลด Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Combat Master | In-Game Toggles",
					description: "เมนูมอด Combat Master: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "เมนูมอด Combat Master",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC เมนูมอด Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "เมนูมอด Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Combat Master",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Combat Master ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Combat Master ที่ดีที่สุด: what to compare before buying combatmaster hacks. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Cheat Combat Master ที่ดีที่สุด",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Cheat Combat Master ที่ดีที่สุด.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Cheat Combat Master ที่ดีที่สุด",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Combat Master ที่ดีที่สุด",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC what to compare before buying combatmaster hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Combat Master | Soft Aim Assist",
					description: "Hack Aimbot Combat Master: Aimbot hack assist for Combat Master. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Hack Aimbot Combat Master",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Hack Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Aimbot hack assist for Combat Master.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boxes & Loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "ซื้อ Combat Master Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Combat Master Hacks",
					description: "นโยบายความเป็นส่วนตัว for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC นโยบายความเป็นส่วนตัว for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Combat Master Hacks",
					description: "นโยบายการคืนเงิน for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC นโยบายการคืนเงิน for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ anti-cheat ไม่มี cheat รับประกัน ความปลอดภัยถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Combat Master Hacks",
					description: "ข้อกำหนดการใช้งาน for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC ข้อกำหนดการใช้งาน for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล anti-cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks รวม ESP wallhack, radar hack และ combatmaster aimbot แบบ  สำหรับ Combat Master บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org สำหรับการสนับสนุน",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Combat Master",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Combat Master trên PC Windows — bảo trì anti-cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Combat Master PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Combat Master Hacks đang hoạt động cho Combat Master trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì anti-cheat",
					antiCheatShort: "Hỗ trợ anti-cheat",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "Gói",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Combat Master Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc thêm",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot cho Combat Master — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Combat Master cho Combat Master trên PC. ESP wallhack, radar hack, Aimbot, bảo trì anti-cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "Gói Combat Master trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Thư viện Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Tính năng",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Tính năng.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Giá",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Giá.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cài đặt",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cài đặt.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | anti-cheat Maintenance Log",
					description: "Cập nhật: game patch status and rebuild notes. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cập nhật",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cập nhật.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. game patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Hỗ trợ.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat | anti-cheat Safe Status",
					description: "Cheat: maintenance after anti-cheat patches. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cheat",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cheat.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheat",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. maintenance after anti-cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. how game updates are handled for Combat Master hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Combat Master 2026 | buyer checklist",
					description: "Cheat Combat Master 2026: 2026 combatmaster hacks checklist before checkout. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cheat Combat Master 2026",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cheat Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheat Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheat Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Combat Master | ESP Aimbot page",
					description: "Cheat Combat Master: the Combat Master hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cheat Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cheat Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Combat Master | Instant Access",
					description: "Tải Cheat Combat Master: digital license download after payment. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Tải Cheat Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Tải Cheat Combat Master.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Combat Master | In-Game Toggles",
					description: "Mod menu Combat Master: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Mod menu Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Mod menu Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Mod menu Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Combat Master tốt nhất | Buyer Checklist",
					description: "Cheat Combat Master tốt nhất: what to compare before buying combatmaster hacks. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Cheat Combat Master tốt nhất",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Cheat Combat Master tốt nhất.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Cheat Combat Master tốt nhất",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Combat Master tốt nhất",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. what to compare before buying combatmaster hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Soft Aim Assist",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Aimbot hack assist for Combat Master.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boxes & Loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Mua Combat Master Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Combat Master Hacks",
					description: "Chính sách bảo mật for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Chính sách bảo mật for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Combat Master Hacks",
					description: "Chính sách hoàn tiền for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Chính sách hoàn tiền for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá anti-cheat. Không cheat nào đảm bảo an toàn vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Combat Master Hacks",
					description: "Điều khoản sử dụng for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Điều khoản sử dụng for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks cung cấp ESP wallhack, radar hack và combatmaster aimbot  cho Combat Master trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org cho hỗ trợ và pháp lý.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "чіти Combat Master",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для Combat Master на Windows PC — обслуговування anti-cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Combat Master PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Combat Master Hacks активний для Combat Master на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування anti-cheat",
					antiCheatShort: "anti-cheat підтримка",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Combat Master Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати далі",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "ESP, wallhack, radar і Aimbot для Combat Master — оплата через Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "чіти Combat Master для Combat Master на PC. ESP wallhack, radar hack, Aimbot, обслуговування anti-cheat. Мгновенная цифровая доставка.",
					h1: "Combat Master Hacks — ESP, Wallhack і Aimbot",
					intro: "пакет для Combat Master на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Галерея Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Combat Master Hacks у 2026",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. — Windows PC.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. — Windows PC.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. — Windows PC.",
					h1: "Функції",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Функції.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. — Windows PC.",
					h1: "Ціни",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Ціни.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. — Windows PC.",
					h1: "Встановлення",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Встановлення.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | anti-cheat Maintenance Log",
					description: "Оновлення: game patch status and rebuild notes. миттєва цифрова доставка. — Windows PC.",
					h1: "Оновлення",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Оновлення.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. game patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. миттєва цифрова доставка. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. — Windows PC.",
					h1: "Підтримка",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Підтримка.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "чіти | anti-cheat Safe Status",
					description: "чіти: maintenance after anti-cheat patches. миттєва цифрова доставка. — Windows PC.",
					h1: "чіти",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. чіти.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "чіти",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "чіти",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. maintenance after anti-cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. — Windows PC.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. — Windows PC.",
					h1: "Radar hack",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. миттєва цифрова доставка. — Windows PC.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. how game updates are handled for Combat Master hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Combat Master 2026 | buyer checklist",
					description: "Чіти Combat Master 2026: 2026 combatmaster hacks checklist before checkout. миттєва цифрова доставка. — Windows PC.",
					h1: "Чіти Combat Master 2026",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Чіти Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Чіти Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Чіти Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Combat Master | ESP Aimbot page",
					description: "Чіти Combat Master: the Combat Master hacks pillar for ESP and Aimbot. миттєва цифрова доставка. — Windows PC.",
					h1: "Чіти Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Чіти Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Combat Master Hacks | Instant Access",
					description: "Завантаження Combat Master Hacks: digital license download after payment. миттєва цифрова доставка. — Windows PC.",
					h1: "Завантаження Combat Master Hacks",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Завантаження Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Завантаження Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Combat Master | In-Game Toggles",
					description: "Мод-меню Combat Master: in-client ESP and soft aim toggles. миттєва цифрова доставка. — Windows PC.",
					h1: "Мод-меню Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Мод-меню Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Мод-меню Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. миттєва цифрова доставка. — Windows PC.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Combat Master | Buyer Checklist",
					description: "Найкращі чіти Combat Master: what to compare before buying combatmaster hacks. миттєва цифрова доставка. — Windows PC.",
					h1: "Найкращі чіти Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Найкращі чіти Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Найкращі чіти Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. what to compare before buying combatmaster hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Combat Master | Soft Aim Assist",
					description: "Хак aimbot Combat Master: Aimbot hack assist for Combat Master. миттєва цифрова доставка. — Windows PC.",
					h1: "Хак aimbot Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Хак aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Aimbot hack assist for Combat Master.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Combat Master | Boxes & Loot",
					description: "Хак ESP Combat Master: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. — Windows PC.",
					h1: "Хак ESP Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Хак ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Хак ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. — Windows PC.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Купити Combat Master Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
								"support@combatmasterhacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Combat Master Hacks",
					description: "Політика конфіденційності for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Політика конфіденційності for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org для підтримки та правових питань.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Combat Master Hacks",
					description: "Політика повернення for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Політика повернення for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів anti-cheat. Жоден чит не гарантує постійний статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org для підтримки та правових питань.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Combat Master Hacks",
					description: "Умови використання for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Умови використання for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks об'єднує ESP wallhack, radar hack і combatmaster aimbot у пакеті для Combat Master на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org для підтримки та правових питань.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected combatmaster hacky",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Combat Master na Windows PC — údržba anti-cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Combat Master PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Combat Master Hacks je aktivní pro Combat Master na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby anti-cheat",
					antiCheatShort: "anti-cheat podpora",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Combat Master Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "ESP, wallhack, radar a Aimbot pro Combat Master — checkout přes Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "combatmaster hacky pro Combat Master na PC. ESP wallhack, radar hack, Aimbot, údržba anti-cheat. Okamžité digitální doručení.",
					h1: "Combat Master Hacks — ESP, Wallhack a Aimbot",
					intro: "balíček pro Combat Master na Windows PC: ESP wallhack, radar, Aimbot s údržbou anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galerie Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Combat Master Hacks v roce 2026",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. — Windows PC.",
					h1: "Funkce",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Funkce.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. — Windows PC.",
					h1: "Ceny",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Ceny.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. — Windows PC.",
					h1: "Instalace",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Instalace.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | anti-cheat Maintenance Log",
					description: "Aktualizace: game patch status and rebuild notes. okamžité digitální doručení. — Windows PC.",
					h1: "Aktualizace",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Aktualizace.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. game patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. okamžité digitální doručení. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. — Windows PC.",
					h1: "Podpora",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Podpora.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "cheaty | anti-cheat Safe Status",
					description: "cheaty: maintenance after anti-cheat patches. okamžité digitální doručení. — Windows PC.",
					h1: "cheaty",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. cheaty.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "cheaty",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "cheaty",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. maintenance after anti-cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. okamžité digitální doručení. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. how game updates are handled for Combat Master hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "combatmaster hacky 2026 | buyer checklist",
					description: "combatmaster hacky 2026: 2026 combatmaster hacks checklist before checkout. okamžité digitální doručení. — Windows PC.",
					h1: "combatmaster hacky 2026",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. combatmaster hacky 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "combatmaster hacky 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "combatmaster hacky 2026",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "combatmaster hacky | ESP Aimbot page",
					description: "combatmaster hacky: the Combat Master hacks pillar for ESP and Aimbot. okamžité digitální doručení. — Windows PC.",
					h1: "combatmaster hacky",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. combatmaster hacky.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "combatmaster hacky",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "combatmaster hacky",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Combat Master Hacks | Instant Access",
					description: "Stáhnout Combat Master Hacks: digital license download after payment. okamžité digitální doručení. — Windows PC.",
					h1: "Stáhnout Combat Master Hacks",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Stáhnout Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Stáhnout Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master mod menu | In-Game Toggles",
					description: "Combat Master mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master mod menu",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master mod menu.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master mod menu",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master mod menu",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší combatmaster hacky | Buyer Checklist",
					description: "Nejlepší combatmaster hacky: what to compare before buying combatmaster hacks. okamžité digitální doručení. — Windows PC.",
					h1: "Nejlepší combatmaster hacky",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Nejlepší combatmaster hacky.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Nejlepší combatmaster hacky",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší combatmaster hacky",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. what to compare before buying combatmaster hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master aimbot hack | Soft Aim Assist",
					description: "Combat Master aimbot hack: Aimbot hack assist for Combat Master. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master aimbot hack",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master aimbot hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master aimbot hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master aimbot hack",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Aimbot hack assist for Combat Master.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP hack | Boxes & Loot",
					description: "Combat Master ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master ESP hack",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master ESP hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP hack",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Koupit Combat Master Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Combat Master Hacks",
					description: "Zásady ochrany soukromí for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Zásady ochrany soukromí for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Combat Master Hacks",
					description: "Zásady vrácení peněz for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Zásady vrácení peněz for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Combat Master Hacks",
					description: "Podmínky použití for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Podmínky použití for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks spojuje ESP wallhack, radar hack a combatmaster aimbot jako balíček pro Combat Master na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org pro podporu a právní dotazy.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Combat Master undetected",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Combat Master pe PC Windows — mentenanță anti-cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Combat Master PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Combat Master Hacks este activ pentru Combat Master pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță anti-cheat suportată",
					antiCheatShort: "anti-cheat suportat",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Combat Master Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Combat Master pentru Combat Master pe PC. ESP wallhack, radar hack, Aimbot, mentenanță anti-cheat. Livrare digitală instantă.",
					h1: "Combat Master Hacks — ESP, Wallhack și Aimbot",
					intro: "Pachet Combat Master pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță anti-cheat.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Galerie Combat Master Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Combat Master Hacks în 2026",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "ESP Combat Master | Player Boxes & Wallhack",
					description: "ESP Combat Master: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. — PC Windows.",
					h1: "ESP Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. ESP Combat Master.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Aimbot Combat Master | Soft Aim Controls",
					description: "Aimbot Combat Master: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. — PC Windows.",
					h1: "Aimbot Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Aimbot Combat Master.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. — PC Windows.",
					h1: "Funcții",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Funcții.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. — PC Windows.",
					h1: "Prețuri",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Prețuri.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. — PC Windows.",
					h1: "Instalare",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Instalare.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | anti-cheat Maintenance Log",
					description: "Actualizări: game patch status and rebuild notes. livrare digitală instantă. — PC Windows.",
					h1: "Actualizări",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Actualizări.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. game patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. livrare digitală instantă. — PC Windows.",
					h1: "FAQ",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. — PC Windows.",
					h1: "Suport",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Suport.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats | anti-cheat Safe Status",
					description: "Cheats: maintenance after anti-cheat patches. livrare digitală instantă. — PC Windows.",
					h1: "Cheats",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "Cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. maintenance after anti-cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Combat Master | ESP Visibility",
					description: "Wallhack Combat Master: wallhack ESP for players, loot, and distance. livrare digitală instantă. — PC Windows.",
					h1: "Wallhack Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Wallhack Combat Master.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Wallhack Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. — PC Windows.",
					h1: "Radar hack",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Radar hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass anti-cheat | Patch Maintenance",
					description: "Bypass anti-cheat: how game updates are handled for Combat Master hacks. livrare digitală instantă. — PC Windows.",
					h1: "Bypass anti-cheat",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Bypass anti-cheat.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Bypass anti-cheat",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass anti-cheat",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. how game updates are handled for Combat Master hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Combat Master 2026 | buyer checklist",
					description: "Cheats Combat Master 2026: 2026 combatmaster hacks checklist before checkout. livrare digitală instantă. — PC Windows.",
					h1: "Cheats Combat Master 2026",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Cheats Combat Master 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Cheats Combat Master 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Cheats Combat Master 2026",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. 2026 combatmaster hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Combat Master | ESP Aimbot page",
					description: "Cheats Combat Master: the Combat Master hacks pillar for ESP and Aimbot. livrare digitală instantă. — PC Windows.",
					h1: "Cheats Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Cheats Combat Master.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Combat Master",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Combat Master Hacks | Instant Access",
					description: "Descărcare Combat Master Hacks: digital license download after payment. livrare digitală instantă. — PC Windows.",
					h1: "Descărcare Combat Master Hacks",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Descărcare Combat Master Hacks.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Descărcare Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Combat Master | In-Game Toggles",
					description: "Meniu mod Combat Master: in-client ESP and soft aim toggles. livrare digitală instantă. — PC Windows.",
					h1: "Meniu mod Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Meniu mod Combat Master.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Meniu mod Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Combat Master | Smooth Aim Settings",
					description: "Soft aim Combat Master: smooth soft aim settings for Windows PC. livrare digitală instantă. — PC Windows.",
					h1: "Soft aim Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Soft aim Combat Master.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Soft aim Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Combat Master | Buyer Checklist",
					description: "Cele mai bune cheats Combat Master: what to compare before buying combatmaster hacks. livrare digitală instantă. — PC Windows.",
					h1: "Cele mai bune cheats Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Cele mai bune cheats Combat Master.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Cele mai bune cheats Combat Master",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. what to compare before buying combatmaster hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Combat Master | Soft Aim Assist",
					description: "Hack aimbot Combat Master: Aimbot hack assist for Combat Master. livrare digitală instantă. — PC Windows.",
					h1: "Hack aimbot Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Hack aimbot Combat Master.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Combat Master",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Aimbot hack assist for Combat Master.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Combat Master | Boxes & Loot",
					description: "Hack ESP Combat Master: ESP hack boxes, loot pins, and distance. livrare digitală instantă. — PC Windows.",
					h1: "Hack ESP Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Hack ESP Combat Master.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Combat Master",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Hack ESP Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Combat Master | What It Means",
					description: "Unlock all Combat Master: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. — PC Windows.",
					h1: "Unlock all Combat Master",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Unlock all Combat Master.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Unlock all Combat Master",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Cumpără Combat Master Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Combat Master",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
								"support@combatmasterhacks.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Combat Master Hacks",
					description: "Politica de confidențialitate for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Politica de confidențialitate for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org pentru suport și legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Combat Master Hacks",
					description: "Politica de rambursare for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Politica de rambursare for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri anti-cheat. Niciun cheat nu garantează status permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org pentru suport și legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Combat Master Hacks",
					description: "Termeni de utilizare for Combat Master Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Termeni de utilizare for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks combină ESP wallhack, radar hack și combatmaster aimbot pentru Combat Master pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org pentru suport și legal.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected combatmaster hacks",
					accentShort: "Combat Master Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för Combat Master på Windows PC — anti-cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Combat Master PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Combat Master Hacks-paketet är live för Combat Master på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "anti-cheat-underhåll stöds",
					antiCheatShort: "anti-cheat stöd",
				},
				product: {
					title: "Combat Master Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Combat Master",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Combat Master Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "ESP, wallhack, radar och Aimbot för Combat Master — checkout via Zadeyo.",
				},
				images: {
					hero: "Combat Master Hacks hero — ESP and aimbot overlay in Combat Master",
					espWallhack: "Wallhack outlines showing players and bots through walls",
					aimbotCombat: "Soft aim assist overlay during a Combat Master match",
					squadFight: "Combat Master Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Combat Master match",
					headerArt: "Aimbot view and bone priority controls for Combat Master",
					cheatsPackage: "2D radar threat overlay for Combat Master",
					rebootFight: "Aimbot assist during a Combat Master firefight",
					battleRoyale: "Combat Master Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and matchs in Combat Master",
				},
			},
			pages: {
				home: {
					title: "Combat Master Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "combatmaster hacks för Combat Master på PC. ESP wallhack, radar hack, Aimbot, anti-cheat-underhåll. Omedelbar digital leverans.",
					h1: "Combat Master Hacks — ESP, Wallhack & Aimbot",
					intro: "paket för Combat Master på Windows PC: ESP wallhack, radar, Aimbot med anti-cheat-underhåll.",
					imageAlt: "Combat Master ESP player tags hack",
					galleryTitle: "Combat Master Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
							],
						},
					],
				},
				"combatmaster-esp": {
					title: "Combat Master ESP | Player Boxes & Wallhack",
					description: "Combat Master ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master ESP",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master ESP.",
					imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
					galleryTitle: "Combat Master ESP",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master ESP",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"combatmaster-aimbot": {
					title: "Combat Master Aimbot | Soft Aim Controls",
					description: "Combat Master Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Aimbot",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Aimbot.",
					imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
					galleryTitle: "Combat Master Aimbot",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Aimbot",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. — Windows PC.",
					h1: "Funktioner",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Funktioner.",
					imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. — Windows PC.",
					h1: "Priser",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Priser.",
					imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. — Windows PC.",
					h1: "Installation",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Installation.",
					imageAlt: "Combat Master Hacks Setup screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | anti-cheat Maintenance Log",
					description: "Uppdateringar: game patch status and rebuild notes. omedelbar digital leverans. — Windows PC.",
					h1: "Uppdateringar",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Uppdateringar.",
					imageAlt: "Combat Master Hacks live status after game patches and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. game patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and anti-cheat questions. omedelbar digital leverans. — Windows PC.",
					h1: "FAQ",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. FAQ.",
					imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. ESP, soft aim, delivery, and anti-cheat questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. — Windows PC.",
					h1: "Support",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Support.",
					imageAlt: "Combat Master Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "cheats | anti-cheat Safe Status",
					description: "cheats: maintenance after anti-cheat patches. omedelbar digital leverans. — Windows PC.",
					h1: "cheats",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. cheats.",
					imageAlt: "Combat Master Hacks live status overview for Windows PC",
					galleryTitle: "cheats",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "cheats",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. maintenance after anti-cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Combat Master Wallhack | ESP Visibility",
					description: "Combat Master Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Wallhack",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Wallhack.",
					imageAlt: "Combat Master wallhack visibility through walls in a match",
					galleryTitle: "Combat Master Wallhack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master Wallhack",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. — Windows PC.",
					h1: "Radar Hack",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Radar Hack.",
					imageAlt: "Combat Master 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Anti-Cheat Bypass | Patch Maintenance",
					description: "Anti-Cheat Bypass: how game updates are handled for Combat Master hacks. omedelbar digital leverans. — Windows PC.",
					h1: "Anti-Cheat Bypass",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Anti-Cheat Bypass.",
					imageAlt: "Combat Master Hacks maintenance after a game patch",
					galleryTitle: "Anti-Cheat Bypass",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Anti-Cheat Bypass",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. how game updates are handled for Combat Master hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Combat Master Hacks 2026 | buyer checklist",
					description: "Combat Master Hacks 2026: 2026 combatmaster hacks checklist before checkout. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Hacks 2026",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Hacks 2026.",
					imageAlt: "Combat Master Hacks product overview for Combat Master",
					galleryTitle: "Combat Master Hacks 2026",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-hacks/",
					sections: [
						{
							h2: "Combat Master Hacks 2026",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. 2026 combatmaster hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Combat Master Hacks | ESP Aimbot page",
					description: "Combat Master Hacks: the Combat Master hacks pillar for ESP and Aimbot. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Hacks",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Hacks.",
					imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. the Combat Master hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Combat Master Cheat Download | Instant Access",
					description: "Combat Master Cheat Download: digital license download after payment. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Cheat Download",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Cheat Download.",
					imageAlt: "Combat Master Hacks download and install delivery flow",
					galleryTitle: "Combat Master Cheat Download",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Combat Master Cheat Download",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Combat Master Mod-meny | In-Game Toggles",
					description: "Combat Master Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Mod-meny",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Mod-meny.",
					imageAlt: "Combat Master Hacks in-game menu controls",
					galleryTitle: "Combat Master Mod-meny",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Mod-meny",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Combat Master Soft Aim | Smooth Aim Settings",
					description: "Combat Master Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Soft Aim",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Soft Aim.",
					imageAlt: "Combat Master soft aim FOV and smoothness settings",
					galleryTitle: "Combat Master Soft Aim",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Soft Aim",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Combat Master Hacks | Buyer Checklist",
					description: "Bästa Combat Master Hacks: what to compare before buying combatmaster hacks. omedelbar digital leverans. — Windows PC.",
					h1: "Bästa Combat Master Hacks",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Bästa Combat Master Hacks.",
					imageAlt: "Combat Master Hacks overview for Combat Master on PC",
					galleryTitle: "Bästa Combat Master Hacks",
					heroImage: "/images/combatmaster-hacks-esp.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Combat Master Hacks",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. what to compare before buying combatmaster hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Combat Master Aimbot Hack | Soft Aim Assist",
					description: "Combat Master Aimbot Hack: Aimbot hack assist for Combat Master. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Aimbot Hack",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Aimbot Hack.",
					imageAlt: "Combat Master aimbot hack controls and bone priority",
					galleryTitle: "Combat Master Aimbot Hack",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-aimbot/",
					sections: [
						{
							h2: "Combat Master Aimbot Hack",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Aimbot hack assist for Combat Master.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Combat Master ESP Hack | Boxes & Loot",
					description: "Combat Master ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master ESP Hack",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master ESP Hack.",
					imageAlt: "Combat Master ESP hack boxes and loot markers",
					galleryTitle: "Combat Master ESP Hack",
					heroImage: "/images/combatmaster-hacks-wallhack.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/combatmaster-esp/",
					sections: [
						{
							h2: "Combat Master ESP Hack",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Combat Master Unlock All | What It Means",
					description: "Combat Master Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. — Windows PC.",
					h1: "Combat Master Unlock All",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Combat Master Unlock All.",
					imageAlt: "Combat Master Hacks license features overview",
					galleryTitle: "Combat Master Unlock All",
					heroImage: "/images/combatmaster-hacks-radar.webp",
					ctaPrimary: "Köp Combat Master Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Combat Master Unlock All",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "",
							paragraphs: [
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
								"support@combatmasterhacks.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Combat Master Hacks",
					description: "Integritetspolicy for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Integritetspolicy for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@combatmasterhacks.org för support och juridik.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Combat Master Hacks",
					description: "Återbetalningspolicy for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Återbetalningspolicy for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-match.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter anti-cheat-patchar. Ingen cheat garanterar permanent live status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@combatmasterhacks.org för support och juridik.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Combat Master Hacks",
					description: "Användarvillkor for Combat Master Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Användarvillkor for combatmasterhacks.org and Combat Master licenses.",
					imageAlt: "combatmaster hacks",
					galleryTitle: "combatmaster hacks",
					heroImage: "/images/combatmaster-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. anti-cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Combat Master Hacks kombinerar ESP wallhack, radar hack och combatmaster aimbot som paket för Combat Master på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@combatmasterhacks.org för support och juridik.",
								"Email: support@combatmasterhacks.org",
							],
						},
					],
				},
			},
		},
	};
