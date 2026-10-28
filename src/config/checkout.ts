import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 * Single primary checkout: https://zadeyo.com/go/QRH?to=%2Fproducts%2Fcombat-master
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  combatMaster: 'combat-master',
  hwidSpoofer: 'hwid-spoofer',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'combatMaster'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** External Zadeyo URL for /go/[slug]/ static redirect pages. */
export function checkoutExternalUrl(product: CheckoutProduct = 'combatMaster'): string {
  return CHECKOUT[product];
}

/** Default product checkout redirect. */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('combatMaster');

/** HWID Spoofer checkout redirect path. */
export const HWID_SPOOFER_CHECKOUT_PATH = checkoutPath('hwidSpoofer');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  if (slug === 'hwid-spoofer') {
    return HWID_SPOOFER_CHECKOUT_PATH;
  }
  return PRIMARY_CHECKOUT_PATH;
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (
    href.includes('zadeyo.com') &&
    (href.includes('hwid-spoofer') || href.includes('%2Fproducts%2Fhwid-spoofer'))
  ) {
    return HWID_SPOOFER_CHECKOUT_PATH;
  }

  if (
    href.includes('zadeyo.com') &&
    (href.includes('combat-master') || href.includes('%2Fproducts%2Fcombat-master'))
  ) {
    return PRIMARY_CHECKOUT_PATH;
  }

  return href;
}
