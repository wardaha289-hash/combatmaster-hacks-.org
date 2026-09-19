import { readFileSync, writeFileSync } from 'node:fs';

const phrasesPath = 'scripts/i18n-data/phrases.mjs';
let phrases = readFileSync(phrasesPath, 'utf8');
phrases = phrases.replace(/undetected: '[^']*'/g, "undetected: ''");
writeFileSync(phrasesPath, phrases);

for (const file of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	let s = readFileSync(file, 'utf8');
	s = s
		.replace(/readGuide: 'Read '/g, "readGuide: 'Read more'")
		.replace(/readGuide: 'Read'/g, "readGuide: 'Read more'")
		.replace(/readGuide: 'Leer guía'/g, "readGuide: 'Leer más'")
		.replace(/readGuide: 'Lire le '/g, "readGuide: 'Lire plus'")
		.replace(/readGuide: ' lesen'/g, "readGuide: 'Mehr lesen'")
		.replace(/readGuide: 'Ler guia'/g, "readGuide: 'Ler mais'")
		.replace(/readGuide: 'Leggi guida'/g, "readGuide: 'Leggi di più'")
		.replace(/readGuide: 'Lees gids'/g, "readGuide: 'Lees meer'")
		.replace(/readGuide: 'Czytaj poradnik'/g, "readGuide: 'Czytaj więcej'")
		.replace(/readGuide: 'Читать гайд'/g, "readGuide: 'Читать далее'")
		.replace(/readGuide: 'Rehberi oku'/g, "readGuide: 'Devamını oku'")
		.replace(/readGuide: 'اقرأ الدليل'/g, "readGuide: 'اقرأ المزيد'")
		.replace(/readGuide: 'ガイドを読む'/g, "readGuide: '続きを読む'")
		.replace(/readGuide: '가이드 읽기'/g, "readGuide: '더 읽기'")
		.replace(/readGuide: '阅读指南'/g, "readGuide: '阅读更多'")
		.replace(/readGuide: 'गाइड पढ़ें'/g, "readGuide: 'और पढ़ें'")
		.replace(/readGuide: 'Baca panduan'/g, "readGuide: 'Baca selengkapnya'")
		.replace(/readGuide: 'อ่านคู่มือ'/g, "readGuide: 'อ่านเพิ่มเติม'")
		.replace(/readGuide: 'Đọc hướng dẫn'/g, "readGuide: 'Đọc thêm'")
		.replace(/readGuide: 'Читати гайд'/g, "readGuide: 'Читати далі'")
		.replace(/readGuide: 'Läs guide'/g, "readGuide: 'Läs mer'")
		.replace(/Undetected ESP/gi, 'ESP')
		.replace(/undetected ESP/gi, 'ESP')
		.replace(/indetectable/gi, '')
		.replace(/indetectables/gi, '')
		.replace(/indétectable/gi, '')
		.replace(/indétectables/gi, '')
		.replace(/indetectável/gi, '')
		.replace(/indetectáveis/gi, '')
		.replace(/Paket undetected/gi, 'Paket')
		.replace(/Gói undetected/gi, 'Gói')
		.replace(/Cheat undetected/gi, 'Cheat')
		.replace(/Cheats undetected/gi, 'Cheats')
		.replace(/\s{2,}/g, ' ');
	writeFileSync(file, s);
	console.log('fixed', file);
}

console.log('done');
