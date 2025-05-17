<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { language, tStore } from '$lib/stores/i18n.js';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { 
        faSort, 
        faSortUp, 
        faSortDown, 
        faSpinner, 
        faDownload, 
        faSearch,
        faTrophy,
        faRunning,
        faStopwatch,
        faMedal,
        faGlobe
    } from '@fortawesome/free-solid-svg-icons';
    
    // UI Components
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
    
    // Define the result type
    type Result = {
        position: number;
        name: string;
        country: string;
        time: string;
    };

    // Import page data
    export let data;
    
    // Use the derived translation store
    $: t = $tStore;

    let visible = false;
    let loading = false;
    let error = '';
    let searchQuery = '';
    let sortField = 'position';
    let sortDirection: 'asc' | 'desc' = 'asc';
    
    // Use server data for results (default to latest year)
    $: results = data.results || [];
    $: resultDownload = data.resultDownload;
    
    $: filteredResults = results
        .filter(result => 
            result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.country.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
    $: sortedResults = [...filteredResults].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        
        if (sortField === 'position') {
            return sortDirection === 'asc' 
                ? Number(aValue) - Number(bValue)
                : Number(bValue) - Number(aValue);
        } else if (sortField === 'time') {
            return sortDirection === 'asc' 
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue));
        }
        
        return sortDirection === 'asc'
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue));
    });

    const handleSort = (field: string) => {
        if (sortField === field) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortField = field;
            sortDirection = 'asc';
        }
    };
    
    onMount(() => {
        visible = true;
    });

    // Calculate medal colors for positions
    const getMedalColor = (position: number) => {
        if (position === 1) return 'bg-yellow-400';
        if (position === 2) return 'bg-gray-300';
        if (position === 3) return 'bg-amber-600';
        return 'bg-gray-100';
    };

    // Format time for better display
    const formatTime = (time: string) => {
        return time;
    };
</script>

<svelte:head>
    <title>{t('resultsTitle')} | Sandviken Marathon</title>
    <meta name="description" content={t('resultsDescription')} />
</svelte:head>

<div class="min-h-screen bg-gray-50" in:fade>
    <div class="bg-black text-white py-10 md:py-16 relative overflow-hidden">
        <div class="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('resultsTitle')}</h1>
            <div class="w-32 h-1 bg-red-500/70 mb-8 transform -skew-x-12"></div>
            <p class="text-xl md:text-2xl max-w-3xl leading-relaxed font-light">{t('resultsIntro')}</p>
        </div>
    </div>
    
    <main class="relative -mt-8 z-10">
        <div class="container mx-auto px-4 py-8 md:py-16">
            <!-- Race stats cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div class="bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md border-l-2 border-red-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 shadow">
                            <FontAwesomeIcon icon={faRunning} class="text-red-100" />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 font-medium">{t('totalRunners')}</p>
                            <h3 class="text-2xl font-bold text-gray-900">{results.length}</h3>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md border-l-2 border-red-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 shadow">
                            <FontAwesomeIcon icon={faMedal} class="text-red-100" />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 font-medium">{t('winner')}</p>
                            <h3 class="text-xl font-bold text-gray-900">
                                {results.length > 0 ? results[0].name : '—'}
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md border-l-2 border-red-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 shadow">
                            <FontAwesomeIcon icon={faStopwatch} class="text-red-100" />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 font-medium">{t('bestTime')}</p>
                            <h3 class="text-2xl font-bold text-gray-900">
                                {results.length > 0 ? results[0].time : '—'}
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md border-l-2 border-red-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 shadow">
                            <FontAwesomeIcon icon={faGlobe} class="text-red-100" />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 font-medium">{t('countries')}</p>
                            <h3 class="text-2xl font-bold text-gray-900">
                                {[...new Set(results.map(r => r.country))].length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Main results section -->
            <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-red-500/10">
                <h2 class="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTrophy} class="text-red-500" />
                    {t('raceResults')}
                </h2>
                
                <!-- Search -->
                <div class="mb-8">
                    <div class="relative max-w-2xl">
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <input 
                            type="text" 
                            bind:value={searchQuery}
                            placeholder={t('Search by Name or Country')}
                            class="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-shadow"
                        />
                    </div>
                </div>
                
                <!-- Error message -->
                {#if error}
                    <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6" role="alert">
                        {error}
                    </div>
                {/if}
                
                <!-- Loading state -->
                {#if loading}
                    <div class="flex justify-center items-center py-16">
                        <FontAwesomeIcon icon={faSpinner} class="text-red-500/70 text-3xl animate-spin" />
                    </div>
                {:else}
                    <!-- Results table -->
                    <div class="border rounded-xl overflow-hidden mb-4 border-red-500/10">
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        {#each ['position', 'name', 'country', 'time'] as field}
                                            <th 
                                                scope="col"
                                                class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-red-50/50 transition-colors"
                                                on:click={() => handleSort(field)}
                                            >
                                                <div class="flex items-center gap-2">
                                                    {t(field)}
                                                    <span class={sortField === field ? "text-red-500/70" : "text-gray-400"}>
                                                        {#if sortField === field}
                                                            <FontAwesomeIcon 
                                                                icon={sortDirection === 'asc' ? faSortUp : faSortDown}
                                                            />
                                                        {:else}
                                                            <FontAwesomeIcon icon={faSort} />
                                                        {/if}
                                                    </span>
                                                </div>
                                            </th>
                                        {/each}
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {#each sortedResults as result, i}
                                        <tr class="hover:bg-gray-50 transition-colors">
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class={`flex-shrink-0 h-8 w-8 rounded-full ${getMedalColor(result.position)} flex items-center justify-center text-white font-bold shadow-sm`}>
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
                                                <div class="text-sm font-mono font-medium">{formatTime(result.time)}</div>
                                            </td>
                                        </tr>
                                    {/each}
                                    {#if sortedResults.length === 0}
                                        <tr>
                                            <td colspan="4" class="px-6 py-10 text-center text-gray-500">
                                                <div class="flex flex-col items-center gap-4">
                                                    <FontAwesomeIcon icon={faSearch} class="text-3xl opacity-30 text-red-300" />
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
                    
                    {#if sortedResults.length > 0}
                        <div class="text-center text-sm text-gray-500 mb-8">
                            {t('showing')} <span class="font-medium">{sortedResults.length}</span> {t('of')} <span class="font-medium">{results.length}</span> {t('runners')}
                        </div>
                    {/if}
                {/if}
                
                {#if resultDownload}
                    <div class="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 border-t border-red-500/10 pt-8">
                        <div>
                            <h3 class="font-medium text-gray-900 flex items-center gap-2">
                                <FontAwesomeIcon icon={faDownload} class="text-red-500/70" />
                                {t('downloadResults')}
                            </h3>
                            <p class="text-sm text-gray-600 mt-1">
                                {t('resultsDownload')}
                            </p>
                        </div>
                        <div class="sm:ml-auto">
                            <a 
                                href={resultDownload} 
                                class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors border border-red-500/20 hover:border-red-500/40"
                                download
                            >
                                <FontAwesomeIcon icon={faDownload} />
                                {t('resultsPdf')}
                            </a>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </main>
</div> 