<!-- Optimized Content Card Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition | undefined = undefined;
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let variant: 'default' | 'bordered' | 'highlight' = 'default';

	const variantClasses = {
		default: 'border border-gray-100 bg-white shadow-md',
		bordered: 'border-l-2 border-red-500/20 bg-white shadow-sm',
		highlight: 'border-l-4 border-red-500 bg-gray-50'
	}[variant];

	const iconBgClasses = {
		default: 'bg-black text-white',
		bordered: 'bg-black text-white',
		highlight: 'bg-gray-800 text-white'
	}[variant];
</script>

<div
	class="overflow-hidden rounded-xl {variantClasses} p-6 transition-all duration-300 hover:shadow-lg"
>
	{#if icon || title || subtitle}
		<div class="mb-5 flex items-center">
			{#if icon}
				<div
					class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg {iconBgClasses} shadow-md"
				>
					<FontAwesomeIcon {icon} size="lg" class="text-red-100" />
				</div>
			{/if}
			<div>
				<h2 class="text-2xl font-bold">{title}</h2>
				{#if subtitle}
					<p class="text-gray-500">{subtitle}</p>
				{/if}
			</div>
		</div>
	{/if}

	<slot />
</div>
