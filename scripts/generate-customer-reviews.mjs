#!/usr/bin/env node
/**
 * Generates src/data/customer-reviews.generated.ts — 100 short buyer reviews, avg 4.7
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'customer-reviews.generated.ts');

const handles = [
	'MarcusReed', 'JakeMiller92', 'NovaSlayer', 'tacticalTim', 'AriaFox_', 'DerekHolt', 'MiaChenCM', 'RyanK_07',
	'GhostLine', 'BennyStacks', 'KiraLoot', 'OmarBlitz', 'JessPlaysPC', 'TylerNade', 'LucaFrame', 'NateCrosshair',
	'SofiaBR', 'ChrisVault', 'DylanScope', 'EmmaRadar', 'HugoShift', 'IvyClutch', 'KylePatch', 'LenaSoftAim',
	'MasonBR', 'NinaESP', 'OscarTDM', 'PaigeWin', 'QuinnLoad', 'RosaAim', 'SammyCM', 'TrevorZip', 'UmaFight',
	'VinceLoot', 'WadeScope', 'XanderBR', 'YaraPC', 'ZaneHacks', 'AdamQuick', 'BellaGun', 'ColeMatch',
	'DanaPush', 'EthanFps', 'FaithBR', 'GabeTactical', 'HannahCM', 'IanScope', 'JadeLoot', 'KeithAim',
	'LiamBR', 'MayaWin', 'NoahPatch', 'OliviaESP', 'PeteSoft', 'QuinnBR2', 'RileyTDM', 'SaraMatch',
	'ToddScope', 'UrsulaPC', 'VictorBR', 'WendyAim', 'XaviLoot', 'YusufCM', 'ZoeQuick', 'AaronBR',
	'BriScope', 'CalebWin', 'DemiPatch', 'EliRadar', 'FayeSoft', 'GrantBR', 'HopeESP', 'IsaacTDM',
	'JulesCM', 'KaiLoot', 'LeoAim', 'MorganBR', 'NicoScope', 'OpalWin', 'PaulPatch', 'RheaSoft',
	'SeanBR', 'TiaRadar', 'UmarCM', 'VeraLoot', 'WillAim', 'XenaBR', 'YaleScope', 'ZaraWin',
	'AidenPatch', 'BrookeESP', 'CarterTDM', 'DrewCM', 'ElenaLoot', 'FinnAim', 'GinaBR', 'HankScope',
	'IrisWin', 'JoelPatch', 'KaraSoft', 'LoganBR', 'MilesRadar', 'NoraCM', 'OwenLoot', 'PiperAim',
];

const shortTexts = [
	'ESP boxes are clean in BR. Worth it.',
	'Soft aim feels smooth after a quick tune.',
	'Radar saved me from third parties twice.',
	'Setup took ten minutes. Support was fast.',
	'Monthly plan pays for itself in loot runs.',
	'Player outlines are easy to read in TDM.',
	'No recoil setting helps my SMG beams.',
	'Status page updated fast after the patch.',
	'Lifetime license was the right call for me.',
	'Loot markers speed up early rotations.',
	'Menu is simple. Toggle ESP mid-match.',
	'Works fine on Windows 11 for me.',
	'Distance readouts help in long fights.',
	'Soft aim FOV tweak made it feel natural.',
	'Radar range is enough for final circles.',
	'Got my key same day. No issues.',
	'ESP plus radar combo is strong in duos.',
	'Better than the last cheat I tried.',
	'Gunsmith loadouts look great with ESP on.',
	'Patch day rebuild was up next morning.',
	'Team colors on ESP are actually useful.',
	'Hotkeys for aimbot are well placed.',
	'Runs stable during long BR sessions.',
	'Quick Play lobbies feel easier to read now.',
	'Support answered my setup mail quickly.',
];

const tags = ['ESP', 'Soft aim', 'Radar', 'Setup', 'Updates', 'Battle Royale', 'TDM', 'Loot ESP', undefined];

function slugify(handle) {
	return handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** 75×5 + 20×4 + 5×3 = 470 → avg 4.7 */
function buildRatings() {
	const ratings = [];
	for (let i = 0; i < 75; i++) ratings.push(5);
	for (let i = 0; i < 20; i++) ratings.push(4);
	for (let i = 0; i < 5; i++) ratings.push(3);
	// shuffle
	for (let i = ratings.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ratings[i], ratings[j]] = [ratings[j], ratings[i]];
	}
	return ratings;
}

const ratings = buildRatings();
const startDate = new Date('2025-09-01T00:00:00Z');

const reviews = handles.slice(0, 100).map((handle, i) => {
	const rating = ratings[i];
	const short = shortTexts[i % shortTexts.length];
	const text =
		rating >= 5
			? `${short} Combat Master Hacks has been solid for me.`
			: rating === 4
				? `${short} Small learning curve but good overall.`
				: `${short} Works after support helped with setup.`;
	const date = new Date(startDate);
	date.setDate(date.getDate() + i * 2 + (i % 5));
	const iso = date.toISOString().slice(0, 10);
	const slug = `combatmaster-review-${slugify(handle)}-${i + 1}`;
	const tag = tags[i % tags.length];
	const topic = tag ?? 'Review';

	return {
		handle,
		rating,
		text,
		short,
		slug,
		seoTitle: `${topic} by @${handle} — ${rating}/5 | {brand}`,
		seoDescription: `@${handle} rates {brand} ${rating}/5 for Combat Master on Windows PC.`,
		date: iso,
		...(tag ? { tag } : {}),
	};
});

const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

const body = `/** Auto-generated — run: node scripts/generate-customer-reviews.mjs */

export const customerReviewsGenerated = ${JSON.stringify(reviews, null, '\t').replace(/"([^"]+)":/g, '$1:')} as const;

export const customerReviewStatsGenerated = {
\taverageRating: ${avg.toFixed(1)},
\ttotalCount: ${reviews.length},
} as const;
`;

writeFileSync(OUT, body);
console.log(`Wrote ${reviews.length} reviews, avg ${avg.toFixed(2)} → ${OUT}`);
