<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { 
		faRunning, 
		faCopyright, 
		faUserShield, 
		faEdit,
		faChevronRight,
		faGavel,
		faShieldHalved,
		faEnvelope,
		faMapMarkerAlt
	} from '@fortawesome/free-solid-svg-icons';
	import { language, tStore } from '$lib/stores/i18n.js';
	import { SidebarNav, ContactSection, TabsNav } from '$lib';
	
	
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
		if (hash && tabs.some(tab => tab.id === hash)) {
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
	<div class="relative bg-black text-white py-10 md:py-14" role="banner">
		<!-- Subtle grid pattern overlay -->
		<div class="absolute inset-0 opacity-20">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]"></div>
			<div class="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]"></div>
		</div>
		
		<!-- Content -->
		<div class="container mx-auto text-center px-4 relative z-10">
			<h1 class="text-3xl md:text-4xl font-bold mb-3 inline-block relative" in:fly={{ y: -20, duration: 800, delay: 300 }}>
				{t('terms')}
				<span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-500/80 rounded-full shadow-glow"></span>
			</h1>
			<p class="text-base md:text-lg max-w-xl mx-auto mb-5 opacity-90 font-light" in:fly={{ y: 20, duration: 800, delay: 400 }}>
				{t('termsIntro')}
			</p>
			<div class="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 shadow-sm" in:fly={{ y: 20, duration: 800, delay: 500 }}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span>{t('lastUpdated')} {t('termsDate')}</span>
			</div>
		</div>
	</div>
	
	<!-- Main Content -->
	<div class="container mx-auto -mt-8 px-4 relative z-20 mb-20">
		<div class="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
			<!-- Tabs Navigation -->
			<div class="flex flex-col md:flex-row">
				<!-- Sidebar Navigation -->
				<SidebarNav
					tabs={tabs}
					activeTab={activeTab}
					title={t('termsAndConditions')}
					onTabChange={setActiveTab}
					ariaLabel={t('termsMainNavigation')}
				/>
				
				<!-- Tab Content -->
				<div class="flex-grow p-6 overflow-y-auto h-[600px] md:h-[700px]">
					<!-- Overview Tab -->
					{#if activeTab === 'overview'}
						<div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview">
							<div class="flex items-center mb-5">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 shadow-md border-b-4 border-red-500">
									<FontAwesomeIcon icon={faGavel} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('agreementToTerms')}</h2>
									<p class="text-gray-500">{t('termsIntro')}</p>
								</div>
							</div>
							
							<p class="mb-5 text-gray-700">{t('termsAgreementText')}</p>
							
							<div class="bg-black text-white p-5 rounded-lg mb-6 relative overflow-hidden shadow-md border-l-4 border-red-500">
								<div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
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
						<div role="tabpanel" id="panel-event-registration" aria-labelledby="tab-event-registration" class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faRunning} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('eventRegistration')}</h2>
									<p class="text-gray-500">{t('registrationText')}</p>
								</div>
							</div>
							
							<p class="mb-6">{t('registrationText')}</p>
							
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
								{#each ['physicalFitness', 'riskAcceptance', 'nonRefundableFees', 'scheduleChanges', 'ruleCompliance'] as item, i}
									<div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden hover:border-l-3 hover:border-red-400/30">
										<div class="flex items-center border-b border-gray-100 p-4">
											<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3">
												{i + 1}
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
						<div role="tabpanel" id="panel-intellectual-property" aria-labelledby="tab-intellectual-property" class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faCopyright} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('intellectualProperty')}</h2>
									<p class="text-gray-500">{t('intellectualPropertyIntro')}</p>
								</div>
							</div>
							
							<p class="mb-6">{t('intellectualPropertyText')}</p>
							
							<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
								{#each ['copyright', 'limitedLicense', 'restrictions'] as item, i}
									<div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden hover:border-l-3 hover:border-red-400/30">
										<div class="flex items-center border-b border-gray-100 p-4">
											<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3">
												{i + 1}
											</div>
											<h3 class="font-semibold">{t(item)}</h3>
										</div>
										<div class="p-4">
											<p class="text-gray-600">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>
							
							<div class="bg-black text-white p-6 rounded-lg relative overflow-hidden border-l-4 border-red-500">
								<div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
								<p class="relative z-10">{t('ipConclusion')}</p>
							</div>
						</div>
					{/if}
					
					<!-- User Conduct Tab -->
					{#if activeTab === 'user-conduct'}
						<div role="tabpanel" id="panel-user-conduct" aria-labelledby="tab-user-conduct" class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faUserShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('userConduct')}</h2>
									<p class="text-gray-500">{t('userConductIntro')}</p>
								</div>
							</div>
							
							<p class="mb-6">{t('userConductText')}</p>
							
							<div class="space-y-4">
								{#each [1, 2, 3, 4] as i}
									<div class="flex items-start bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30">
										<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
											{i}
										</div>
										<div>
											<h3 class="font-medium text-gray-900">{t(`conductRule${i}`)}</h3>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
					
					<!-- Limitation of Liability Tab -->
					{#if activeTab === 'liability'}
						<div role="tabpanel" id="panel-liability" aria-labelledby="tab-liability" class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faShieldHalved} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('limitationOfLiability')}</h2>
									<p class="text-gray-500">{t('liabilityIntro')}</p>
								</div>
							</div>
							
							<p class="mb-6">{t('liabilityText')}</p>
							
							<ul class="space-y-3">
								{#each [1, 2, 3, 4, 5] as i}
									<li class="flex items-start">
										<FontAwesomeIcon icon={faChevronRight} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
										<p class="text-gray-600">{t(`liabilityItem${i}`)}</p>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					
					<!-- Modifications Tab -->
					{#if activeTab === 'modifications'}
						<div role="tabpanel" id="panel-modifications" aria-labelledby="tab-modifications" class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faEdit} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('modifications')}</h2>
									<p class="text-gray-500">{t('modificationsIntro')}</p>
								</div>
							</div>
							
							<p class="mb-6">{t('modificationsText')}</p>
							
							<div class="space-y-4">
								{#each ['modificationNotice', 'modificationEffect', 'modificationAcceptance'] as item, i}
									<div class="flex items-start bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30">
										<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
											{i + 1}
										</div>
										<div>
											<h3 class="font-medium text-gray-900">{t(item)}</h3>
											<p class="text-gray-600 mt-1">{t(`modificationPoint${i + 1}`)}</p>
										</div>
									</div>
								{/each}
							</div>
							
							<div class="bg-black text-white p-6 rounded-lg mt-6 relative overflow-hidden border-l-4 border-red-500">
								<div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
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