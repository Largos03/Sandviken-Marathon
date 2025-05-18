<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let icon: IconDefinition;
	export let title: string;
	export let description: string;
</script>

<div
	class="cursor-pointer rounded-xl border-b-4 border-red-500/40 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
>
	<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
		<FontAwesomeIcon {icon} />
	</div>
	<h3 class="mb-2 text-xl font-semibold">{title}</h3>
	<p class="text-gray-600">{description}</p>
</div>
