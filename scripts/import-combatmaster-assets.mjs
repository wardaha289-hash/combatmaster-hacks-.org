#!/usr/bin/env node
/**
 * Import user hero image + Combat Master gallery screenshots.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(ROOT, 'public', 'images');
const publicDir = path.join(ROOT, 'public');

const HERO_SOURCE = path.join(ROOT, 'public', 'images', 'combatmaster-hero-source.jpg');

const REMOTE_SCREENSHOTS = [
	{
		url: 'https://combatmastercheats.net/images/combat-master-cheats-aimbot-view.webp',
		file: 'combatmaster-hacks-aimbot-view.webp',
	},
	{
		url: 'https://combatmastercheats.net/images/combat-master-cheats-esp.webp',
		file: 'combatmaster-hacks-esp.webp',
	},
	{
		url: 'https://combatmastercheats.net/images/combat-master-cheats-wallhack.webp',
		file: 'combatmaster-hacks-wallhack.webp',
	},
];

/** Hero ladder — never upscale; preserve native resolution for max sharpness. */
const HERO_WIDTHS = [640, 960, 1024];
const CONTENT_WIDTHS = [480, 960];

async function download(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function processHero() {
	const heroBase = 'combatmaster-hacks-hero';
	const heroDest = path.join(imagesDir, `${heroBase}.webp`);
	const source = sharp(HERO_SOURCE).rotate();

	const masterBuffer = await source
		.clone()
		.webp({ quality: 94, effort: 6, smartSubsample: false })
		.toBuffer();
	await writeFile(heroDest, masterBuffer);
	console.log(`Wrote ${heroBase}.webp (${masterBuffer.length} bytes)`);

	await writeFile(
		path.join(imagesDir, `${heroBase}-full.png`),
		await source.clone().png({ compressionLevel: 6, quality: 100 }).toBuffer(),
	);
	console.log(`Wrote ${heroBase}-full.png`);

	await writeFile(
		path.join(imagesDir, `${heroBase}-source.jpg`),
		await source.clone().jpeg({ quality: 98, mozjpeg: true }).toBuffer(),
	);
	console.log(`Wrote ${heroBase}-source.jpg`);

	const meta = await sharp(masterBuffer).metadata();
	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const file = `${heroBase}-${width}w.webp`;
		const quality = width <= 640 ? 88 : 94;
		const variant = await sharp(HERO_SOURCE)
			.rotate()
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6, smartSubsample: false })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), variant);
		console.log(`Wrote ${file} (${variant.length} bytes)`);
	}
}

async function processScreenshots() {
	for (const { url, file } of REMOTE_SCREENSHOTS) {
		const raw = await download(url);
		const dest = path.join(imagesDir, file);
		const buffer = await sharp(raw)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 86, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		console.log(`Wrote ${file}`);

		const base = file.replace(/\.webp$/i, '');
		const meta = await sharp(buffer).metadata();
		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const vbuf = await sharp(buffer)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), vbuf);
			console.log(`Wrote ${variant}`);
		}
	}

	const aimbot = path.join(imagesDir, 'combatmaster-hacks-aimbot-view.webp');
	const esp = path.join(imagesDir, 'combatmaster-hacks-esp.webp');
	const wallhack = path.join(imagesDir, 'combatmaster-hacks-wallhack.webp');

	for (const [src, dest] of [
		[aimbot, 'combatmaster-hacks-aimbot.webp'],
		[esp, 'combatmaster-hacks-radar.webp'],
		[wallhack, 'combatmaster-hacks-raid.webp'],
	]) {
		const buf = await sharp(src).webp({ quality: 86 }).toBuffer();
		await writeFile(path.join(imagesDir, dest), buf);
		console.log(`Wrote ${dest}`);
	}
}

async function generateLogo() {
	const logoPath = path.join(imagesDir, 'combatmaster-hacks-logo.png');
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#0b0c10"/>
  <text x="256" y="210" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="72" font-weight="900" fill="#a855f7">CM</text>
  <text x="256" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#f5f5f7">HACKS</text>
</svg>`;
	const pngBuffer = await sharp(Buffer.from(svg)).resize(512, 512).png().toBuffer();
	await writeFile(logoPath, pngBuffer);
	await writeFile(
		path.join(imagesDir, 'combatmaster-hacks-logo.webp'),
		await sharp(pngBuffer).webp({ quality: 90 }).toBuffer(),
	);
	console.log('Wrote combatmaster-hacks-logo.png/webp');

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(pngBuffer).resize(size, size).png().toBuffer(),
		);
	}
	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(pngBuffer).resize(32, 32).png().toBuffer(),
	);
	const svgBase64 = pngBuffer.toString('base64');
	await writeFile(
		path.join(publicDir, 'favicon.svg'),
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0b0c10"/><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`,
	);
	console.log('Wrote favicons');
}

await mkdir(imagesDir, { recursive: true });
await processHero();
await processScreenshots();
await generateLogo();
console.log('Done — Combat Master assets imported.');
