import type { PageServerLoad } from './$types';

// Sample data - replace with actual database query later
const sampleResults = {
	'2024': [
		{
			position: 1,
			name: 'Emil Gustafsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:43:12'
		},
		{
			position: 2,
			name: 'Lisa Andersson',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:45:37'
		},
		{
			position: 3,
			name: 'Anton Berg',
			country: 'Sweden',
			category: 'menCategoryYoung',
			time: '2:48:21'
		},
		{
			position: 4,
			name: 'Maria Johansson',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:51:45'
		},
		{
			position: 5,
			name: 'Karl Nilsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:53:18'
		},
		{
			position: 6,
			name: 'Erik Lindberg',
			country: 'Sweden',
			category: 'menCategoryVeteran',
			time: '2:55:29'
		},
		{
			position: 7,
			name: 'Anna Svensson',
			country: 'Sweden',
			category: 'womenCategoryVeteran',
			time: '2:58:42'
		},
		{
			position: 8,
			name: 'Johan Larsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '3:01:15'
		},
		{
			position: 9,
			name: 'Sara Ekström',
			country: 'Sweden',
			category: 'womenCategory',
			time: '3:03:27'
		},
		{
			position: 10,
			name: 'Per Sjögren',
			country: 'Sweden',
			category: 'menCategory',
			time: '3:05:39'
		}
	],
	'2023': [
		{
			position: 1,
			name: 'Karl Nilsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:41:33'
		},
		{
			position: 2,
			name: 'Maria Johansson',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:44:18'
		},
		{
			position: 3,
			name: 'Erik Lindberg',
			country: 'Sweden',
			category: 'menCategoryVeteran',
			time: '2:47:55'
		},
		{
			position: 4,
			name: 'Lisa Andersson',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:50:22'
		},
		{
			position: 5,
			name: 'Johan Larsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:52:47'
		},
		{
			position: 6,
			name: 'Sara Ekström',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:54:30'
		},
		{
			position: 7,
			name: 'Michael Bergström',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:56:15'
		},
		{
			position: 8,
			name: 'Linda Norén',
			country: 'Finland',
			category: 'womenCategory',
			time: '2:58:42'
		}
	],
	'2022': [
		{
			position: 1,
			name: 'Erik Lindberg',
			country: 'Sweden',
			category: 'menCategoryVeteran',
			time: '2:42:15'
		},
		{
			position: 2,
			name: 'Anna Svensson',
			country: 'Sweden',
			category: 'womenCategoryVeteran',
			time: '2:45:33'
		},
		{
			position: 3,
			name: 'Karl Nilsson',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:47:41'
		},
		{
			position: 4,
			name: 'Lisa Andersson',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:51:19'
		},
		{
			position: 5,
			name: 'Fredrik Hammar',
			country: 'Norway',
			category: 'menCategory',
			time: '2:53:27'
		},
		{
			position: 6,
			name: 'Helena Wikström',
			country: 'Sweden',
			category: 'womenCategory',
			time: '2:56:02'
		},
		{
			position: 7,
			name: 'Jonas Bergqvist',
			country: 'Sweden',
			category: 'menCategory',
			time: '2:58:45'
		}
	]
};

// Map of available result downloads by year
const resultDownloads = {
	'2024': '/downloads/results-2024.pdf',
	'2023': '/downloads/results-2023.pdf',
	'2022': '/downloads/results-2022.pdf'
};

export const load: PageServerLoad = async ({ url }) => {
	const year = url.searchParams.get('year') || '2024';

	// Simulate a small delay to show loading state
	await new Promise((resolve) => setTimeout(resolve, 500));

	return {
		results: sampleResults[year as keyof typeof sampleResults] || [],
		resultDownload: resultDownloads[year as keyof typeof resultDownloads] || null,
		availableYears: Object.keys(sampleResults).sort().reverse()
	};
};
