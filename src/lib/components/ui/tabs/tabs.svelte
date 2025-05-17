<script lang="ts">
	import { createTabs } from "@melt-ui/svelte";
	import { setContext } from "svelte";
	import { cn } from "$lib/utils";
	
	/**
	 * The value of the tab that is currently selected
	 * @type {string}
	 */
	export let value: string = undefined;

	/**
	 * The default value of the tab that should be selected when initially rendered
	 * @type {string}
	 */
	export let defaultValue: string = undefined;

	/**
	 * A callback function called when the selected tab changes
	 */
	export let onValueChange: (value: string) => void = () => {};

	/**
	 * When automatic activation is true, tabs are activated when they receive focus
	 * @type {boolean}
	 */
	export let activationMode: "automatic" | "manual" = "automatic";

	/**
	 * The orientation of the component
	 * @type {"horizontal" | "vertical"}
	 */
	export let orientation: "horizontal" | "vertical" = "horizontal";

	const {
		elements: { root, content, list, trigger },
		states: { value: tabsValue }
	} = createTabs({
		defaultValue,
		value: value !== undefined ? value : undefined,
		onValueChange,
		activationMode,
		orientation
	});

	// Keep the bound value in sync with the tabs value
	$: if (value !== undefined) {
		tabsValue.set(value);
	}

	// Export the tabs value for two-way binding
	$: value = $tabsValue;

	// Provide the tab elements and states to children
	setContext("tabs", { trigger, content, tabsValue });
</script>

<div
	class={cn("", $$props.class)}
	{...$$restProps}
	use:root
>
	<slot />
</div> 