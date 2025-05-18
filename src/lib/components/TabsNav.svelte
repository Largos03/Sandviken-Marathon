<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let tabs: { id: string; label: string; icon: IconDefinition }[] = [];
	export let onTabChange: (tabId: string) => void;
	export let headingText: string = 'In this document:';
	export let ariaLabel: string = 'Section navigation';
</script>

<nav class="mt-4" aria-label={ariaLabel}>
	<h3 id="section-nav-heading" class="mb-3 text-lg font-semibold text-gray-900">
		{headingText}
	</h3>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2" role="list">
		{#each tabs as tab (tab.id)}
			<li>
				<button
					class="focus:ring-opacity-50 flex w-full items-center space-x-3 rounded-lg border border-gray-200
                         bg-white p-3 text-left font-medium
                         text-gray-800 shadow-sm transition-all
                         duration-200 hover:border-gray-300 hover:bg-gray-50
                         hover:shadow-md focus:ring-2 focus:ring-red-500 focus:outline-none"
					on:click={() => onTabChange(tab.id)}
					aria-label={`Go to ${tab.label} section`}
				>
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-black text-white shadow-sm"
						aria-hidden="true"
					>
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
