import { Writable, Readable } from 'svelte/store';

/**
 * Supported languages in the application
 */
export type Language = 'en' | 'sv';

/**
 * Translation key string type
 */
export type TranslationKey = string;

/**
 * Translation object mapping keys to translated strings
 */
export type TranslationObject = Record<TranslationKey, string>;

/**
 * Language store - controls the current active language
 * Use: $language to access the current language code
 */
export const language: Writable<Language>;

/**
 * Translation function
 * Get a translation by key with an optional language override
 * 
 * @param key The translation key to look up
 * @param lang Optional language override (defaults to current language)
 * @returns The translated string or the key if not found
 */
export function t(key: TranslationKey, lang?: Language): string;

/**
 * Derived translation store
 * Reactive store that provides translations based on the current language
 * 
 * Use: $tStore('key') to get a translation in templates
 */
export const tStore: Readable<(key: TranslationKey) => string>;

/**
 * Detect the browser language and return a supported language code
 * Used to set initial language based on user's browser settings
 * 
 * @returns The detected language code (en or sv)
 */
export function detectBrowserLanguage(): Language;
