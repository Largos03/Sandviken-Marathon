<!-- Optimized Icon Button Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition;
	export let label: string;
	export let href: string | undefined = undefined;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let variant: 'primary' | 'secondary' | 'accent' = 'primary';
	export let onClick: (() => void) | undefined = undefined;

	const sizeClasses = {
		sm: 'h-3.5 w-3.5',
		md: 'h-4 w-4',
		lg: 'h-5 w-5'
	}[size];

	const variantClasses = {
		primary: 'text-red-500',
		secondary: 'text-gray-600',
		accent: 'text-red-600'
	}[variant];

	const containerClasses = `mr-1.5 inline-flex items-center justify-center ${sizeClasses} ${variantClasses}`;
</script>

{#if href}
	<a {href} class="flex items-center" {...$$restProps}>
		<span class={containerClasses}>
			<FontAwesomeIcon {icon} size="sm" />
		</span>
		<span>{label}</span>
	</a>
{:else}
	<button class="flex items-center" on:click={onClick} {...$$restProps}>
		<span class={containerClasses}>
			<FontAwesomeIcon {icon} size="sm" />
		</span>
		<span>{label}</span>
	</button>
{/if}
