#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 * Merges English template + UI strings from i18n-data.
 * Run: node scripts/sync-locale-json.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const OUT_DIR = path.join(ROOT, 'public', 'locales');

/** Nav labels not in ui-strings (preview / store / status). */
const NAV_EXTRAS = {
	en: { preview: 'Cheats', store: 'Store', status: 'Status', reviews: 'Reviews', forums: 'Forums' },
	es: { preview: 'Trucos', store: 'Tienda', status: 'Estado', reviews: 'Reseñas', forums: 'Foros' },
	fr: { preview: 'Triches', store: 'Boutique', status: 'Statut', reviews: 'Avis', forums: 'Forums' },
	de: { preview: 'Cheats', store: 'Shop', status: 'Status', reviews: 'Bewertungen', forums: 'Foren' },
	pt: { preview: 'Cheats', store: 'Loja', status: 'Status', reviews: 'Avaliações', forums: 'Fóruns' },
	it: { preview: 'Cheat', store: 'Negozio', status: 'Stato', reviews: 'Recensioni', forums: 'Forum' },
	nl: { preview: 'Cheats', store: 'Winkel', status: 'Status', reviews: 'Reviews', forums: 'Forums' },
	pl: { preview: 'Cheaty', store: 'Sklep', status: 'Status', reviews: 'Opinie', forums: 'Fora' },
	ru: { preview: 'Читы', store: 'Магазин', status: 'Статус', reviews: 'Отзывы', forums: 'Форумы' },
	tr: { preview: 'Hileler', store: 'Mağaza', status: 'Durum', reviews: 'Yorumlar', forums: 'Forumlar' },
	ar: { preview: 'غش', store: 'المتجر', status: 'الحالة', reviews: 'مراجعات', forums: 'المنتديات' },
	ja: { preview: 'チート', store: 'ストア', status: 'ステータス', reviews: 'レビュー', forums: 'フォーラム' },
	ko: { preview: '치트', store: '스토어', status: '상태', reviews: '리뷰', forums: '포럼' },
	zh: { preview: '作弊', store: '商店', status: '状态', reviews: '评价', forums: '论坛' },
	hi: { preview: 'चीट', store: 'स्टोर', status: 'स्थिति', reviews: 'समीक्षाएँ', forums: 'फ़ोरम' },
	id: { preview: 'Cheat', store: 'Toko', status: 'Status', reviews: 'Ulasan', forums: 'Forum' },
	th: { preview: 'cheat', store: 'ร้านค้า', status: 'สถานะ', reviews: 'รีวิว', forums: 'ฟอรัม' },
	vi: { preview: 'Cheat', store: 'Cửa hàng', status: 'Trạng thái', reviews: 'Đánh giá', forums: 'Diễn đàn' },
	uk: { preview: 'Чіти', store: 'Магазин', status: 'Статус', reviews: 'Відгуки', forums: 'Форуми' },
	cs: { preview: 'Cheaty', store: 'Obchod', status: 'Stav', reviews: 'Recenze', forums: 'Fóra' },
	ro: { preview: 'Cheats', store: 'Magazin', status: 'Status', reviews: 'Recenzii', forums: 'Forumuri' },
	sv: { preview: 'Cheats', store: 'Butik', status: 'Status', reviews: 'Recensioner', forums: 'Forum' },
};

const HOME_SEO_HINTS = {
	en: { features: 'What is included', status: 'Before you play', store: 'Buy & plans', help: 'Need a hand' },
	es: { features: 'Qué incluye', status: 'Antes de jugar', store: 'Comprar y planes', help: '¿Necesitas ayuda?' },
	fr: { features: 'Ce qui est inclus', status: 'Avant de jouer', store: 'Acheter et forfaits', help: 'Besoin d\'aide' },
	de: { features: 'Was enthalten ist', status: 'Vor dem Spiel', store: 'Kaufen & Pläne', help: 'Hilfe nötig' },
	pt: { features: 'O que está incluído', status: 'Antes de jogar', store: 'Comprar e planos', help: 'Precisa de ajuda' },
	it: { features: 'Cosa è incluso', status: 'Prima di giocare', store: 'Acquista e piani', help: 'Serve aiuto' },
	nl: { features: 'Wat is inbegrepen', status: 'Voor je speelt', store: 'Kopen & plannen', help: 'Hulp nodig' },
	pl: { features: 'Co jest w pakiecie', status: 'Przed grą', store: 'Kup i plany', help: 'Potrzebujesz pomocy' },
	ru: { features: 'Что входит', status: 'Перед игрой', store: 'Купить и тарифы', help: 'Нужна помощь' },
	tr: { features: 'Neler dahil', status: 'Oynamadan önce', store: 'Satın al ve planlar', help: 'Yardım lazım' },
	ar: { features: 'ما المُضمَّن', status: 'قبل اللعب', store: 'شراء وخطط', help: 'تحتاج مساعدة' },
	ja: { features: '含まれる内容', status: 'プレイ前', store: '購入とプラン', help: 'ヘルプ' },
	ko: { features: '포함 내용', status: '플레이 전', store: '구매 및 요금', help: '도움이 필요하신가요' },
	zh: { features: '包含内容', status: '游玩前', store: '购买与方案', help: '需要帮助' },
	hi: { features: 'क्या शामिल है', status: 'खेलने से पहले', store: 'खरीदें और प्लान', help: 'मदद चाहिए' },
	id: { features: 'Yang termasuk', status: 'Sebelum bermain', store: 'Beli & paket', help: 'Butuh bantuan' },
	th: { features: 'สิ่งที่รวมอยู่', status: 'ก่อนเล่น', store: 'ซื้อและแผน', help: 'ต้องการความช่วยเหลือ' },
	vi: { features: 'Nội dung bao gồm', status: 'Trước khi chơi', store: 'Mua & gói', help: 'Cần trợ giúp' },
	uk: { features: 'Що входить', status: 'Перед грою', store: 'Купити та тарифи', help: 'Потрібна допомога' },
	cs: { features: 'Co je zahrnuto', status: 'Před hrou', store: 'Koupit a plány', help: 'Potřebujete pomoc' },
	ro: { features: 'Ce este inclus', status: 'Înainte de joc', store: 'Cumpără și planuri', help: 'Ai nevoie de ajutor' },
	sv: { features: 'Vad som ingår', status: 'Innan du spelar', store: 'Köp & planer', help: 'Behöver du hjälp' },
};

