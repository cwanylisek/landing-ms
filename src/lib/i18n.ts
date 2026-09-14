import plTranslations from "./translations/pl.json";
import enTranslations from "./translations/en.json";

export const SUPPORTED_LOCALES = ["pl", "en"] as const;
export const DEFAULT_LOCALE: Locale = "pl";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const dictionaries: Record<Locale, typeof plTranslations> = {
  pl: plTranslations,
  en: enTranslations,
};

export function getTranslations(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}
