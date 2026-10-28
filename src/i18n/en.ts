import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH, HWID_SPOOFER_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { blogPosts } from '../data/blog/posts';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Combat Master Hacks',
    domain: 'combatmasterhacks.org',
    title: 'Combat Master Cheats & Hacks | Combat Master Hacks',
    description:
      'Combat Master cheats for Windows PC: player ESP, wallhack, soft aimbot and 2D radar with a stream-proof overlay. Get Combat Master Hacks today.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Combat Master — build online',
    eyebrow: 'Combat Master cheats for Windows PC',
    title: 'Combat Master Cheats & Hacks — ESP, Aimbot & Wallhack for PC',
    subtitle:
      'Combat Master hacks with player ESP, wallhack, soft aimbot and a 2D radar for Windows PC—stream-proof overlay and patch updates after game and anti-cheat changes at combatmasterhacks.org.',
    ctaPrimary: 'Get access',
    ctaPrimaryHref: productBase,
    ctaDiscord: 'Buy now',
    modesLabel: 'Combat Master modes',
    modes: ['Battle Royale', 'FPS matches', 'Ranked lobbies', 'Training range'],
    metrics: [
      { label: 'Stream-proof overlay', strong: 'Yes' },
      { label: 'Patch updates', strong: 'After patches' },
      { label: 'Platform', strong: 'Windows PC' },
      { label: 'Support', strong: 'Email' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'ESP, wallhack, soft aim and radar for Combat Master, maintained after every patch.',
    items: [
      {
        title: 'Player ESP & Wallhack',
        subtitle: 'See Every Enemy Before They See You.',
        desc: 'Combat Master ESP and wallhack outline players through walls so you can read rotations, flanks and squad positions in Battle Royale and FPS fights.',
        bullets: [
          'Player boxes, skeletons and name tags through walls',
          'Distance readouts and team color filters',
          'Adjustable draw range so the screen stays readable',
          'Clean overlay that you tune from the in-game menu',
          'Works alongside the soft aim and radar modules',
        ],
        tags: ['combat master esp', 'combat master wallhack', 'player esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Soft Aim / Aimbot',
        subtitle: 'Smooth, Controllable Aim Assist.',
        desc: 'Soft aim keeps tracking natural. Pick a target bone, set the field of view and smoothing, then tighten values as you get comfortable.',
        bullets: [
          'FOV circle and smoothing sliders',
          'Bone select for head, chest or nearest',
          'Aim key and visibility checks',
          'Sniper-friendly and close-quarters presets',
        ],
        tags: ['combat master aimbot', 'soft aim', 'bone select'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: '2D Radar / Minimap',
        subtitle: 'Map Awareness Without Guessing.',
        desc: 'A compact 2D radar shows nearby enemies and your facing direction, so you can rotate and push with information.',
        bullets: ['Enemy dots with distance scaling', 'Movable and resizable radar window', 'Pairs with ESP for full awareness'],
        tags: ['combat master radar', '2d radar', 'minimap'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Skeleton & Name Tags',
        subtitle: 'Read Targets at a Glance.',
        desc: 'Skeleton ESP and name tags make it easier to tell stance, direction and distance in crowded fights.',
        bullets: ['Skeleton overlay on visible and hidden players', 'Name and distance tags', 'Color options per team'],
        tags: ['skeleton esp', 'name tags', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Stream-Proof Overlay',
        subtitle: 'Creators Stay Clean.',
        desc: 'Keep the overlay on your monitor while capture software records a normal game feed. Test with a local recording before you go live.',
        bullets: [
          'Overlay hidden from common capture software',
          'Toggle visibility per module',
          'Quick local-recording test checklist',
          'Windows 10 and Windows 11 supported',
        ],
        tags: ['stream proof', 'obs safe', 'capture hide'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Patch Updates',
        subtitle: 'Back Online After Patches.',
        desc: 'When Combat Master or its anti-cheat updates, the loader is reviewed and updated. Check status before you launch.',
        bullets: [
          'Loader updates after game and anti-cheat patches',
          'Status checked before each release',
          'Update notes in the blog and by email',
          'Re-download the current build from your account',
        ],
        tags: ['patch updates', 'auto update', 'status'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'In-Game Menu',
        subtitle: 'Tune Everything in One Place.',
        desc: 'Every module lives in a single menu with hotkeys, so you can adjust ESP, aim and radar between rounds.',
        bullets: ['Hotkey toggles for each module', 'Separate ESP, aim and radar tabs', 'Save and reload your settings'],
        tags: ['cheat menu', 'hotkeys', 'config'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Windows PC Loader',
        subtitle: 'Simple Install.',
        desc: 'Download the loader after checkout, follow the setup guide and launch Combat Master from Steam on Windows.',
        bullets: ['64-bit Windows 10 and 11', 'Step-by-step setup guide', 'Email help if the loader errors'],
        tags: ['windows pc', 'loader', 'steam'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Anti-Cheat Awareness',
        subtitle: 'Know the Risk Before You Queue.',
        desc: 'Third-party software always carries anti-cheat risk. We publish build status and tell you when to hold off.',
        bullets: ['Status guidance before launch', 'Conservative defaults for aim and ESP', 'Clear risk notes in the terms'],
        tags: ['anti-cheat', 'status', 'safe settings'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Combat Master tooling backed by patches—not promises',
    subtitle:
      'Many Combat Master cheat sellers ship stale loaders and vague claims. combatmasterhacks.org is built around patch updates, readable overlays and real email support.',
    usLabel: 'Combat Master Hacks',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch updates',
        desc: 'The loader is reviewed after Combat Master and anti-cheat updates—check status before you queue.',
      },
      {
        title: 'Controllable soft aim',
        desc: 'FOV, smoothing and bone select let you keep aim assist modest instead of obvious snapping.',
      },
      {
        title: 'Real email support',
        desc: 'Write to support@combatmasterhacks.org for loader, Windows and checkout help—no copy-paste ticket bots.',
      },
      {
        title: 'Stream-proof overlay',
        desc: 'ESP, wallhack and radar can be hidden from common capture tools, so recordings stay clean.',
      },
      {
        title: 'One simple plan',
        desc: 'One full package with every module—Monthly $35 or Lifetime $150—so there are no tier upsells.',
      },
      {
        title: 'Honest risk notes',
        desc: 'Undetected status is a point-in-time label. We tell you to wait when anti-cheat changes, not to push your luck.',
      },
    ],
    metrics: [
      {
        value: '4',
        title: 'Core modules',
        desc: 'ESP, wallhack, soft aim and 2D radar included in one package.',
      },
      {
        value: '$35',
        title: 'Monthly plan',
        desc: 'Flexible access for one month of Combat Master Hacks.',
      },
      {
        value: '$150',
        title: 'Lifetime plan',
        desc: 'One-time payment for ongoing Combat Master cheat access.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Complete checkout, download the loader, configure ESP, aim and radar, and launch Combat Master on Windows PC—email support is there if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Checkout & download the loader',
        desc: 'Choose Monthly or Lifetime, complete checkout and download the latest Combat Master loader for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the loader, then set up player ESP, wallhack, soft aim and radar from the in-game menu.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & play Combat Master',
        desc: 'Check the status guidance, launch Combat Master from Steam and play with settings you saved.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check status before launching Combat Master after game or anti-cheat updates.',
    items: [
      'Windows 10 & 11',
      'Loader download',
      'Steam',
      'Combat Master FPS',
      'Patch updates',
      'Stable internet',
      'Email support',
      'Anti-cheat aware',
    ],
  },
  cheats: {
    eyebrow: 'Combat Master cheat',
    title: 'Combat Master Full cheat',
    subtitle: 'ESP, wallhack, soft aim, 2D radar and a stream-proof overlay in one package.',
    viewAll: 'View Combat Master Full',
    explore: 'Explore',
    items: [
      {
        badge: 'Best value',
        tier: 'All-in-one',
        name: 'Full',
        title: 'Combat Master Full',
        desc: 'Combat Master cheats for Windows PC with player ESP, wallhack, soft aimbot, 2D radar, stream-proof overlay and patch updates.',
        features: [
          'Player ESP',
          'Wallhack',
          'Soft aim / aimbot',
          '2D radar / minimap',
          'Stream-proof overlay',
          'Patch updates',
        ],
        more: 8,
        href: `${productBase}full/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Combat Master cheats',
    subtitle: 'One full Combat Master package: ESP, wallhack, aimbot and radar. Monthly $35 or Lifetime $150.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Combat Master ESP, aimbot and radar setup guides plus patch-day checks.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: blogPosts.map(({ body: _body, featured: _featured, author: _author, ...card }) => card),
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning between rounds.',
    items: [
      { num: '01', label: 'Combat', title: 'Soft aim you can control', desc: 'FOV, smoothing and bone select in one aim tab.' },
      { num: '02', label: 'Vision', title: 'ESP and wallhack that stay readable', desc: 'Boxes, skeletons, name tags and distance with color filters.' },
      { num: '03', label: 'Radar', title: '2D radar on a compact overlay', desc: 'Enemy dots, facing direction and a resizable radar window.' },
      { num: '04', label: 'Weapons', title: 'Aim presets per play style', desc: 'Separate close-quarters and long-range aim settings.' },
      { num: '05', label: 'Movement', title: 'Hotkeys for every toggle', desc: 'Turn modules on and off without leaving the match.' },
      { num: '06', label: 'Profiles', title: 'Saved settings', desc: 'Save and reload your ESP, aim and radar configuration.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved settings.',
    subtitle: 'A straight path from purchase to a Combat Master setup you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the status guidance on combatmasterhacks.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your plan',
        desc: 'Pick Monthly $35 or Lifetime $150—both include every Combat Master module.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download the loader, enable ESP, aim and radar, and test in a practice match.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your settings',
        desc: 'When aim and ESP feel right, save your configuration for the next session.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Combat Master plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes and status guidance land before you queue—check before you play.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with modest aim smoothing and ESP range, then tune up—not the other way around.' },
      { num: '03', title: 'Real email support', desc: 'Stuck on the loader or settings? support@combatmasterhacks.org gets you a human answer.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Combat Master Hacks support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Ready to buy',
        desc: 'Go straight to checkout for Monthly $35 or Lifetime $150.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: "We're here for loader, Windows and checkout issues.",
        linkLabel: 'support@combatmasterhacks.org',
        href: 'mailto:support@combatmasterhacks.org',
      },
      {
        icon: 'shield',
        title: 'HWID Spoofer',
        desc: 'Need a hardware ID spoofer? Checkout on our secure partner page.',
        linkLabel: 'Get HWID Spoofer',
        href: HWID_SPOOFER_CHECKOUT_PATH,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, anti-cheat risk and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Response times',
        desc: 'Email is answered as quickly as possible, usually within one business day.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your email',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout for Combat Master Hacks.' },
      { title: 'Platform', desc: 'Windows 10 or 11, plus your Combat Master game version from Steam.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Combat Master cheats are online?',
        a: 'Read the status guidance on combatmasterhacks.org and the latest blog patch notes. Always check after a Combat Master or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'You receive access to the loader and setup guide through checkout. Follow the guide before launching Combat Master.',
      },
      {
        num: '03',
        q: 'Can I get banned using Combat Master hacks?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Combat Master on Windows 10/11 64-bit PC only. macOS, Linux and consoles are not supported.',
      },
      {
        num: '05',
        q: 'How much do Combat Master cheats cost?',
        a: 'Monthly is $35 and Lifetime is $150. Both plans include ESP, wallhack, soft aim, radar and stream-proof overlay.',
      },
      {
        num: '06',
        q: 'Where is the product listed?',
        a: 'Combat Master Full lives at combatmasterhacks.org/products/combat-master-cheats with its feature list and checkout.',
      },
    ],
  },
  footer: {
    tagline: 'Combat Master cheats — ESP, wallhack, aimbot and radar for Windows PC. combatmasterhacks.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/combat-master-cheats/full/', label: 'Combat Master Full', ariaLabel: 'Combat Master Full' },
      { href: '/products/combat-master-cheats/', label: 'All products', ariaLabel: 'Products' },
      { href: HWID_SPOOFER_CHECKOUT_PATH, label: 'HWID Spoofer', ariaLabel: 'Buy HWID Spoofer' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Combat Master Hacks',
      description:
        'Combat Master Hacks provides Combat Master cheats with ESP, aimbot and radar plus PC support resources at combatmasterhacks.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Combat Master Hacks is a PC-focused resource for Combat Master players exploring ESP, wallhack, soft aim and radar workflows. We publish setup guides and status notes so you can evaluate Combat Master cheats before checkout.',
            'All product and game names are used for identification only. Combat Master Hacks is not affiliated with the developers or publishers of Combat Master.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers the Combat Master Full package, its ESP, wallhack, aimbot, radar and stream-proof modules, plus guides on setup, pricing and patch-day behavior.',
            'Content is updated when patches land or when loader modules shift. Check the status guidance on the homepage and blog before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors or checkout are handled by email at support@combatmasterhacks.org. Include your order email, Windows version and Combat Master game version when you write.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Combat Master Hacks handles analytics, cookies and contact data when you use combatmasterhacks.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on combatmasterhacks.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support emails may retain the address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, email support@combatmasterhacks.org. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund and use terms for Combat Master Hacks products and combatmasterhacks.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using combatmasterhacks.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to the Combat Master Full cheat package (player ESP, wallhack, soft aim, 2D radar, stream-proof overlay and patch updates), available as a Monthly plan ($35) or a Lifetime plan ($150), delivered through a loader for Combat Master on Windows PC.',
            'Feature lists on the product page describe what is included at the time of purchase. Modules can change when Combat Master or its anti-cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. combatmasterhacks.org does not process or store payment card numbers.',
            'After purchase, use the download links from your order flow to get the current loader and setup guide before launching Combat Master.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, account logins or license keys. Device limits depend on your plan and are enforced by the license system.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while status guidance says to wait.',
            'If the product does not work as described on a supported setup—Combat Master on Windows 10/11, the current loader and status guidance showing the build as online—contact us at support@combatmasterhacks.org. Include your order email, Windows version, Combat Master game version, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Combat Master can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check status guidance before every session. Do not play while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing or loader questions, email support@combatmasterhacks.org. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Combat Master Hacks Support',
      description:
        'Get support for loader, Windows PC and checkout questions at combatmasterhacks.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Combat Master Hacks home',
    checkoutAria: 'Buy Combat Master Hacks',
    discordAria: 'Buy Combat Master Hacks',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
