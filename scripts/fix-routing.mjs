#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Combat Master source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['combatmaster-esp', 'combatmaster-esp'],
	['combatmaster-aimbot', 'combatmaster-aimbot'],
	['anti-cheat', 'anti-cheat'],
	['undetected-combatmaster-hacks', 'undetected-combatmaster-hacks'],
	['combatmaster-wallhack', 'combatmaster-wallhack'],
	['combatmaster-radar-hack', 'combatmaster-radar-hack'],
	['combatmaster-hacks-2026', 'combatmaster-hacks-2026'],
	['anti-cheat-bypass', 'anti-cheat-bypass'],
	['combatmasterhacks.org', 'combatmasterhacks.org'],
	['trucos-combatmaster', 'trucos-combatmaster'],
	['triche-combatmaster', 'triche-combatmaster'],
	['combatmaster-hacks', 'escape-from-combatmaster-hacks'],
	['cheats-combatmaster', 'cheats-combatmaster'],
	['trucchi-combatmaster', 'trucchi-combatmaster'],
	['cheaty-combatmaster', 'cheaty-combatmaster'],
	['chity-combatmaster', 'chity-combatmaster'],
	['chitov-combatmaster', 'chitov-combatmaster'],
	['chitiv-combatmaster', 'chitiv-combatmaster'],
	['cheatow-combatmaster', 'cheatow-combatmaster'],
	['hile-combatmaster', 'hile-combatmaster'],
	['combatmaster-hile', 'combatmaster-hile'],
	['combatmaster-esp-chity', 'combatmaster-esp-chity'],
	['combatmaster-aimbot-chity', 'combatmaster-aimbot-chity'],
	['unentdeckte-combatmaster-hacks', 'unentdeckte-escape-from-combatmaster-hacks'],
	['cheats-combatmaster-indetectaveis', 'cheats-combatmaster-indetectaveis'],
	['trucchi-combatmaster-indetectabili', 'trucchi-combatmaster-indetectabili'],
	['niewykrywalne-cheats-combatmaster', 'niewykrywalne-cheats-combatmaster'],
	['nedecektiruemye-chity-combatmaster', 'nedecektiruemye-chity-combatmaster'],
	['tespit-edilemeyen-combatmaster-hileleri', 'tespit-edilemeyen-combatmaster-hileleri'],
	['nedecektovani-chity-combatmaster', 'nedecektovani-chity-combatmaster'],
	['cheats-combatmaster-nedetectabile', 'cheats-combatmaster-nedetectabile'],
	['basta-combatmaster-hacks', 'basta-escape-from-combatmaster-hacks'],
	['anti-cheat-bypass-trucos-combatmaster', 'anti-cheat-bypass-trucos-combatmaster'],
	['anti-cheat-bypass-triche-combatmaster', 'anti-cheat-bypass-triche-combatmaster'],
	['anti-cheat-bypass-cheats-combatmaster', 'anti-cheat-bypass-cheats-combatmaster'],
	['anti-cheat-bypass-chity-combatmaster', 'anti-cheat-bypass-chity-combatmaster'],
	['anti-cheat-bypass-combatmaster', 'anti-cheat-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix anti-cheat key in englishPaths
	content = content.replace(/\tanti-cheat: '/, "\t'anti-cheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-combatmaster-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-combatmaster-hacks-hero.webp',
	'combatmaster-esp': '/images/escape-from-combatmaster-hacks-esp-wallhack.webp',
	'combatmaster-aimbot': '/images/escape-from-combatmaster-hacks-aimbot-combat.webp',
	features: '/images/escape-from-combatmaster-hacks-package.webp',
	pricing: '/images/escape-from-combatmaster-hacks-cover.webp',
	setup: '/images/combatmaster-loadout-builder.webp',
	updates: '/images/combatmaster-header-art.webp',
	faq: '/images/combatmaster-squad-fight.webp',
	support: '/images/escape-from-combatmaster-hacks-package.webp',
	undetected: '/images/combatmaster-battle-royale-combat.webp',
	wallhack: '/images/escape-from-combatmaster-hacks-esp-wallhack.webp',
	radar: '/images/combatmaster-player-esp.webp',
	'anti-cheat': '/images/combatmaster-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-combatmaster-hacks-hero.webp',
	privacy: '/images/escape-from-combatmaster-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-combatmaster-hacks-cover.webp',
	terms: '/images/escape-from-combatmaster-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'combatmaster-esp', 'combatmaster-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anti-cheat',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'combatmaster-esp' | 'combatmaster-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/matchFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
