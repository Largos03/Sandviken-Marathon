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
	import { FeatureHighlight } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import MapRevealTimer from '$lib/components/MapRevealTimer.svelte';

	$: t = $tStore;
</script>

<svelte:head>
	<title>{t('coursePageTitle')}</title>
	<meta name="description" content={t('courseDescription')} />
</svelte:head>

<div class="min-h-screen bg-gray-50" in:fade>
	<!-- Hero Section with Background -->
	<div class="bg-hero-dark">
		<!-- Decorative diagonal lines -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute -inset-10 rotate-45 transform">
				<div class="mb-16 h-20 bg-red-500/30 shadow-lg"></div>
				<div class="mb-16 h-10 bg-red-500/20 shadow-lg"></div>
				<div class="h-5 bg-red-500/10 shadow-lg"></div>
			</div>
		</div>

		<Container className="relative z-10 py-8 md:py-12">
			<SectionHeading level={1} className="text-white mb-6">{t('courseHeading')}</SectionHeading>
			<div class="hero-accent-line mb-8"></div>
			<p class="max-w-3xl text-xl leading-relaxed font-light md:text-2xl">
				{t('courseWelcomeText')}
			</p>
		</Container>
	</div>

	<main class="relative bg-gray-50 py-16 md:py-24">
		<Container className="mb-16">
			<!-- Stats Cards Row -->
			<div class="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div
					class="group card-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
				>
					<div class="accent-red h-1.5 w-full"></div>
					<div class="p-6">
						<div class="layout-content-gap">
							<div class="icon-container-interactive">
								<FontAwesomeIcon icon={faRoute} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('courseLength')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">{t('courseLengthValue')}</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group card-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
				>
					<div class="accent-red h-1.5 w-full"></div>
					<div class="p-6">
						<div class="layout-content-gap">
							<div class="icon-container-interactive">
								<FontAwesomeIcon icon={faMountain} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('elevationGain')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">
									{t('elevationGainValue')}
								</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group card-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
				>
					<div class="accent-red h-1.5 w-full"></div>
					<div class="p-6">
						<div class="layout-content-gap">
							<div class="icon-container-interactive">
								<FontAwesomeIcon icon={faTint} class="text-red-100" />
							</div>
							<div>
								<p
									class="text-xs font-medium tracking-normal text-gray-500 uppercase sm:text-sm sm:tracking-wide"
								>
									{t('aidStations')}
								</p>
								<h3 class="text-lg font-bold text-gray-900 sm:text-xl">{t('aidStationsValue')}</h3>
							</div>
						</div>
					</div>
				</div>

				<div
					class="group card-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
				>
					<div class="accent-red h-1.5 w-full"></div>
					<div class="p-6">
						<div class="layout-content-gap">
							<div class="icon-container-interactive">
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
				<!-- Map Reveal Timer -->
				<div class="card-white overflow-hidden rounded-xl">
					<div class="p-6">
						<MapRevealTimer />
					</div>
				</div>

				<!-- Course Details -->
				<div class="card-white overflow-hidden rounded-xl md:col-span-2">
					<div class="px-6 pt-6 pb-3">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
							<FontAwesomeIcon icon={faRoute} class="text-red-500/70" />
							{t('courseDetailsTitle')}
						</h2>
						<p class="mb-6 leading-relaxed text-gray-700">
							{t('courseDescription')}
						</p>

						<h3 class="mb-3 inline-flex items-center font-semibold text-gray-900">
							{t('courseHighlights')}
							<span class="mx-2 h-px w-8 bg-red-500/30"></span>
						</h3>

						<div class="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
							<FeatureHighlight icon={faWater} title={t('scenicWaterfront')} />
							<FeatureHighlight icon={faMapMarkedAlt} title={t('historicNeighborhoods')} />
							<FeatureHighlight icon={faTree} title={t('forestViews')} />
							<FeatureHighlight icon={faRoad} title={t('scenicRoads')} />
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
									<span class="btn-tag">4km</span>
									<span class="btn-tag">9km</span>
									<span class="btn-tag">14km</span>
									<span class="btn-tag">19km</span>
									<span class="btn-tag">21km</span>
								</div>
								<p class="mt-2 text-sm text-gray-600">{t('waterStationDetails')}</p>
							</div>

							<div>
								<h4 class="mb-2 font-medium text-gray-900">{t('medicalStations')}</h4>
								<div class="flex flex-wrap gap-2">
									<span class="tag-medical">10km</span>
									<span class="tag-medical">15km</span>
									<span class="tag-medical">21km</span>
								</div>
								<p class="mt-2 text-sm text-gray-600">{t('medicalStationDetails')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Race Day Information -->
			<div class="card-white mb-10 overflow-hidden rounded-xl">
				<div class="md:flex">
					<div class="relative border-l-4 border-red-500 bg-gray-900 p-6 text-white md:w-1/3">
						<div class="absolute inset-0 bg-red-500/20 opacity-10"></div>
						<div class="relative z-10">
							<h2 class="mb-4 flex items-center gap-2 text-xl font-bold">
								<FontAwesomeIcon icon={faRunning} class="text-red-200" />
								{t('raceDayInfo')}
							</h2>
							<p class="mb-6 text-gray-300">{t('raceDayDetails')}</p>

							<a href="/register" class="btn-secondary">
								<FontAwesomeIcon icon={faRunning} class="text-red-500" />
								<span>{t('registerNow')}</span>
								<FontAwesomeIcon icon={faChevronRight} class="h-3 w-3" />
							</a>
						</div>
					</div>

					<div class="p-6 md:w-2/3">
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div class="info-hover flex items-start gap-4">
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

							<div class="info-section-interactive">
								<div class="icon-container-md">
									<FontAwesomeIcon icon={faMapPin} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('startLocation')}</h3>
									<p class="text-gray-600">{t('startLocationDetails')}</p>
								</div>
							</div>

							<div class="info-section-interactive">
								<div class="icon-container-md">
									<FontAwesomeIcon icon={faTint} class="text-red-100" />
								</div>
								<div>
									<h3 class="mb-1 font-medium text-gray-900">{t('supportAvailable')}</h3>
									<p class="text-gray-600">{t('supportDetails')}</p>
								</div>
							</div>

							<div class="info-section-interactive">
								<div class="icon-container-md">
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
			<div class="card-white mb-10 overflow-hidden rounded-xl">
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
			<div class="card-white overflow-hidden rounded-xl">
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
</div>
