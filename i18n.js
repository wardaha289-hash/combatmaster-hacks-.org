import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const localeModules = import.meta.glob('./public/locales/*/translation.json', { eager: true });

export const supportedLngs = Object.keys(localeModules)
	.map((filePath) => filePath.match(/locales\/([^/]+)\//)?.[1])
	.filter(Boolean);

const resources = Object.fromEntries(
	Object.entries(localeModules).map(([filePath, mod]) => {
		const lng = filePath.match(/locales\/([^/]+)\//)[1];
		return [lng, { translation: mod.default ?? mod }];
	}),
);

if (!i18n.isInitialized) {
	i18n.use(initReactI18next).init({
		resources,
		fallbackLng: 'en',
		supportedLngs,
		nonExplicitSupportedLngs: true,
		load: 'languageOnly',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});
}

export default i18n;
