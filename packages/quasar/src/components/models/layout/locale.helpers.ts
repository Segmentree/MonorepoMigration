export type Locale = 'en' | 'nl';

export interface I18nConditioned {
  locales: Locale[];
}

export const byLocale = (locale: Locale) => (item: I18nConditioned): boolean =>
  item.locales.includes(locale);
