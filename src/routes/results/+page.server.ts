import type { PageServerLoad } from './$types';

const resultsData: Record<string, Array<{ position: number; name: string; country: string; category: string; time: string }>> = {
	'2026': [

	]
};

const resultDownloads: Record<string, string> = {
	'2026': '/downloads/results-2024.pdf',
};

export const load: PageServerLoad = async ({ url }) => {
	const year = url.searchParams.get('year') || '2026';
	return {
		results: resultsData[year] || [],
		resultDownload: resultDownloads[year] || null,
		availableYears: Object.keys(resultsData).sort().reverse()
	};
};
