import type { PageServerLoad } from './$types';

/**
 * Server load function for the privacy policy page
 * Adds cache-control headers and detects user's language
 */
export const load: PageServerLoad = ({ request, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=3600, s-maxage=3600',
		Vary: 'Accept-Language'
	});

	const acceptLanguage = request.headers.get('accept-language') || '';
	let detectedLang = 'en';

	if (acceptLanguage.includes('sv') || acceptLanguage.includes('sv-SE')) {
		detectedLang = 'sv';
	}

	return {
		lang: detectedLang
	};
};
