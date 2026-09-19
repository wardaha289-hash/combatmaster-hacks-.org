#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'combatmaster hacks', espWallhack: 'combatmaster hacks wallhack', aimbotCombat: 'combatmaster hacks aimbot', squadFight: 'combatmaster hacks', playerEsp: 'combatmaster hacks esp', headerArt: 'combatmaster hacks aimbot', cheatsPackage: 'combatmaster hacks radar', rebootFight: 'combatmaster hacks aimbot', battleRoyale: 'combatmaster hacks', battleRoyaleIsland: 'combatmaster hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Combat Master ESP player tags hack'", "imageAlt: 'combatmaster hacks esp'"],
	["imageAlt: 'Combat Master ESP radar hack'", "imageAlt: 'combatmaster hacks radar'"],
	["imageAlt: 'Combat Master aimbot sniper kill'", "imageAlt: 'combatmaster hacks aimbot'"],
	["imageAlt: 'Combat Master aimbot skeleton targeting'", "imageAlt: 'combatmaster hacks aimbot'"],
	["imageAlt: 'combatmaster hacks ADS combat'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks setup PC activation'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks updates anti-cheat maintenance'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks FAQ ESP aimbot'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks support license help'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'Undetected combatmaster hacks ESP wallhack'", "imageAlt: 'undetected combatmaster hacks'"],
	["imageAlt: 'Combat Master wallhack skeleton ESP'", "imageAlt: 'combatmaster hacks wallhack'"],
	["imageAlt: 'anti-cheat bypass combatmaster ESP aimbot'", "imageAlt: 'combatmaster hacks anti-cheat'"],
	["imageAlt: 'combatmaster hacks 2026 ESP aimbot'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks combat aimbot'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hack download ESP aimbot'", "imageAlt: 'combatmaster hacks download'"],
	["imageAlt: 'Combat Master mod menu ESP aimbot'", "imageAlt: 'combatmaster hacks mod menu'"],
	["imageAlt: 'Combat Master soft aim aimbot settings'", "imageAlt: 'combatmaster hacks soft aim'"],
	["imageAlt: 'Best combatmaster hacks 2026 ESP'", "imageAlt: 'best combatmaster hacks'"],
	["imageAlt: 'Combat Master aimbot hack combat'", "imageAlt: 'combatmaster hacks aimbot'"],
	["imageAlt: 'Combat Master ESP hack wallhack'", "imageAlt: 'combatmaster hacks esp'"],
	["imageAlt: 'Combat Master unlock all ESP aimbot guide'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks privacy policy'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks refund policy'", "imageAlt: 'combatmaster hacks'"],
	["imageAlt: 'combatmaster hacks terms of use'", "imageAlt: 'combatmaster hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Combat Master ${meta.altKeyword}`")
	.join("imageAlt: 'combatmaster hacks'")
	.split("galleryTitle: `Combat Master Hacks ${topicName}`")
	.join("galleryTitle: 'combatmaster hacks'")
	.split("imageAlt: `combatmaster hacks ${kind} policy`")
	.join("imageAlt: 'combatmaster hacks'")
	.split("galleryTitle: `Combat Master Hacks ${kind} resources`")
	.join("galleryTitle: 'combatmaster hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
