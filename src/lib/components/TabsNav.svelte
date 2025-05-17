<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	
	export let tabs: {id: string; label: string; icon: IconDefinition}[] = [];
	export let onTabChange: (tabId: string) => void;
	export let headingText: string = "In this document:";
	export let ariaLabel: string = "Section navigation";
</script>

<nav class="mt-4" aria-label={ariaLabel}>
	<h3 id="section-nav-heading" class="text-lg font-semibold mb-3 text-gray-900">
		{headingText}
	</h3>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
		{#each tabs as tab}
			<li>
				<button 
					class="w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 
                         bg-white border border-gray-200 shadow-sm
                         hover:bg-gray-50 hover:shadow-md hover:border-gray-300
                         text-left font-medium text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
					on:click={() => onTabChange(tab.id)}
					aria-label={`Go to ${tab.label} section`}
				>
					<div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white rounded-md shadow-sm" aria-hidden="true">
						<FontAwesomeIcon icon={tab.icon} />
					</div>
					<span>{tab.label}</span>
					<div class="ml-auto text-gray-400 group-hover:text-black" aria-hidden="true">
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</button>
			</li>
		{/each}
	</ul>
</nav> 