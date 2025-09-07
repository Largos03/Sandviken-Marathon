<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faShield,
		faCookieBite,
		faEnvelope
	} from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { SidebarNav, ContactSection, TabHandler, HeroSection, ContentCard, InfoItem, TabsNav } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	export const data: { lang?: string } = {};

	$: t = $tStore;

	let activeTab = 'overview';

	$: tabs = [
		{ id: 'overview', label: t('tabOverview'), icon: faShield },
		{ id: 'cookies', label: t('tabCookies'), icon: faCookieBite },
		{ id: 'contact', label: t('tabContactUs'), icon: faEnvelope }
	];
</script>

<svelte:head>
	<title>Privacy Policy | Sandviken Half-marathon</title>
	<meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information." />
	<meta name="robots" content="noindex,follow" />
	<link rel="canonical" href="https://sandvikenhalfmarathon.com/privacy" />
</svelte:head>

<div in:fade={{ duration: 300 }}>	<TabHandler {tabs} bind:activeTab let:activeTab let:setActiveTab>
		<!-- Hero Section -->
		<HeroSection 
			title={t('privacyPolicy')} 
			description={t('privacyHeroDescription')}
			lastUpdated="{t('privacyLastUpdated')} {t('privacyDate')}"
		/>

		<!-- Main Content -->
	<div class="relative z-20 mx-auto -mt-8 mb-20 px-6 max-w-[1100px]">
		<div class="card-main">
			<!-- Tabs Navigation -->
			<div class="flex flex-col md:flex-row">
				<!-- Sidebar Navigation -->
				<SidebarNav
					{tabs}
					{activeTab}
					title="Privacy Policy Sections"
					onTabChange={setActiveTab}
					ariaLabel="Main Privacy Navigation"
				/>

				<!-- Tab Content -->
				<div class="h-[600px] flex-grow overflow-y-auto p-6 md:h-[700px]">
					<!-- Overview Tab -->
					{#if activeTab === 'overview'}
						<div>
							<div class="mb-5 flex items-center">
								<div class="icon-container-lg mr-4">
									<FontAwesomeIcon icon={faShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">Welcome to Our Privacy Policy</h2>
									<p class="text-gray-500">This Privacy Policy describes how Sandviken Half-marathon collects, uses, and protects your personal information when you visit our website or participate in our events.</p>
								</div>
							</div>

							<p class="mb-5 text-gray-700">We are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly and transparently. Please read this policy carefully to understand our practices.</p>

							<div class="card-accent relative mb-6">
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10 font-medium">We only collect information necessary to provide and improve our services.</p>
							</div>

							<TabsNav
								tabs={tabs.slice(1)}
								onTabChange={setActiveTab}
								headingText="Explore Policy Sections"
								ariaLabel="Privacy Navigation"
							/>
						</div>
					{/if}

					<!-- Cookies Tab -->
					{#if activeTab === 'cookies'}
						<div class="mb-6">
							<div class="mb-6 flex items-center">
								<div class="icon-container-lg mr-4">
									<FontAwesomeIcon icon={faCookieBite} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">{t('cookiesTitle')}</h2>
									<p class="text-gray-500">{t('cookiesText')}</p>
								</div>
							</div>

							<div class="card-simple mb-6">
								<h3 class="mb-3 font-semibold">{t('noTrackingTitle')}</h3>
								<p class="text-gray-600">{t('noTrackingText')}</p>
							</div>

							<div class="card-simple">
								<h3 class="mb-3 font-semibold">{t('localStorageTitle')}</h3>
								<p class="text-gray-600">{t('localStorageText')}</p>
							</div>
						</div>
					{/if}

					<!-- Contact Tab -->
					{#if activeTab === 'contact'}
						<ContactSection
							title="Contact Us"
							description={t('contactDescription')}
							emailLabel={t('email')}
							phoneLabel={t('phone')}
							buttonText={t('contactUs')}
							emailAddress="traningsgruppensandviken@outlook.com"
							phoneNumber="+46 (0) 705 713 800 , +46(0) 732 027 032"
							ariaLabelledby="privacy-contact-section"						/>
					{/if}
				</div>
			</div>
		</div>
	</TabHandler>
</div>
