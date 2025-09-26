<!-- Registration Opening Countdown Timer Component -->
<script lang="ts">
	import CountdownTimer from './CountdownTimer.svelte';
	import { tStore } from '$lib/stores/i18n';
	import { EVENT_CONFIG } from '$lib/config';

	$: t = $tStore;
</script>

<div class="text-center">
	<h3 class="mb-4 text-lg font-semibold text-gray-900">
		{t('registrationTimerTitle') || 'Registration Opening Countdown'}
	</h3>
	<p class="mb-6 text-gray-600">
		{t('registrationTimerMessage') || 'Registration opens on 1/12-2025'}
	</p>
	<CountdownTimer
		targetDate={EVENT_CONFIG.registrationOpens}
		label={t('registrationTimerLabel') || 'Time until registration opens'}
	/>
</div>
