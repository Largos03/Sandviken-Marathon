<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faRunning,
		faCopyright,
		faUserShield,
		faEdit,
		faGavel,
		faShieldHalved,
		faEnvelope
	} from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { SidebarNav, ContactSection, TabsNav } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	// Accept data from page.server.js
	export const data: { lang?: string } = {};

	// Use the derived translation store
	$: t = $tStore;

	// Active tab state
	let activeTab = 'overview';

	// Tabs structure
	const tabs = [
		{ id: 'overview', label: 'Overview', icon: faGavel },
		{ id: 'event-registration', label: 'Event Registration', icon: faRunning },
		{ id: 'intellectual-property', label: 'Intellectual Property', icon: faCopyright },
		{ id: 'user-conduct', label: 'User Conduct', icon: faUserShield },
		{ id: 'liability', label: 'Limitation of Liability', icon: faShieldHalved },
		{ id: 'modifications', label: 'Modifications', icon: faEdit },
		{ id: 'contact', label: 'Contact Us', icon: faEnvelope }
	];

	onMount(() => {
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
</script>

<svelte:head>
	<title>{t('terms')} | Sandviken Marathon</title>
	<meta name="description" content={t('termsIntro')} />
	<meta name="robots" content="noindex,follow" />
	<link rel="canonical" href="https://sandvikenmarathon.com/terms" />
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
				{t('terms')}
				<span
					class="shadow-[0_0_8px_rgba(255,255,255,0.6)] absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-full bg-red-500/80"
				></span>
			</h1>
			<p
				class="mx-auto mb-5 max-w-xl text-base font-light opacity-90 md:text-lg"
				in:fly={{ y: 20, duration: 800, delay: 400 }}
			>
				{t('termsIntro')}
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
				<span>{t('lastUpdated')} {t('termsDate')}</span>
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
					title={t('termsAndConditions')}
					onTabChange={setActiveTab}
					ariaLabel={t('termsMainNavigation')}
				/>

				<!-- Tab Content -->
				<div class="h-[600px] flex-grow overflow-y-auto p-6 md:h-[700px]">
					<!-- Overview Tab -->
					{#if activeTab === 'overview'}
						<div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview">
							<div class="mb-5 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faGavel} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('agreementToTerms')}</h2>
									<p class="text-gray-500">{t('termsIntro')}</p>
								</div>
							</div>

							<p class="mb-5 text-gray-700">{t('termsAgreementText')}</p>

							<div
								class="relative mb-6 overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-5 text-white shadow-md"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10 font-medium">{t('termsReviewText')}</p>
							</div>

							<TabsNav
								tabs={tabs.slice(1)}
								onTabChange={setActiveTab}
								headingText={t('termsDocumentSections')}
								ariaLabel={t('termsNavigation')}
							/>
						</div>
					{/if}

					<!-- Event Registration Tab -->
					{#if activeTab === 'event-registration'}
						<div
							role="tabpanel"
							id="panel-event-registration"
							aria-labelledby="tab-event-registration"
							class="mb-6"
						>
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faRunning} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('eventRegistration')}</h2>
									<p class="text-gray-500">{t('registrationText')}</p>
								</div>
							</div>

							<p class="mb-6">{t('registrationText')}</p>

							<div class="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each ['physicalFitness', 'riskAcceptance', 'nonRefundableFees', 'scheduleChanges', 'ruleCompliance'] as item (item)}
									<div
										class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
									>
										<div class="flex items-center border-b border-gray-100 p-4">
											<div
												class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white"
											>
												<!-- Number removed as index 'i' is no longer available with this #each syntax -->
											</div>
											<h3 class="font-semibold">{t(item)}</h3>
										</div>
										<div class="p-4">
											<p class="text-gray-600">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Intellectual Property Tab -->
					{#if activeTab === 'intellectual-property'}
						<div
							role="tabpanel"
							id="panel-intellectual-property"
							aria-labelledby="tab-intellectual-property"
							class="mb-6"
						>
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faCopyright} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('intellectualProperty')}</h2>
									<p class="text-gray-500">{t('intellectualPropertyIntro')}</p>
								</div>
							</div>

							<p class="mb-6">{t('intellectualPropertyText')}</p>

							<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
								{#each ['copyright', 'limitedLicense', 'restrictions'] as item (item)}
									<div
										class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
									>
										<div class="flex items-center border-b border-gray-100 p-4">
											<div
												class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white"
											>
												<!-- Number removed as index 'i' is no longer available with this #each syntax -->
											</div>
											<h3 class="font-semibold">{t(item)}</h3>
										</div>
										<div class="p-4">
											<p class="text-gray-600">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>

							<div
								class="relative overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-6 text-white"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10">{t('ipConclusion')}</p>
							</div>
						</div>
					{/if}

					<!-- User Conduct Tab -->
					{#if activeTab === 'user-conduct'}
						<div
							role="tabpanel"
							id="panel-user-conduct"
							aria-labelledby="tab-user-conduct"
							class="mb-6"
						>
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faUserShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('userConduct')}</h2>
									<p class="text-gray-500">{t('userConductIntro')}</p>
								</div>
							</div>

							<p class="mb-6">{t('userConductText')}</p>

							<div class="space-y-4">
								{#each ['prohibitedActivities', 'userContent', 'monitoringEnforcement'] as item (item)}
									<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
										<h3 class="mb-1 font-semibold">{t(item)}</h3>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Limitation of Liability Tab -->
					{#if activeTab === 'liability'}
						<div role="tabpanel" id="panel-liability" aria-labelledby="tab-liability" class="mb-6">
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faShieldHalved} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('limitationOfLiability')}</h2>
									<p class="text-gray-500">{t('liabilityIntro')}</p>
								</div>
							</div>

							<p class="mb-6">{t('limitationOfLiabilityText')}</p>

							<div class="space-y-4">
								{#each ['disclaimerOfWarranties', 'indemnification', 'maximumLiability'] as item (item)}
									<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
										<h3 class="mb-1 font-semibold">{t(item)}</h3>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Modifications Tab -->
					{#if activeTab === 'modifications'}
						<div
							role="tabpanel"
							id="panel-modifications"
							aria-labelledby="tab-modifications"
							class="mb-6"
						>
							<div class="mb-6 flex items-center">
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white"
								>
									<FontAwesomeIcon icon={faEdit} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('modifications')}</h2>
									<p class="text-gray-500">{t('modificationsIntro')}</p>
								</div>
							</div>

							<p class="mb-6">{t('modificationsText')}</p>

							<div class="space-y-4">
								{#each ['rightToModify', 'notificationOfChanges', 'continuedUse'] as item (item)}
									<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
										<h3 class="mb-1 font-semibold">{t(item)}</h3>
									</div>
								{/each}
							</div>

							<div
								class="relative mt-6 overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-6 text-white"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10">{t('modificationDisclaimer')}</p>
							</div>
						</div>
					{/if}

					<!-- Contact Tab -->
					{#if activeTab === 'contact'}
						<div role="tabpanel" id="panel-contact" aria-labelledby="tab-contact">
							<ContactSection
								title={t('contactUs')}
								description={t('termsContactText')}
								emailLabel={t('email')}
								addressLabel={t('address')}
								buttonText={t('termsContactBtn')}
								emailAddress="legal@sandvikenmarathon.com"
								ariaLabelledby="terms-contact-section"
							/>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
