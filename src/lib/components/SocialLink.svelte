<!-- Optimized Social Link Component -->
<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconDefinition;
	export let href: string;
	export let label: string;
	export let variant: 'footer' | 'contact' = 'footer';

	const variantClasses = {
		footer: 'h-7 w-7 bg-white/10 hover:bg-white/20 hover:-translate-y-0.5',
		contact: 'h-10 w-10 bg-gray-100 hover:bg-red-500 hover:text-white'
	}[variant];
</script>

<a
	{href}
	class="mx-2 flex items-center justify-center rounded-full text-gray-600 transition-all duration-200 {variantClasses}"
	aria-label={label}
>
	<FontAwesomeIcon {icon} />
</a>
