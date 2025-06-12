<script lang="ts">
	import { tStore } from '$lib/stores/i18n';
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faMapMarkedAlt,
		faMountain,
		faWater,
		faTree,
		faFlagCheckered,
		faTint,
		faClock,
		faInfoCircle,
		faRoad,
		faRoute,
		faRunning,
		faMapPin,
		faChevronRight,
		faShieldAlt,
		faUsers
	} from '@fortawesome/free-solid-svg-icons';
	import { ImageModal } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	// Use the derived translation store
	$: t = $tStore;

	// State for the map modal
	let isMapModalOpen = false;

	function openMapModal() {
		isMapModalOpen = true;
	}

	function handleMapTriggerKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openMapModal();
		}
	}

	const courseHighlights = [
		// ... existing code ...
	];
</script>

<svelte:head>
	<title>{t('coursePageTitle')} | Sandviken Marathon</title>
	<meta name="description" content={t('courseDescription')} />
</svelte:head>

<div class="min-h-screen bg-gray-50" in:fade>
	<!-- Hero Section with Background -->
	<div class="relative overflow-hidden bg-black py-10 text-white md:py-16">
		<!-- Decorative diagonal lines -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute -inset-10 rotate-45 transform">
				<div class="mb-16 h-20 bg-red-500/30 shadow-lg"></div>
				<div class="mb-16 h-10 bg-red-500/20 shadow-lg"></div>
				<div class="h-5 bg-red-500/10 shadow-lg"></div>
			</div>
		</div>

		<Container className="relative z-10 py-8 md:py-12">
			<SectionHeading level={1} className="text-white mb-6">{t('coursePageTitle')}</SectionHeading>
			<div class="mb-8 h-1 w-32 -skew-x-12 transform bg-red-500/70"></div>
			<p class="max-w-3xl text-xl leading-relaxed font-light md:text-2xl">{t('coursePageIntro')}</p>
		</Container>
	</div>

	<main class="relative bg-gray-50 py-16 md:py-24">
		<Container className="mb-16">
			<!-- Stats Cards Row -->
			<div class="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
				<div
					class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-1.5 w-full bg-red-500/70"></div>
					<div class="p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 transform items-center justify-center rounded-lg border-b-2 border-red-500/70 bg-gray-800 text-white transition-transform group-hover:-rotate-6"
							>
								<FontAwesomeIcon icon={faRoute} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('courseLength')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">42.195 km</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-1.5 w-full bg-red-500/70"></div>
					<div class="p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 transform items-center justify-center rounded-lg border-b-2 border-red-500/70 bg-gray-800 text-white transition-transform group-hover:-rotate-6"
							>
								<FontAwesomeIcon icon={faMountain} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('elevationGain')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">350m</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-1.5 w-full bg-red-500/70"></div>
					<div class="p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 transform items-center justify-center rounded-lg border-b-2 border-red-500/70 bg-gray-800 text-white transition-transform group-hover:-rotate-6"
							>
								<FontAwesomeIcon icon={faTint} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('aidStations')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">6</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-1.5 w-full bg-red-500/70"></div>
					<div class="p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 transform items-center justify-center rounded-lg border-b-2 border-red-500/70 bg-gray-800 text-white transition-transform group-hover:-rotate-6"
							>
								<FontAwesomeIcon icon={faFlagCheckered} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('startFinish')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">Sandviken</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Map and Course Details -->
			<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
				<!-- Map Card -->
				<div class="overflow-hidden rounded-xl bg-white shadow-md">
					<div 
						class="relative cursor-pointer group" 
						on:click={openMapModal} 
						role="button" 
						tabindex="0" 
						aria-label={t('courseMapInteractive') || 'View course map'}
						on:keydown={handleMapTriggerKeydown}
					>
						<div
							class="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
						>
							<p class="px-6 text-center text-white">
								{t('courseMapInteractive')}
							</p>
						</div>
						<img
							src="/sandviken-map.jpg"
							alt={t('courseMapAlt')}
							class="aspect-[4/3] w-full object-cover"
						/>
					</div>
					<div class="p-5">
						<h2 class="mb-2 flex items-center gap-2 text-xl font-bold text-gray-900">
							<FontAwesomeIcon icon={faMapMarkedAlt} class="text-red-500/70" />
							{t('courseMap')}
						</h2>
						<p class="mb-3 text-sm text-gray-600">{t('courseMapNote')}</p>

						<div class="flex items-center gap-2 border-t border-gray-100 py-3 text-black">
							<FontAwesomeIcon icon={faMountain} class="text-red-500/70" />
							<span class="text-sm font-medium">{t('elevationProfile')}: 350m</span>
						</div>
					</div>
				</div>

				<!-- Course Details -->
				<div class="overflow-hidden rounded-xl bg-white shadow-md md:col-span-2">
					<div class="px-6 pt-6 pb-3">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
							<FontAwesomeIcon icon={faRoute} class="text-red-500/70" />
							{t('courseDetailsTitle')}
						</h2>
						<p class="mb-6 leading-relaxed text-gray-700">{t('courseDescription')}</p>

						<h3 class="mb-3 inline-flex items-center font-semibold text-gray-900">
							{t('courseHighlights')}
							<span class="mx-2 h-px w-8 bg-red-500/30"></span>
						</h3>

						<div class="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div
								class="group rounded-lg border-l-3 border-red-400/30 bg-gray-50 transition-colors hover:bg-gray-100"
							>
								<div class="flex items-center p-3">
									<div
										class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
									>
										<FontAwesomeIcon icon={faWater} class="text-red-100" />
									</div>
									<span class="ml-3 font-medium text-gray-900">{t('scenicWaterfront')}</span>
								</div>
							</div>

							<div
								class="group rounded-lg border-l-3 border-red-400/30 bg-gray-50 transition-colors hover:bg-gray-100"
							>
								<div class="flex items-center p-3">
									<div
										class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
									>
										<FontAwesomeIcon icon={faMapMarkedAlt} class="text-red-100" />
									</div>
									<span class="ml-3 font-medium text-gray-900">{t('historicNeighborhoods')}</span>
								</div>
							</div>

							<div
								class="group rounded-lg border-l-3 border-red-400/30 bg-gray-50 transition-colors hover:bg-gray-100"
							>
								<div class="flex items-center p-3">
									<div
										class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
									>
										<FontAwesomeIcon icon={faTree} class="text-red-100" />
									</div>
									<span class="ml-3 font-medium text-gray-900">{t('forestViews')}</span>
								</div>
							</div>

							<div
								class="group rounded-lg border-l-3 border-red-400/30 bg-gray-50 transition-colors hover:bg-gray-100"
							>
								<div class="flex items-center p-3">
									<div
										class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
									>
										<FontAwesomeIcon icon={faRoad} class="text-red-100" />
									</div>
									<span class="ml-3 font-medium text-gray-900">{t('scenicRoads')}</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Aid Stations -->
					<div class="border-t border-gray-100 bg-gray-50 px-6 py-5">
						<h3 class="mb-4 flex items-center gap-2 font-semibold text-gray-900">
							<FontAwesomeIcon icon={faTint} class="text-red-500/70" />
							{t('aidStations')}
						</h3>

						<div class="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
							<div>
								<h4 class="mb-2 font-medium text-gray-900">{t('waterStations')}</h4>
								<div class="flex flex-wrap gap-2">
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>5km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>12km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>21km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>30km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>37km</span
									>
								</div>
								<p class="mt-2 text-sm text-gray-600">{t('waterStationDetails')}</p>
							</div>

							<div>
								<h4 class="mb-2 font-medium text-gray-900">{t('medicalStations')}</h4>
								<div class="flex flex-wrap gap-2">
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>12km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>21km</span
									>
									<span
										class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm"
										>37km</span
									>
								</div>
								<p class="mt-2 text-sm text-gray-600">{t('medicalStationDetails')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Race Day Information -->
			<div class="mb-10 overflow-hidden rounded-xl bg-white shadow-md">
				<div class="md:flex">
					<div class="relative border-l-4 border-red-500 bg-gray-900 p-6 text-white md:w-1/3">
						<div class="absolute inset-0 bg-red-500/20 opacity-10"></div>
						<div class="relative z-10">
							<h2 class="mb-4 flex items-center gap-2 text-xl font-bold">
								<FontAwesomeIcon icon={faRunning} class="text-red-200" />
								{t('raceDayInfo')}
							</h2>
							<p class="mb-6 text-gray-300">{t('raceDayDetails')}</p>

							<a
								href="/register"
								class="inline-flex items-center justify-center gap-2 rounded-md border-b-2 border-red-500 bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
							>
								<FontAwesomeIcon icon={faRunning} class="text-red-500" />
								<span>{t('registerNow')}</span>
								<FontAwesomeIcon icon={faChevronRight} class="h-3 w-3" />
							</a>
						</div>
					</div>

					<div class="p-6 md:w-2/3">
						<img
							src="/stadsparken.png"
							alt={t('stadsparkenMapAlt')}
							class="mb-2 h-auto w-full rounded-lg object-cover shadow-md"
						/>
						<p class="mb-6 text-center text-sm text-gray-600 italic">{t('stadsparkenMapAlt')}</p>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div
								class="flex items-start gap-4 rounded-lg border-l-3 border-red-400/30 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
							>
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faClock} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('startTime')}</h3>
									<p class="text-gray-600">{t('startTimeDetails')}</p>
								</div>
							</div>

							<div
								class="flex items-start gap-4 rounded-lg border-l-3 border-red-400/30 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
							>
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faMapPin} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('startLocation')}</h3>
									<p class="text-gray-600">{t('startLocationDetails')}</p>
								</div>
							</div>

							<div
								class="flex items-start gap-4 rounded-lg border-l-3 border-red-400/30 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
							>
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faTint} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('supportAvailable')}</h3>
									<p class="text-gray-600">{t('supportDetails')}</p>
								</div>
							</div>

							<div
								class="flex items-start gap-4 rounded-lg border-l-3 border-red-400/30 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
							>
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faInfoCircle} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('moreInfo')}</h3>
									<p class="text-gray-600">{t('contactOrganizers')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Risk Management and Safety Section -->
			<div class="mb-10 overflow-hidden rounded-xl bg-white shadow-md">
				<div class="p-6">
					<h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
						<FontAwesomeIcon icon={faShieldAlt} class="text-red-500/70" />
						{t('riskManagementTitle')}
					</h2>
					<div class="prose prose-sm max-w-none leading-relaxed text-gray-700">
						{t('riskManagementDesc')}
					</div>
				</div>
			</div>

			<!-- Event Staff and Support Section -->
			<div class="overflow-hidden rounded-xl bg-white shadow-md">
				<div class="p-6">
					<h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
						<FontAwesomeIcon icon={faUsers} class="text-red-500/70" />
						{t('staffingPlanTitle')}
					</h2>
					<div class="prose prose-sm max-w-none leading-relaxed text-gray-700">
						{t('staffingPlanDesc')}
					</div>
				</div>
			</div>

			<!-- Spacer element to add bottom margin -->
			<div class="h-16"></div>
		</Container>
	</main>

	<ImageModal
		bind:open={isMapModalOpen}
		imageSrc="/sandviken-map.jpg"
		altText={t('courseMapAlt') + ' - Full view'}
		on:close={() => isMapModalOpen = false}
	/>
</div>
