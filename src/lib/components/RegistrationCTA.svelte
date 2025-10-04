<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Button from './Button.svelte';
	import { tStore } from '$lib/stores/i18n';

	$: t = $tStore;
</script>

<div class="bg-gradient-dark relative overflow-hidden rounded-xl p-6 text-white sm:p-8 md:p-10">
	<div class="relative z-10">
		<div
			class="mb-4 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase"
		>
			{t('limitedSpots')}
		</div>
		<h3 class="mb-3 text-3xl font-bold">{t('bePartOfHistory')}</h3>
		<p class="mb-6 max-w-2xl text-lg opacity-90">
			{t('inauguralEventDescription')}
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button href="/register" variant="primary" size="large">
				{t('registerNow')}
				<FontAwesomeIcon icon={faArrowRight} class="ml-2" />
			</Button>
			<Button href="/course" variant="secondary" size="large">
				{t('exploreCourse')}
			</Button>
		</div>
	</div>
</div>
