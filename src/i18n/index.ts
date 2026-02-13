/**
 * Simple i18n for UI and input text translations.
 * Usage: t('home.title') or t('input.placeholder')
 */

export type Locale = 'en' | 'es' | 'fr' | 'de';

export const supportedLocales: Locale[] = ['en', 'es', 'fr', 'de'];

const translations: Record<Locale, Record<string, unknown>> = {
  en: require('./locales/en.json'),
  es: require('./locales/es.json'),
  fr: require('./locales/fr.json'),
  de: require('./locales/de.json'),
};

let currentLocale: Locale = 'en';

export function setLocale(locale: Locale): void {
  if (supportedLocales.includes(locale)) {
    currentLocale = locale;
  }
}

export function getLocale(): Locale {
  return currentLocale;
}

/**
 * Get a translated string by key (e.g. 'home.title' or 'input.placeholder').
 * Falls back to English if the key is missing for the current locale.
 */
export function t(key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[currentLocale];
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  if (value === undefined) {
    value = translations.en;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
  }
  return typeof value === 'string' ? value : key;
}

export { I18nProvider, useTranslation } from './I18nContext';
