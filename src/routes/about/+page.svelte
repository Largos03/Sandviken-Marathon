<script lang="ts">
	import { tStore } from '$lib/stores/i18n';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faTrophy,
		faUsers,
		faMapMarkerAlt,
		faHeart,
		faMedal,
		faHistory,
		faLightbulb,
		faChevronRight,
		faInfoCircle,
		faRunning
	} from '@fortawesome/free-solid-svg-icons';
	import { NumberedStep } from '$lib';
	import Container from '$lib/components/Container.svelte';

	$: t = $tStore;

	let activeTab = 'mission';

	$: tabs = [
		{ id: 'mission', label: t('aboutMission'), icon: faHeart },
		{ id: 'history', label: t('aboutHistoryTitle'), icon: faHistory },
		{ id: 'values', label: t('aboutValuesTitle'), icon: faLightbulb },
		{ id: 'details', label: t('eventDetailsTitle'), icon: faInfoCircle },
		{ id: 'community', label: t('aboutCommunityTitle'), icon: faUsers },
		{ id: 'future', label: t('aboutFutureTitle'), icon: faTrophy }
	];

	function setActiveTab(tabId: string): void {
		activeTab = tabId;
		history.replaceState(null, '', `#${tabId}`);
	}

	onMount(() => {
		const updateActiveTabFromHash = () => {
			const hash = window.location.hash.substring(1);
			if (hash && tabs.some((tab) => tab.id === hash)) {
				activeTab = hash;
			}
		};

		// Set initial tab from hash
		updateActiveTabFromHash();

		// Listen for hash changes (browser back/forward navigation)
		const handleHashChange = () => {
			updateActiveTabFromHash();
		};

		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});
</script>

