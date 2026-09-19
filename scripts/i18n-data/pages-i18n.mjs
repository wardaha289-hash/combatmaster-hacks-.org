import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Combat Master Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Combat Master indetectables para Combat Master en PC. ESP wallhack, radar hack y Aimbot con mantenimiento anti-cheat. Entrega digital instantánea.', h1: 'Combat Master Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete para Combat Master en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento anti-cheat tras cada parche.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galería Combat Master Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Combat Master Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Combat Master Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Combat Master indétectables pour Combat Master sur PC. ESP wallhack, radar hack et Aimbot avec maintenance anti-cheat. Livraison numérique instantanée.', h1: 'Combat Master Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack pour Combat Master sur PC Windows: ESP wallhack, radar et Aimbot avec maintenance anti-cheat après chaque patch.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galerie Combat Master Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Combat Master Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Combat Master Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Combat Master Hacks für Combat Master auf PC. ESP Wallhack, Radar Hack und Aimbot mit anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Combat Master Hacks — ESP, Wallhack & Aimbot', intro: 'Windows PC Paket für Combat Master: ESP Wallhack, Radar und Aimbot mit anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Combat Master Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Combat Master Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Combat Master Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Combat Master indetectáveis para Combat Master no PC. ESP wallhack, radar hack e Aimbot com manutenção anti-cheat. Entrega digital instantánea.', h1: 'Combat Master Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote para Combat Master no Windows PC: ESP wallhack, radar e Aimbot com manutenção anti-cheat após cada patch.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galeria Combat Master Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Combat Master Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Combat Master Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Combat Master indetectable per Combat Master su PC. ESP wallhack, radar hack e Aimbot con manutenzione anti-cheat. Consegna digitale istantanea.', h1: 'Combat Master Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto per Combat Master su PC Windows: ESP wallhack, radar e Aimbot con manutenzione anti-cheat dopo ogni patch.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galleria Combat Master Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Combat Master Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Combat Master Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'combatmaster hacks voor Combat Master op PC. ESP wallhack, radar hack en Aimbot met anti-cheat-onderhoud. Directe digitale levering.', h1: 'Combat Master Hacks — ESP, Wallhack & Aimbot', intro: 'Windows PC pakket voor Combat Master: ESP wallhack, radar en Aimbot met anti-cheat-onderhoud na elke patch.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Combat Master Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Combat Master Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Combat Master Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'cheaty Combat Master dla Combat Master na PC. ESP wallhack, radar hack i Aimbot z konserwacją anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Combat Master Hacks — ESP, Wallhack i Aimbot', intro: 'Pakiet dla Combat Master na Windows PC: ESP wallhack, radar i Aimbot z konserwacją anti-cheat po każdym patchu.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galeria Combat Master Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Combat Master Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Combat Master Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'читы Combat Master для Combat Master на PC. ESP wallhack, radar hack и Aimbot с обслуживанием anti-cheat. Мгновенная цифровая доставка.', h1: 'Combat Master Hacks — ESP, Wallhack и Aimbot', intro: 'пакет для Combat Master на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием anti-cheat после патчей.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Галерея Combat Master Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Combat Master Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Combat Master Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Combat Master için hileler. ESP wallhack, radar hack ve Aimbot — anti-cheat bakımı. Anında dijital teslimat.', h1: 'Combat Master Hacks — ESP, Wallhack ve Aimbot', intro: 'Combat Master Windows PC paketi: ESP wallhack, radar ve Aimbot — anti-cheat bakımı dahil.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Combat Master Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Combat Master Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Combat Master Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Combat Master لـ Combat Master على PC. ESP wallhack ورadar hack وAimbot مع صيانة anti-cheat. تسليم رقمي فوري.', h1: 'Combat Master Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة لـ Combat Master على Windows PC: ESP wallhack ورadar وAimbot مع صيانة anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'معرض Combat Master Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Combat Master Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Combat Master Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Combat Master向けチート。ESP wallhack、radar hack、Aimbot、anti-cheatメンテナンス。即時デジタル配信。', h1: 'Combat Master Hacks — ESP・Wallhack・Aimbot', intro: 'Combat Master Windows PC向けパッケージ：ESP wallhack、radar、Aimbot、anti-cheatメンテナンス付き。', imageAlt: 'combatmaster hacks hero ESP aimbot wallhack', gallery: 'Combat Master Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にCombat Master Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Combat Master Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Combat Master 치트. ESP wallhack, radar hack, Aimbot, anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Combat Master Hacks — ESP, Wallhack, Aimbot', intro: 'Combat Master Windows PC 패키지: ESP wallhack, radar, Aimbot, anti-cheat 유지보수 포함.', imageAlt: 'combatmaster hacks hero ESP aimbot wallhack', gallery: 'Combat Master Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Combat Master Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Combat Master Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Combat Master 作弊。ESP wallhack、radar hack、Aimbot、anti-cheat维护。即时数字交付。', h1: 'Combat Master Hacks — ESP、Wallhack、Aimbot', intro: 'Combat Master Windows PC 套餐：ESP wallhack、radar、Aimbot，含anti-cheat维护。', imageAlt: 'combatmaster hacks hero ESP aimbot wallhack', gallery: 'Combat Master Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Combat Master Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Combat Master Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Combat Master cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Combat Master Hacks — ESP, Wallhack और Aimbot', intro: 'Combat Master Windows PC पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'combatmaster hacks hero ESP aimbot wallhack', gallery: 'Combat Master Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Combat Master Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Combat Master Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Combat Master untuk Combat Master di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan anti-cheat. Pengiriman digital instan.', h1: 'Combat Master Hacks — ESP, Wallhack & Aimbot', intro: 'Paket Combat Master di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galeri Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Combat Master Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Combat Master Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Combat Master สำหรับ Combat Master บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Combat Master Hacks — ESP, Wallhack และ Aimbot', intro: 'แพ็ก สำหรับ Combat Master บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Combat Master ESP player tags hack', gallery: 'แกลเลอรี Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Combat Master Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Combat Master Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Combat Master cho Combat Master trên PC. ESP wallhack, radar hack, Aimbot, bảo trì anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Combat Master Hacks — ESP, Wallhack & Aimbot', intro: 'Gói Combat Master trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Thư viện Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Combat Master Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Combat Master Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'чіти Combat Master для Combat Master на PC. ESP wallhack, radar hack, Aimbot, обслуговування anti-cheat. Мгновенная цифровая доставка.', h1: 'Combat Master Hacks — ESP, Wallhack і Aimbot', intro: 'пакет для Combat Master на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Галерея Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Combat Master Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Combat Master Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'combatmaster hacky pro Combat Master na PC. ESP wallhack, radar hack, Aimbot, údržba anti-cheat. Okamžité digitální doručení.', h1: 'Combat Master Hacks — ESP, Wallhack a Aimbot', intro: 'balíček pro Combat Master na Windows PC: ESP wallhack, radar, Aimbot s údržbou anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galerie Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Combat Master Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Combat Master Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Combat Master pentru Combat Master pe PC. ESP wallhack, radar hack, Aimbot, mentenanță anti-cheat. Livrare digitală instantă.', h1: 'Combat Master Hacks — ESP, Wallhack și Aimbot', intro: 'Pachet Combat Master pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță anti-cheat.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Galerie Combat Master Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Combat Master Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Combat Master Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'combatmaster hacks för Combat Master på PC. ESP wallhack, radar hack, Aimbot, anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Combat Master Hacks — ESP, Wallhack & Aimbot', intro: 'paket för Combat Master på Windows PC: ESP wallhack, radar, Aimbot med anti-cheat-underhåll.', imageAlt: 'Combat Master ESP player tags hack', gallery: 'Combat Master Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Combat Master Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'combatmaster-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'combatmaster-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'anti-cheat Maintenance Log', focus: 'game patch status and rebuild notes', altKeyword: 'updates anti-cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'anti-cheat Safe Status', focus: 'maintenance after anti-cheat patches', altKeyword: 'cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	'anti-cheat': { suffix: 'Patch Maintenance', focus: 'how game updates are handled for Combat Master hacks', altKeyword: 'anti-cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'buyer checklist', focus: '2026 combatmaster hacks checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot page', focus: 'the Combat Master hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying combatmaster hacks', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'Aimbot hack assist for Combat Master', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'combatmaster-esp': 'Cajas de jugador y wallhack',
		'combatmaster-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro anti-cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		'anti-cheat': 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'combatmaster-esp': 'Boîtes joueur et wallhack',
		'combatmaster-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'page d\'installation PC',
		updates: 'Journal anti-cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		'anti-cheat': 'Maintenance des patchs',
		'cheats-2026': 'page acheteur',
		hacks: 'page ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'combatmaster-esp': 'Spielerboxen & Wallhack',
		'combatmaster-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'anti-cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'live status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		'anti-cheat': 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot page',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'combatmaster-esp': 'Caixas de jogador e wallhack',
		'combatmaster-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro anti-cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		'anti-cheat': 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'combatmaster-esp': 'Box giocatore e wallhack',
		'combatmaster-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione anti-cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		'anti-cheat': 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'combatmaster-esp': 'Боксы игроков и wallhack',
		'combatmaster-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал anti-cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		'anti-cheat': 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Combat Master Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Combat Master Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'combatmaster-esp': { en: 'Combat Master ESP', es: 'ESP Combat Master', fr: 'ESP Combat Master', de: 'Combat Master ESP', pt: 'ESP Combat Master', it: 'ESP Combat Master', nl: 'Combat Master ESP', pl: 'ESP Combat Master', ru: 'ESP Combat Master', tr: 'Combat Master ESP', ar: 'ESP Combat Master', ja: 'Combat Master ESP', ko: 'Combat Master ESP', zh: 'Combat Master ESP', hi: 'Combat Master ESP', id: 'ESP Combat Master', th: 'Combat Master ESP', vi: 'ESP Combat Master', uk: 'ESP Combat Master', cs: 'Combat Master ESP', ro: 'ESP Combat Master', sv: 'Combat Master ESP' },
	'combatmaster-aimbot': { en: 'Combat Master Aimbot', es: 'Aimbot Combat Master', fr: 'Aimbot Combat Master', de: 'Combat Master Aimbot', pt: 'Aimbot Combat Master', it: 'Aimbot Combat Master', nl: 'Combat Master Aimbot', pl: 'Aimbot Combat Master', ru: 'Aimbot Combat Master', tr: 'Combat Master Aimbot', ar: 'Aimbot Combat Master', ja: 'Combat Master Aimbot', ko: 'Combat Master Aimbot', zh: 'Combat Master Aimbot', hi: 'Combat Master Aimbot', id: 'Aimbot Combat Master', th: 'Combat Master Aimbot', vi: 'Aimbot Combat Master', uk: 'Aimbot Combat Master', cs: 'Combat Master Aimbot', ro: 'Aimbot Combat Master', sv: 'Combat Master Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Cheats', pl: 'Cheaty', ru: 'читы', tr: 'hileler', ar: 'غش', ja: 'チート', ko: '치트', zh: '作弊', hi: 'cheats', id: 'Cheat', th: 'Cheats', vi: 'Cheat', uk: 'чіти', cs: 'cheaty', ro: 'Cheats', sv: 'cheats' },
	wallhack: { en: 'Combat Master Wallhack', es: 'Wallhack Combat Master', fr: 'Wallhack Combat Master', de: 'Combat Master Wallhack', pt: 'Wallhack Combat Master', it: 'Wallhack Combat Master', nl: 'Combat Master Wallhack', pl: 'Wallhack Combat Master', ru: 'Wallhack Combat Master', tr: 'Combat Master Wallhack', ar: 'Wallhack Combat Master', ja: 'Combat Master Wallhack', ko: 'Combat Master Wallhack', zh: 'Combat Master Wallhack', hi: 'Combat Master Wallhack', id: 'Wallhack Combat Master', th: 'Combat Master Wallhack', vi: 'Wallhack Combat Master', uk: 'Wallhack Combat Master', cs: 'Combat Master Wallhack', ro: 'Wallhack Combat Master', sv: 'Combat Master Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'anti-cheat': { en: 'Anti-Cheat Bypass', es: 'Bypass anti-cheat', fr: 'Bypass anti-cheat', de: 'Anti-Cheat Bypass', pt: 'Bypass anti-cheat', it: 'Bypass anti-cheat', nl: 'Anti-Cheat Bypass', pl: 'Bypass anti-cheat', ru: 'Bypass anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass anti-cheat', ja: 'Anti-Cheat Bypass', ko: 'Anti-Cheat Bypass', zh: 'Anti-Cheat Bypass', hi: 'Anti-Cheat Bypass', id: 'Bypass anti-cheat', th: 'Anti-Cheat Bypass', vi: 'Bypass anti-cheat', uk: 'Bypass anti-cheat', cs: 'Anti-Cheat Bypass', ro: 'Bypass anti-cheat', sv: 'Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Combat Master Hacks 2026', es: 'Trucos Combat Master 2026', fr: 'Triches Combat Master 2026', de: 'Combat Master Hacks 2026', pt: 'Cheats Combat Master 2026', it: 'Cheat Combat Master 2026', nl: 'Combat Master Hacks 2026', pl: 'Cheaty Combat Master 2026', ru: 'Читы Combat Master 2026', tr: 'Combat Master Hileleri 2026', ar: 'غش Combat Master 2026', ja: 'Combat Master Hacks 2026', ko: 'Combat Master Hacks 2026', zh: 'Combat Master作弊 2026', hi: 'Combat Master Hacks 2026', id: 'Cheat Combat Master 2026', th: 'Combat Master Hacks 2026', vi: 'Cheat Combat Master 2026', uk: 'Чіти Combat Master 2026', cs: 'combatmaster hacky 2026', ro: 'Cheats Combat Master 2026', sv: 'Combat Master Hacks 2026' },
	hacks: { en: 'Combat Master Hacks', es: 'Trucos Combat Master', fr: 'Triches Combat Master', de: 'Combat Master Hacks', pt: 'Cheats Combat Master', it: 'Cheat Combat Master', nl: 'Combat Master Hacks', pl: 'Cheaty Combat Master', ru: 'Читы Combat Master', tr: 'Combat Master Hileleri', ar: 'غش Combat Master', ja: 'Combat Master Hacks', ko: 'Combat Master Hacks', zh: 'Combat Master作弊', hi: 'Combat Master Hacks', id: 'Cheat Combat Master', th: 'Combat Master Hacks', vi: 'Cheat Combat Master', uk: 'Чіти Combat Master', cs: 'combatmaster hacky', ro: 'Cheats Combat Master', sv: 'Combat Master Hacks' },
	'cheat-download': { en: 'Combat Master Cheat Download', es: 'Descarga Combat Master Hacks', fr: 'Téléchargement Combat Master Hacks', de: 'Combat Master Cheat Download', pt: 'Download Combat Master Hacks', it: 'Download Combat Master Hacks', nl: 'Combat Master Cheat Download', pl: 'Pobieranie Combat Master Hacks', ru: 'Скачать Combat Master Hacks', tr: 'Combat Master Hile İndir', ar: 'تحميل Combat Master Hacks', ja: 'Combat Master Cheat Download', ko: 'Combat Master Cheat Download', zh: 'Combat Master作弊下载', hi: 'Combat Master Cheat Download', id: 'Download Cheat Combat Master', th: 'ดาวน์โหลด Combat Master Hacks', vi: 'Tải Cheat Combat Master', uk: 'Завантаження Combat Master Hacks', cs: 'Stáhnout Combat Master Hacks', ro: 'Descărcare Combat Master Hacks', sv: 'Combat Master Cheat Download' },
	'mod-menu': { en: 'Combat Master Mod Menu', es: 'Menú mod Combat Master', fr: 'Menu mod Combat Master', de: 'Combat Master Mod-Menü', pt: 'Menu mod Combat Master', it: 'Mod menu Combat Master', nl: 'Combat Master Mod Menu', pl: 'Mod menu Combat Master', ru: 'Мод-меню Combat Master', tr: 'Combat Master Mod Menü', ar: 'قائمة مود Combat Master', ja: 'Combat Master Mod Menu', ko: 'Combat Master 모드 메뉴', zh: 'Combat Master修改菜单', hi: 'Combat Master Mod Menu', id: 'Menu mod Combat Master', th: 'เมนูมอด Combat Master', vi: 'Mod menu Combat Master', uk: 'Мод-меню Combat Master', cs: 'Combat Master mod menu', ro: 'Meniu mod Combat Master', sv: 'Combat Master Mod-meny' },
	'soft-aim': { en: 'Combat Master Soft Aim', es: 'Soft aim Combat Master', fr: 'Soft aim Combat Master', de: 'Combat Master Soft Aim', pt: 'Soft aim Combat Master', it: 'Soft aim Combat Master', nl: 'Combat Master Soft Aim', pl: 'Soft aim Combat Master', ru: 'Soft aim Combat Master', tr: 'Combat Master Soft Aim', ar: 'Soft aim Combat Master', ja: 'Combat Master Soft Aim', ko: 'Combat Master Soft Aim', zh: 'Combat Master Soft Aim', hi: 'Combat Master Soft Aim', id: 'Soft aim Combat Master', th: 'Combat Master Soft Aim', vi: 'Soft aim Combat Master', uk: 'Soft aim Combat Master', cs: 'Combat Master Soft Aim', ro: 'Soft aim Combat Master', sv: 'Combat Master Soft Aim' },
	'best-cheats': { en: 'Best Combat Master Hacks', es: 'Mejores trucos Combat Master', fr: 'Meilleures triches Combat Master', de: 'Beste Combat Master Hacks', pt: 'Melhores cheats Combat Master', it: 'Migliori cheat Combat Master', nl: 'Beste Combat Master Hacks', pl: 'Najlepsze cheaty Combat Master', ru: 'Лучшие читы Combat Master', tr: 'En İyi Combat Master Hileleri', ar: 'أفضل غش Combat Master', ja: '最強Combat Masterチート', ko: '최고의 Combat Master 치트', zh: '最佳Combat Master作弊', hi: 'सर्वश्रेष्ठ Combat Master Hacks', id: 'Cheat Combat Master terbaik', th: 'Cheat Combat Master ที่ดีที่สุด', vi: 'Cheat Combat Master tốt nhất', uk: 'Найкращі чіти Combat Master', cs: 'Nejlepší combatmaster hacky', ro: 'Cele mai bune cheats Combat Master', sv: 'Bästa Combat Master Hacks' },
	'aimbot-hack': { en: 'Combat Master Aimbot Hack', es: 'Hack aimbot Combat Master', fr: 'Hack aimbot Combat Master', de: 'Combat Master Aimbot Hack', pt: 'Hack aimbot Combat Master', it: 'Hack aimbot Combat Master', nl: 'Combat Master Aimbot Hack', pl: 'Hack aimbot Combat Master', ru: 'Хак aimbot Combat Master', tr: 'Combat Master Aimbot Hilesi', ar: 'هاك Aimbot Combat Master', ja: 'Combat Master Aimbot Hack', ko: 'Combat Master 에임봇 핵', zh: 'Combat Master自瞄外挂', hi: 'Combat Master Aimbot Hack', id: 'Hack aimbot Combat Master', th: 'Hack Aimbot Combat Master', vi: 'Hack aimbot Combat Master', uk: 'Хак aimbot Combat Master', cs: 'Combat Master aimbot hack', ro: 'Hack aimbot Combat Master', sv: 'Combat Master Aimbot Hack' },
	'esp-hack': { en: 'Combat Master ESP Hack', es: 'Hack ESP Combat Master', fr: 'Hack ESP Combat Master', de: 'Combat Master ESP Hack', pt: 'Hack ESP Combat Master', it: 'Hack ESP Combat Master', nl: 'Combat Master ESP Hack', pl: 'Hack ESP Combat Master', ru: 'Хак ESP Combat Master', tr: 'Combat Master ESP Hilesi', ar: 'هاك ESP Combat Master', ja: 'Combat Master ESP Hack', ko: 'Combat Master ESP 핵', zh: 'Combat Master ESP外挂', hi: 'Combat Master ESP Hack', id: 'Hack ESP Combat Master', th: 'Hack ESP Combat Master', vi: 'Hack ESP Combat Master', uk: 'Хак ESP Combat Master', cs: 'Combat Master ESP hack', ro: 'Hack ESP Combat Master', sv: 'Combat Master ESP Hack' },
	'unlock-all': { en: 'Combat Master Unlock All', es: 'Unlock all Combat Master', fr: 'Unlock all Combat Master', de: 'Combat Master Unlock All', pt: 'Unlock all Combat Master', it: 'Unlock all Combat Master', nl: 'Combat Master Unlock All', pl: 'Unlock all Combat Master', ru: 'Unlock all Combat Master', tr: 'Combat Master Unlock All', ar: 'Unlock all Combat Master', ja: 'Combat Master Unlock All', ko: 'Combat Master Unlock All', zh: 'Combat Master Unlock All', hi: 'Combat Master Unlock All', id: 'Unlock all Combat Master', th: 'Combat Master Unlock All', vi: 'Unlock all Combat Master', uk: 'Unlock all Combat Master', cs: 'Combat Master Unlock All', ro: 'Unlock all Combat Master', sv: 'Combat Master Unlock All' },
};

const CTA2_HREF = {
	'combatmaster-esp': '/combatmaster-hacks/',
	'combatmaster-aimbot': '/combatmaster-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/combatmaster-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/combatmaster-hacks/',
	wallhack: '/combatmaster-esp/',
	radar: '/combatmaster-esp/',
	'anti-cheat': '/updates/',
	'cheats-2026': '/combatmaster-hacks/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/combatmaster-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/combatmaster-aimbot/',
	'esp-hack': '/combatmaster-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Combat Master Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Combat Master Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for combatmasterhacks.org and Combat Master licenses.`),
		imageAlt: 'combatmaster hacks',
		galleryTitle: 'combatmaster hacks',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on combatmasterhacks.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@combatmasterhacks.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
