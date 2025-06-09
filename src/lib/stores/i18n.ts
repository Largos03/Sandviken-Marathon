import { writable, derived } from 'svelte/store';
import { commonTranslations } from './common';
import { aboutTranslations } from './about';
import { contactTranslations } from './contact';
import { courseTranslations } from './course';
import { homeTranslations } from './home';
import { privacyTranslations } from './privacy';
import { registerTranslations } from './register';
import { resultsTranslations } from './results';
import { routeTranslations } from './route';
import { scheduleTranslations } from './schedule';
import { tabsTranslations } from './tabs';
import { termsTranslations } from './terms';

// Define types
export type Language = 'en' | 'sv';
export type TranslationKey = string;
export type TranslationObject = Record<TranslationKey, string>;

// Combine translations from all files
const combinedTranslations: Record<Language, TranslationObject> = {
  en: {
    ...commonTranslations.en,
    ...aboutTranslations.en,
    ...contactTranslations.en,
    ...courseTranslations.en,
    ...homeTranslations.en,
    ...privacyTranslations.en,
    ...registerTranslations.en,
    ...resultsTranslations.en,
    ...routeTranslations.en,
    ...scheduleTranslations.en,
    ...tabsTranslations.en,
    ...termsTranslations.en
  },
  sv: {
    ...commonTranslations.sv,
    ...aboutTranslations.sv,
    ...contactTranslations.sv,
    ...courseTranslations.sv,
    ...homeTranslations.sv,
    ...privacyTranslations.sv,
    ...registerTranslations.sv,
    ...resultsTranslations.sv,
    ...routeTranslations.sv,
    ...scheduleTranslations.sv,
    ...tabsTranslations.sv,
    ...termsTranslations.sv
  }
};

// Default language
export const language = writable<Language>('en');

/**
 * Helper function to get translation with proper type safety
 * @param key The translation key to look up
 * @param lang Optional language override (defaults to current store value)
 * @returns The translated string or the key if not found
 */
export function t(key: TranslationKey, lang?: Language): string {
	if (!key) return '';

	const currentLang = lang || 'en';

	// Try to get translation in current language
	if (combinedTranslations[currentLang] && combinedTranslations[currentLang][key]) {
		return combinedTranslations[currentLang][key];
	}

	// Fallback to English if current language is not English
	if (currentLang !== 'en' && combinedTranslations['en'] && combinedTranslations['en'][key]) {
		return combinedTranslations['en'][key];
	}

	// Return the key as last resort
	return key;
}

/**
 * A derived store that provides the current translation function
 * This allows components to access translations reactively
 */
export const tStore = derived(
	language,
	($language) => (key: TranslationKey) =>
		combinedTranslations[$language]?.[key] || combinedTranslations['en']?.[key] || key
);

/**
 * Detect the browser language and return a supported language code
 * @returns The detected language code (en or sv)
 */
export function detectBrowserLanguage(): Language {
	if (typeof window === 'undefined') {
		return 'en'; // Default to English on the server
	}

	// Get browser language
	const browserLang = navigator.language.split('-')[0].toLowerCase();

	// Check if it's one of our supported languages
	if (browserLang === 'sv') {
		return 'sv';
	}

	// Default to English
	return 'en';
}