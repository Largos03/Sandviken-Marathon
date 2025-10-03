<script lang="ts">
	import { faRunning, faMapMarkerAlt, faMedal } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import IconCard from './IconCard.svelte';

	$: t = $tStore;
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<IconCard
		icon={faRunning}
		title={t('home-inauguralLegacy')}
		description={t('home-inauguralLegacyDescription')}
		href="/register"
		buttonText={t('home-joinLegacy')}
	/>

	<IconCard
		icon={faMapMarkerAlt}
		title={t('home-scenicRoute')}
		description={t('home-routeDescription')}
		href="/course"
		buttonText={t('home-exploreRoute')}
	/>

	<IconCard
		icon={faMedal}
		title={t('home-prizesAwards')}
		description={t('home-prizesDescription')}
		href="/about#details"
		buttonText={t('home-learnMore')}
	/>
</div>

<!-- Race-specific cards with map filler image -->
<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
	<div
		class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
	>
		<!-- Hero image at top -->
		<div class="h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img src="/Halvmara.webp" alt="Half Marathon Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('home-halfMarathonCard')}</h3>
			<p class="mb-6 text-gray-600">{t('home-halfMarathonCardDesc')}</p>
			<a
				href="/course"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('home-halfMarathonCardBtn')}
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
			<img src="/Funkis.webp" alt="Funkisloppet Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('home-tenKCard')}</h3>
			<p class="mb-6 text-gray-600">{t('home-tenKCardDesc')}</p>
			<a
				href="/Funkisloppet"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('home-tenKCardBtn')}
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
			<img src="/mini.webp" alt="Mini-loppet Course Map" class="h-full w-full object-cover" />
		</div>
		<!-- Content below -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold">{t('home-teamRelayCard')}</h3>
			<p class="mb-6 text-gray-600">{t('home-teamRelayCardDesc')}</p>
			<a
				href="/Mini-loppet"
				class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
			>
				{t('home-teamRelayCardBtn')}
				<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</div>
