<script lang="ts">
	import { cn } from '$lib/utils';

	/**
	 * HTML element to use for the card
	 * @type {string}
	 * @default 'div'
	 */
	export let element: 'div' | 'article' | 'section' | 'li' = 'div';
</script>

<svelte:element
	this={element}
	class={cn(
		'rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50',
		$$props.class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
