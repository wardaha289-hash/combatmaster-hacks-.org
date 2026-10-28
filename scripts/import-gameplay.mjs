import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir = path.join(root, 'public', 'images', 'gameplay');
const outDir = path.join(root, 'public', 'images', 'gameplay');

/** Copy user-provided Combat Master screenshots into canonical gameplay filenames. */
const mappings = [
  ['combat-master-gameplay-wallhack-esp.png', 'combat-master-gameplay-wallhack-esp.png'],
  ['combat-master-gameplay-aimbot-kill.png', 'combat-master-gameplay-aimbot-kill.png'],
  ['combat-master-gameplay-kill-streak.png', 'combat-master-gameplay-kill-streak.png'],
  ['combat-master-gameplay-aimbot-fov.png', 'combat-master-gameplay-aimbot-fov.png'],
  ['combat-master-gameplay-skeleton-esp.png', 'combat-master-gameplay-skeleton-esp.png'],
  ['combat-master-gameplay-sniper-kill.png', 'combat-master-gameplay-sniper-kill.png'],
];

for (const [srcName, destName] of mappings) {
  const src = path.join(assetsDir, srcName);
  const dest = path.join(outDir, destName);
  if (!fs.existsSync(src)) {
    console.warn(`Skip (missing): ${srcName}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log(`OK ${destName}`);
}

console.log('Combat Master gameplay import complete.');
