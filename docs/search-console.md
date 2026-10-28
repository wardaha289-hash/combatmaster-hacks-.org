# Search Console workflow (combatmasterhacks.org)

Use this checklist after each content or SEO deploy.

## Setup

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `combatmasterhacks.org` if it is not already there.
2. Under **Sitemaps**, submit: `https://combatmasterhacks.org/sitemap.xml`

## After deploy

1. Request indexing for changed URLs (home, product hub, `/products/combat-master-cheats/full/`, key blog posts).
2. Compare **Performance → Search results** after 7–14 days; tune titles in `src/config/pageSeo.ts` if CTR is low.

## Keyword → page map

| Query theme | Primary URL |
|-------------|-------------|
| combat master cheats, combatmaster hacks | `/` |
| buy / pricing | `/products/combat-master-cheats/` |
| full package | `/products/combat-master-cheats/full/` |
| setup / ESP / aimbot | `/blog/` |
