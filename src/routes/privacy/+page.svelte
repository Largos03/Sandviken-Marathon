<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faShield,
		faUserLock,
		faCookieBite,
		faServer,
		faLock,
		faDatabase,
		faChevronRight,
		faClipboardCheck,
		faEnvelope
	} from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { SidebarNav, ContactSection, TabsNav } from '$lib';

	// Accept data from page.server.js
	export const data: { lang?: string } = {};

	// Use the derived translation store
	$: t = $tStore;

	// Active tab state
	let activeTab = 'overview';

	// Tabs structure
	const tabs = [
		{ id: 'overview', label: 'Overview', icon: faShield },
		{ id: 'collection', label: 'Data Collection', icon: faUserLock },
		{ id: 'usage', label: 'Data Usage', icon: faServer },
		{ id: 'cookies', label: 'Cookies', icon: faCookieBite },
		{ id: 'retention', label: 'Retention', icon: faDatabase },
		{ id: 'rights', label: 'Your Rights', icon: faClipboardCheck },
		{ id: 'security', label: 'Security', icon: faLock },
		{ id: 'contact', label: 'Contact Us', icon: faEnvelope }
	];

	// Cookie preferences
	interface CookiePreferences {
		essential: boolean;
		functional: boolean;
		analytics: boolean;
		marketing: boolean;
	}

	let cookiePreferences: CookiePreferences = {
		essential: true,
		functional: true,
		analytics: true,
		marketing: true
	};

	onMount(() => {
		// Load saved preferences if they exist
		try {
			const savedPreferences = localStorage.getItem('cookiePreferences');
			if (savedPreferences) {
				cookiePreferences = JSON.parse(savedPreferences);
			}
		} catch (error) {
			console.error('Error loading cookie preferences:', error);
		}

		// Check for hash in URL to set active tab
		const hash = window.location.hash.substring(1);
		if (hash && tabs.some((tab) => tab.id === hash)) {
			activeTab = hash;
		}
	});

	function setActiveTab(tabId: string) {
		activeTab = tabId;
		window.location.hash = tabId;
	}

	function handleCookiePreference(type: keyof CookiePreferences) {
		if (type === 'essential') return;
		cookiePreferences[type] = !cookiePreferences[type];
		try {
			localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
		} catch (error) {
			console.error('Error saving cookie preferences:', error);
		}
	}
</script>

<svelte:head>
	<title>{t('privacyPolicy')} | Sandviken Marathon</title>
	<meta name="description" content={t('privacyIntro')} />
	<meta name="robots" content="noindex,follow" />
	<link rel="canonical" href="https://sandvikenmarathon.com/privacy" />
</svelte:head>

