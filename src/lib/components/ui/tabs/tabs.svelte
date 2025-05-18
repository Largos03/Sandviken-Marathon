<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import { cn } from '$lib/utils';

	/**
	 * The value of the tab that is currently selected
	 * @type {string}
	 */
	export let value: string | undefined = undefined;

	/**
	 * The default value of the tab that should be selected when initially rendered
	 * @type {string}
	 */
	export let defaultValue: string | undefined = undefined;

	/**
	 * A callback function called when the selected tab changes
	 */
	export let onValueChange: (value: string) => void = () => {};

	/**
	 * When automatic activation is true, tabs are activated when they receive focus
	 * @type {boolean}
	 */
	export let activationMode: 'automatic' | 'manual' = 'automatic';

	/**
	 * The orientation of the component
	 * @type {"horizontal" | "vertical"}
	 */
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';

	const {
		elements: { root, content, trigger },
		states: { value: tabsValue }
	} = createTabs({
		defaultValue,
		onValueChange: (detail: { curr: string | undefined; next: string | undefined }): string => {
			const { curr, next } = detail;

			if (next !== undefined && curr !== next) {
				// Call the component's onValueChange prop for side-effects
				onValueChange(next);
				return next; // Set the Melt UI store to the new valid string value
			}

			// If `next` is undefined or same as `curr`, return `curr`.
			// `curr` must be a string here due to Writable<string> state + autoSet/defaultValue.
			if (curr === undefined) {
				// This case implies an invalid setup (e.g., no tabs and no defaultValue)
				// and contradicts the expectation that the store always holds a string.
				throw new Error(
					"Tabs internal state error: 'curr' is undefined when 'next' is unusable. " +
						'Ensure tabs are present or a valid defaultValue is provided.'
				);
			}
			return curr;
		},
		activateOnFocus: activationMode === 'automatic',
		orientation
	});

	// Keep the bound value in sync with the tabs value
	$: if (value !== undefined && value !== $tabsValue) {
		tabsValue.set(value);
	}

	// Export the tabs value for two-way binding
	$: value = $tabsValue;

	// Provide the tab elements and states to children
	setContext('tabs', { trigger, content, tabsValue }); // eslint-disable-line svelte/require-store-reactive-access
</script>

<div class={cn('', $$props.class)} {...$$restProps} use:root>
	<slot />
</div>
