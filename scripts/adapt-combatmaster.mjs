#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Combat Master Hacks (combatmasterhacks.org)
 * Run from project root: node scripts/adapt-combatmaster.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'combatmaster-aimbot'],
	['tarkov-esp', 'combatmaster-esp'],
	['tarkov-wallhack', 'combatmaster-wallhack'],
	['tarkov-radar-hack', 'combatmaster-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-combatmaster-hacks'],
	['tarkov-cheats-2026', 'combatmaster-hacks-2026'],
	['battleye-bypass', 'anti-cheat-bypass'],
	['tarkov-cheats', 'combatmaster-hacks'],
	['tarkov-cheat-download', 'combatmaster-cheat-download'],
	['tarkov-mod-menu', 'combatmaster-mod-menu'],
	['tarkov-soft-aim', 'combatmaster-soft-aim'],
	['best-tarkov-cheats', 'best-combatmaster-hacks'],
	['tarkov-aimbot-hack', 'combatmaster-aimbot-hack'],
	['tarkov-esp-hack', 'combatmaster-esp-hack'],
	['tarkov-unlock-all', 'combatmaster-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://combatmasterhacks.org'],
	['https://www.tarkovcheats.org', 'https://www.combatmasterhacks.org'],
	['www.tarkovcheats.org', 'www.combatmasterhacks.org'],
	['tarkovcheats.org', 'combatmasterhacks.org'],
	['support@tarkovcheats.org', 'support@combatmasterhacks.org'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fcombat-master'],
	['/products/escape-from-tarkov', '/products/combat-master'],
	['/products/tarkov', '/products/combat-master'],
	['project-name=tarkovcheats', 'project-name=combatmasterhacks'],
	['project-name=besttarkovcheats', 'project-name=combatmasterhacks'],
	['name = "tarkovcheats"', 'name = "combatmasterhacks"'],
	['name = "besttarkovcheats"', 'name = "combatmasterhacks"'],
	['"name": "tarkov-cheats"', '"name": "combat-master-hacks"'],
	['undetected-tarkov-cheats', 'undetected-combatmaster-hacks'],
	['best-tarkov-cheats', 'best-combatmaster-hacks'],
	['tarkov-cheat-download', 'combatmaster-cheat-download'],
	['tarkov-cheats-2026', 'combatmaster-hacks-2026'],
	['tarkov-radar-hack', 'combatmaster-radar-hack'],
	['tarkov-aimbot-hack', 'combatmaster-aimbot-hack'],
	['tarkov-esp-hack', 'combatmaster-esp-hack'],
	['tarkov-unlock-all', 'combatmaster-unlock-all'],
	['tarkov-soft-aim', 'combatmaster-soft-aim'],
	['tarkov-mod-menu', 'combatmaster-mod-menu'],
	['tarkov-wallhack', 'combatmaster-wallhack'],
	['tarkov-cheats', 'combatmaster-hacks'],
	['tarkov-aimbot', 'combatmaster-aimbot'],
	['tarkov-esp', 'combatmaster-esp'],
	['battleye-bypass', 'anti-cheat-bypass'],
	['tarkov-esp-player-tags', 'combatmaster-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'combatmaster-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'combatmaster-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'combatmaster-aimbot-skeleton'],
	['tarkov-esp-radar', 'combatmaster-esp-radar'],
	['tarkov-cheats-combat', 'combatmaster-hacks-combat'],
	['tarkov-cheats-logo', 'combatmaster-hacks-logo'],
	['tarkov-hero-banner', 'combatmaster-hero-banner'],
	['tarkov-hero-ghost', 'combatmaster-hero-ghost'],
	['tarkov-hero-source', 'combatmaster-hero-source'],
	['tarkov-cheats-hero', 'combatmaster-hacks-hero'],
	['tarkov-cheats-esp', 'combatmaster-hacks-esp'],
	['tarkov-cheats-wallhack', 'combatmaster-hacks-wallhack'],
	['tarkov-cheats-aimbot', 'combatmaster-hacks-aimbot'],
	['tarkov-cheats-aimbot-view', 'combatmaster-hacks-aimbot-view'],
	['tarkov-cheats-radar', 'combatmaster-hacks-radar'],
	['tarkov-cheats-raid', 'combatmaster-hacks-raid'],
	['tarkov-battle-royale-combat', 'combatmaster-battle-royale-combat'],
	['tarkov-extract-fight', 'combatmaster-team-deathmatch'],
	['tarkov-scav-run-combat', 'combatmaster-quick-play-combat'],
	['tarkov-scav-run-mode', 'combatmaster-battle-royale-mode'],
	['tarkovImages', 'combatmasterImages'],
	["from './tarkov'", "from './combatmaster'"],
	["from '../data/tarkov'", "from '../data/combatmaster'"],
	["from '../../data/tarkov'", "from '../../data/combatmaster'"],
	['fetch-tarkov-images', 'fetch-combatmaster-images'],
	['tarkov-hack-overlays', 'combatmaster-hack-overlays'],
	['fix-tarkov-copy', 'fix-combatmaster-copy'],
	['adapt-tarkov', 'adapt-combatmaster'],
	['trucos-tarkov', 'trucos-combatmaster'],
	['triche-tarkov', 'triche-combatmaster'],
	['cheats-tarkov', 'cheats-combatmaster'],
	['trucchi-tarkov', 'trucchi-combatmaster'],
	['cheaty-tarkov', 'cheaty-combatmaster'],
	['chity-tarkov', 'chity-combatmaster'],
	['chitov-tarkov', 'chitov-combatmaster'],
	['chitiv-tarkov', 'chitiv-combatmaster'],
	['cheatow-tarkov', 'cheatow-combatmaster'],
	['hile-tarkov', 'hile-combatmaster'],
	['tarkov-hile', 'combatmaster-hile'],
	['escape-from-tarkov-cheats', 'combatmaster-hacks'],
	['Escape from Tarkov', 'Combat Master'],
	['escape from tarkov', 'combat master'],
	['Tarkov Cheats', 'Combat Master Hacks'],
	['Tarkov cheats', 'combatmaster hacks'],
	['Tarkov cheat', 'combatmaster hack'],
	['Tarkov hacks', 'combatmaster hacks'],
	['Tarkov hack', 'combatmaster hack'],
	['TarkovCheatsSite', 'CombatMasterHacksSite'],
	['Tarkov Intel', 'Combat Master Intel'],
	['BattlEye anti-cheat', 'anti-cheat'],
	['BattlEye maintenance', 'anti-cheat maintenance'],
	['BattlEye bypass', 'anti-cheat bypass'],
	['BattlEye Bypass', 'Anti-Cheat Bypass'],
	['BattlEye patches', 'game patches'],
	['BattlEye patch', 'game patch'],
	['BattlEye updates', 'game updates'],
	['BattlEye update', 'game update'],
	['after BattlEye', 'after game patches'],
	['BattlEye', 'anti-cheat'],
	['battleye', 'anti-cheat'],
	['tarkov cheats', 'combatmaster hacks'],
	['Customs, Woods, and Streets of Tarkov', 'Battle Royale, Team Deathmatch, and Quick Play'],
	['Customs, Woods and Streets of Tarkov', 'Battle Royale, Team Deathmatch and Quick Play'],
	['extract fights', 'team fights'],
	['extract fight', 'team fight'],
	['raid rounds', 'match rounds'],
	['extract', 'match'],
	['PMC raids and Scav runs', 'Battle Royale and multiplayer modes'],
	['PMC & Scav', 'BR & TDM'],
	['PMC raids and Scav runs', 'Battle Royale and Quick Play'],
	['PMC and Scav', 'players and bots'],
	['PMCs and Scavs', 'players and bots'],
	['PMCs', 'players'],
	['Scavs', 'bots'],
	['Scav run', 'Quick Play'],
	['Scav runs', 'Quick Play matches'],
	['scav run', 'quick play'],
	['extract and loot markers', 'objective and loot markers'],
	['high-value loot', 'loadout drops'],
	['extract timer', 'killstreak tracker'],
	['extract cues', 'objective cues'],
	['extract holds', 'objective holds'],
	['near extracts', 'near objectives'],
	['Extracts', 'Objectives'],
	['raid', 'match'],
	['raids', 'matches'],
	['raid flow', 'match flow'],
	['before you raid', 'before you queue'],
	['before you queue a raid', 'before you queue a match'],
	['you raid', 'you play'],
	['you queue a raid', 'you queue a match'],
	['early raids', 'early matches'],
	['during a raid', 'during a match'],
	['Through-wall visibility during a raid', 'Through-wall visibility during a match'],
	['in dorms', 'in TDM'],
	['Customs', 'Battle Royale'],
	['Woods', 'Gunsmith'],
	['Buy Tarkov Cheats', 'Buy Combat Master Hacks'],
	['Tarkov', 'Combat Master'],
	['tarkov', 'combatmaster'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'temp-template']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-warzone.mjs', 'adapt-fortnite.mjs', 'adapt-combatmaster.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'combatmaster.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → combatmaster.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-combatmaster-images.mjs'],
		['tarkov-hack-overlays.mjs', 'combatmaster-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-combatmaster-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'combatmaster-aimbot': 'combatmaster-aimbot',
		'combatmaster-esp': 'combatmaster-esp',
		'combatmaster-wallhack': 'wallhack',
		'combatmaster-radar-hack': 'radar',
		'undetected-combatmaster-hacks': 'undetected',
		'combatmaster-hacks-2026': 'cheats-2026',
		'anti-cheat-bypass': 'anti-cheat',
		'combatmaster-hacks': 'hacks',
		'combatmaster-cheat-download': 'cheat-download',
		'combatmaster-mod-menu': 'mod-menu',
		'combatmaster-soft-aim': 'soft-aim',
		'best-combatmaster-hacks': 'best-cheats',
		'combatmaster-aimbot-hack': 'aimbot-hack',
		'combatmaster-esp-hack': 'esp-hack',
		'combatmaster-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'combatmaster');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Combat Master Hacks (combatmasterhacks.org)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, import images, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