function deepMerge(base, patch) {
	const out = { ...base };
	for (const [key, value] of Object.entries(patch)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(base[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function buildLocaleTranslation(locale, enTemplate, ui) {
	const extras = NAV_EXTRAS[locale] ?? NAV_EXTRAS.en;
	const hints = HOME_SEO_HINTS[locale] ?? HOME_SEO_HINTS.en;
	const helpLabel = ui.footer.help.split('&')[0].trim();

	return deepMerge(enTemplate, {
		nav: {
			...ui.nav,
			preview: extras.preview,
			store: extras.store,
			status: extras.status,
			reviews: extras.reviews,
			forums: extras.forums,
			primaryAria: locale === 'en' ? 'Primary' : ui.common.language,
			mobileAria: locale === 'en' ? 'Mobile' : ui.common.language,
			openMenu: locale === 'en' ? 'Open menu' : ui.common.readGuide,
			closeMenu: locale === 'en' ? 'Close menu' : ui.common.readGuide,
		},
		hero: {
			...ui.hero,
			exploreNow: ui.hero.seeFeatures,
			title: ui.product.title,
			priceFrom: locale === 'en' ? 'from' : ui.product.monthly,
			chipEsp: ui.nav.esp,
			chipAim: ui.nav.aimbot,
			chipRadar: 'Radar',
			chipUpdates: ui.nav.updates,
		},
		cta: {
			buy: ui.hero.buyNow,
			buyShort: ui.nav.buyNow,
		},
		trust: ui.trust,
		product: {
			...ui.product,
			days30: ui.product.monthly,
			oneTime: ui.product.lifetime,
			plans: ui.nav.pricing,
			perMonth: '/ ' + ui.product.monthly.toLowerCase(),
			once: ui.product.lifetime.toLowerCase(),
			buyMonthly: ui.nav.buyNow,
			buyLifetime: ui.nav.buyNow,
		},
		reviews: {
			...ui.reviews,
			eyebrow: extras.reviews,
			homeTitle: ui.reviews.title,
			buyerReviews: ui.reviews.countLabel,
			readAll: ui.common.readGuide + ' →',
		},
		common: {
			...enTemplate.common,
			buyNow: ui.common.buyNow,
			readGuide: ui.common.readGuide,
			language: ui.common.language,
			officialLanguageNote: ui.common.officialLanguageNote,
			relatedPages: ui.common.relatedPages,
			selectLanguage: ui.common.language,
			englishOfficial: locale === 'en' ? enTemplate.common.englishOfficial : enTemplate.common.englishIsOfficial,
			englishIsOfficial: ui.common.officialLanguageNote,
			inGameLook: ui.common.readGuide,
			allQuestions: ui.nav.faq,
			openAnyQuestion: ui.common.readGuide,
		},
		footer: ui.footer,
		homeSeo: {
			catFeatures: ui.nav.features,
			catFeaturesHint: hints.features,
			catStatus: extras.status,
			catStatusHint: hints.status,
			catStore: extras.store,
			catStoreHint: hints.store,
			catHelp: helpLabel,
			catHelpHint: hints.help,
			linkAllFeatures: ui.nav.features,
			linkEsp: ui.nav.esp,
			linkAimbot: ui.nav.aimbot,
			linkLiveStatus: extras.status,
			linkUndetected: extras.preview,
			linkSetup: ui.nav.setup,
			linkBuyNow: ui.nav.buyNow,
			linkPlans: ui.nav.pricing,
			linkReviews: extras.reviews,
			linkPreview: extras.preview,
			linkFaq: ui.nav.faq,
			linkSupport: helpLabel,
			linkSetupGuide: ui.nav.setup,
			linkForums: extras.forums,
			faqEyebrow: ui.nav.faq,
			faqTitle: locale === 'en' ? 'Before you buy' : hints.status,
			faqLede: ui.common.officialLanguageNote,
			allAnswers: ui.nav.faq,
			openFullPage: ui.common.readGuide,
		},
		categoryRow: {
			hacks: ui.nav.hacks,
			esp: ui.nav.esp,
			aimbot: ui.nav.aimbot,
			radar: 'Radar',
			undetected: extras.preview,
			pricing: ui.nav.pricing,
			setup: ui.nav.setup,
			forums: extras.forums,
		},
		images: ui.images,
	});
}

async function main() {
	const enTemplate = JSON.parse(await readFile(EN_FILE, 'utf8'));

	for (const locale of LOCALES) {
		const ui = allUiStrings[locale];
		if (!ui) throw new Error(`Missing UI strings for locale: ${locale}`);

		const translation =
			locale === 'en' ? enTemplate : buildLocaleTranslation(locale, enTemplate, ui);

		const dir = path.join(OUT_DIR, locale);
		await mkdir(dir, { recursive: true });
		await writeFile(path.join(dir, 'translation.json'), JSON.stringify(translation, null, 2) + '\n', 'utf8');
		console.log('wrote', `public/locales/${locale}/translation.json`);
	}

	console.log(`\nSynced ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
