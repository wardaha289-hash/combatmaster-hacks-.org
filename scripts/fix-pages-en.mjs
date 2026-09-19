import { readFileSync, writeFileSync } from 'node:fs';

const p = 'scripts/i18n-data/pages-en.mjs';
let s = readFileSync(p, 'utf8');

const fixes = [
	[/},\s*:\s*\{/g, '}, undetected: {'],
	[/Games'rules/g, "Games' rules"],
	[/Staying after patches/g, 'Staying maintained after patches'],
	[/What means for Combat Master Hacks/g, 'What maintenance means for Combat Master Hacks'],
	[/Are Combat Master Hacks in 2026/g, 'Are Combat Master Hacks maintained in 2026'],
	[/<a href="\/combatmaster-hacks\/"> <\/a>/g, '<a href="/combatmaster-hacks/">live status</a>'],
	[/<a href="\/combatmaster-hacks\/"> status<\/a>/g, '<a href="/combatmaster-hacks/">live status</a>'],
	[/<a href="\/combatmaster-hacks\/"><\/a>/g, '<a href="/combatmaster-hacks/">cheats hub</a>'],
	[/soft aim <\/a>/g, 'soft aim page</a>'],
	[/Setup <\/a>/g, 'Setup</a>'],
	[/maintenance <\/a>/g, 'maintenance page</a>'],
	[/bypass <\/a>/g, 'bypass page</a>'],
	[/anti-cheat <\/a>/g, 'anti-cheat page</a>'],
	[/2026 buyer <\/a>/g, '2026 buyer checklist</a>'],
	[/2026 blog <\/a>/g, '2026 blog post</a>'],
	[/wallhack <\/a>/g, 'wallhack page</a>'],
	[/Read the, <a/g, 'Read the <a'],
	[/activate ESP boxes, soft aim profiles, and\. Check/g, 'activate ESP boxes, soft aim profiles, and radar. Check'],
	[/combatmaster hacks with — see/g, 'combatmaster hacks — see'],
	[/ctaSecondary: 'See',/g, "ctaSecondary: 'See live status',"],
	[/ctaSecondary: 'status',/g, "ctaSecondary: 'Live status',"],
	[/title: 'Best Combat Master Hacks 2026 \| Buyer'/g, "title: 'Best Combat Master Hacks 2026 | Buyer Checklist'"],
	[/h1: 'Best Combat Master Hacks — 2026 Buyer'/g, "h1: 'Best Combat Master Hacks — 2026 Buyer Checklist'"],
	[/complete-page-2026/g, 'complete-guide-2026'],
	[/buyers-page/g, 'buyers-guide'],
	[/subject"Refund/g, 'subject "Refund'],
	[/title: ' /g, "title: '"],
	[/h1: ' /g, "h1: '"],
	[/description: ' /g, "description: '"],
	[/galleryTitle: ' /g, "galleryTitle: '"],
];

for (const [re, rep] of fixes) s = s.replace(re, rep);

writeFileSync(p, s);
console.log('fixed pages-en.mjs');
