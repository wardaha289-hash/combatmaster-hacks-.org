import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceJpg = path.join(publicDir, 'images', 'brand', 'favicon-source.jpg');
const logoSvg = path.join(publicDir, 'logo.svg');

const input = fs.existsSync(sourceJpg) ? sourceJpg : logoSvg;

const icon = (size) =>
  sharp(input).resize(size, size, { fit: 'cover', position: 'centre' }).png();

await icon(512).toFile(path.join(publicDir, 'favicon-512.png'));
await icon(192).toFile(path.join(publicDir, 'favicon-192.png'));
await icon(180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
await icon(32).toFile(path.join(publicDir, 'favicon-32.png'));
await icon(32).toFile(path.join(publicDir, 'favicon.png'));
await icon(16).toFile(path.join(publicDir, 'favicon-16.png'));
await icon(32).toFile(path.join(publicDir, 'favicon.ico'));

console.log(
  `Brand icons generated from ${path.basename(String(input))}: favicon.ico, favicon-16/32/192/512.png, apple-touch-icon.png`,
);
