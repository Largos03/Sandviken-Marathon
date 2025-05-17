<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { createEventDispatcher, tick } from 'svelte';
    
	/**
	 * Array of tab objects containing id, label and icon
	 * Each tab should have a unique id, display label and icon from FontAwesome
	 * @type {{id: string; label: string; icon: any}[]}
	 */
	export let tabs: {id: string; label: string; icon: any}[] = [];
	
	/**
	 * Current active tab ID
	 * @type {string}
	 */
	export let activeTab: string;
	
	/**
	 * Label for the tabs group (used for accessibility)
	 * @type {string}
	 */
	export let ariaLabel: string = "Sections";
	
	// Create event dispatcher for tab change events
	const dispatch = createEventDispatcher<{tabChange: string}>();
	
	/**
	 * Sets the active tab and dispatches tabChange event
	 * @param {string} tabId - ID of the tab to activate
	 */
	function setActiveTab(tabId: string) {
		dispatch('tabChange', tabId);
	}
	
	/**
	 * Helper to get appropriate icon element from various possible icon formats
	 * @param {any} icon - Icon to display
	 * @returns {any} - Icon element
	 */
	function getIcon(icon: any) {
		return icon;
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
    class="flex flex-col bg-gray-50 w-64 py-6 border-r border-gray-100 flex-shrink-0 overflow-y-auto 
            scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
    role="tablist" 
    aria-label={ariaLabel}
>
	{#each tabs as tab, index}
		<button 
			class="flex items-center px-6 py-3 text-left w-full text-gray-700 font-medium transition-colors duration-200
                  hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 focus-visible:z-10
                  relative {activeTab === tab.id ? 'text-black font-semibold bg-gray-100 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-black' : ''}"
			on:click={() => setActiveTab(tab.id)}
			on:keydown={(e) => handleTabKeydown(e, index)}
			role="tab"
			aria-controls={`panel-${tab.id}`}
			aria-selected={activeTab === tab.id ? 'true' : 'false'}
			id={`tab-${tab.id}`}
			tabindex={activeTab === tab.id ? 0 : -1}
		>
			<div class="w-8 h-8 flex items-center justify-center rounded mr-3 
                      {activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}" 
                 aria-hidden="true">
				<FontAwesomeIcon icon={tab.icon} />
			</div>
			<span>{tab.label}</span>
		</button>
	{/each}
</div> 