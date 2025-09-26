<!-- Map Reveal Countdown Timer Component -->
<script lang="ts">
	import CountdownTimer from './CountdownTimer.svelte';
	import { tStore } from '$lib/stores/i18n';

	$: t = $tStore;
</script>

<div class="text-center">
	<h3 class="mb-4 text-lg font-semibold text-gray-900">
		{t('mapRevealTitle') || 'Map Reveal Countdown'}
	</h3>
	<p class="mb-6 text-gray-600">
		{t('mapRevealMessage') || 'The maps will be shown on 1/12-2025'}
	</p>
	<CountdownTimer
		targetDate="2025-12-01T00:00:00.000Z"
		label={t('mapRevealLabel') || 'Time until maps are revealed'}
	/>
</div>
