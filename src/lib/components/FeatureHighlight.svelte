<!-- Optimized Feature Highlight Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition;
	export let title: string;
	export let description: string | undefined = undefined;
	export let variant: 'default' | 'grey' | 'accent' = 'default';

	const variantClasses = {
		default: 'bg-gray-800 text-white',
		grey: 'bg-gray-800 text-white',
		accent: 'bg-red-600 text-white'
	}[variant];
</script>

<div
	class="group rounded-lg border-l-3 border-red-400/30 bg-gray-50 transition-colors hover:bg-gray-100"
>
	<div class="flex items-center p-3">
		<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md {variantClasses}">
			<FontAwesomeIcon {icon} class="text-red-100" />
		</div>
		<div class="ml-3">
			<span class="font-medium text-gray-900">{title}</span>
			{#if description}
				<p class="text-sm text-gray-600">{description}</p>
			{/if}
		</div>
	</div>
	<slot />
</div>
