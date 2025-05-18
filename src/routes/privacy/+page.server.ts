import type { PageServerLoad } from './$types';
// import { detectBrowserLanguage } from '$lib/stores/i18n'; // Removed unused import

/**
 * Server load function for the privacy policy page
 * Adds cache-control headers and detects user's language
 */
export const load: PageServerLoad = ({ request, setHeaders }) => {
	// Set cache headers for better performance
	setHeaders({
		'Cache-Control': 'max-age=3600, s-maxage=3600', // Cache for 1 hour
		Vary: 'Accept-Language'
	});

	// Try to detect language from request headers
	const acceptLanguage = request.headers.get('accept-language') || '';
	let detectedLang = 'en';

	// Basic language detection
	if (acceptLanguage.includes('sv') || acceptLanguage.includes('sv-SE')) {
		detectedLang = 'sv';
	}

	return {
		lang: detectedLang
	};
};
