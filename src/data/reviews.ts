export interface Review {
  id: string;
  name: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  product: string;
  productHref: string;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

const fullProduct = 'Combat Master Full';
const fullHref = '/products/combat-master-cheats/full/';

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marcus K.',
    handle: 'br_squad',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'ESP and radar for Battle Royale squads',
    body: 'Player ESP and the 2D radar made callouts way cleaner in BR. Distance filters took one session to tune, then flanks were obvious. Loader setup matched the guide on combatmasterhacks.org.',
    date: 'Sep 12, 2026',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Elena R.',
    handle: 'stream_safe',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'Stream-proof overlay works',
    body: 'Needed stream-proof so capture software stays clean. ESP stayed on my monitor only after the checklist. Soft aim defaults feel human with the FOV circle—not snap city.',
    date: 'Sep 4, 2026',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Jordan P.',
    handle: 'aim_tune',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'Soft aim profiles for AR fights',
    body: 'Bone priority and smoothing sliders helped in quick-play. Started conservative like the FAQ said, then tightened. Patch note landed before my next queue after a game update.',
    date: 'Aug 28, 2026',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Sam T.',
    handle: 'wall_read',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'Wallhack readability in close fights',
    body: 'Wallhack outlines stay readable when three players push one lane. Toggle ESP categories so the screen stays clean. Support replied same day by email with a preset file.',
    date: 'Aug 21, 2026',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Chris V.',
    handle: 'radar_main',
    rating: 4,
    product: fullProduct,
    productHref: fullHref,
    title: 'Radar + ESP combo',
    body: 'Radar plus ESP is what I use most. Would like more preset profiles out of the box, but monthly plan was worth it for the first weekend alone.',
    date: 'Aug 15, 2026',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Priya N.',
    handle: 'lifetime_buy',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'Lifetime license delivery',
    body: 'Checkout through the site was instant. Lifetime key arrived by email with clear activation steps. Windows 11 install took about ten minutes following the support page.',
    date: 'Aug 8, 2026',
    verified: true,
  },
  {
    id: 'r7',
    name: 'Alex D.',
    handle: 'patch_day',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'Loader updates after patches',
    body: 'After an anti-cheat patch I checked status before launching. New build was posted within a day. ESP and aimbot modules came back online without redoing my whole config.',
    date: 'Jul 30, 2026',
    verified: true,
  },
  {
    id: 'r8',
    name: 'Taylor M.',
    handle: 'new_buyer',
    rating: 5,
    product: fullProduct,
    productHref: fullHref,
    title: 'First cheat purchase — smooth setup',
    body: 'First time buying Combat Master cheats. FAQ answered delivery and refund questions. The Full package includes everything advertised—ESP, wallhack, aimbot and radar in one license.',
    date: 'Jul 22, 2026',
    verified: true,
  },
];

export function getReviewStats(items: Review[] = reviews) {
  const count = items.length;
  const average = count ? items.reduce((sum, r) => sum + r.rating, 0) / count : 0;
  return { count, average: Math.round(average * 10) / 10 };
}

export function getRatingBreakdown(items: Review[] = reviews) {
  return [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: items.filter((r) => r.rating === stars).length,
  }));
}

export function getReviewProducts(items: Review[] = reviews) {
  return [...new Set(items.map((r) => r.product))];
}
