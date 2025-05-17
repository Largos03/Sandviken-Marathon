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
		if (hash && tabs.some(tab => tab.id === hash)) {
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
	<div class="relative bg-black text-white py-10 md:py-14" role="banner">
		<!-- Subtle grid pattern overlay -->
		<div class="absolute inset-0 opacity-20">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]"></div>
			<div class="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]"></div>
		</div>
		
		<!-- Content -->
		<div class="container mx-auto text-center px-4 relative z-10">
			<h1 class="text-3xl md:text-4xl font-bold mb-3 inline-block relative" in:fly={{ y: -20, duration: 800, delay: 300 }}>
				{t('privacyPolicy')}
				<span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-500/80 rounded-full shadow-glow"></span>
			</h1>
			<p class="text-base md:text-lg max-w-xl mx-auto mb-5 opacity-90 font-light" in:fly={{ y: 20, duration: 800, delay: 400 }}>
				{t('privacyIntro')}
			</p>
			<div class="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 shadow-sm" in:fly={{ y: 20, duration: 800, delay: 500 }}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span>{t('privacyLastUpdated')} {t('privacyDate')}</span>
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
					title={t('privacyPolicySections')}
					onTabChange={setActiveTab}
					ariaLabel={t('privacyMainNavigation')}
				/>
				
				<!-- Tab Content -->
				<div class="flex-grow p-6 overflow-y-auto h-[600px] md:h-[700px]">
					<!-- Overview Tab -->
					{#if activeTab === 'overview'}
						<div>
							<div class="flex items-center mb-5">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 shadow-md border-b-4 border-red-500">
									<FontAwesomeIcon icon={faShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('privacyIntroTitle')}</h2>
									<p class="text-gray-500">{t('privacyIntroSubtitle')}</p>
								</div>
							</div>
							
							<p class="mb-5 text-gray-700">{t('privacyIntroText')}</p>
							
							<div class="bg-black text-white p-5 rounded-lg mb-6 relative overflow-hidden shadow-md border-l-4 border-red-500">
								<div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
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
							<div class="flex items-center mb-5">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 shadow-md border-b-4 border-red-500">
									<FontAwesomeIcon icon={faUserLock} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('infoCollectTitle')}</h2>
									<p class="text-gray-500">{t('infoCollectSubtitle')}</p>
								</div>
							</div>
							
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								{#each ['personal', 'contact', 'technical', 'usage'] as item, i}
									<div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden hover:border-l-3 hover:border-red-400/30">
										<div class="flex items-center border-b border-gray-100 p-4">
											<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3 shadow-sm">
												{i + 1}
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
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faServer} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('infoUseTitle')}</h2>
									<p class="text-gray-500">{t('infoUseText')}</p>
								</div>
							</div>
							
							<div class="space-y-4">
								{#each ['eventReg', 'relationship', 'communication', 'websiteImprovement', 'security'] as item, i}
									<div class="flex items-start bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30">
										<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
											{i + 1}
										</div>
										<div>
											<h3 class="font-medium text-gray-900">{t(`${item}Title`)}</h3>
											<p class="text-gray-600 mt-1">{t(`${item}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
					
					<!-- Cookies Tab -->
					{#if activeTab === 'cookies'}
						<div class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faCookieBite} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('cookiesSectionTitle')}</h2>
									<p class="text-gray-500">{t('cookiesSectionText')}</p>
								</div>
							</div>
							
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								{#each Object.entries(cookiePreferences) as [type, enabled]}
									<div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden hover:border-l-3 hover:border-red-400/30">
										<div class="flex items-center justify-between border-b border-gray-100 p-4">
											<div class="flex items-center">
												<div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-3">
													<span class="w-2 h-2 rounded-full bg-red-200"></span>
												</div>
												<h3 class="font-semibold">{t(`${type}Cookies`)}</h3>
											</div>
										</div>
										<div class="p-4">
											<p class="text-gray-600 mb-4">{t(`${type}${type === 'essential' ? 'CookiesText' : 'Text'}`)}</p>
											<div class="flex items-center justify-between">
												<label class="relative inline-flex items-center cursor-pointer">
													<input 
														type="checkbox" 
														class="sr-only peer" 
														checked={enabled} 
														disabled={type === 'essential'}
														on:change={() => handleCookiePreference(type as keyof CookiePreferences)}
													>
													<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer 
																peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
																after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
																after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
																peer-checked:bg-black {type === 'essential' ? 'opacity-60' : ''}"></div>
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
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faDatabase} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('dataRetentionPolicy')}</h2>
									<p class="text-gray-500">{t('dataRetentionPolicyText')}</p>
								</div>
							</div>
							
							<div class="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:border-l-3 hover:border-red-400/30">
								<h3 class="text-xl font-semibold mb-4">{t('retentionPeriodsTitle')}</h3>
								<ul class="space-y-4">
									{#each ['accountInfo', 'eventRegRetention', 'marketingPrefs', 'paymentInfoSecurity'] as item}
										<li class="flex items-start">
											<FontAwesomeIcon icon={faChevronRight} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
											<div>
												<p class="font-medium">{t(`${item}Title`)}</p>
												<p class="text-gray-600">{t(`${item}Text`)}</p>
											</div>
										</li>
									{/each}
								</ul>
							</div>
							
							<div class="bg-black text-white p-6 rounded-lg relative overflow-hidden border-l-4 border-red-500">
								<div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
								<p class="relative z-10">{t('dataMinimizationPriority')}</p>
							</div>
						</div>
					{/if}
					
					<!-- Your Rights Tab -->
					{#if activeTab === 'rights'}
						<div class="mb-6">
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faClipboardCheck} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('yourRightsTitle')}</h2>
									<p class="text-gray-500">{t('yourRightsText')}</p>
								</div>
							</div>
							
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
								{#each ['access', 'correction', 'deletion', 'restriction'] as right}
									<div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30">
										<h3 class="text-lg font-semibold mb-2">{t(`${right}Title`)}</h3>
										<p class="text-gray-600">{t(`${right}Text`)}</p>
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
							<div class="flex items-center mb-6">
								<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 border-b-4 border-red-500">
									<FontAwesomeIcon icon={faLock} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('dataSecurityTitle')}</h2>
									<p class="text-gray-500">{t('dataSecurityText')}</p>
								</div>
							</div>
							
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{#each ['secureStorage', 'accessControl', 'regularUpdates', 'dataMinimization'] as feature}
									<div class="flex items-start bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-l-3 hover:border-red-400/30">
										<div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl mr-4">
											{#if feature === 'secureStorage'}🔒{:else if feature === 'accessControl'}🛡️{:else if feature === 'regularUpdates'}🔄{:else}📊{/if}
										</div>
										<div>
											<h3 class="font-semibold mb-2">{t(`${feature}Title`)}</h3>
											<p class="text-gray-600">{t(`${feature}Text`)}</p>
										</div>
									</div>
								{/each}
							</div>
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