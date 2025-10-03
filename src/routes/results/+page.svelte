<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tStore } from '$lib/stores/i18n';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faSort,
		faDownload,
		faSearch,
		faTrophy,
		faRunning,
		faStopwatch,
		faMedal,
		faGlobe
	} from '@fortawesome/free-solid-svg-icons';
	import { StatsCard } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	// Define the result type
	type Result = {
		position: number;
		name: string;
		country: string;
		category: string; // Added category field
		time: string;
	};

	export let data: { results: Result[]; resultDownload: string | null; availableYears: string[] };

	$: t = $tStore;

	let searchQuery = '';
	let sortField: keyof Result | 'position' = 'position';
	let sortDirection: 'asc' | 'desc' = 'asc';

	$: results = data.results || [];
	$: resultDownload = data.resultDownload;

	$: filteredResults = results.filter(
		(result: Result) =>
			result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			result.country.toLowerCase().includes(searchQuery.toLowerCase())
	);

	$: sortedResults = [...filteredResults].sort((a: Result, b: Result) => {
		const aValue = a[sortField as keyof Result];
		const bValue = b[sortField as keyof Result];

		if (sortField === 'position') {
			return sortDirection === 'asc'
				? Number(aValue) - Number(bValue)
				: Number(bValue) - Number(aValue);
		} else if (sortField === 'time') {
			const timeA = String(aValue);
			const timeB = String(bValue);
			return sortDirection === 'asc' ? timeA.localeCompare(timeB) : timeB.localeCompare(timeA);
		}

		const valA = String(aValue);
		const valB = String(bValue);
		return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
	});

	const handleSort = (field: keyof Result) => {
		if (sortField === field) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortField = field;
			sortDirection = 'asc';
		}
	};

	const getMedalColor = (position: number) => {
		if (position === 1) return 'bg-yellow-400';
		if (position === 2) return 'bg-gray-300';
		if (position === 3) return 'bg-amber-600';
		return 'bg-gray-100';
	};
</script>

<svelte:head>
	<title>{t('resultsPageTitle')}</title>
	<meta name="description" content={t('resultsDescription')} />
</svelte:head>

<div class="min-h-screen bg-gray-50" in:fade>
	<div class="bg-hero-dark">
		<Container className="relative z-10 py-8 md:py-12">
			<SectionHeading level={1} className="text-white mb-6">{t('resultsTitle')}</SectionHeading>
			<div class="hero-accent-line mb-8"></div>
			<p class="max-w-3xl text-xl leading-relaxed font-light md:text-2xl">{t('resultsIntro')}</p>
		</Container>
	</div>

	<main class="relative bg-gray-50 py-16 md:py-24">
		<Container>
			<!-- Race stats cards -->
			<ResponsiveGrid cols="1 md:2 lg:4" gap="6" className="mb-12">
				<StatsCard icon={faRunning} value={results.length.toString()} label={t('totalRunners')} />

				<StatsCard
					icon={faMedal}
					value={results.length > 0 ? results[0].name : '—'}
					label={t('winner')}
				/>

				<StatsCard
					icon={faStopwatch}
					value={results.length > 0 ? results[0].time : '—'}
					label={t('bestTime')}
				/>

				<StatsCard
					icon={faGlobe}
					value={[...new Set(results.map((r) => r.country))].length.toString()}
					label={t('countries')}
				/>
			</ResponsiveGrid>

			<!-- Main results section -->
			<div class="mb-8 rounded-2xl border border-red-500/10 bg-white p-8 shadow-sm">
				<h2 class="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-900">
					<FontAwesomeIcon icon={faTrophy} class="text-red-500" />
					{t('resultsTitle')}
				</h2>

				<!-- Search -->
				<div class="mb-8">
					<div class="relative max-w-2xl">
						<FontAwesomeIcon
							icon={faSearch}
							class="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
						/>
						<input
							type="text"
							bind:value={searchQuery}
							placeholder={t('Search_by_Name_or_Country')}
							class="w-full rounded-lg border py-3 pr-4 pl-10 transition-shadow focus:ring-2 focus:ring-red-500/50 focus:outline-none"
						/>
					</div>
				</div>

				<!-- Results table -->
				<div class="mb-4 overflow-hidden rounded-xl border border-red-500/10">
					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									{#each ['position', 'name', 'country', 'time'] as field (field)}
										<th
											scope="col"
											class="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-red-50/50"
											on:click={() => handleSort(field as keyof Result)}
										>
											<div class="flex items-center gap-2">
												{t(field)}
												<span class={sortField === field ? 'text-red-500/70' : 'text-gray-400'}>
													<FontAwesomeIcon icon={faSort} />
												</span>
											</div>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								{#each sortedResults as result (result.position)}
									<tr class="transition-colors hover:bg-gray-50">
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div
													class={`h-8 w-8 flex-shrink-0 rounded-full ${getMedalColor(result.position)} flex items-center justify-center font-bold text-white shadow-sm`}
												>
													{#if result.position <= 3}
														<FontAwesomeIcon icon={faMedal} />
													{:else}
														{result.position}
													{/if}
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm font-medium text-gray-900">{result.name}</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm text-gray-700">{t(result.country.toLowerCase())}</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="font-mono text-sm font-medium">{result.time}</div>
										</td>
									</tr>
								{/each}
								{#if sortedResults.length === 0}
									<tr>
										<td colspan="4" class="px-6 py-10 text-center text-gray-500">
											<div class="flex flex-col items-center gap-4">
												<FontAwesomeIcon icon={faSearch} class="text-3xl text-red-300 opacity-30" />
												<div>
													{searchQuery ? t('noSearchResults') : t('noResults')}
												</div>
											</div>
										</td>
									</tr>
								{/if}
							</tbody>
						</table>
					</div>
				</div>

				{#if resultDownload}
					<div
						class="mt-8 flex flex-col gap-4 border-t border-red-500/10 pt-8 sm:flex-row sm:items-center"
					>
						<div>
							<h3 class="flex items-center gap-2 font-medium text-gray-900">
								<FontAwesomeIcon icon={faDownload} class="text-red-500/70" />
								{t('downloadResults')}
							</h3>
							<p class="mt-1 text-sm text-gray-600">
								{t('downloadResultsDesc')}
							</p>
						</div>
						<div class="sm:ml-auto">
							<a href={resultDownload} class="btn-primary" download>
								<FontAwesomeIcon icon={faDownload} />
							</a>
						</div>
					</div>
				{/if}
			</div>
		</Container>
	</main>
</div>
