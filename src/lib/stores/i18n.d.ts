import { Writable, Readable } from 'svelte/store';

// Define types
export type Language = 'en' | 'sv';
export type TranslationKey = string;
export type TranslationObject = Record<string, string>;

// Language store
export const language: Writable<Language>;

// Translations dictionary
export const translations: {
  [K in Language]: TranslationObject;
};

// Translation function
export function t(key: TranslationKey, lang?: Language): string;

// Derived translation store
export const tStore: Readable<(key: TranslationKey) => string>;

// Browser language detection
export function detectBrowserLanguage(): Language; 