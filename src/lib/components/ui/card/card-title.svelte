<script lang="ts">
	import { cn } from '$lib/utils';

	/**
	 * HTML element to use for the title
	 * @type {string}
	 * @default 'h3'
	 */
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3';
</script>

<svelte:element
	this={tag}
	class={cn('text-2xl leading-none font-semibold tracking-tight', $$props.class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
