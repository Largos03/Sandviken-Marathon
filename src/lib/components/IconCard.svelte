<!-- Optimized Card with Icon Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition | undefined = undefined;
	export let title: string;
	export let description: string;
	export let href: string | undefined = undefined;
	export let buttonText: string | undefined = undefined;
	export let variant: 'default' | 'accent' | 'highlight' = 'default';

	const variantClasses = {
		default: 'bg-black text-white',
		accent: 'bg-red-600 text-white',
		highlight: 'bg-gradient-to-r from-red-600 to-red-500 text-white'
	}[variant];
</script>

<div
	class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
>
	<div class="p-6">
		{#if icon}
			<div
				class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg {variantClasses} shadow-md"
			>
				<FontAwesomeIcon {icon} size="lg" />
			</div>
		{/if}
		<h3 class="mb-3 text-xl font-bold">{title}</h3>
		<p class="mb-6 text-gray-600">{description}</p>

		<slot name="content" />

		{#if href && buttonText}
			<a {href} class="mt-auto inline-flex items-center font-semibold text-black hover:underline">
				{buttonText}
				<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		{/if}

		<slot name="actions" />
	</div>
</div>
