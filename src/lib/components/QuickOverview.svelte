<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faRunning, faMapMarkerAlt, faMedal } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import IconCard from './IconCard.svelte';

	$: t = $tStore;
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<IconCard
		icon={faRunning}
		title={t('raceCategories')}
		description={t('raceDescription')}
		href="/register"
		buttonText={t('viewCategories')}
	/>

	<IconCard
		icon={faMapMarkerAlt}
		title={t('scenicRoute')}
		description={t('routeDescription')}
		href="/course"
		buttonText={t('exploreRoute')}
	/>

	<IconCard
		icon={faMedal}
		title={t('prizesAwards')}
		description={t('prizesDescription')}
		href="/about"
		buttonText={t('learnMore')}
	/>
</div>
