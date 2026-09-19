#!/usr/bin/env node
/** Regenerate hero assets only from combatmaster-hero-source.jpg */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(ROOT, 'public', 'images');

await mkdir(imagesDir, { recursive: true });
process.chdir(ROOT);

const { default: sharp } = await import('sharp');
const { writeFile } = await import('node:fs/promises');

const HERO_SOURCE = path.join(imagesDir, 'combatmaster-hero-source.jpg');
const HERO_WIDTHS = [640, 960, 1024];
const heroBase = 'combatmaster-hacks-hero';

const source = sharp(HERO_SOURCE).rotate();
const masterBuffer = await source.clone().webp({ quality: 94, effort: 6, smartSubsample: false }).toBuffer();
await writeFile(path.join(imagesDir, `${heroBase}.webp`), masterBuffer);
await writeFile(
	path.join(imagesDir, `${heroBase}-full.png`),
	await source.clone().png({ compressionLevel: 6, quality: 100 }).toBuffer(),
);

const meta = await sharp(masterBuffer).metadata();
for (const width of HERO_WIDTHS) {
	if (meta.width && width > meta.width) continue;
	const variant = await sharp(HERO_SOURCE)
		.rotate()
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: width <= 640 ? 88 : 94, effort: 6, smartSubsample: false })
		.toBuffer();
	await writeFile(path.join(imagesDir, `${heroBase}-${width}w.webp`), variant);
}

console.log(`Hero updated — ${meta.width}x${meta.height} native, quality 94 WebP`);
