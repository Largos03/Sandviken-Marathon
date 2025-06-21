<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';	import {
		faShield,
		faUserLock,
		faCookieBite,
		faServer,
		faLock,
		faDatabase,
		faClipboardCheck,
		faEnvelope,
		faChevronRight
	} from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';	import { SidebarNav, ContactSection, TabsNav, TabHandler, HeroSection, ContentCard, InfoItem } from '$lib';
	import Container from '$lib/components/Container.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ResponsiveGrid from '$lib/components/ResponsiveGrid.svelte';

	// Accept data from page.server.js
	export const data: { lang?: string } = {};

	// Use the derived translation store
	$: t = $tStore;

	// Active tab state
	let activeTab = 'overview';

	// Tabs structure with translations
	$: tabs = [
		{ id: 'overview', label: t('tabOverview'), icon: faShield },
		{ id: 'collection', label: t('tabDataCollection'), icon: faUserLock },
		{ id: 'usage', label: t('tabDataUsage'), icon: faServer },
		{ id: 'cookies', label: t('tabCookies'), icon: faCookieBite },
		{ id: 'retention', label: t('tabRetention'), icon: faDatabase },
		{ id: 'rights', label: t('tabYourRights'), icon: faClipboardCheck },
		{ id: 'security', label: t('tabSecurity'), icon: faLock },
		{ id: 'contact', label: t('tabContactUs'), icon: faEnvelope }
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
	};	onMount(() => {
		// Load saved preferences if they exist
		try {
			const savedPreferences = localStorage.getItem('cookiePreferences');
			if (savedPreferences) {
				cookiePreferences = JSON.parse(savedPreferences);
			}
		} catch {
			// Silent fail - use defaults
		}
	});

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
	<title>Privacy Policy | Sandviken Marathon</title>
	<meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information." />
	<meta name="robots" content="noindex,follow" />
	<link rel="canonical" href="https://sandvikenmarathon.com/privacy" />
</svelte:head>

