<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let icon: IconDefinition;
	export let title: string;
</script>

<div class="rounded-xl border-l-3 border-red-400/30 bg-gray-50 p-5">
	<div class="mb-3 flex items-center">
		<div
			class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white"
		>
			<FontAwesomeIcon {icon} />
		</div>
		<h3 class="font-semibold">{title}</h3>
	</div>
	<slot />
</div>
