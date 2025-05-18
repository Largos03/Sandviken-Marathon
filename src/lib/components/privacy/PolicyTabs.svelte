<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { createEventDispatcher, tick } from 'svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	/**
	 * Array of tab objects containing id, label and icon
	 * Each tab should have a unique id, display label and icon from FontAwesome
	 * @type {{id: string; label: string; icon: IconDefinition}[]}
	 */
	export let tabs: { id: string; label: string; icon: IconDefinition }[] = [];

	/**
	 * Current active tab ID
	 * @type {string}
	 */
	export let activeTab: string;

	/**
	 * Label for the tabs group (used for accessibility)
	 * @type {string}
	 */
	export let ariaLabel: string = 'Sections';

	// Create event dispatcher for tab change events
	const dispatch = createEventDispatcher<{ tabChange: string }>();

	/**
	 * Sets the active tab and dispatches tabChange event
	 * @param {string} tabId - ID of the tab to activate
	 */
	function setActiveTab(tabId: string) {
		dispatch('tabChange', tabId);
	}

	/**
	 * Handles keyboard navigation between tabs
	 * Implements arrow key navigation, home and end keys for accessibility
	 * @param {KeyboardEvent} event - Keyboard event
	 * @param {number} tabIndex - Index of the current tab in tabs array
	 */
	async function handleTabKeydown(event: KeyboardEvent, tabIndex: number) {
		const tabsCount = tabs.length;
		let newTabIndex: number | null = null;

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				event.preventDefault();
				newTabIndex = (tabIndex + 1) % tabsCount;
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				event.preventDefault();
				newTabIndex = (tabIndex - 1 + tabsCount) % tabsCount;
				break;
			case 'Home':
				event.preventDefault();
				newTabIndex = 0;
				break;
			case 'End':
				event.preventDefault();
				newTabIndex = tabsCount - 1;
				break;
		}

		if (newTabIndex !== null) {
			const newTabId = tabs[newTabIndex].id;
			setActiveTab(newTabId);

			// Wait for DOM update
			await tick();

			// Focus the new tab
			const newTabElement = document.getElementById(`tab-${newTabId}`);
			if (newTabElement) {
				newTabElement.focus();
			}
		}
	}
</script>

<div
	class="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex w-64 flex-shrink-0 flex-col overflow-y-auto border-r
            border-gray-100 bg-gray-50 py-6"
	role="tablist"
	aria-label={ariaLabel}
>
	{#each tabs as tab, index (tab.id)}
		<button
			class="relative flex w-full items-center px-6 py-3 text-left font-medium text-gray-700 transition-colors
                  duration-200 hover:bg-gray-100 hover:text-black focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0
                  focus-visible:outline-none {activeTab === tab.id
				? 'bg-gray-100 font-semibold text-black before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 before:bg-black'
				: ''}"
			on:click={() => setActiveTab(tab.id)}
			on:keydown={(e) => handleTabKeydown(e, index)}
			role="tab"
			aria-controls={`panel-${tab.id}`}
			aria-selected={activeTab === tab.id ? 'true' : 'false'}
			id={`tab-${tab.id}`}
			tabindex={activeTab === tab.id ? 0 : -1}
		>
			<div
				class="mr-3 flex h-8 w-8 items-center justify-center rounded
                      {activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}"
				aria-hidden="true"
			>
				<FontAwesomeIcon icon={tab.icon} />
			</div>
			<span>{tab.label}</span>
		</button>
	{/each}
</div>
