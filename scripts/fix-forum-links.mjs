#!/usr/bin/env node
/** Point legacy blog slugs under /forums/ to the forums index. */
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['src/data/blog/posts.generated.ts', 'src/data/i18n/content.generated.ts'];
const validThreads = new Set([
	'configuration-profiles',
	'radar-features',
	'recoil-configuration',
	'performance-settings',
	'player-esp-explained',
	'aimbot-settings',
]);

for (const file of files) {
	let content = readFileSync(file, 'utf8');
	content = content.replace(/href=\\"(\/forums\/([^"\\]+)\/)\\"/g, (match, _path, slug) => {
		if (validThreads.has(slug)) return match;
		return 'href=\\"/forums/\\"';
	});
	writeFileSync(file, content);
	console.log(`Fixed forum links in ${file}`);
}
