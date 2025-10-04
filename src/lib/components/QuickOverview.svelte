<script lang="ts">
	import { faRunning, faMapMarkerAlt, faMedal, faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
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

<!-- Enhanced Race Cards - Visual teasers with subtle improvements -->
<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
	<!-- Half Marathon Card -->
	<a
		href="/course"
		class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
	>
		<!-- Color accent bar -->
		<div class="absolute top-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-red-600 to-red-500"></div>
		
		<!-- Hero image with overlay -->
		<div class="relative h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img 
				src="/Halvmara.webp" 
				alt="Half Marathon Course Map" 
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
			/>
			<!-- Gradient overlay for text readability -->
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
			
			<!-- Distance badge -->
			<div class="absolute bottom-4 left-4 rounded-lg border-2 border-white/30 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
				<span class="text-lg font-bold text-white">21.1 km</span>
			</div>
		</div>

		<!-- Content -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
				{t('home-halfMarathonCard')}
			</h3>
			<p class="mb-6 text-sm leading-relaxed text-gray-600">
				{t('home-halfMarathonCardDesc')}
			</p>
			
			<!-- Enhanced CTA Button -->
			<div class="flex items-center justify-between rounded-lg border-2 border-gray-900 bg-gray-900 px-4 py-2.5 text-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
				<span class="font-semibold">{t('home-halfMarathonCardBtn')}</span>
				<FontAwesomeIcon 
					icon={faArrowRight} 
					class="transition-transform duration-300 group-hover:translate-x-1" 
				/>
			</div>
		</div>

		<!-- Hover glow effect -->
		<div class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
			<div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"></div>
		</div>
	</a>

	<!-- Funkisloppet Card -->
	<a
		href="/Funkisloppet"
		class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
	>
		<!-- Color accent bar -->
		<div class="absolute top-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-red-600 to-red-500"></div>
		
		<!-- Hero image with overlay -->
		<div class="relative h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img 
				src="/Funkis.webp" 
				alt="Funkisloppet Course Map" 
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
			/>
			<!-- Gradient overlay -->
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
			
			<!-- Distance badge -->
			<div class="absolute bottom-4 left-4 rounded-lg border-2 border-white/30 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
				<span class="text-lg font-bold text-white">5 km</span>
			</div>
		</div>

		<!-- Content -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
				{t('home-tenKCard')}
			</h3>
			<p class="mb-6 text-sm leading-relaxed text-gray-600">
				{t('home-tenKCardDesc')}
			</p>
			
			<!-- Enhanced CTA Button -->
			<div class="flex items-center justify-between rounded-lg border-2 border-gray-900 bg-gray-900 px-4 py-2.5 text-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
				<span class="font-semibold">{t('home-tenKCardBtn')}</span>
				<FontAwesomeIcon 
					icon={faArrowRight} 
					class="transition-transform duration-300 group-hover:translate-x-1" 
				/>
			</div>
		</div>

		<!-- Hover glow effect -->
		<div class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
			<div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"></div>
		</div>
	</a>

	<!-- Mini-loppet Card -->
	<a
		href="/Mini-loppet"
		class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
	>
		<!-- Color accent bar -->
		<div class="absolute top-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-red-600 to-red-500"></div>
		
		<!-- Hero image with overlay -->
		<div class="relative h-60 overflow-hidden rounded-t-xl bg-gray-100">
			<img 
				src="/mini.webp" 
				alt="Mini-loppet Course Map" 
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
			/>
			<!-- Gradient overlay -->
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
			
			<!-- Distance badge -->
			<div class="absolute bottom-4 left-4 rounded-lg border-2 border-white/30 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
				<span class="text-lg font-bold text-white">3 km</span>
			</div>
		</div>

		<!-- Content -->
		<div class="p-4 sm:p-5 md:p-6">
			<h3 class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
				{t('home-teamRelayCard')}
			</h3>
			<p class="mb-6 text-sm leading-relaxed text-gray-600">
				{t('home-teamRelayCardDesc')}
			</p>
			
			<!-- Enhanced CTA Button -->
			<div class="flex items-center justify-between rounded-lg border-2 border-gray-900 bg-gray-900 px-4 py-2.5 text-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
				<span class="font-semibold">{t('home-teamRelayCardBtn')}</span>
				<FontAwesomeIcon 
					icon={faArrowRight} 
					class="transition-transform duration-300 group-hover:translate-x-1" 
				/>
			</div>
		</div>

		<!-- Hover glow effect -->
		<div class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
			<div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"></div>
		</div>
	</a>
</div>
