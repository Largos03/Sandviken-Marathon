<script lang="ts">
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";

	// Props
	/**
	 * The value of the tab
	 * @type {string}
	 */
	export let value: string;

	/**
	 * Whether the tab is disabled
	 * @type {boolean}
	 */
	export let disabled = false;

	// Get the trigger element and value from context
	const { trigger, tabsValue } = getContext("tabs");

	// Determine if this tab is selected
	$: selected = $tabsValue === value;
</script>

<button
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
		selected
			? "bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-gray-50"
			: "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
		$$props.class
	)}
	{disabled}
	{...$$restProps}
	use:trigger={{ value, disabled }}
>
	<slot />
</button>