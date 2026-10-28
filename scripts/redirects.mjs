/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/combat-master-cheats/'],
  ['/cheats/', '/products/combat-master-cheats/'],
  ['/cheats/lite', '/products/combat-master-cheats/'],
  ['/cheats/lite/', '/products/combat-master-cheats/'],
  ['/cheats/pro', '/products/combat-master-cheats/full/'],
  ['/cheats/pro/', '/products/combat-master-cheats/full/'],
  ['/cheats/elite', '/products/combat-master-cheats/full/'],
  ['/cheats/elite/', '/products/combat-master-cheats/full/'],
  ['/cheats/compare', '/blog/combat-master-esp-aimbot-radar-guide/'],
  ['/cheats/compare/', '/blog/combat-master-esp-aimbot-radar-guide/'],
  ['/products/combat-master-cheats', '/products/combat-master-cheats/'],
  ['/products/combat-master-cheats/utilities', '/products/combat-master-cheats/'],
  ['/products/combat-master-cheats/utilities/', '/products/combat-master-cheats/'],
  ['/products/combat-master-cheats/full', '/products/combat-master-cheats/full/'],
  ['/products/rust-cheats', '/products/combat-master-cheats/'],
  ['/products/rust-cheats/', '/products/combat-master-cheats/'],
  ['/products/rust-cheats/elite', '/products/combat-master-cheats/full/'],
  ['/products/rust-cheats/elite/', '/products/combat-master-cheats/full/'],
  ['/products/rust-cheats/utilities', '/products/combat-master-cheats/'],
  ['/products/rust-cheats/utilities/', '/products/combat-master-cheats/'],
  ['/products/dota-2-cheats', '/products/combat-master-cheats/'],
  ['/products/dota-2-cheats/', '/products/combat-master-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/combat-master-cheats/full/'],
  ['/products/dota-2-cheats/elite/', '/products/combat-master-cheats/full/'],
  ['/products/dota-2-cheats/utilities', '/products/combat-master-cheats/'],
  ['/products/dota-2-cheats/utilities/', '/products/combat-master-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
