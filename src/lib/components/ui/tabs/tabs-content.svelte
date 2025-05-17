<script lang="ts">
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";
	import { fade } from "svelte/transition";

	// Props
	/**
	 * The value of the tab
	 * @type {string}
	 */
	export let value: string;

	// Get the content element and value from context
	const { content, tabsValue } = getContext("tabs");

	// Determine if this content should be shown
	$: selected = $tabsValue === value;
</script>

{#if selected}
	<div
		transition:fade={{ duration: 250 }}
		class={cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300", $$props.class)}
		{...$$restProps}
		use:content={{ value }}
	>
		<slot />
	</div>
{/if} 