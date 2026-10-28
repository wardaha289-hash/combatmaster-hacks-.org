/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 *
 * Rules: title ≤ 60 chars, description ≤ 160 chars, primary keyword near the front.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    // gscNote: Keep primary keyword "combat master cheats" near front; trim if title truncates in SERP.
    title: 'Combat Master Cheats & Hacks | Combat Master Hacks',
    description:
      'Combat Master cheats for Windows PC: player ESP, wallhack, soft aimbot and 2D radar with a stream-proof overlay. Get Combat Master Hacks today.',
  },
  '/products/combat-master-cheats/': {
    title: 'Combat Master Cheats Pricing | Combat Master Hacks',
    description:
      'Buy Combat Master cheats: ESP, wallhack, aimbot and radar for Windows PC. Monthly $35 or Lifetime $150 with patch updates from Combat Master Hacks.',
  },
  '/products/combat-master-cheats/full/': {
    title: 'Combat Master Full Cheat: ESP & Aimbot | CM Hacks',
    description:
      'Combat Master Full: player ESP, wallhack, soft aimbot, 2D radar and stream-proof overlay for Windows PC. Monthly $35 or Lifetime $150 at Combat Master Hacks.',
  },
  '/blog/': {
    title: 'Combat Master Cheat Guides | Combat Master Hacks',
    description:
      'Combat Master cheat guides: ESP and wallhack setup, aimbot tuning, radar tips, stream-proof overlay and patch notes for Windows PC from Combat Master Hacks.',
  },
  '/forum/': {
    title: 'Combat Master Community Forum | Combat Master Hacks',
    description:
      'Join Combat Master players to discuss ESP, aimbot and radar settings, loadouts, patch changes, guides and community tips on Windows PC at Combat Master Hacks.',
  },
  '/faq/': {
    title: 'Combat Master Cheats FAQ | Combat Master Hacks',
    description:
      'Answers on Combat Master ESP, aimbot, radar, anti-cheat risk, Windows PC setup, pricing and checkout for Combat Master Hacks at combatmasterhacks.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Combat Master Hacks',
    description:
      'Purchase terms, license use and refund policy for Combat Master cheats sold through combatmasterhacks.org. Read before you buy Combat Master Hacks.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Combat Master Hacks',
    description:
      'How combatmasterhacks.org uses analytics, cookies and contact data when you browse Combat Master cheats, read guides or contact Combat Master Hacks support.',
  },
  '/about/': {
    title: 'About Combat Master Hacks | Combat Master Cheats',
    description:
      'What Combat Master Hacks publishes: Combat Master cheats with ESP, aimbot and radar for Windows PC, setup guides and status notes at combatmasterhacks.org.',
  },
  '/support/': {
    title: 'Combat Master Hacks Support | Loader & Checkout Help',
    description:
      'Get help with Combat Master cheats: loader setup, Windows PC requirements, ESP and aimbot questions and checkout. Email support@combatmasterhacks.org.',
  },
  '/reviews/': {
    title: 'Combat Master Hacks Reviews | Buyer Feedback',
    description:
      'Buyer reviews for Combat Master cheats — ESP, soft aim, radar and patch updates on Windows PC. Real feedback from Combat Master Hacks customers.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
