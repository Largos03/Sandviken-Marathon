import type { PageServerLoad } from './$types';

/**
 * Server load function for the privacy policy page
 * Adds cache-control headers for performance
 */
export const load: PageServerLoad = ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=3600, s-maxage=3600',
		Vary: 'Accept-Language'
	});

	return {};
};
