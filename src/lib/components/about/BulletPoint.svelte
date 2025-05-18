<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

	export let text: string;
</script>

<div class="flex items-start">
	<FontAwesomeIcon icon={faChevronRight} class="mt-1 mr-3 flex-shrink-0 text-red-500/70" />
	<p class="text-gray-600">{text}</p>
</div>
