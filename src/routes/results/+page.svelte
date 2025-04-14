<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { language, translations } from '$lib/stores/i18n.js';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { 
        faSort, 
        faSortUp, 
        faSortDown, 
        faSpinner, 
        faDownload, 
        faSearch,
        faCalendarAlt
    } from '@fortawesome/free-solid-svg-icons';
    
    // Define the result type
    type Result = {
        position: number;
        name: string;
        country: string;
        time: string;
    };
    
    // Direct translation function with proper typing
    $: t = (key: string): string => {
        const trans = translations as Record<string, Record<string, string>>;
        if (!trans[$language] || !trans[$language][key]) {
            return key;
        }
        return trans[$language][key];
    };

    let selectedYear = '2024';
    let visible = false;
    let loading = true;
    let error = '';
    let searchQuery = '';
    let sortField = 'position';
    let sortDirection: 'asc' | 'desc' = 'asc';
    
    const years = ['2024', '2023', '2022'];
    let results: Result[] = [];
    
    // Sample results with the requested names
    const sampleResults = [
        { position: 1, name: 'Emil G', country: 'Sweden', time: '02:15:23' },
        { position: 2, name: 'Olle Z', country: 'Sweden', time: '02:18:45' },
        { position: 3, name: 'Anton B', country: 'Sweden', time: '02:22:10' }
    ];
    
    $: filteredResults = results?.filter(result => 
        result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.country.toLowerCase().includes(searchQuery.toLowerCase())
    ) ?? [];
    
    $: sortedResults = [...filteredResults].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        
        if (sortField === 'position' || sortField === 'time') {
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
    
    const fetchResults = async () => {
        loading = true;
        error = '';
        try {
            // For demo purposes, we'll just use the sample results
            results = sampleResults;
        } catch (e) {
            error = t('errorLoadingResults');
        } finally {
            loading = false;
        }
    };
    
    onMount(() => {
        visible = true;
        // Use sample results instead of data.results
        results = sampleResults;
        loading = false;
    });
</script>

<div class="results-page" in:fade>
    <div class="container mx-auto px-4 py-8 md:py-16">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} class="text-gray-800" />
            {t('resultsTitle')}
        </h1>
        
        <div class="flex flex-col md:flex-row gap-4 mb-4 md:mb-8">
            <div class="w-full md:w-1/3">
                <label for="year" class="block mb-2 text-base md:text-lg font-medium">{t('selectYear')}:</label>
                <select 
                    id="year" 
                    bind:value={selectedYear}
                    on:change={fetchResults}
                    class="w-full px-3 md:px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                >
                    {#each years as year}
                        <option value={year}>{year}</option>
                    {/each}
                </select>
            </div>
            
            <div class="w-full md:w-2/3">
                <label for="search" class="block mb-2 text-base md:text-lg font-medium">{t('search')}:</label>
                <div class="relative">
                    <input 
                        type="text" 
                        id="search"
                        bind:value={searchQuery}
                        placeholder={t('searchPlaceholder')}
                        class="w-full pl-10 pr-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    />
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                </div>
            </div>
        </div>
        
        {#if error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                {error}
            </div>
        {/if}
        
        {#if loading}
            <div class="flex justify-center items-center py-12">
                <FontAwesomeIcon icon={faSpinner} class="text-gray-800 text-3xl animate-spin" />
            </div>
        {:else}
            <div class="overflow-x-auto rounded-lg shadow-md" class:visible>
                <table class="min-w-full bg-white border text-sm md:text-base">
                    <thead class="bg-gray-100">
                        <tr>
                            {#each ['position', 'name', 'country', 'time'] as field}
                                <th 
                                    class="px-3 md:px-6 py-2 md:py-4 text-left font-semibold cursor-pointer hover:bg-gray-200"
                                    on:click={() => handleSort(field)}
                                >
                                    <div class="flex items-center gap-2">
                                        {t(field)}
                                        <span class="text-gray-400">
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
                    <tbody>
                        {#each sortedResults as result}
                            <tr class="border-t hover:bg-gray-50 transition-colors">
                                <td class="px-3 md:px-6 py-2 md:py-4">{result.position}</td>
                                <td class="px-3 md:px-6 py-2 md:py-4 font-medium">{result.name}</td>
                                <td class="px-3 md:px-6 py-2 md:py-4">{t(result.country.toLowerCase())}</td>
                                <td class="px-3 md:px-6 py-2 md:py-4 font-mono">{result.time}</td>
                            </tr>
                        {/each}
                        {#if sortedResults.length === 0}
                            <tr>
                                <td colspan="4" class="px-3 md:px-6 py-8 text-center text-gray-500">
                                    {searchQuery ? t('noSearchResults') : t('noResults')}
                                </td>
                            </tr>
                        {/if}
                    </tbody>
                </table>
            </div>
        {/if}
        
        <div class="mt-6 md:mt-8" class:visible>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faDownload} class="text-gray-800" />
                {t('previousYears')}
            </h2>
            <p class="text-base md:text-lg mb-3 md:mb-4">
                {t('resultsDownload')}
            </p>
            <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                <button 
                    class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors shadow-sm hover:shadow-md"
                >
                    <FontAwesomeIcon icon={faDownload} />
                    {selectedYear} {t('resultsPdf')}
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .results-page {
        background-color: #f5f5f5;
        min-height: 100vh;
    }

    h1, h2 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }

    .overflow-x-auto {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .overflow-x-auto.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 640px) {
        table {
            font-size: 0.875rem;
        }
        
        th, td {
            white-space: nowrap;
        }
    }
    
    :global(.animate-spin) {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style> 