<div in:fade={{ duration: 300 }}>	<TabHandler {tabs} bind:activeTab let:activeTab let:setActiveTab>
		<!-- Hero Section -->
		<HeroSection 
			title="Privacy Policy" 
			description="Your privacy is important to us. This page explains how we handle your personal data when you use our services or participate in the Sandviken Marathon."
			lastUpdated="Last updated: June 21, 2025"
		/>

		<!-- Main Content -->
	<div class="relative z-20 mx-auto -mt-8 mb-20 px-6 max-w-[1100px]">
		<div class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
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
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white shadow-md"
								>
									<FontAwesomeIcon icon={faShield} size="lg" class="text-red-100" />
								</div>
								<div>
									<h2 class="text-2xl font-bold">Welcome to Our Privacy Policy</h2>
									<p class="text-gray-500">This Privacy Policy describes how Sandviken Marathon collects, uses, and protects your personal information when you visit our website or participate in our events.</p>
								</div>
							</div>

							<p class="mb-5 text-gray-700">We are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly and transparently. Please read this policy carefully to understand our practices.</p>

							<div
								class="relative mb-6 overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-5 text-white shadow-md"
							>
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
									<h2 class="text-2xl font-bold">Information We Collect</h2>
									<p class="text-gray-500">We collect different types of information to provide and improve our services.</p>
								</div>
							</div>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center border-b border-gray-100 p-4">
										<h3 class="font-semibold">Personal Information</h3>
									</div>
									<div class="p-4">
										<p class="text-gray-600">Name, date of birth, and other details you provide during registration.</p>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center border-b border-gray-100 p-4">
										<h3 class="font-semibold">Contact Information</h3>
									</div>
									<div class="p-4">
										<p class="text-gray-600">Email address, phone number, and mailing address.</p>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center border-b border-gray-100 p-4">
										<h3 class="font-semibold">Technical Data</h3>
									</div>
									<div class="p-4">
										<p class="text-gray-600">IP address, browser type, device information, and usage data collected automatically when you use our website.</p>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center border-b border-gray-100 p-4">
										<h3 class="font-semibold">Usage Data</h3>
									</div>
									<div class="p-4">
										<p class="text-gray-600">Information about how you interact with our website and services.</p>
									</div>
								</div>
							</div>
						</div>
					{/if}					<!-- Data Usage Tab -->
					{#if activeTab === 'usage'}
						<div class="mb-6">
							<ContentCard icon={faServer} title="How We Use Your Information" subtitle="We use your information to operate, maintain, and improve our services.">
								<div class="space-y-4">
									<InfoItem title="Event Registration" description="To process your registration and participation in the Sandviken Marathon." variant="hover" />
									<InfoItem title="Customer Relationship" description="To communicate with you about your registration, results, and event updates." variant="hover" />
									<InfoItem title="Communication" description="To send you important information, newsletters, and marketing materials (if you have consented)." variant="hover" />
									<InfoItem title="Website Improvement" description="To analyze usage and improve the functionality and user experience of our website." variant="hover" />
									<InfoItem title="Security" description="To protect our website and users from fraud, abuse, and security threats." variant="hover" />
								</div>
							</ContentCard>
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
									<h2 class="text-2xl font-bold">Cookies and Tracking Technologies</h2>
									<p class="text-gray-500">We use cookies and similar technologies to enhance your experience and analyze website usage.</p>
								</div>
							</div>
							<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center justify-between border-b border-gray-100 p-4">
										<div class="flex items-center">
											<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
												<span class="h-2 w-2 rounded-full bg-red-200"></span>
											</div>
											<h3 class="font-semibold">Essential Cookies</h3>
										</div>
									</div>
									<div class="p-4">
										<p class="mb-4 text-gray-600">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
										<div class="flex items-center justify-between">
											<label class="relative inline-flex cursor-pointer items-center">
												<input type="checkbox" class="peer sr-only" checked disabled />
												<div class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-red-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white opacity-60"></div>
												<span class="ml-3 text-sm font-medium text-gray-700">Enabled</span>
											</label>
										</div>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center justify-between border-b border-gray-100 p-4">
										<div class="flex items-center">
											<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
												<span class="h-2 w-2 rounded-full bg-red-200"></span>
											</div>
											<h3 class="font-semibold">Functional Cookies</h3>
										</div>
									</div>
									<div class="p-4">
										<p class="mb-4 text-gray-600">These cookies enable enhanced functionality and personalization, such as remembering your preferences.</p>
										<div class="flex items-center justify-between">
											<label class="relative inline-flex cursor-pointer items-center">
												<input type="checkbox" class="peer sr-only" checked={cookiePreferences.functional} on:change={() => handleCookiePreference('functional')} />
												<div class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-red-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
												<span class="ml-3 text-sm font-medium text-gray-700">{cookiePreferences.functional ? 'Enabled' : 'Disabled'}</span>
											</label>
										</div>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center justify-between border-b border-gray-100 p-4">
										<div class="flex items-center">
											<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
												<span class="h-2 w-2 rounded-full bg-red-200"></span>
											</div>
											<h3 class="font-semibold">Analytics Cookies</h3>
										</div>
									</div>
									<div class="p-4">
										<p class="mb-4 text-gray-600">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
										<div class="flex items-center justify-between">
											<label class="relative inline-flex cursor-pointer items-center">
												<input type="checkbox" class="peer sr-only" checked={cookiePreferences.analytics} on:change={() => handleCookiePreference('analytics')} />
												<div class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-red-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
												<span class="ml-3 text-sm font-medium text-gray-700">{cookiePreferences.analytics ? 'Enabled' : 'Disabled'}</span>
											</label>
										</div>
									</div>
								</div>
								<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<div class="flex items-center justify-between border-b border-gray-100 p-4">
										<div class="flex items-center">
											<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
												<span class="h-2 w-2 rounded-full bg-red-200"></span>
											</div>
											<h3 class="font-semibold">Marketing Cookies</h3>
										</div>
									</div>
									<div class="p-4">
										<p class="mb-4 text-gray-600">These cookies are used to deliver advertisements more relevant to you and your interests.</p>
										<div class="flex items-center justify-between">
											<label class="relative inline-flex cursor-pointer items-center">
												<input type="checkbox" class="peer sr-only" checked={cookiePreferences.marketing} on:change={() => handleCookiePreference('marketing')} />
												<div class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-red-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
												<span class="ml-3 text-sm font-medium text-gray-700">{cookiePreferences.marketing ? 'Enabled' : 'Disabled'}</span>
											</label>
										</div>
									</div>
								</div>
							</div>
							<p class="text-sm text-gray-500 italic">Your cookie preferences have been saved. You can change them at any time.</p>
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
									<h2 class="text-2xl font-bold">Data Retention Policy</h2>
									<p class="text-gray-500">We retain your personal data only as long as necessary for the purposes described in this policy.</p>
								</div>
							</div>
							<div class="mb-6 rounded-lg border border-gray-200 bg-white p-6 hover:border-l-3 hover:border-red-400/30">
								<h3 class="mb-4 text-xl font-semibold">Retention Periods</h3>
								<ul class="space-y-4">
									<li class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500"
										/>
										<div>
											<p class="font-medium">Account Information</p>
											<p class="text-gray-600">Kept for as long as your account is active or as needed to provide you with our services.</p>
										</div>
									</li>
									<li class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500"
										/>
										<div>
											<p class="font-medium">Event Registration Data</p>
											<p class="text-gray-600">Retained for up to 3 years after the event for administrative and legal purposes.</p>
										</div>
									</li>
									<li class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500"
										/>
										<div>
											<p class="font-medium">Marketing Preferences</p>
											<p class="text-gray-600">Stored until you withdraw your consent or request deletion.</p>
										</div>
									</li>
									<li class="flex items-start">
										<FontAwesomeIcon
											icon={faChevronRight}
											class="mt-1 mr-3 flex-shrink-0 text-red-500"
										/>
										<div>
											<p class="font-medium">Payment Information</p>
											<p class="text-gray-600">Kept only as long as necessary for transaction processing and legal compliance.</p>
										</div>
									</li>
								</ul>
							</div>

							<div
								class="relative overflow-hidden rounded-lg border-l-4 border-red-500 bg-black p-6 text-white"
							>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
								></div>
								<p class="relative z-10">We regularly review our data retention practices to ensure we do not keep your data longer than necessary.</p>
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
									<h2 class="text-2xl font-bold">Your Rights</h2>
									<p class="text-gray-500">You have certain rights regarding your personal data under applicable data protection laws.</p>
								</div>
							</div>

							<div class="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right of Access</h3>
									<p class="text-gray-600">You can request access to the personal data we hold about you.</p>
								</div>
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right to Rectification</h3>
									<p class="text-gray-600">You can ask us to correct inaccurate or incomplete information.</p>
								</div>
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right to Erasure</h3>
									<p class="text-gray-600">You can request deletion of your personal data under certain circumstances.</p>
								</div>
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right to Restriction</h3>
									<p class="text-gray-600">You can ask us to restrict the processing of your data in certain situations.</p>
								</div>
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right to Data Portability</h3>
									<p class="text-gray-600">You can request to receive your data in a structured, commonly used format.</p>
								</div>
								<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
									<h3 class="mb-2 text-lg font-semibold">Right to Object</h3>
									<p class="text-gray-600">You can object to our processing of your data for direct marketing or other purposes.</p>
								</div>
							</div>

							<p class="text-sm text-gray-500 italic">To exercise any of these rights, please contact us using the details below.</p>
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
									<h2 class="text-2xl font-bold">Data Security</h2>
									<p class="text-gray-500">We take the security of your personal data seriously and implement appropriate measures to protect it.</p>
								</div>
							</div>

							<div class="space-y-3">
								<div class="flex items-start">
									<FontAwesomeIcon icon={faShield} size="lg" class="mr-4 text-red-100" />
									<div>
										<h3 class="font-medium text-gray-900">Encryption</h3>
										<p class="mt-1 text-gray-600">We use industry-standard encryption to protect your data during transmission and storage.</p>
									</div>
								</div>
								<div class="flex items-start">
									<FontAwesomeIcon icon={faUserLock} size="lg" class="mr-4 text-red-100" />
									<div>
										<h3 class="font-medium text-gray-900">Access Controls</h3>
										<p class="mt-1 text-gray-600">Access to your data is limited to authorized personnel who need it to perform their duties.</p>
									</div>
								</div>
								<div class="flex items-start">
									<FontAwesomeIcon icon={faServer} size="lg" class="mr-4 text-red-100" />
									<div>
										<h3 class="font-medium text-gray-900">Regular Audits</h3>
										<p class="mt-1 text-gray-600">We regularly review our security practices and systems to ensure your data remains protected.</p>
									</div>
								</div>
							</div>

							<p class="mb-6 text-gray-700">Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure. We encourage you to contact us if you have any concerns about your data security.</p>
						</div>
					{/if}

					<!-- Contact Tab -->
					{#if activeTab === 'contact'}
						<ContactSection
							title="Contact Us"
							description="If you have any questions or concerns about this Privacy Policy or your personal data, please contact us."
							emailLabel="Email"
							addressLabel="Address"
							buttonText="Contact Us"
							emailAddress="privacy@sandvikenmarathon.com"
							ariaLabelledby="privacy-contact-section"						/>
					{/if}
				</div>
			</div>
		</div>
	</TabHandler>
</div>
