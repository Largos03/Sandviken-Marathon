<!-- Sidebar Navigation component with tabs -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	// Component props
	export let tabs: { id: string; label: string; icon: IconDefinition }[] = [];
	export let activeTab: string;
	export let title: string;
	export let onTabChange: (id: string) => void;
	export let ariaLabel: string = 'Main navigation';
</script>

<div class="w-full flex-shrink-0 border-r border-gray-200 bg-gray-50 md:w-64">
	<div class="p-5">
		<h3 id="sidebar-heading" class="mb-3 hidden text-lg font-medium text-gray-900 md:block">
			{title}
		</h3>
		<nav aria-labelledby="sidebar-heading" aria-label={ariaLabel}>
			<ul class="space-y-1" role="tablist">
				{#each tabs as tab (tab.id)}
					<li role="presentation">
						<button
							class="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left
								transition-colors duration-200
								{activeTab === tab.id
								? 'border-l-3 border-red-500 bg-black font-medium text-white shadow-md'
								: 'text-gray-700 hover:border-l-3 hover:border-red-400/30 hover:bg-gray-100'}
								focus:ring-opacity-50 focus:ring-2 focus:ring-red-500 focus:outline-none"
							on:click={() => onTabChange(tab.id)}
							aria-selected={activeTab === tab.id}
							role="tab"
							id={`tab-${tab.id}`}
							aria-controls={`panel-${tab.id}`}
						>
							<div
								class="flex-shrink-0 {activeTab === tab.id ? 'text-red-200' : 'text-gray-500'}"
								aria-hidden="true"
							>
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
