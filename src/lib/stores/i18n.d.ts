import { Writable } from 'svelte/store';

export type Language = 'en' | 'sv';

// Define the structure of the translations object
export interface TranslationObject {
  [key: string]: string;
}

export const language: Writable<Language>;
export const translations: {
  [K in Language]: TranslationObject;
};
export function t(key: string, lang?: Language): string;
export function detectBrowserLanguage(): Language; 