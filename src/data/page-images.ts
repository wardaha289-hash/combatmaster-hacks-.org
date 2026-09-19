import { siteConfig } from './site';
import { combatmasterImages } from './combatmaster';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	combatmasterImages.espWallhack,
	combatmasterImages.aimbotCombat,
	combatmasterImages.aimbotSkeleton,
	combatmasterImages.playerEsp,
	combatmasterImages.cheatsCombat,
	'/images/combatmaster-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/combatmaster-hacks-hero-1024w.webp',
	'combatmaster-esp': combatmasterImages.playerEsp,
	'combatmaster-aimbot': combatmasterImages.aimbotCombat,
	features: '/images/combatmaster-hacks-hero-1024w.webp',
	pricing: '/images/combatmaster-hacks-hero-1024w.webp',
	setup: combatmasterImages.playerEsp,
	updates: '/images/combatmaster-hacks-hero-1024w.webp',
	faq: '/images/combatmaster-hacks-gunsmith-preview.webp',
	support: combatmasterImages.cheatsCombat,
	undetected: combatmasterImages.espWallhack,
	wallhack: combatmasterImages.espWallhack,
	radar: combatmasterImages.playerEsp,
	'anti-cheat': combatmasterImages.aimbotCombat,
	'cheats-2026': '/images/combatmaster-hacks-hero-1024w.webp',
	hacks: '/images/combatmaster-hacks-hero-1024w.webp',
	'cheat-download': combatmasterImages.cheatsCombat,
	'mod-menu': combatmasterImages.playerEsp,
	'soft-aim': combatmasterImages.aimbotSkeleton,
	'best-cheats': '/images/combatmaster-hacks-hero-1024w.webp',
	'aimbot-hack': combatmasterImages.aimbotSkeleton,
	'esp-hack': combatmasterImages.espWallhack,
	'unlock-all': combatmasterImages.playerEsp,
	privacy: combatmasterImages.aimbotCombat,
	refund: combatmasterImages.cheatsCombat,
	terms: combatmasterImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;

/** Reviews index hero — Combat Master gameplay screenshot. */
export const reviewsHeroImageSrc = '/images/combatmaster-reviews-hero.png';

/** FAQ answer pages — gunsmith MODS preview (SIG MCX attachments screen). */
export const faqHeroImageSrc = '/images/combatmaster-hacks-gunsmith-preview.webp';
