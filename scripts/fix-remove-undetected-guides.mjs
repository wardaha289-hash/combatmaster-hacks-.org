#!/usr/bin/env node
/**
 * Remove visible "undetected" and "guide(s)" copy sitewide.
 * Preserves object keys, routes, and slugs (undetected page id, redirect URLs).
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function cleanVisibleText(text) {
	let s = text;
	// Phrase-level replacements before word removal
	s = s.replace(/\bundetected status\b/gi, 'live status');
	s = s.replace(/\bundetected combatmaster hacks\b/gi, 'combatmaster hacks');
	s = s.replace(/\bundetected ESP\b/gi, 'ESP');
	s = s.replace(/\bundetected wallhack\b/gi, 'wallhack');
	s = s.replace(/\bundetected Aimbot\b/gi, 'Aimbot');
	s = s.replace(/\bundetected soft aim\b/gi, 'soft aim');
	s = s.replace(/\bundetected aimbot hack\b/gi, 'aimbot hack');
	s = s.replace(/\bundetected ESP hack\b/gi, 'ESP hack');
	s = s.replace(/\bundetected package\b/gi, 'package');
	s = s.replace(/\bundetected license\b/gi, 'license');
	s = s.replace(/\bundetected play\b/gi, 'play');
	s = s.replace(/\bundetected operation\b/gi, 'operation');
	s = s.replace(/\bpermanent undetected status\b/gi, 'permanent status');
	s = s.replace(/\bStaying undetected\b/gi, 'Staying maintained');
	s = s.replace(/\bWhat undetected means\b/gi, 'What maintenance means');
	s = s.replace(/\bUndetected Combat Master Hacks\b/gi, 'Combat Master Hacks');
	s = s.replace(/\bUndetected combatmaster hacks\b/gi, 'combatmaster hacks');
	s = s.replace(/\bAre Combat Master Hacks undetected\b/gi, 'Are Combat Master Hacks maintained');
	s = s.replace(/\bAre Combat Master Hacks in 2026\b/gi, 'Are Combat Master Hacks maintained in 2026');
	s = s.replace(/\bbuyer guide\b/gi, 'buyer checklist');
	s = s.replace(/\bsetup guide\b/gi, 'Setup');
	s = s.replace(/\bSetup guide\b/gi, 'Setup');
	s = s.replace(/\bESP guide\b/gi, 'ESP page');
	s = s.replace(/\bwallhack guide\b/gi, 'wallhack page');
	s = s.replace(/\bsoft aim guide\b/gi, 'soft aim page');
	s = s.replace(/\banti-cheat guide\b/gi, 'anti-cheat page');
	s = s.replace(/\banti-cheat bypass guide\b/gi, 'anti-cheat bypass page');
	s = s.replace(/\banti-cheat maintenance guide\b/gi, 'anti-cheat maintenance page');
	s = s.replace(/\bUndetected status guide\b/gi, 'Live status');
	s = s.replace(/\bSee undetected guide\b/gi, 'See live status');
	s = s.replace(/\bundetected guide\b/gi, 'status page');
	s = s.replace(/\bRead guide\b/gi, 'Read more');
	s = s.replace(/\bRead setup guide\b/gi, 'Read Setup');
	s = s.replace(/\bWindows PC Guide\b/gi, 'Windows PC Setup');
	s = s.replace(/\bBuyer Guide\b/gi, 'Buyer Checklist');
	s = s.replace(/\b2026 blog guide\b/gi, '2026 blog post');
	s = s.replace(/\bblog guides\b/gi, 'blog posts');
	s = s.replace(/\bQuick guides\b/gi, 'Quick links');
	s = s.replace(/\bGuides\b/g, 'Categories');
	s = s.replace(/\bguides\b/gi, 'posts');
	s = s.replace(/\bguide\b/gi, 'page');
	s = s.replace(/\bundetected\b/gi, '');
	s = s.replace(/\s{2,}/g, ' ');
	s = s.replace(/\s+([.,;:!?])/g, '$1');
	s = s.replace(/\s+—/g, ' —');
	s = s.replace(/—\s+/g, '— ');
	s = s.replace(/\(\s+/g, '(');
	s = s.replace(/\s+\)/g, ')');
	s = s.replace(/"\s+>/g, '">');
	s = s.replace(/>\s+"/g, '">');
	s = s.replace(/\s+"/g, '"');
	s = s.replace(/"\s+/g, '" ');
	s = s.replace(/\|\s+\|/g, '|');
	s = s.replace(/\|\s+$/g, '');
	s = s.replace(/\s+\|/g, ' |');
	s = s.replace(/is an Combat Master/gi, 'is a Combat Master');
	s = s.replace(/during an Combat Master/gi, 'during a Combat Master');
	s = s.replace(/status is a ongoing/gi, 'status is an ongoing');
	s = s.replace(/Blog expand/gi, 'Blog posts expand');
	s = s.replace(/complete --/g, 'complete-guide-');
	s = s.replace(/buyers-\//g, 'buyers-guide/');
	s = s.replace(/\/blog\/-combatmaster/g, '/blog/undetected-combatmaster');
	s = s.replace(/complete--2026/g, 'complete-guide-2026');
	s = s.replace(/escape-from-combatmaster-hacks-buyers-\//g, 'escape-from-combatmaster-hacks-buyers-guide/');
	return s.trim();
}

function cleanFileContent(src, { preserveKeys = false } = {}) {
	let out = src;
	// Structural fix: broken undetected page key
	out = out.replace(/},\s*:\s*\{/g, '}, undetected: {');
	// Clean inside single-quoted strings
	out = out.replace(/'([^'\\]|\\.)*'/g, (m) => {
		const inner = m.slice(1, -1);
		if (preserveKeys && /^[a-z0-9-]+$/i.test(inner) && (inner.includes('undetected') || inner.includes('guide'))) {
			return m;
		}
		return `'${cleanVisibleText(inner)}'`;
	});
	// Clean inside double-quoted strings
	out = out.replace(/"([^"\\]|\\.)*"/g, (m) => {
		const inner = m.slice(1, -1);
		if (inner.startsWith('/images/') || inner.startsWith('http')) return m;
		return `"${cleanVisibleText(inner)}"`;
	});
	return out;
}

const SKIP_FILES = new Set(['scripts/i18n-data/constants.mjs']);

const targets = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/image-alts.mjs',
	'src/data/i18n/simple-pages.ts',
	'src/data/site.ts',
	'public/locales/en/translation.json',
];

for (const rel of targets) {
	if (SKIP_FILES.has(rel)) continue;
	const abs = path.join(ROOT, rel);
	let src = readFileSync(abs, 'utf8');
	if (rel.endsWith('.json')) {
		const data = JSON.parse(src);
		const walk = (obj) => {
			for (const [k, v] of Object.entries(obj)) {
				if (typeof v === 'string') obj[k] = cleanVisibleText(v);
				else if (v && typeof v === 'object') walk(v);
			}
		};
		walk(data);
		writeFileSync(abs, JSON.stringify(data, null, 2) + '\n');
	} else {
		src = cleanFileContent(src);
		writeFileSync(abs, src);
	}
	console.log('cleaned', rel);
}

// Other locale translation files
const localesDir = path.join(ROOT, 'public/locales');
for (const loc of readdirSync(localesDir)) {
	if (loc === 'en') continue;
	const file = path.join(localesDir, loc, 'translation.json');
	try {
		const data = JSON.parse(readFileSync(file, 'utf8'));
		const walk = (obj) => {
			for (const [k, v] of Object.entries(obj)) {
				if (typeof v === 'string') obj[k] = cleanVisibleText(v);
				else if (v && typeof v === 'object') walk(v);
			}
		};
		walk(data);
		writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
		console.log('cleaned', `public/locales/${loc}/translation.json`);
	} catch {
		/* skip */
	}
}

console.log('Done.');
