<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faTrophy,
		faUsers,
		faMapMarkerAlt,
		faCalendarAlt,
		faHeart,
		faMedal,
		faHistory,
		faLightbulb,
		faChevronRight,
		faInfoCircle,
		faRunning
	} from '@fortawesome/free-solid-svg-icons';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	// Active tab state
	let activeTab = 'mission';

	// Tabs structure
	const tabs = [
		{ id: 'mission', label: t('aboutMission'), icon: faHeart },
		{ id: 'history', label: t('aboutHistoryTitle'), icon: faHistory },
		{ id: 'values', label: t('aboutValuesTitle'), icon: faLightbulb },
		{ id: 'details', label: t('eventDetailsTitle'), icon: faInfoCircle },
		{ id: 'community', label: t('aboutCommunityTitle'), icon: faUsers },
		{ id: 'future', label: t('aboutFutureTitle'), icon: faTrophy }
	];

	function setActiveTab(tabId: string): void {
		activeTab = tabId;
		// Update URL hash without scrolling
		history.replaceState(null, '', `#${tabId}`);
	}

	onMount(() => {
		// Check for hash in URL to set active tab
		const hash = window.location.hash.substring(1);
		if (hash && tabs.some((tab) => tab.id === hash)) {
			activeTab = hash;
		}
	});
</script>

<svelte:head>
	<title>{t('aboutPageTitle')}</title>
	<meta name="description" content={t('aboutIntro')} />
	<link rel="canonical" href="https://sandvikenmarathon.com/about" />
</svelte:head>

