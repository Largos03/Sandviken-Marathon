import { browser } from '$app/environment';
import { language, detectBrowserLanguage } from '$lib/stores/i18n.js';

export const ssr = false; // Disable server-side rendering

// Handle initial language loading
export function load() {
	// Set default language
	let currentLanguage = 'en';

	if (browser) {
		// Load language from localStorage if available
		const savedLanguage = localStorage.getItem('language');
		if (savedLanguage) {
			currentLanguage = savedLanguage;
		} else {
			// Detect browser language if no saved preference
			currentLanguage = detectBrowserLanguage();
		}

		// Set the language in the store
		language.set(currentLanguage);
	}

	return {
		// Make the language available to all pages
		lang: currentLanguage
	};
}
