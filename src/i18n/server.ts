import en from '../../public/locales/en/translation.json';

const localeModules = import.meta.glob('../../public/locales/*/translation.json', {
	eager: true,
	import: 'default',
});

const catalogs: Record<string, typeof en> = { en };

for (const [filePath, catalog] of Object.entries(localeModules)) {
	const lng = filePath.match(/locales\/([^/]+)\//)?.[1];
	if (lng) catalogs[lng] = catalog as typeof en;
}

function lookup(obj: unknown, path: string): string | undefined {
	const parts = path.split('.');
	let cur: unknown = obj;
	for (const part of parts) {
		if (!cur || typeof cur !== 'object') return undefined;
		cur = (cur as Record<string, unknown>)[part];
	}
	return typeof cur === 'string' ? cur : undefined;
}

/** Sync translator for Astro frontmatter (SSR). React islands use useTranslation(). */
export function getT(locale: string) {
	const catalog = catalogs[locale] ?? catalogs.en;
	return (key: string, vars?: Record<string, string | number>) => {
		let value = lookup(catalog, key) ?? lookup(catalogs.en, key) ?? key;
		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				value = value.replaceAll(`{{${k}}}`, String(v));
			}
		}
		return value;
	};
}
