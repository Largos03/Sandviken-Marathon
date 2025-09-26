<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faRunning, faGavel, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { EVENT_CONFIG } from '$lib/config';
	import { SidebarNav, TabHandler, HeroSection, TabsNav, ContactSection } from '$lib';

	$: t = $tStore;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let activeTab = 'overview';

	$: tabs = [
		{ id: 'overview', label: t('tabOverview'), icon: faGavel },
		{ id: 'event-terms', label: t('tabEventTerms'), icon: faRunning },
		{ id: 'contact', label: t('tabContactUs'), icon: faEnvelope }
	];
</script>

<svelte:head>
	<title>{t('termsPageTitle')}</title>
	<meta name="description" content={t('termsIntro')} />
	<meta name="robots" content="noindex,follow" />
</svelte:head>

<div in:fade={{ duration: 300 }}>
	<TabHandler {tabs} bind:activeTab let:activeTab let:setActiveTab>
		<!-- Hero Section -->
		<HeroSection
			title={t('terms')}
			description={t('termsIntro')}
			lastUpdated="{t('lastUpdated')} {t('termsDate')}"
		/>

		<!-- Main Content -->
		<div class="relative z-20 mx-auto -mt-8 mb-20 max-w-[1100px] px-6">
			<div class="card-main">
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
									<div class="icon-container-lg mr-4">
										<FontAwesomeIcon icon={faGavel} size="lg" class="text-red-100" />
									</div>
									<div>
										<h2 class="text-2xl font-bold">{t('agreementToTerms')}</h2>
										<p class="text-gray-500">{t('termsIntro')}</p>
									</div>
								</div>

								<p class="mb-5 text-gray-700">{t('termsAgreementText')}</p>

								<div class="card-accent relative mb-6">
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

						<!-- Event Terms Tab -->
						{#if activeTab === 'event-terms'}
							<div
								role="tabpanel"
								id="panel-event-terms"
								aria-labelledby="tab-event-terms"
								class="mb-6"
							>
								<div class="mb-6 flex items-center">
									<div class="icon-container-lg mr-4">
										<FontAwesomeIcon icon={faRunning} size="lg" class="text-red-100" />
									</div>
									<div>
										<h2 class="text-2xl font-bold">{t('eventParticipation')}</h2>
										<p class="text-gray-500">{t('eventParticipationText')}</p>
									</div>
								</div>

								<div class="card-simple mb-6">
									<h3 class="mb-3 font-semibold">{t('riskAcknowledgment')}</h3>
									<p class="text-gray-600">{t('riskAcknowledgmentText')}</p>
								</div>

								<div class="card-simple mb-6">
									<h3 class="mb-3 font-semibold">{t('conductTitle')}</h3>
									<p class="text-gray-600">{t('conductText')}</p>
								</div>

								<div class="card-simple">
									<h3 class="mb-3 font-semibold">{t('contactUsage')}</h3>
									<p class="text-gray-600">{t('contactUsageText')}</p>
								</div>
							</div>
						{/if}

						<!-- Contact Tab -->
						{#if activeTab === 'contact'}
							<div role="tabpanel" id="panel-contact" aria-labelledby="tab-contact">
								<ContactSection
									title={t('contactUs')}
									description={t('contactDescription')}
									emailLabel={t('email')}
									phoneLabel={t('phone')}
									buttonText={t('contactUs')}
									emailAddress={EVENT_CONFIG.organizerEmail}
									phoneNumber={EVENT_CONFIG.organizerPhone}
									ariaLabelledby="terms-contact-section"
								/>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div></TabHandler
	>
</div>
