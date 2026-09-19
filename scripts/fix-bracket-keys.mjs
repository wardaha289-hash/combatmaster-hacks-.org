import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = 'scripts/i18n-data';
for (const file of readdirSync(root)) {
	if (!file.endsWith('.mjs')) continue;
	const p = path.join(root, file);
	let s = readFileSync(p, 'utf8');
	const next = s
		.replace(/\$\{EXT\.anti-cheat\}/g, "${EXT['anti-cheat']}")
		.replace(/\$\{KW\.anti-cheat\}/g, "${KW['anti-cheat']}");
	if (next !== s) {
		writeFileSync(p, next);
		console.log('fixed', file);
	}
}
