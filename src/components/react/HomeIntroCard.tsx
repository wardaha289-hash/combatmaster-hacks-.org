import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	previewSrc: string;
	previewSrcSet: string;
};

function HomeIntroCardInner({ previewSrc, previewSrcSet }: Props) {
	const { t } = useTranslation();

	return (
		<section className="home-intro shell" aria-labelledby="home-intro-title">
			<div className="home-intro__grid">
				<div className="home-intro__copy">
					{t('home.introTag') ? <p className="home-intro__eyebrow">{t('home.introTag')}</p> : null}
					<h2 id="home-intro-title">{t('home.aboutTitle')}</h2>
					<p className="home-intro__body">{t('home.introLede')}</p>
					<p className="home-intro__links">
						{t('homeSeo.ledeBefore')}{' '}
						<a href="/features/">{t('homeSeo.linkFeaturesPage')}</a>
						{t('homeSeo.ledeMid')}
						<a href="/combatmaster-esp/">{t('homeSeo.linkEspGuide')}</a>
						{t('homeSeo.ledeMid')}
						<a href="/combatmaster-aimbot/">{t('homeSeo.linkAimbotGuide')}</a>
						{t('homeSeo.ledeAnd')}
						<a href="/updates/">{t('homeSeo.linkStatusPage')}</a>
						{t('homeSeo.ledeAfter')}
					</p>
				</div>
				<figure className="home-intro__preview">
					<img
						src={previewSrc}
						srcSet={previewSrcSet || undefined}
						width={480}
						height={270}
						loading="lazy"
						decoding="async"
						alt={t('homeSeo.previewAlt')}
					/>
					<figcaption className="home-intro__preview-badge">{t('homeSeo.previewBadge')}</figcaption>
				</figure>
			</div>
		</section>
	);
}

export default function HomeIntroCardApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeIntroCardInner {...props} />
		</I18nProvider>
	);
}
