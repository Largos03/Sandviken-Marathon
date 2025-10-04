<!-- Optimized Stats Card Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition;
	export let value: string;
	export let label: string;
	export let variant: 'default' | 'red' | 'black' = 'default';

	const variantClasses = {
		default: 'bg-gray-800 text-white border-gray-500/70',
		red: 'bg-red-600 text-white border-red-500/70',
		black: 'bg-black text-white border-gray-500/70'
	}[variant];
</script>

<div
	class="group card-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
>
	<div class="accent-red h-1.5 w-full"></div>
	<div class="p-6">
		<div class="flex items-start gap-4">
			<div
				class="flex h-12 w-12 flex-shrink-0 transform items-center justify-center rounded-lg border-b-2 {variantClasses} transition-transform group-hover:-rotate-6"
			>
				<FontAwesomeIcon {icon} class="text-red-100" />
			</div>
			<div>
				<p
					class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
				>
					{label}
				</p>
				<p class="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
					{value}
				</p>
				<slot />
			</div>
		</div>
	</div>
</div>