<div in:fade={{ duration: 300 }}>
	<!-- Hero Section -->
	<div class="relative bg-black py-12 text-white md:py-16" role="banner">
		<!-- Subtle grid pattern overlay -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute inset-0 bg-white/5"></div>
			<div
				class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
			></div>
		</div>

		<!-- Content -->
		<Container className="relative z-10 text-center">
			<h1
				class="relative mb-3 inline-block text-3xl font-bold md:text-5xl"
				in:fly={{ y: -20, duration: 800, delay: 300 }}
			>
				{t('aboutTitle')}
				<span
					class="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 transform rounded-full bg-red-500/70 shadow-md"
				></span>
			</h1>

			<!-- Subtitle for the About Us page -->
			<p
				class="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
				in:fly={{ y: 20, duration: 800, delay: 400 }}
			>
				{t('aboutIntro')}
			</p>

			<!-- Tabs Navigation -->
			<div
				class="mx-auto mt-8 mb-4 flex max-w-3xl flex-wrap justify-center gap-1 rounded-full bg-black/30 p-1 backdrop-blur-sm md:gap-2"
				in:fly={{ y: 20, duration: 800, delay: 500 }}
			>
				{#each tabs as tab (tab.id)}
					<button
						class="flex items-center space-x-1.5 rounded-full px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5
            md:space-x-2.5 md:px-5 md:py-2.5 md:text-base
            {activeTab === tab.id
							? 'bg-white font-semibold text-gray-900 shadow-sm'
							: 'text-white/90 hover:bg-white/10'}"
						on:click={() => setActiveTab(tab.id)}
						aria-selected={activeTab === tab.id}
						role="tab"
					>
						<FontAwesomeIcon
							icon={tab.icon}
							class="h-3.5 w-3.5 md:h-4 md:w-4 {activeTab === tab.id ? 'text-red-500' : ''}"
						/>
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>
		</Container>
	</div>

	<!-- Main Content Area -->
	<section class="bg-gray-50 py-16 md:py-24">
		<Container>
			<div class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
				<div
					class="min-h-[60vh] bg-gradient-to-b from-white to-gray-50 p-6 md:p-8"
					transition:fade={{ duration: 300 }}
				>
				<!-- Tab Content -->
				{#if activeTab === 'mission'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faHeart} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('aboutMission')}</h2>
							<p class="text-gray-500">{t('aboutMissionSubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-5">
						<div class="md:col-span-3">
							<p class="mb-4 text-gray-700">
								{t('aboutMissionText2')}
							</p>

							<!-- Highlight Box -->
							<div
								class="relative mt-2 overflow-hidden rounded-lg border-l-4 border-red-500 bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-white shadow-md"
							>
								<div class="bg-opacity-20 absolute inset-0 bg-red-500 opacity-10"></div>
								<div class="relative z-10">
									<p class="font-medium">
										{t('aboutMissionHighlight')}
									</p>
								</div>
							</div>
						</div>

						<div class="md:col-span-2">
							<div
								class="flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 shadow-md md:h-full"
							>
								<FontAwesomeIcon
									icon={faRunning}
									class="text-4xl text-gray-400 opacity-70 md:text-6xl"
								/>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'history'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faHistory} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('aboutHistoryTitle')}</h2>
							<p class="text-gray-500">{t('aboutHistorySubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<p class="mb-4 text-gray-700">{t('aboutHistoryDesc')}</p>
							<p class="text-gray-700">
								{t('aboutHistoryGrowth')}
							</p>
						</div>

						<div class="flex flex-col space-y-4">
							<!-- Timeline Item -->
							<div class="flex items-start">
								<div
									class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white ring-2 ring-red-400/30"
								>
									1
								</div>
								<div>
									<h3 class="mb-1 font-semibold">{t('aboutHistoryFirstEvent')}</h3>
									<p class="text-gray-600">
										{t('aboutHistoryFirstEventDesc')}
									</p>
								</div>
							</div>

							<!-- Timeline Item -->
							<div class="flex items-start">
								<div
									class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white ring-2 ring-red-400/30"
								>
									2
								</div>
								<div>
									<h3 class="mb-1 font-semibold">{t('aboutHistoryGrowingCommunity')}</h3>
									<p class="text-gray-600">
										{t('aboutHistoryGrowingCommunityDesc')}
									</p>
								</div>
							</div>

							<!-- Timeline Item -->
							<div class="flex items-start">
								<div
									class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white ring-2 ring-red-400/30"
								>
									3
								</div>
								<div>
									<h3 class="mb-1 font-semibold">{t('aboutHistoryNationalRecognition')}</h3>
									<p class="text-gray-600">
										{t('aboutHistoryNationalRecognitionDesc')}
									</p>
								</div>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'values'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faLightbulb} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('aboutValuesTitle')}</h2>
							<p class="text-gray-500">{t('aboutValuesSubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-3">
						<!-- Value Card -->
						<div
							class="cursor-pointer rounded-xl border-b-4 border-red-500/40 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
						>
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
							>
								<FontAwesomeIcon icon={faUsers} />
							</div>
							<h3 class="mb-2 text-xl font-semibold">{t('aboutValuesCommunity')}</h3>
							<p class="text-gray-600">
								{t('aboutValuesCommunityDesc')}
							</p>
						</div>

						<!-- Value Card -->
						<div
							class="cursor-pointer rounded-xl border-b-4 border-red-500/40 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
						>
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
							>
								<FontAwesomeIcon icon={faMedal} />
							</div>
							<h3 class="mb-2 text-xl font-semibold">{t('aboutValuesExcellence')}</h3>
							<p class="text-gray-600">
								{t('aboutValuesExcellenceDesc')}
							</p>
						</div>

						<!-- Value Card -->
						<div
							class="cursor-pointer rounded-xl border-b-4 border-red-500/40 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
						>
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
							>
								<FontAwesomeIcon icon={faHeart} />
							</div>
							<h3 class="mb-2 text-xl font-semibold">{t('aboutValuesInclusivity')}</h3>
							<p class="text-gray-600">
								{t('aboutValuesInclusivityDesc')}
							</p>
						</div>
					</div>
				{/if}

				{#if activeTab === 'details'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faInfoCircle} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('eventDetailsTitle')}</h2>
							<p class="text-gray-500">{t('eventDetailsSubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<!-- Detail Card -->
						<div class="rounded-xl border-l-3 border-red-400/30 bg-gray-50 p-5">
							<div class="mb-3 flex items-center">
								<div
									class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faCalendarAlt} />
								</div>
								<h3 class="font-semibold">{t('eventDateTime')}</h3>
							</div>
							<p class="text-gray-600">
								{t('eventDateTimeDesc')}
							</p>
							<div class="mt-4 flex items-center text-sm text-gray-500">
								<span class="mr-2 font-semibold text-red-900">{t('eventStartTime')}</span> {t('eventStartTimeValue')}
							</div>
							<div class="mt-1 flex items-center text-sm text-gray-500">
								<span class="mr-2 font-semibold text-red-900">{t('eventRegistrationOpens')}</span> {t('eventRegistrationOpensValue')}
							</div>
						</div>

						<!-- Detail Card -->
						<div class="rounded-xl border-l-3 border-red-400/30 bg-gray-50 p-5">
							<div class="mb-3 flex items-center">
								<div
									class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white"
								>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</div>
								<h3 class="font-semibold">{t('eventLocation')}</h3>
							</div>
							<p class="text-gray-600">
								{t('eventLocationDesc')}
							</p>
							<div class="mt-4 flex items-center text-sm text-gray-500">
								<span class="mr-2 font-semibold text-red-900">{t('eventStartFinish')}</span> {t('eventStartFinishValue')}
							</div>
							<div class="mt-1 flex items-center text-sm text-gray-500">
								<span class="mr-2 font-semibold text-red-900">{t('eventParking')}</span> {t('eventParkingValue')}
							</div>
						</div>
					</div>

					<div class="mt-6">
						<!-- Highlight Box -->
						<div
							class="relative mt-2 overflow-hidden rounded-lg border-l-4 border-red-500 bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-white shadow-md"
						>
							<div class="bg-opacity-20 absolute inset-0 bg-red-500 opacity-10"></div>
							<div class="relative z-10">
								<p>{t('eventDetailsDesc')}</p>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'community'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faUsers} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('aboutCommunityTitle')}</h2>
							<p class="text-gray-500">{t('aboutCommunitySubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-5">
						<div class="md:col-span-3">
							<p class="mb-4 text-gray-700">{t('aboutCommunityDesc')}</p>
							<p class="text-gray-700">
								{t('aboutCommunityText')}
							</p>

							<div class="mt-6 space-y-3">
								<!-- Bullet Point -->
								<div class="flex items-start">
									<FontAwesomeIcon
										icon={faChevronRight}
										class="mt-1 mr-3 flex-shrink-0 text-red-500/70"
									/>
									<p class="text-gray-600">Community engagement throughout the year</p>
								</div>

								<!-- Bullet Point -->
								<div class="flex items-start">
									<FontAwesomeIcon
										icon={faChevronRight}
										class="mt-1 mr-3 flex-shrink-0 text-red-500/70"
									/>
									<p class="text-gray-600">Support for local businesses and organizations</p>
								</div>

								<!-- Bullet Point -->
								<div class="flex items-start">
									<FontAwesomeIcon
										icon={faChevronRight}
										class="mt-1 mr-3 flex-shrink-0 text-red-500/70"
									/>
									<p class="text-gray-600">Volunteer opportunities for all ages</p>
								</div>
							</div>
						</div>

						<div class="md:col-span-2">
							<div
								class="flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 shadow-md md:h-full"
							>
								<FontAwesomeIcon
									icon={faUsers}
									class="text-4xl text-gray-400 opacity-70 md:text-6xl"
								/>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'future'}
					<!-- Tab Header -->
					<div class="mb-6 flex flex-col items-start md:flex-row md:items-center">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-gray-800 text-white shadow-md md:mr-4 md:mb-0"
						>
							<FontAwesomeIcon icon={faTrophy} size="lg" class="text-red-100" />
						</div>
						<div>
							<h2 class="text-2xl font-bold">{t('aboutFutureTitle')}</h2>
							<p class="text-gray-500">{t('aboutFutureSubtitle')}</p>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<p class="mb-4 text-gray-700">{t('aboutFutureDesc')}</p>
							<p class="text-gray-700">
								{t('aboutFutureText')}
							</p>
						</div>

						<div
							class="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border-l-4 border-red-500 bg-gray-900 p-6 text-white shadow-md"
						>
							<div class="bg-opacity-20 absolute inset-0 bg-red-500 opacity-10"></div>
							<div class="relative z-10 flex items-center">
								<div class="mr-4">
									<FontAwesomeIcon icon={faTrophy} size="2x" class="text-red-300/80" />
								</div>
								<div>
									<h3 class="mb-2 text-xl font-semibold">{t('joinLegacy')}</h3>
									<p class="font-medium">
										{t('joinLegacyDesc')}
									</p>
									<a
										href="/register"
										class="mt-4 inline-block rounded-md border-b-2 border-red-500 bg-white px-6 py-2.5 font-medium text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg"
									>
										<span class="flex items-center"
											>{t('registerNow')} <FontAwesomeIcon
												icon={faChevronRight}
												class="ml-2 h-3 w-3 text-red-500"
											/></span
										>
									</a>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
		</Container>
	</section>
</div>
