import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://combatmasterhacks.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/combat-master-cheats/',
    '/cheats/lite/': '/products/combat-master-cheats/',
    '/cheats/pro/': '/products/combat-master-cheats/full/',
    '/cheats/elite/': '/products/combat-master-cheats/full/',
    '/cheats/compare/': '/blog/combat-master-esp-aimbot-radar-guide/',
    '/products/combat-master-cheats/utilities/': '/products/combat-master-cheats/',
    '/products/rust-cheats/': '/products/combat-master-cheats/',
    '/products/rust-cheats/elite/': '/products/combat-master-cheats/full/',
    '/products/rust-cheats/utilities/': '/products/combat-master-cheats/',
    '/products/dota-2-cheats/': '/products/combat-master-cheats/',
    '/products/dota-2-cheats/elite/': '/products/combat-master-cheats/full/',
    '/products/dota-2-cheats/utilities/': '/products/combat-master-cheats/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
