<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	
	export let tabs: { id: string; label: string; icon: IconDefinition }[] = [];
	export let activeTab: string;
	export let title: string;
	export let onTabChange: (id: string) => void;
	export let ariaLabel: string = "Main navigation";
</script>

<div class="w-full md:w-64 flex-shrink-0 bg-gray-50 border-r border-gray-200">
	<div class="p-5">
		<h3 id="sidebar-heading" class="text-lg font-medium text-gray-900 mb-3 hidden md:block">{title}</h3>
		<nav aria-labelledby="sidebar-heading" aria-label={ariaLabel}>
			<ul class="space-y-1" role="tablist">
				{#each tabs as tab}
					<li role="presentation">
						<button
							class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
								transition-colors duration-200
								{activeTab === tab.id ? 
									'bg-black text-white font-medium shadow-md border-l-3 border-red-500' : 
									'text-gray-700 hover:bg-gray-100 hover:border-l-3 hover:border-red-400/30'}
								focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
							on:click={() => onTabChange(tab.id)}
							aria-selected={activeTab === tab.id}
							role="tab"
							id={`tab-${tab.id}`}
							aria-controls={`panel-${tab.id}`}
						>
							<div class="flex-shrink-0 {activeTab === tab.id ? 'text-red-200' : 'text-gray-500'}" aria-hidden="true">
								<FontAwesomeIcon icon={tab.icon} />
							</div>
							<span>{tab.label}</span>
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div> 