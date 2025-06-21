<!-- Reusable Tab Handler Component -->
<script lang="ts">
	import { onMount } from 'svelte';

	export let tabs: Array<{ id: string; label: string; icon?: any }> = [];
	export let activeTab: string = 'overview';

	onMount(() => {
		// Check for hash in URL to set active tab
		const hash = window.location.hash.substring(1);
		if (hash && tabs.some((tab) => tab.id === hash)) {
			activeTab = hash;
		}
	});

	export function setActiveTab(tabId: string) {
		activeTab = tabId;
		window.location.hash = tabId;
	}
</script>

<!-- Component doesn't render anything, just manages state -->
<slot {activeTab} {setActiveTab} />
