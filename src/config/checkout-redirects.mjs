/** Primary Combat Master checkout (Zadeyo). All buy / Get access CTAs use this. */
export const COMBAT_MASTER_CHECKOUT_URL = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fcombat-master';

/** HWID Spoofer utility checkout (Zadeyo). */
export const HWID_SPOOFER_CHECKOUT_URL = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fhwid-spoofer';

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  combatMaster: COMBAT_MASTER_CHECKOUT_URL,
  hwidSpoofer: HWID_SPOOFER_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/combat-master', CHECKOUT_URLS.combatMaster],
  ['/go/combat-master/', CHECKOUT_URLS.combatMaster],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/rust', CHECKOUT_URLS.combatMaster],
  ['/go/rust/', CHECKOUT_URLS.combatMaster],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
