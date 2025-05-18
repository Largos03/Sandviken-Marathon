<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faCalendarAlt,
		faMapMarkerAlt,
		faMedal,
		faRunning,
		faChevronRight,
		faClock,
		faInfoCircle,
		faArrowRight,
		faStar,
		faMapMarkedAlt,
		faUsers
	} from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n.js';
	import { Card, CardContent } from '$lib/components/ui/card';
	import Button from '$lib/components/Button.svelte';

	// Accept data from page.server.js
	export const data: { lang?: string } = { lang: 'en' };

	let visible = false;
	let activeSection = 'overview';

	// Countdown timer variables
	const marathonDate = new Date('April 1, 2026 08:00:00').getTime();
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let countdownInterval: ReturnType<typeof setInterval> | null = null;

	function updateCountdown() {
		const now = new Date().getTime();
		const timeRemaining = marathonDate - now;

		if (timeRemaining > 0) {
			days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
		} else {
			days = hours = minutes = seconds = 0;
			if (countdownInterval) clearInterval(countdownInterval);
		}
	}

	function setActiveSection(section: string) {
		activeSection = section;
	}

	onMount(() => {
		visible = true;

		// Initialize countdown timer
		updateCountdown();
		countdownInterval = setInterval(updateCountdown, 1000);

		// Clean up interval on component unmount
		return () => {
			if (countdownInterval) clearInterval(countdownInterval);
		};
	});

	// Use the derived store for translations
	$: t = $tStore;

	// Navigation sections - reactive to translation changes
	$: sections = [
		{ id: 'overview', label: t('overviewTab'), icon: faUsers },
		{ id: 'course', label: t('courseTab'), icon: faMapMarkedAlt },
		{ id: 'details', label: t('detailsTab'), icon: faCalendarAlt },
		{ id: 'register', label: t('registerTab'), icon: faMedal }
	];
</script>

<svelte:head>
	<title>Sandviken Marathon 2026 | Official Event</title>
	<meta
		name="description"
		content="Join the inaugural Sandviken Marathon in 2026. A premier running event with a scenic route through the heart of Sweden."
	/>
	<link rel="canonical" href="https://sandvikenmarathon.com/" />
</svelte:head>

