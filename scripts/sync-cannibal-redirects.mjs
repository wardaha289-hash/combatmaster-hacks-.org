#!/usr/bin/env node
/**
 * Syncs cannibal pageId 301s (EN + all locales) into JSON for the Cloudflare Worker.
 * public/_redirects is limited to 100 dynamic rules — cannibal redirects run in src/worker.ts instead.
 * Targets are read from src/data/seo-cannibal-map.ts (single source of truth).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const CANONICAL = path.join(ROOT, 'src/data/seo-cannibal-map.ts');
const JSON_OUT = path.join(ROOT, 'src/data/cannibal-redirects.json');
const JSON_OUT_FUNCTIONS = path.join(ROOT, 'functions/cannibal-redirects.json');

function readCannibalTargets() {
	const src = readFileSync(CANONICAL, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing in seo-cannibal-map.ts');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	if (!Object.keys(targets).length) throw new Error('No cannibal targets parsed');
	return targets;
}

function readEnglishPaths() {
	const src = readFileSync(ROUTING, 'utf8');
	const block = src.match(/englishPaths:\s*Record[^=]*=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths missing in routing.ts');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*'([^']+)'/g)) {
		paths[row[1]] = row[2];
	}
	return paths;
}

function matchSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

function addRedirectPair(map, fromPath, toPath) {
	map[fromPath] = toPath;
	map[fromPath.replace(/\/$/, '')] = toPath;
}

const TARGETS = readCannibalTargets();
const EN_PATHS = readEnglishPaths();
const routing = readFileSync(ROUTING, 'utf8');
/** @type {Record<string, string>} */
const map = {};

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromPath = EN_PATHS[fromId];
	const toPath = EN_PATHS[toId];
	if (!fromPath || !toPath) continue;
	addRedirectPair(map, fromPath, toPath);
}

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromSlugs = matchSlugBlock(routing, fromId);
	const toSlugs = matchSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		addRedirectPair(map, `/${locale}/${fromSlug}/`, `/${locale}/${toSlug}/`);
	}
}

const json = `${JSON.stringify(map, null, 2)}\n`;
writeFileSync(JSON_OUT, json);
writeFileSync(JSON_OUT_FUNCTIONS, json);
console.log(
	`Synced ${Object.keys(map).length / 2} cannibal redirect pairs (${Object.keys(TARGETS).length} pageIds) → Worker JSON`,
);
