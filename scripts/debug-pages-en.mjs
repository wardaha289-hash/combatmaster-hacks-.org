import { readFileSync } from 'node:fs';

const s = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
const patterns = ['${cheat', '${ guide', '${undetected', '${ anti'];
for (const p of patterns) {
	const i = s.indexOf(p);
	if (i >= 0) console.log(p, i, s.slice(Math.max(0, i - 60), i + 80));
}

// Find unescaped ${ that aren't EXT.
const re = /\$\{([^}]+)\}/g;
let m;
while ((m = re.exec(s))) {
	if (!m[1].startsWith('EXT.')) console.log('bad template:', m[0], 'at', m.index);
}
