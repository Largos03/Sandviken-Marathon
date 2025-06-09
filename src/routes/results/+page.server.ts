import type { PageServerLoad } from './$types';

// Results data per year (could be loaded from a file or DB in the future)
const resultsData: Record<string, Array<{ position: number; name: string; country: string; category: string; time: string }>> = {
	'2026': [
		{ position: 1, name: 'Emil Gustafsson', country: 'Sweden', category: 'menCategory', time: '2:43:12' },
		{ position: 2, name: 'Olle Zetterberg', country: 'Sweden', category: 'menCategory', time: '2:45:37' },
		{ position: 3, name: 'Anton Bergqvist', country: 'Sweden', category: 'menCategoryYoung', time: '2:48:21' },
		{ position: 4, name: 'Kevin Mänteniamy', country: 'Sweden', category: 'menCategory', time: '2:51:45' }
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
