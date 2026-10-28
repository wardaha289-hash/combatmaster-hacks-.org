import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  full: [
    'combat-master-esp-aimbot-radar-guide',
    'combat-master-esp-wallhack-setup',
    'combat-master-aimbot-settings-guide',
    'combat-master-radar-minimap-guide',
    'combat-master-stream-proof-overlay',
    'how-to-buy-combat-master-cheats',
  ],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the status guidance on combatmasterhacks.org and the latest blog patch notes before purchase—especially after a Combat Master or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your plan',
    desc: 'Select Monthly ($35) or Lifetime ($150). Both include every Combat Master module. Review the feature list before secure checkout.',
  },
  {
    num: '03',
    title: 'Download the loader',
    desc: 'After checkout, download the current loader and setup guide. Keep your order email ready in case you need support.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the official loader and setup guide. Configure ESP, aim and radar in a practice match, then save your settings.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Combat Master and its anti-cheat receive updates. Confirm the build status on combatmasterhacks.org before you purchase or launch. Overlay behavior and module availability can change after patches.';

const sharedLimitations =
  'Third-party software in Combat Master can violate the game terms of service and lead to anti-cheat bans or account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat or Windows updates without notice.';

const combatMasterSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Combat Master client via Steam with the latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for loader download and patch delivery.' },
  { icon: 'reqCpu', text: 'A PC that meets the published Combat Master hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpHero: {
    src: `${gameplay}/combat-master-gameplay-wallhack-esp.png`,
    alt: 'Combat Master gameplay screenshot showing wallhack ESP, aimbot FOV circle and enemy distance tags through shipping containers',
    caption: 'Wallhack & ESP',
    captionDesc: 'Enemy ESP through walls with distance readouts and aimbot FOV in a Combat Master container map.',
  },
  gpEsp: {
    src: `${gameplay}/combat-master-gameplay-skeleton-esp.png`,
    alt: 'Combat Master skeleton ESP and wallhack with clear kill feedback and player name tags in a shipping yard',
    caption: 'Skeleton ESP',
    captionDesc: 'Skeleton wallhack and name tags that stay readable during close-quarters fights.',
  },
  gpEspTags: {
    src: `${gameplay}/combat-master-gameplay-skeleton-esp.png`,
    alt: 'Combat Master ESP name tags and skeleton wallhack highlighting enemies through shipping containers',
    caption: 'ESP name tags',
    captionDesc: 'Name tags and skeleton ESP for reading enemy positions through cover.',
  },
  gpEspRadar: {
    src: `${gameplay}/combat-master-gameplay-aimbot-fov.png`,
    alt: 'Combat Master aimbot FOV circle with bot ESP distance tag during a cargo port firefight',
    caption: 'ESP with aim FOV',
    captionDesc: 'Combine distance ESP with an aimbot FOV circle for full awareness in Combat Master.',
  },
  gpWallhack: {
    src: `${gameplay}/combat-master-gameplay-wallhack-esp.png`,
    alt: 'Combat Master wallhack showing enemy players and distance markers through metal shipping containers',
    caption: 'Wallhack',
    captionDesc: 'See enemies through containers and cover before you push a lane.',
  },
  gpWallhackSkeleton: {
    src: `${gameplay}/combat-master-gameplay-skeleton-esp.png`,
    alt: 'Combat Master wallhack skeleton ESP showing enemy bones and boxes through a shipping container wall',
    caption: 'Skeleton wallhack',
    captionDesc: 'Skeleton overlay that shows stance and direction through solid objects.',
  },
  gpAimbot: {
    src: `${gameplay}/combat-master-gameplay-aimbot-kill.png`,
    alt: 'Combat Master aimbot scoped kill with box ESP, spectator alert and XP gain in a container yard map',
    caption: 'Soft aim / aimbot',
    captionDesc: 'Scoped soft aim with ESP boxes during a live Combat Master gunfight.',
  },
  gpAimbotView: {
    src: `${gameplay}/combat-master-gameplay-aimbot-fov.png`,
    alt: 'Combat Master aimbot FOV circle with purple target box and bot ESP distance marker in combat',
    caption: 'Aimbot FOV',
    captionDesc: 'FOV circle and target highlight with bot ESP distance readouts.',
  },
  gpAimbotSkeleton: {
    src: `${gameplay}/combat-master-gameplay-skeleton-esp.png`,
    alt: 'Combat Master aimbot and skeleton ESP with clear kill notification in a shipping container map',
    caption: 'Aimbot with skeleton ESP',
    captionDesc: 'Skeleton ESP helps you pick the bone soft aim should track.',
  },
  gpAimbotSniper: {
    src: `${gameplay}/combat-master-gameplay-sniper-kill.png`,
    alt: 'Combat Master sniper scope gameplay with aimbot kill, spectator alert and container yard map view',
    caption: 'Sniper soft aim',
    captionDesc: 'Long-range scoped engagement with Combat Master soft aim and ESP overlays.',
  },
  gpRadar: {
    src: `${gameplay}/combat-master-radar.webp`,
    alt: 'Combat Master 2D radar showing nearby enemy positions on a minimap overlay',
    caption: '2D radar',
    captionDesc: 'A compact radar overlay with enemy dots and your facing direction.',
  },
  gpCombat: {
    src: `${gameplay}/combat-master-gameplay-kill-streak.png`,
    alt: 'Combat Master kill streak gameplay through a rifle scope with spectator alert in a shipyard map',
    caption: 'In-match combat',
    captionDesc: 'Scoped combat with kill streak feedback and spectator alert during a match.',
  },
  gpPackage: {
    src: `${gameplay}/combat-master-gameplay-wallhack-esp.png`,
    alt: 'Combat Master Hacks full package gameplay showing ESP, wallhack and aimbot overlays together',
    caption: 'Combat Master Full package',
    captionDesc: 'ESP, wallhack, soft aim and radar modules running together on Windows PC.',
  },
  gpGunsmith: {
    src: `${gameplay}/combat-master-gunsmith.webp`,
    alt: 'Combat Master gunsmith weapon customization screen next to ESP and aimbot settings',
    caption: 'Gunsmith loadout',
    captionDesc: 'Pair your Combat Master loadout with aim presets that suit each weapon.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'combat-master-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  full: [
    {
      type: 'p',
      text: 'Combat Master Full is the all-in-one package for players who want information and aim assist in one loader. Player ESP and wallhack show where enemies are, the 2D radar keeps you oriented, and soft aim helps you land shots without obvious snapping.',
    },
    { type: 'h2', text: 'One package, every module' },
    {
      type: 'p',
      text: 'There are no tier upsells. Monthly and Lifetime plans include the same modules: player ESP, wallhack, soft aim, 2D radar, stream-proof overlay and patch updates after game and anti-cheat changes.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  full: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with boxes, skeletons, name tags and distance; wallhack outlines through walls; soft aim with FOV, smoothing and bone select; a resizable 2D radar; and a stream-proof overlay so recordings stay clean. Everything is controlled from a single in-game menu.',
    },
    { type: 'h2', text: 'Plans and pricing' },
    {
      type: 'p',
      text: 'Choose Monthly at $35 for flexible access or Lifetime at $150 for a one-time payment. Both plans include the full feature list and patch updates. Checkout runs through our secure partner page.',
    },
    { type: 'h2', text: 'Before you play' },
    {
      type: 'p',
      text: 'Read the [anti-cheat patch checklist](/blog/combat-master-anti-cheat-patch-checklist/) before each session, start with conservative aim settings, and follow the [ESP and wallhack setup guide](/blog/combat-master-esp-wallhack-setup/) the first time you launch.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  full: {
    images: slide(
      'gpHero',
      'gpWallhack',
      'gpAimbot',
      'gpAimbotView',
      'gpEsp',
      'gpCombat',
      'gpAimbotSniper',
      'gpRadar',
    ),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: combatMasterSystemRequirements,
    fullFeatures: [
      'Player ESP & boxes',
      'Wallhack outlines through walls',
      'Skeleton ESP',
      'Name tags & distance readouts',
      'Soft aim / aimbot',
      'FOV circle & smoothing',
      'Bone select',
      '2D radar / minimap',
      'Resizable radar window',
      'Stream-proof overlay',
      'In-game menu with hotkeys',
      'Save & reload settings',
      'Patch updates after game & anti-cheat changes',
      'Windows 10 & 11 loader',
    ],
    overview: {
      title: 'Built around a clear Combat Master workflow',
      paragraphs: [
        'Combat Master Full combines player ESP, wallhack, soft aimbot and a 2D radar in one Windows PC loader. Modules are grouped in a single in-game menu so you can tune ESP range, aim smoothing and radar size before your first match.',
        'The stream-proof overlay keeps your recordings clean, and patch updates keep the loader current after Combat Master and anti-cheat changes at combatmasterhacks.org. Plans start at $35 per month or $150 for lifetime access.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = `Combat Master ${cheat.name}`;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide(
  'gpHero',
  'gpWallhack',
  'gpAimbot',
  'gpAimbotView',
  'gpEsp',
  'gpCombat',
  'gpAimbotSniper',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Combat Master cheats with ESP, wallhack, aimbot and radar for Windows PC. Monthly $35 or Lifetime $150.',
  buyUrl: checkoutPath('combatMaster'),
};
