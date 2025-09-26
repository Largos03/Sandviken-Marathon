<!-- Optimized Contact Item Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition;
	export let title: string;
	export let href: string | undefined = undefined;
	export let variant: 'default' | 'accent' = 'default';

	const containerClasses = {
		default: 'bg-red-50 text-red-500',
		accent: 'bg-gray-100 text-gray-600'
	}[variant];
</script>

<li class="flex items-start">
	<div
		class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full {containerClasses}"
	>
		<FontAwesomeIcon {icon} class="text-sm" />
	</div>
	<div>
		<div class="font-medium">{title}</div>
		{#if href}
			<a {href} class="text-gray-600 hover:text-red-600">
				<slot />
			</a>
		{:else}
			<div class="text-gray-600">
				<slot />
			</div>
		{/if}
	</div>
</li>
