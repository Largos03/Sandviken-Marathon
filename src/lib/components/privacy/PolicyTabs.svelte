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

<!-- Tabs Navigation Component -->
<div class="policy-tabs" role="tablist" aria-label={ariaLabel}>
	{#each tabs as tab, index}
		<button 
			class="tab-button" 
			class:active={activeTab === tab.id}
			on:click={() => setActiveTab(tab.id)}
			on:keydown={(e) => handleTabKeydown(e, index)}
			role="tab"
			aria-controls={`panel-${tab.id}`}
			aria-selected={activeTab === tab.id ? 'true' : 'false'}
			id={`tab-${tab.id}`}
			tabindex={activeTab === tab.id ? 0 : -1}
		>
			<div class="tab-icon" aria-hidden="true">
				<FontAwesomeIcon icon={tab.icon} />
			</div>
			<span>{tab.label}</span>
		</button>
	{/each}
</div>

<style>
  /* Scoped styles for PolicyTabs component */
  .policy-tabs {
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    width: 250px;
    padding: 1.5rem 0;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    flex-shrink: 0;
    overflow-y: auto;
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: rgba(0,0,0,0.2) transparent; /* For Firefox */
  }
  
  /* Custom scrollbar for WebKit browsers */
  .policy-tabs::-webkit-scrollbar {
    width: 4px;
  }
  
  .policy-tabs::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  .policy-tabs::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
  }

  .tab-button {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    width: 100%;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.2s ease;
    position: relative;
    font: inherit;
  }

  .tab-button:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: #000;
  }

  .tab-button.active {
    color: #000;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .tab-button.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #000;
  }

  .tab-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
    color: inherit;
    flex-shrink: 0;
  }

  .tab-button.active .tab-icon {
    background-color: #000;
    color: white;
  }
  
  /* Focus styles for keyboard navigation */
  .tab-button:focus-visible {
    outline: 2px solid #000;
    outline-offset: -2px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .policy-tabs {
      width: 100%;
      flex-direction: row;
      overflow-x: auto;
      padding: 0.75rem;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .policy-tabs::-webkit-scrollbar {
      display: none;
    }
    
    .tab-button {
      padding: 0.5rem 1rem;
      scroll-snap-align: start;
      white-space: nowrap;
      flex-shrink: 0;
    }
    
    .tab-button.active::before {
      left: 0;
      right: 0;
      top: auto;
      bottom: -1px;
      width: auto;
      height: 3px;
    }
  }

  /* Support for reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .tab-button {
      transition: none !important;
    }
  }
</style> 