<!-- Hero Section -->
<div class="relative h-screen overflow-hidden bg-black text-white" in:fade={{ duration: 300 }}>
	<!-- Simplified background -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
	<video autoplay muted loop playsinline class="absolute inset-0 z-0 h-full w-full object-cover">
		<source src="/running.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<!-- Hero content -->
	<div class="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
		{#if visible}
			<!-- Event badge -->
			<div class="mb-8">
				<div
					class="flex items-center rounded-full bg-white px-6 py-2 text-sm font-bold tracking-wider text-black uppercase shadow-lg"
				>
					<FontAwesomeIcon icon={faStar} class="mr-1 text-red-600" size="xs" />
					<span>{t('officialEvent')}</span>
					<FontAwesomeIcon icon={faStar} class="ml-1 text-red-600" size="xs" />
				</div>
			</div>

			<!-- Title -->
			<h1 class="mb-4 text-5xl leading-tight font-black tracking-tight uppercase md:text-7xl">
				<div class="flex flex-col items-center">
					<span class="relative mb-2 inline-block tracking-wide text-white">
						SANDVIKEN
						<div
							class="absolute -right-2 bottom-1.5 -left-2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
						></div>
					</span>
					<span
						class="relative inline-flex items-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text tracking-wide text-transparent"
					>
						MARATHON
						<div
							class="absolute -top-1 -right-10 rotate-12 transform rounded border-2 border-red-500 bg-white px-2 py-0.5 text-sm font-bold text-black shadow-xl sm:-right-12 md:-right-16"
						>
							2026
						</div>
					</span>
				</div>
			</h1>

			<!-- Distance indicator -->
			<div class="mb-8 flex items-center justify-center gap-3">
				<div class="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
				<div
					class="rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase shadow-lg"
				>
					<span>42.195 km</span>
				</div>
				<div class="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
			</div>

			<!-- Date -->
			<div class="mb-8">
				<div
					class="flex items-center rounded-xl border border-white/30 bg-black/30 px-6 py-3 font-bold text-white shadow-lg backdrop-blur-md"
				>
					<FontAwesomeIcon icon={faCalendarAlt} class="mr-3 text-red-400" />
					<span>{t('eventDate')}</span>
				</div>
			</div>

			<!-- Intro text -->
			<p class="mb-10 max-w-2xl text-xl leading-relaxed font-light text-white/95 md:text-2xl">
				{t('introText')}
			</p>

			<!-- Countdown Timer -->
			<div class="mb-12 w-full max-w-lg">
				<!-- Label -->
				<div class="mb-4 text-center">
					<div
						class="inline-block rounded-xl border border-white/10 bg-gradient-to-r from-red-600/80 to-red-500/80 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase shadow-lg"
					>
						<FontAwesomeIcon icon={faClock} class="mr-2" />
						{t('raceStartingIn')}
					</div>
				</div>

				<!-- Timer -->
				<div
					class="rounded-2xl border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur-md md:p-4"
				>
					<div
						class="grid grid-cols-2 gap-3 divide-gray-700/30 md:grid-cols-4 md:gap-0 md:divide-x"
					>
						<!-- Days -->
						<div class="px-2 py-3 md:px-4">
							<div class="flex flex-col items-center">
								<span class="text-3xl font-bold text-white/95 md:text-5xl"
									>{days.toString().padStart(2, '0')}</span
								>
								<span class="mt-1 text-xs tracking-wider text-white/70 uppercase">{t('days')}</span>
							</div>
						</div>

						<!-- Hours -->
						<div class="px-2 py-3 md:px-4">
							<div class="flex flex-col items-center">
								<span class="text-3xl font-bold text-white/95 md:text-5xl"
									>{hours.toString().padStart(2, '0')}</span
								>
								<span class="mt-1 text-xs tracking-wider text-white/70 uppercase">{t('hours')}</span
								>
							</div>
						</div>

						<!-- Minutes -->
						<div class="px-2 py-3 md:px-4">
							<div class="flex flex-col items-center">
								<span class="text-3xl font-bold text-white/95 md:text-5xl"
									>{minutes.toString().padStart(2, '0')}</span
								>
								<span class="mt-1 text-xs tracking-wider text-white/70 uppercase"
									>{t('minutes')}</span
								>
							</div>
						</div>

						<!-- Seconds -->
						<div class="px-2 py-3 md:px-4">
							<div class="flex flex-col items-center">
								<span class="animate-pulse text-3xl font-bold text-white/95 md:text-5xl"
									>{seconds.toString().padStart(2, '0')}</span
								>
								<span class="mt-1 text-xs tracking-wider text-white/70 uppercase"
									>{t('seconds')}</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div>
				<a
					href="/register"
					class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-lg font-bold text-white shadow-lg focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
				>
					<span class="flex items-center">
						{t('registerNow')}
						<FontAwesomeIcon icon={faArrowRight} class="ml-2" />
					</span>
				</a>
			</div>
		{/if}
	</div>

	<!-- Scroll indicator removed to reduce complexity -->
</div>

<!-- Main Content - Simplified -->
<div id="main-content" class="relative z-20 mx-auto -mt-20 px-6 pb-16 max-w-[1100px]">
	<!-- Main content card with simplified styling -->
	<div class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
		<!-- Simplified Navigation -->
		<div class="bg-gray-900 py-12 md:py-16">
			<div class="mx-auto px-6 max-w-[1100px]">
				<div class="flex w-auto flex-wrap justify-center rounded-xl bg-gray-100 p-1 md:w-auto">
					{#each sections as section (section.id)}
						<button
							class="relative mx-0.5 flex items-center rounded-lg px-4 py-2.5 text-sm font-medium
							transition-all duration-300 md:px-6 md:py-3 md:text-base
							{activeSection === section.id
								? 'bg-white text-gray-900 shadow-lg'
								: 'text-gray-700 hover:bg-white/50 hover:shadow-sm'}"
							on:click={() => setActiveSection(section.id)}
							aria-selected={activeSection === section.id}
							role="tab"
						>
							<!-- Simplified active state -->
							{#if activeSection === section.id}
								<div class="absolute inset-x-0 bottom-0 h-0.5 bg-red-500"></div>
							{/if}

							<div class="relative z-10 flex items-center">
								<div
									class="mr-3 flex h-8 w-8 items-center justify-center rounded-full shadow-sm
							{activeSection === section.id ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}"
								>
									<FontAwesomeIcon icon={section.icon} class="h-3.5 w-3.5 md:h-4 md:w-4" />
								</div>
								<span class="font-medium">{section.label}</span>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<div class="min-h-[60vh] bg-white p-8 md:p-10">
			<!-- Overview Section Content - Simplified Design -->
			{#if activeSection === 'overview'}
				<div in:fade={{ duration: 300 }}>
					<div class="mb-10 flex flex-col items-start">
						<div
							class="mb-4 inline-block rounded-lg bg-gradient-to-r from-gray-900 to-black px-4 py-2.5 text-white shadow-lg"
						>
							<span class="text-lg font-bold">{t('inauguralEventTitle')}</span>
						</div>
						<h2 class="mb-3 text-4xl leading-tight font-bold md:text-5xl">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html t('bePartOfHistory')}
						</h2>
						<div class="mb-6 h-1.5 w-20 rounded-full bg-red-500"></div>
						<p class="max-w-3xl text-xl text-gray-600">
							{t('inauguralDescription')}
						</p>
					</div>

					<!-- Content remains the same but with simplified card transitions -->
					<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
						<Card class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
							<CardContent class="p-6">
								<div
									class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faRunning} size="lg" />
								</div>
								<h3 class="mb-3 text-xl font-bold">{t('raceCategories')}</h3>
								<p class="mb-6 text-gray-600">{t('raceDescription')}</p>
								<a
									href="/register"
									class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
								>
									<span>{t('viewCategories')}</span>
									<FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
								</a>
							</CardContent>
						</Card>

						<Card class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
							<CardContent class="p-6">
								<div
									class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
								</div>
								<h3 class="mb-3 text-xl font-bold">{t('scenicRoute')}</h3>
								<p class="mb-6 text-gray-600">{t('routeDescription')}</p>
								<a
									href="/course"
									class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
								>
									<span>{t('exploreRoute')}</span>
									<FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
								</a>
							</CardContent>
						</Card>

						<Card class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
							<CardContent class="p-6">
								<div
									class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faMedal} size="lg" />
								</div>
								<h3 class="mb-3 text-xl font-bold">{t('prizesAwards')}</h3>
								<p class="mb-6 text-gray-600">{t('prizesDescription')}</p>
								<a
									href="/about"
									class="mt-auto inline-flex items-center font-semibold text-black hover:underline"
								>
									<span>{t('learnMore')}</span>
									<FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
								</a>
							</CardContent>
						</Card>
					</div>

					<!-- Race Day Schedule - Simplified Design -->
					<div class="relative mt-10">
						<div class="rounded-2xl bg-gray-50 p-8 shadow-sm">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faClock} size="lg" />
								</div>
								<div>
									<h3 class="text-2xl font-bold">{t('raceDaySchedule')}</h3>
									<p class="text-gray-500">{t('raceDayDate')}</p>
								</div>
							</div>

							<!-- Rest of the schedule content remains the same -->
							<div class="relative">
								<div class="absolute top-0 bottom-0 left-4 w-0.5 bg-red-500/20"></div>

								<div class="space-y-6">
									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('raceVillageOpens')}</div>
											<div class="text-gray-600">{t('raceVillageOpensText')}</div>
										</div>
									</div>

									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('warmupSession')}</div>
											<div class="text-gray-600">{t('warmupSessionText')}</div>
										</div>
									</div>

									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-4 w-4 -translate-x-1/2 transform rounded-full bg-red-600 shadow-sm"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('marathonStart')}</div>
											<div class="font-medium text-gray-600">{t('marathonStartText')}</div>
										</div>
									</div>

									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('halfMarathonStart')}</div>
											<div class="text-gray-600">{t('halfMarathonStartText')}</div>
										</div>
									</div>

									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('tenKStart')}</div>
											<div class="text-gray-600">{t('tenKStartText')}</div>
										</div>
									</div>

									<div class="relative flex items-start">
										<div
											class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
										></div>
										<div class="pl-10">
											<div class="text-lg font-bold text-gray-900">{t('awardsCeremony')}</div>
											<div class="text-gray-600">{t('awardsCeremonyText')}</div>
										</div>
									</div>
								</div>
							</div>

							<div class="mt-8 text-center">
								<a
									href="/course"
									class="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2 text-white transition-colors hover:bg-gray-900"
								>
									<span>{t('eventDetailsLink')}</span>
									<FontAwesomeIcon icon={faChevronRight} class="ml-2" />
								</a>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Course Tab -->
			{#if activeSection === 'course'}
				<div in:fade={{ duration: 300 }}>
					<!-- Section Header -->
					<div class="mb-10 flex flex-col items-start">
						<div
							class="mb-4 inline-block rounded-lg bg-gradient-to-r from-gray-900 to-black px-4 py-2.5 text-white shadow-lg"
						>
							<span class="text-lg font-bold">{t('scenicRouteTitle')}</span>
						</div>
						<h2 class="mb-3 text-4xl leading-tight font-bold md:text-5xl">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html t('breathtakingJourney')}
						</h2>
						<div class="mb-6 h-1.5 w-20 rounded-full bg-red-500"></div>
						<p class="max-w-3xl text-xl text-gray-600">
							{t('courseDescription2')}
						</p>
					</div>

					<!-- Course Map Section -->
					<div class="mb-16">
						<div class="overflow-hidden rounded-xl bg-white shadow-xl">
							<div class="md:flex">
								<div class="p-6 md:w-1/2 md:p-8">
									<div class="prose prose-lg prose-gray mb-8 max-w-none">
										<p class="lead mb-6 text-gray-700">
											{t('iaafCertified')}
										</p>

										<!-- Route Highlights -->
										<div class="mb-6 rounded-xl border-l-4 border-red-500 bg-gray-50 p-6">
											<h3 class="mb-4 text-xl font-bold">{t('routeHighlights')}</h3>

											<div class="space-y-4">
												<!-- Highlight items -->
												<div class="flex items-start">
													<div
														class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white"
													>
														1
													</div>
													<div>
														<h4 class="font-semibold text-gray-800">{t('lakesideStart')}</h4>
														<p class="text-sm text-gray-600">{t('lakesideStartText')}</p>
													</div>
												</div>

												<div class="flex items-start">
													<div
														class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white"
													>
														2
													</div>
													<div>
														<h4 class="font-semibold text-gray-800">{t('forestTrail')}</h4>
														<p class="text-sm text-gray-600">{t('forestTrailText')}</p>
													</div>
												</div>

												<div class="flex items-start">
													<div
														class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white"
													>
														3
													</div>
													<div>
														<h4 class="font-semibold text-gray-800">{t('historicDistrict')}</h4>
														<p class="text-sm text-gray-600">{t('historicDistrictText')}</p>
													</div>
												</div>

												<div class="flex items-start">
													<div
														class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white"
													>
														4
													</div>
													<div>
														<h4 class="font-semibold text-gray-800">{t('victoryBoulevard')}</h4>
														<p class="text-sm text-gray-600">{t('victoryBoulevardText')}</p>
													</div>
												</div>
											</div>
										</div>

										<!-- CTA -->
										<div class="flex justify-center md:justify-start">
											<a
												href="/course"
												class="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2 text-white"
											>
												<span>{t('exploreDetailedMap')}</span>
												<FontAwesomeIcon icon={faChevronRight} class="ml-2" />
											</a>
										</div>
									</div>
								</div>

								<!-- Map image -->
								<div class="relative bg-gray-800 md:w-1/2">
									<div class="aspect-w-1 aspect-h-1 md:aspect-auto md:h-full">
										<img
											src="/sandviken-map.jpg"
											alt="Map of Sandviken Marathon Course"
											class="h-full w-full object-cover"
										/>

										<div class="absolute bottom-6 left-6 z-10">
											<div
												class="max-w-xs rounded-xl border border-white/10 bg-black/70 p-5 backdrop-blur-sm"
											>
												<div class="mb-3 flex items-end">
													<div class="text-4xl font-bold text-white">42.2</div>
													<div class="mb-1 ml-2 text-sm tracking-wider text-white/80 uppercase">
														KM
													</div>
												</div>
												<div class="text-sm text-white/80">{t('iaafCertifiedLabel')}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Course Features -->
					<div class="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
						<!-- Time Limit -->
						<div class="rounded-xl border-t-4 border-red-500 bg-white p-5 shadow-md">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white"
							>
								<FontAwesomeIcon icon={faClock} size="lg" />
							</div>
							<h3 class="mb-2 text-lg font-bold">{t('timeLimit')}</h3>
							<p class="text-gray-600">{t('timeLimitText')}</p>
						</div>

						<!-- Aid Stations -->
						<div class="rounded-xl border-t-4 border-red-500 bg-white p-5 shadow-md">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white"
							>
								<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
							</div>
							<h3 class="mb-2 text-lg font-bold">{t('aidStationsFeature')}</h3>
							<p class="text-gray-600">{t('aidStationsFeatureText')}</p>
						</div>

						<!-- Pace Groups -->
						<div class="rounded-xl border-t-4 border-red-500 bg-white p-5 shadow-md">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white"
							>
								<FontAwesomeIcon icon={faRunning} size="lg" />
							</div>
							<h3 class="mb-2 text-lg font-bold">{t('paceGroups')}</h3>
							<p class="text-gray-600">{t('paceGroupsText')}</p>
						</div>

						<!-- Finisher Medal -->
						<div class="rounded-xl border-t-4 border-red-500 bg-white p-5 shadow-md">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white"
							>
								<FontAwesomeIcon icon={faMedal} size="lg" />
							</div>
							<h3 class="mb-2 text-lg font-bold">{t('finisherMedal')}</h3>
							<p class="text-gray-600">{t('finisherMedalText')}</p>
						</div>
					</div>
				</div>
			{/if}

			<!-- Event Details Tab -->
			{#if activeSection === 'details'}
				<div in:fade={{ duration: 300 }}>
					<!-- Section Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faCalendarAlt} size="lg" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('eventDetailsSectionTitle')}</h2>
							<p class="text-gray-500">{t('eventDetailsSubtitle')}</p>
						</div>
					</div>

					<!-- Details Cards -->
					<div class="mx-auto max-w-4xl space-y-8">
						<!-- Event Schedule -->
						<div class="rounded-xl bg-gray-50 p-6">
							<h3 class="mb-4 flex items-center text-xl font-bold">
								<FontAwesomeIcon icon={faCalendarAlt} class="mr-3 text-red-500" />
								{t('eventSchedule')}
							</h3>
							<div class="space-y-4">
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="font-bold">{t('preRaceDay')}</div>
									<div class="text-gray-600">{t('preRaceDayText')}</div>
								</div>
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="font-bold">{t('raceDayFull')}</div>
									<div class="text-gray-600">{t('raceDayFullText')}</div>
								</div>
							</div>
						</div>

						<!-- Location Details -->
						<div class="rounded-xl bg-gray-50 p-6">
							<h3 class="mb-4 flex items-center text-xl font-bold">
								<FontAwesomeIcon icon={faMapMarkerAlt} class="mr-3 text-red-500" />
								{t('locationDetails')}
							</h3>
							<div class="space-y-4">
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="font-bold">{t('startFinishArea')}</div>
									<div class="text-gray-600">{t('startFinishAreaText')}</div>
								</div>
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="font-bold">{t('raceExpo')}</div>
									<div class="text-gray-600">{t('raceExpoText')}</div>
								</div>
							</div>
						</div>

						<!-- Race Categories -->
						<div class="rounded-xl bg-gray-50 p-6">
							<h3 class="mb-4 flex items-center text-xl font-bold">
								<FontAwesomeIcon icon={faMedal} class="mr-3 text-red-500" />
								{t('raceCategoriesDetails')}
							</h3>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="mb-2 text-center font-bold">{t('marathonLabel')}</div>
									<div class="text-center text-gray-600">42.195 km</div>
								</div>
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="mb-2 text-center font-bold">{t('halfMarathonLabel')}</div>
									<div class="text-center text-gray-600">21.098 km</div>
								</div>
								<div class="rounded-lg bg-white p-4 shadow-sm">
									<div class="mb-2 text-center font-bold">{t('tenKRunLabel')}</div>
									<div class="text-center text-gray-600">10 km</div>
								</div>
							</div>
						</div>

						<!-- Important Information -->
						<div class="rounded-xl bg-gradient-to-r from-gray-900 to-black p-6 text-white">
							<h3 class="mb-4 text-xl font-bold">{t('importantInfo')}</h3>
							<ul class="space-y-2">
								<li class="flex items-start">
									<FontAwesomeIcon
										icon={faInfoCircle}
										class="mt-1 mr-2 flex-shrink-0 text-red-400"
									/>
									<span>{t('packetPickupInfo')}</span>
								</li>
								<li class="flex items-start">
									<FontAwesomeIcon
										icon={faInfoCircle}
										class="mt-1 mr-2 flex-shrink-0 text-red-400"
									/>
									<span>{t('idRequired')}</span>
								</li>
								<li class="flex items-start">
									<FontAwesomeIcon
										icon={faInfoCircle}
										class="mt-1 mr-2 flex-shrink-0 text-red-400"
									/>
									<span>{t('noRaceDayRegistration')}</span>
								</li>
								<li class="flex items-start">
									<FontAwesomeIcon
										icon={faInfoCircle}
										class="mt-1 mr-2 flex-shrink-0 text-red-400"
									/>
									<span>{t('timingChips')}</span>
								</li>
							</ul>
						</div>
					</div>

					<!-- CTA -->
					<div class="mt-8 text-center">
						<Button href="/register" variant="primary" size="large">{t('registerNow')}</Button>
					</div>
				</div>
			{/if}

			<!-- Registration Tab -->
			{#if activeSection === 'register'}
				<div in:fade={{ duration: 300 }}>
					<!-- Section Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faMedal} size="lg" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('inauguralEvent')}</h2>
							<p class="text-gray-500">{t('bePartOf')}</p>
						</div>
					</div>

					<!-- Registration Info Card -->
					<div class="mx-auto mb-10 max-w-3xl rounded-xl bg-gray-50 p-8 shadow-md">
						<div class="mb-4 inline-block rounded-md bg-black px-4 py-1 font-semibold text-white">
							2026
						</div>
						<h3 class="mb-4 text-2xl font-bold">{t('historicOpportunity')}</h3>
						<p class="mb-8 text-gray-700">{t('joinUs')}</p>

						<!-- Features -->
						<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							<div
								class="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
							>
								<h4 class="mb-3 text-xl font-semibold">{t('premiumExperience')}</h4>
								<p class="text-gray-600">{t('experienceDescription')}</p>
							</div>
							<div
								class="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
							>
								<h4 class="mb-3 text-xl font-semibold">{t('foundingStatus')}</h4>
								<p class="text-gray-600">{t('foundingDescription')}</p>
							</div>
						</div>

						<!-- CTA -->
						<div class="text-center">
							<Button href="/register" variant="primary" size="large">{t('secureSpot')}</Button>
						</div>
					</div>

					<!-- Promo Banner -->
					<div
						class="relative mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-black p-6 text-white"
					>
						<div class="absolute top-0 right-0 opacity-20">
							<FontAwesomeIcon
								icon={faRunning}
								size="6x"
								class="-rotate-12 transform text-red-500"
							/>
						</div>

						<div class="relative z-10 flex flex-col items-center justify-between md:flex-row">
							<div>
								<div
									class="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase"
								>
									{t('limitedSpots')}
								</div>
								<h3 class="mb-2 text-2xl font-bold">{t('secureYourSpot')}</h3>
								<p class="mb-4 max-w-lg opacity-90 md:mb-0">
									{t('earlyBirdPromo')}
								</p>
							</div>
							<a
								href="/register"
								class="inline-flex transform items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
							>
								<span>{t('registerNow')}</span>
								<FontAwesomeIcon icon={faArrowRight} class="ml-2" />
							</a>
						</div>

						<!-- Info badges -->
						<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
							<div class="flex items-center rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
								<FontAwesomeIcon icon={faCalendarAlt} class="mr-2 text-red-400" size="sm" />
								<span class="text-sm">{t('registrationOpens')}</span>
							</div>
							<div class="flex items-center rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
								<FontAwesomeIcon icon={faUsers} class="mr-2 text-red-400" size="sm" />
								<span class="text-sm">{t('limitedParticipants')}</span>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