<div in:fade={{ duration: 300 }}>
	<!-- Hero Section -->
	<div class="relative bg-black py-10 text-white md:py-14" role="banner">
		<!-- Subtle grid pattern overlay -->
		<div class="absolute inset-0 opacity-20">
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]"
			></div>
			<div
				class="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]"
			></div>
		</div>

		<!-- Content -->
		<div class="relative z-10 mx-auto px-6 text-center max-w-[1100px]">
			<h1
				class="relative mb-3 inline-block text-3xl font-bold md:text-4xl"
				in:fly={{ y: -20, duration: 800, delay: 300 }}
			>
				{t('privacyPolicy')}
				<span
					class="shadow-[0_0_8px_rgba(255,255,255,0.6)] absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-full bg-red-500/80"
				></span>
			</h1>
			<p
				class="mx-auto mb-5 max-w-xl text-base font-light opacity-90 md:text-lg"
				in:fly={{ y: 20, duration: 800, delay: 400 }}
			>
				{t('privacyIntro')}
			</p>
			<div
				class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm"
				in:fly={{ y: 20, duration: 800, delay: 500 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-1.5 h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<span>{t('privacyLastUpdated')} {t('privacyDate')}</span>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="relative z-20 mx-auto -mt-8 mb-20 px-6 max-w-[1100px]">
		<div class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
			<!-- Tabs Navigation -->
			<div class="flex flex-col md:flex-row">
				<!-- Sidebar Navigation -->
				<SidebarNav
					{tabs}
					{activeTab}
					title={t('privacyPolicySections')}
					onTabChange={setActiveTab}
					ariaLabel={t('privacyMainNavigation')}
				/>

				<!-- Tab Content -->
				<div class="h-[600px] flex-grow overflow-y-auto p-6 md:h-[700px]">
					<!-- Overview Tab -->
					{#if activeTab === 'overview'}
						<div>
							<div class="mb-5 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('privacyIntroTitle')}</h2>
									<p class="text-gray-500">{t('privacyIntroSubtitle')}</p>
								</div>
							</div>

							<p class="mb-5 text-gray-700">{t('privacyIntroText')}</p>

							<div
								class="relative mb-6 overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-5 text-white shadow-md"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10 font-medium">{t('privacyHighlight')}</p>
							</div>

							<TabsNav
								tabs={tabs.slice(1)}
								onTabChange={setActiveTab}
								headingText={t('privacyDocumentSections')}
								ariaLabel={t('privacyNavigation')}
							/>
						</div>
					{/if}

					<!-- Data Collection Tab -->
					{#if activeTab === 'collection'}
						<div>
							<div class="mb-5 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faUserLock} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('infoCollectTitle')}</h2>
									<p class="text-gray-500">{t('infoCollectSubtitle')}</p>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each ['personal', 'contact', 'technical', 'usage'] as item (item)}
									<div
										class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
									>
										<div class="flex items-center border-b border-gray-100 p-4">
											<div
												class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white shadow-sm"
											>
												<!-- Number removed -->
											</div>
											<h3 class="font-semibold">{t(`${item}InfoTitle`)}</h3>
										</div>
										<div class="p-4">
											<p class="text-gray-600">{t(`${item}InfoText`)}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Data Usage Tab -->
					{#if activeTab === 'usage'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faServer} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('infoUseTitle')}</h2>
									<p class="text-gray-500">{t('infoUseText')}</p>
								</div>
							</div>

							<div class="space-y-4">
								{#each ['eventReg', 'relationship', 'communication', 'websiteImprovement', 'security'] as item (item)}
									<div
										class="flex items-start rounded-lg border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-sm"
									>
										<div
											class="mt-0.5 mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white"
										>
											<!-- Number removed -->
										</div>
										<div>
											<h3 class="font-medium text-gray-900">{t(`${item}Title`)}</h3>
											<p class="mt-1 text-gray-600">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Cookies Tab -->
					{#if activeTab === 'cookies'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faCookieBite} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('cookiesSectionTitle')}</h2>
									<p class="text-gray-500">{t('cookiesSectionText')}</p>
								</div>
							</div>

							<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each Object.entries(cookiePreferences) as [type, enabled] (type)}
									<div
										class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
									>
										<div class="flex items-center justify-between border-b border-gray-100 p-4">
											<div class="flex items-center">
												<div
													class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white"
												>
													<span class="h-2 w-2 rounded-full bg-red-200"></span>
												</div>
												<h3 class="font-semibold">{t(`${type}Cookies`)}</h3>
											</div>
										</div>
										<div class="p-4">
											<p class="mb-4 text-gray-600">
												{t(`${type}${type === 'essential' ? 'CookiesText' : 'Text'}`)}
											</p>
											<div class="flex items-center justify-between">
												<label class="relative inline-flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="peer sr-only"
														checked={enabled}
														disabled={type === 'essential'}
														on:change={() =>
															handleCookiePreference(type as keyof CookiePreferences)}
													/>
													<div
														class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-red-300
																peer-focus:outline-none after:absolute after:top-[2px]
																after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border
																after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full
																peer-checked:after:border-white {type === 'essential' ? 'opacity-60' : ''}"
													></div>
													<span class="ml-3 text-sm font-medium text-gray-700">
														{enabled ? t('enabled') : t('disabled')}
													</span>
												</label>
											</div>
										</div>
									</div>
								{/each}
							</div>

							<p class="text-sm text-gray-500 italic">
								{t('cookiePreferencesSaved')}
							</p>
						</div>
					{/if}

					<!-- Retention Tab -->
					{#if activeTab === 'retention'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faDatabase} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('dataRetentionPolicy')}</h2>
									<p class="text-gray-500">{t('dataRetentionPolicyText')}</p>
								</div>
							</div>

							<div
								class="mb-6 rounded-lg border border-gray-200 bg-white p-6 hover:border-l-3 hover:border-red-400/30"
							>
								<h3 class="mb-4 text-xl font-semibold">{t('retentionPeriodsTitle')}</h3>
								<ul class="space-y-4">
									{#each ['accountInfo', 'eventRegRetention', 'marketingPrefs', 'paymentInfoSecurity'] as item (item)}
										<li class="flex items-start">
											<FontAwesomeIcon
												icon={faChevronRight}
												class="mt-1 mr-3 flex-shrink-0 text-red-500"
											/>
											<div>
												<p class="font-medium">{t(`${item}Title`)}</p>
												<p class="text-gray-600">{t(`${item}Text`)}</p>
											</div>
										</li>
									{/each}
								</ul>
							</div>

							<div
								class="relative overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-6 text-white"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10">{t('dataMinimizationPriority')}</p>
							</div>
						</div>
					{/if}

					<!-- Your Rights Tab -->
					{#if activeTab === 'rights'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faClipboardCheck} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('yourRightsTitle')}</h2>
									<p class="text-gray-500">{t('yourRightsText')}</p>
								</div>
							</div>

							<div class="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
								{#each ['access', 'rectification', 'erasure', 'restriction', 'portability', 'objection'] as item (item)}
									<div
										class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
									>
										<h3 class="mb-2 text-lg font-semibold">{t(`${item}Title`)}</h3>
										<p class="text-gray-600">{t(`${item}Text`)}</p>
									</div>
								{/each}
							</div>

							<p class="text-sm text-gray-500 italic">
								{t('rightsNoteText')}
							</p>
						</div>
					{/if}

					<!-- Security Tab -->
					{#if activeTab === 'security'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faLock} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('dataSecurityTitle')}</h2>
									<p class="text-gray-500">{t('dataSecurityText')}</p>
								</div>
							</div>

							<div class="space-y-3">
								{#each ['encryption', 'accessControls', 'regularAudits'] as item (item)}
									<div class="flex items-start">
										<FontAwesomeIcon
											icon={item === 'encryption'
												? faShield
												: item === 'accessControls'
													? faUserLock
													: faServer}
											size="lg"
											class="mr-4 text-red-100"
										/>
										<div>
											<h3 class="font-medium text-gray-900">{t(`${item}Title`)}</h3>
											<p class="mt-1 text-gray-600">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>

							<p class="mb-6 text-gray-700">{t('securityText')}</p>
						</div>
					{/if}

					<!-- Contact Tab -->
					{#if activeTab === 'contact'}
						<ContactSection
							title={t('contactUs')}
							description={t('privacyContactText')}
							emailLabel={t('email')}
							addressLabel={t('address')}
							buttonText={t('contactUs')}
							emailAddress="privacy@sandvikenmarathon.com"
							ariaLabelledby="privacy-contact-section"
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
