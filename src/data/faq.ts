import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const full = link('Combat Master Full', productPath('full'));
const productsHub = link('Combat Master products', ROUTES.products);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);
const espGuide = link('ESP and wallhack setup guide', '/blog/combat-master-esp-wallhack-setup/');
const aimGuide = link('aimbot settings guide', '/blog/combat-master-aimbot-settings-guide/');
const radarGuide = link('radar and minimap guide', '/blog/combat-master-radar-minimap-guide/');
const streamGuide = link('stream-proof overlay guide', '/blog/combat-master-stream-proof-overlay/');
const patchGuide = link('patch day checklist', '/blog/combat-master-anti-cheat-patch-checklist/');
const buyGuide = link('buying guide', '/blog/how-to-buy-combat-master-cheats/');

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Combat Master cheats are online?',
    a: `Read the status guidance on combatmasterhacks.org and the latest blog updates. Always check after a Combat Master or anti-cheat update—see the ${patchGuide}.`,
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('You receive access to the loader and setup guide through checkout. Follow the guide before launching Combat Master.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Combat Master hacks?',
    a: a('Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Combat Master on Windows 10/11 64-bit PC only. macOS, Linux and consoles are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Email support@combatmasterhacks.org with your order email. Device limits depend on your plan.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products listed?',
    a: `${productsHub} lists ${full} with its feature list, Monthly and Lifetime pricing, and checkout via our partner.`,
  },
  {
    id: 'pricing',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'How much do Combat Master cheats cost?',
    a: `Combat Master Full is $35 per month or $150 for Lifetime. Both plans include ESP, wallhack, soft aim, 2D radar and the stream-proof overlay. See the ${buyGuide}.`,
    scopes: ['full'],
  },
  {
    id: 'monthly-vs-lifetime',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Monthly or Lifetime: which should I choose?',
    a: `Choose Monthly ($35) to try the cheat or play for a season. Choose Lifetime ($150) if you plan to play for several months or longer. Modules and patch updates are the same on both plans.`,
    scopes: ['full'],
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Combat Master ESP and wallhack?',
    a: `ESP draws boxes, skeletons, name tags and distance on players, and wallhack outlines them through walls and cover. Both are included in ${full}. See the ${espGuide}.`,
    scopes: ['full'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and the aimbot?',
    a: `ESP and wallhack are information overlays—they do not move your crosshair. Soft aim assists your own mouse movement toward a target using FOV, smoothing and bone select. Read the ${aimGuide}.`,
  },
  {
    id: 'which-plan-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Can I buy ESP without the aimbot?',
    a: `There is one package. ${full} includes ESP, wallhack, soft aim, radar and stream-proof overlay, and you can leave any module switched off in the menu.`,
    scopes: ['full'],
  },
  {
    id: 'aimbot-what',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'What aimbot options are included?',
    a: `${full} includes soft aim with an FOV circle, smoothing, bone select and an aim key. Start modest and tune in a practice match—see the ${aimGuide}.`,
    scopes: ['full'],
  },
  {
    id: 'radar-what',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'What does the 2D radar show?',
    a: `The radar shows nearby enemies as dots relative to you, along with your facing direction. You can resize and move it. Read the ${radarGuide}.`,
    scopes: ['full'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode hides the overlay from common capture software. Always test a local recording before going live—see the ${streamGuide}.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Combat Master cheats guaranteed?',
    a: a('No. Undetected is a point-in-time status—not a permanent guarantee. Stop if the build shows updating, testing or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than the aimbot?',
    a: a('ESP is quieter than obvious aim assist, but it is still a cheat. Anti-cheat does not ignore overlays because you left aim off. Keep any aim settings conservative.'),
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'How do I run the loader?',
    a: `Download the loader after checkout, run it as administrator on Windows 10/11, then launch Combat Master from Steam. Anti-cheat risk still applies. See ${productsHub}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to ${full} and ${productsHub}. Checkout runs through our secure partner—only download the loader from your order.`,
  },
  {
    id: 'anti-cheat-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after an anti-cheat update?',
    a: `Check status guidance on combatmasterhacks.org, wait for an updated loader and test in a practice match. Follow the ${patchGuide}.`,
  },
  {
    id: 'support-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Email support@combatmasterhacks.org with your order email, Windows version, Combat Master game version and the exact error text. We reply as quickly as possible.'),
  },
  {
    id: 'battle-royale',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Does it work in Battle Royale and FPS matches?',
    a: `${full} is built for Combat Master on PC, including Battle Royale and FPS matches, as long as the status guidance shows the build as online.`,
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'Why not use free Combat Master hacks?',
    a: a('Free downloads are often outdated, bundled with malware or already detected. A maintained loader with patch updates and support is safer than random zip files.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, ESP, aimbot and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'pricing', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, ESP, aimbot, products, setup and blog answers for Combat Master.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['monthly-vs-lifetime', 'undetected', 'anti-cheat-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Which product do these guides cover?',
      a: `Guides cover ${full}, the single Combat Master package with ESP, wallhack, soft aim, radar and stream-proof overlay.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the status guidance. Patch-day articles note when modules change.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your order after checkout—not from third-party links in comments or direct messages.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a practice match first?',
      a: a('Yes. Load conservative settings in a practice match before playing for real. Tune ESP range and aim smoothing over several sessions.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-modules',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Are all modules included in one plan?',
      a: `Yes. Monthly ($35) and Lifetime ($150) both include every module in ${full}.`,
    },
  ],
  Updates: [
    {
      id: 'blog-updates-wait',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'How long should I wait after a patch?',
      a: a('Until the status guidance shows the build as online and you have downloaded the newest loader. Waiting is safer than rushing.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-anticheat',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status guidance. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${full} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Email support@combatmasterhacks.org with your order email and the article title. We reference the same settings mentioned in the guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Combat Master update. Settings can change with patches—reload and retest instead of copying old values.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which plan covers ESP, wallhack and radar from this article?',
      a: `${full} includes player ESP, wallhack and the 2D radar on both Monthly ($35) and Lifetime ($150).`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('sniper') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which plan includes the aimbot in this article?',
      a: `Soft aim is part of ${full}. There are no separate tiers—every plan includes it.`,
    });
  }
  if (slug.includes('patch') || slug.includes('anti-cheat')) {
    slugHints.push({
      id: 'blog-slug-patch',
      topic: 'safety',
      icon: 'faqBlogSlugHwid',
      q: 'Does this checklist guarantee safety?',
      a: a('No. It reduces risk by encouraging you to wait for status and updates, but any cheat can be detected. Use it at your own risk.'),
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}
