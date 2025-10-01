<script lang="ts">
	import { faRunning, faMapMarkerAlt, faMedal } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import IconCard from './IconCard.svelte';

	$: t = $tStore;
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<IconCard
		icon={faRunning}
		title={t('inauguralLegacy')}
		description={t('inauguralLegacyDescription')}
		href="/register"
		buttonText={t('joinLegacy')}
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
		href="/about#details"
		buttonText={t('learnMore')}
	/>
</div>

<!-- Race-specific cards with map filler image -->
<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
	<div
		class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
	>
		<!-- Hero image at top -->
		<div class="h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img src="/mapfiller.jpg" alt="Half Marathon Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('halfMarathonCard')}</h3>
			<p class="mb-6 text-gray-600">{t('halfMarathonCardDesc')}</p>
			<a
				href="/course"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('halfMarathonCardBtn')}
				<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>

	<div
		class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
	>
		<!-- Hero image at top -->
		<div class="h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img src="/mapfiller.jpg" alt="Funkisloppet Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('tenKCard')}</h3>
			<p class="mb-6 text-gray-600">{t('tenKCardDesc')}</p>
			<a
				href="/Funkisloppet"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('tenKCardBtn')}
				<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>

	<div
		class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
	>
		<!-- Hero image at top -->
		<div class="h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img src="/mapfiller.jpg" alt="Mini-loppet Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('teamRelayCard')}</h3>
			<p class="mb-6 text-gray-600">{t('teamRelayCardDesc')}</p>
			<a
				href="/Mini-loppet"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('teamRelayCardBtn')}
				<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</div>
