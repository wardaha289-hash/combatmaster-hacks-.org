#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Combat Master source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['combatmaster-esp', 'combatmaster-esp'],
	['combatmaster-aimbot', 'combatmaster-aimbot'],
	["'anti-cheat'", "'anti-cheat'"],
	['anti-cheat-bypass', 'anti-cheat-bypass'],
	['undetected-combatmaster-hacks', 'undetected-combatmaster-hacks'],
	['combatmaster-wallhack', 'combatmaster-wallhack'],
	['combatmaster-radar-hack', 'combatmaster-radar-hack'],
	['combatmaster-hacks-2026', 'combatmaster-hacks-2026'],
	['escape-from-combatmaster-hacks', 'escape-from-combatmaster-hacks'],
	['escape-from-combatmaster', 'combatmaster'],
	['Combat Master', 'Combat Master'],
	['Combat Master', 'Combat Master'],
	['Combat Master Hacks', 'Combat Master Hacks'],
	['combatmaster hacks', 'combatmaster hacks'],
	['combatmaster hack', 'combatmaster hack'],
	['Combat Master ESP', 'Combat Master ESP'],
	['Combat Master Aimbot', 'Combat Master Aimbot'],
	['Combat Master wallhack', 'Combat Master wallhack'],
	['Combat Master radar', 'Combat Master radar'],
	['Combat Master firefights', 'Combat Master firefights'],
	['Combat Master combat', 'Combat Master combat'],
	['Combat Master patches', 'Combat Master patches'],
	['Combat Master updates', 'Combat Master updates'],
	['Combat Master setup', 'Combat Master setup'],
	['Combat Master license', 'Combat Master license'],
	['Combat Master licenses', 'Combat Master licenses'],
	['Combat Master sessions', 'Combat Master sessions'],
	['in Combat Master', 'in Combat Master'],
	['for Combat Master', 'for Combat Master'],
	['Combat Master on', 'Combat Master on'],
	['Combat Master or', 'Combat Master or'],
	['Combat Master\'s', 'Combat Master\'s'],
	['Combat Master ', 'Combat Master '],
	['anti-cheat', 'anti-cheat'],
	['anti-cheat maintenance', 'anti-cheat maintenance'],
	['anti-cheat bypass', 'anti-cheat bypass'],
	['Anti-Cheat Bypass', 'Anti-Cheat Bypass'],
	['anti-cheat', 'anti-cheat'],
	['anti-cheat', 'anti-cheat'],
	['support@combatmasterhacks.org', 'support@combatmasterhacks.org'],
	['Battle Royale, Team Deathmatch, and Quick Play', 'Battle Royale, Team Deathmatch, and Quick Play'],
	['Battle Royale, Team Deathmatch and Quick Play', 'Battle Royale, Team Deathmatch and Quick Play'],
	['team fights', 'team fights'],
	['team fight', 'team fight'],
	['match rounds', 'match rounds'],
	['match', 'match'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['match timer', 'match timer'],
	['Battle Royale and multiplayer modes', 'Battle Royale and multiplayer modes'],
	['Battle Royale and multiplayer modes', 'Battle Royale and multiplayer modes'],
	['BR & TDM', 'BR & TDM'],
	['loadout drops', 'loadout drops'],
	['loadout drops', 'loadout drops'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Combat Master combat pace'],
	['COD', 'Combat Master'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Combat Master Hacks',
	game: 'Combat Master',
	checkout: 'Zadeyo',
	anti-cheat: 'anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.anti-cheat/g, 'KW.anti-cheat');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Battle Royale, Team Deathmatch, and Quick Play'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