<svelte:head>
	<title>{t('aboutPageTitle')}</title>
	<meta name="description" content={t('aboutIntro')} />
	<link rel="canonical" href="https://sandvikenhalfmarathon.com/about" />
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
				role="tablist"
				aria-label="About page sections"
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
						aria-controls="panel-{tab.id}"
						id="tab-{tab.id}"
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
			<div class="card-main">
				<div
					class="min-h-[60vh] bg-gradient-to-b from-white to-gray-50 p-6 md:p-8"
					transition:fade={{ duration: 300 }}
				>
					<!-- Tab Content -->
					{#if activeTab === 'mission'}
						<!-- Tab Header -->
						<div
							class="layout-header"
							role="tabpanel"
							aria-labelledby="tab-mission"
							id="panel-mission"
						>
							<div class="icon-container-lg layout-icon-spacing">
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
						<div
							class="layout-header"
							role="tabpanel"
							aria-labelledby="tab-history"
							id="panel-history"
						>
							<div class="icon-container-lg layout-icon-spacing">
								<FontAwesomeIcon icon={faHistory} size="lg" class="text-red-100" />
							</div>
							<div>
								<h2 class="text-2xl font-bold">{t('aboutHistoryTitle')}</h2>
							</div>
						</div>

						<div class="grid gap-6 md:grid-cols-2">
							<div>
								<p class="mb-4 text-gray-700">{t('aboutHistoryDesc')}</p>
							</div>
							<div class="flex flex-col space-y-4">
								<NumberedStep
									number={1}
									title={t('aboutHistoryFirstEvent')}
									description={t('aboutHistoryFirstEventDesc')}
									variant="black"
								/>
								<NumberedStep
									number={2}
									title={t('aboutHistoryGrowingCommunity')}
									description={t('aboutHistoryGrowingCommunityDesc')}
									variant="black"
								/>
								<NumberedStep
									number={3}
									title={t('aboutHistoryNationalRecognition')}
									description={t('aboutHistoryNationalRecognitionDesc')}
									variant="black"
								/>
							</div>
						</div>
					{/if}

					{#if activeTab === 'values'}
						<!-- Tab Header -->
						<div
							class="mb-6 flex flex-col items-start md:flex-row md:items-center"
							role="tabpanel"
							aria-labelledby="tab-values"
							id="panel-values"
						>
							<div class="icon-container-lg layout-icon-spacing">
								<FontAwesomeIcon icon={faLightbulb} size="lg" class="text-red-100" />
							</div>
							<div>
								<h2 class="text-2xl font-bold">{t('aboutValuesTitle')}</h2>
								<p class="text-gray-500">{t('aboutValuesSubtitle')}</p>
							</div>
						</div>

						<div class="grid gap-6 md:grid-cols-3">
							<!-- Value Card -->
							<div class="card-feature">
								<div class="icon-container-md mb-4 bg-gray-900">
									<FontAwesomeIcon icon={faUsers} />
								</div>
								<h3 class="mb-2 text-xl font-semibold">{t('aboutValuesCommunity')}</h3>
								<p class="text-gray-600">
									{t('aboutValuesCommunityDesc')}
								</p>
							</div>

							<!-- Value Card -->
							<div class="card-feature">
								<div class="icon-container-md mb-4 bg-gray-900">
									<FontAwesomeIcon icon={faMedal} />
								</div>
								<h3 class="mb-2 text-xl font-semibold">{t('aboutValuesExcellence')}</h3>
								<p class="text-gray-600">
									{t('aboutValuesExcellenceDesc')}
								</p>
							</div>

							<!-- Value Card -->
							<div class="card-feature">
								<div class="icon-container-md mb-4 bg-gray-900">
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
						<div
							class="layout-header"
							role="tabpanel"
							aria-labelledby="tab-details"
							id="panel-details"
						>
							<div class="icon-container-lg layout-icon-spacing">
								<FontAwesomeIcon icon={faInfoCircle} size="lg" class="text-red-100" />
							</div>
							<div>
								<h2 class="text-2xl font-bold">{t('eventDetailsTitle')}</h2>
								<p class="text-gray-500">{t('eventDetailsSubtitle')}</p>
							</div>
						</div>

						<div class="grid gap-6 md:grid-cols-1">
							<!-- Stadsparken Details -->
							<div class="info-section">
								<div class="mb-3 flex items-center">
									<div class="icon-container-md mr-3">
										<FontAwesomeIcon icon={faMapMarkerAlt} />
									</div>
									<h3 class="font-semibold">{t('stadsparkenTitle')}</h3>
								</div>
								<p class="mb-4 text-gray-600">
									{t('stadsparkenIntro')}
								</p>
								<ul class="space-y-2 text-gray-600">
									<li><strong>{t('bessemerHall')}:</strong> {t('bessemerHallDesc')}</li>
									<li><strong>{t('lekpark')}:</strong> {t('lekparkDesc')}</li>
									<li><strong>{t('dromfabriken')}:</strong> {t('dromfabrikenDesc')}</li>
									<li><strong>{t('scene')}:</strong> {t('sceneDesc')}</li>
									<li><strong>{t('basketplan')}:</strong> {t('basketplanDesc')}</li>
									<li><strong>{t('parking')}:</strong> {t('parkingDesc')}</li>
									<li><strong>{t('finisherArea')}:</strong> {t('finisherAreaDesc')}</li>
								</ul>
							</div>
						</div>

						<div class="mt-6">
							<!-- Highlight Box -->
							<div class="card-info">
								<div class="bg-opacity-20 absolute inset-0 bg-red-500 opacity-10"></div>
								<div class="relative z-10">
									<p>{t('riskSummary')}</p>
								</div>
							</div>
						</div>
					{/if}

					{#if activeTab === 'community'}
						<!-- Tab Header -->
						<div
							class="layout-header"
							role="tabpanel"
							aria-labelledby="tab-community"
							id="panel-community"
						>
							<div class="icon-container-lg layout-icon-spacing">
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
										<p class="text-gray-600">{t('communityEngagement')}</p>
									</div>

									<!-- Bullet Point -->
									<div class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500/70"
										/>
										<p class="text-gray-600">{t('localBusinessSupport')}</p>
									</div>

									<!-- Bullet Point -->
									<div class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500/70"
										/>
										<p class="text-gray-600">{t('volunteerOpportunities')}</p>
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
						<div
							class="layout-header"
							role="tabpanel"
							aria-labelledby="tab-future"
							id="panel-future"
						>
							<div class="icon-container-lg layout-icon-spacing">
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

							<div class="card-info relative flex h-full flex-col justify-center">
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
										<a href="/register" class="btn-secondary mt-4">
											<span class="flex items-center"
												>{t('registerNow')}
												<FontAwesomeIcon
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
