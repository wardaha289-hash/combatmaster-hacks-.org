import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FaqItem = { slug: string; question: string; answer: string; href: string };

type Props = {
	locale: string;
	faqs: FaqItem[];
};

const categories = [
	{
		titleKey: 'homeSeo.catFeatures',
		hintKey: 'homeSeo.catFeaturesHint',
		accent: 'violet',
		links: [
			{ href: '/features/', labelKey: 'homeSeo.linkAllFeatures' },
			{ href: '/combatmaster-esp/', labelKey: 'homeSeo.linkEsp' },
			{ href: '/combatmaster-aimbot/', labelKey: 'homeSeo.linkAimbot' },
			{ href: '/combatmaster-radar-hack/', labelKey: 'homeSeo.linkRadar' },
		],
	},
	{
		titleKey: 'homeSeo.catStatus',
		hintKey: 'homeSeo.catStatusHint',
		accent: 'violet',
		links: [
			{ href: '/updates/', labelKey: 'homeSeo.linkLiveStatus' },
			{ href: '/combatmaster-hacks/', labelKey: 'homeSeo.linkUndetected' },
			{ href: '/setup/', labelKey: 'homeSeo.linkSetup' },
			{ href: '/faq/', labelKey: 'homeSeo.linkFaq' },
		],
	},
	{
		titleKey: 'homeSeo.catStore',
		hintKey: 'homeSeo.catStoreHint',
		accent: 'violet',
		links: [
			{ href: '/pricing/', labelKey: 'homeSeo.linkBuyNow' },
			{ href: '/pricing/', labelKey: 'homeSeo.linkPlans' },
			{ href: '/reviews/', labelKey: 'homeSeo.linkReviews' },
			{ href: '/combatmaster-hacks/', labelKey: 'homeSeo.linkPreview' },
		],
	},
	{
		titleKey: 'homeSeo.catHelp',
		hintKey: 'homeSeo.catHelpHint',
		accent: 'violet',
		links: [
			{ href: '/support/', labelKey: 'homeSeo.linkSupport' },
			{ href: '/setup/', labelKey: 'homeSeo.linkSetupGuide' },
			{ href: '/forums/', labelKey: 'homeSeo.linkForums' },
			{ href: '/faq/', labelKey: 'homeSeo.linkFaq' },
		],
	},
] as const;

function HomeSeoInner({ faqs }: Props) {
	const { t } = useTranslation();

	return (
		<section className="home-seo shell" aria-labelledby="home-seo-title">
			<h2 id="home-seo-title" className="home-seo__sr-title">
				{t('homeSeo.title')}
			</h2>

			<div className="home-seo__cats">
				{categories.map((cat) => (
					<nav
						key={cat.titleKey}
						className={`home-seo__cat home-seo__cat--${cat.accent}`}
						aria-label={t(cat.titleKey)}
					>
						<header className="home-seo__cat-head">
							<h3>{t(cat.titleKey)}</h3>
							<p>{t(cat.hintKey)}</p>
						</header>
						<ul>
							{cat.links.map((link) => (
								<li key={link.href + link.labelKey}>
									<a href={link.href}>{t(link.labelKey)}</a>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>

			<section className="home-seo__faq" aria-labelledby="home-faq-title">
				<header className="home-seo__faq-head">
					<div>
						<p className="home-seo__eyebrow">{t('homeSeo.faqEyebrow')}</p>
						<h3 id="home-faq-title">{t('homeSeo.faqTitle')}</h3>
						<p className="home-seo__faq-lede">{t('homeSeo.faqLede')}</p>
					</div>
					<a className="home-seo__faq-link" href="/faq/">
						{t('homeSeo.allAnswers')}
					</a>
				</header>
				<div className="home-seo__faq-list">
					{faqs.map((item) => (
						<details className="home-seo__item" id={item.slug} key={item.slug}>
							<summary>
								<span>{item.question}</span>
								<span className="home-seo__chev" aria-hidden="true" />
							</summary>
							<div className="home-seo__item-body">
								<p>{item.answer}</p>
								<a className="home-seo__item-link" href={item.href}>
									{t('homeSeo.openFullPage')}
								</a>
							</div>
						</details>
					))}
				</div>
			</section>
		</section>
	);
}

export default function HomeSeoApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeSeoInner {...props} />
		</I18nProvider>
	);
}
