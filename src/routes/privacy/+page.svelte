<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { 
		faShield, 
		faUserLock, 
		faCookieBite, 
		faServer,
		faLock, 
		faDatabase,
		faChevronRight,
		faTimes,
		faShieldAlt,
		faFingerprint,
		faClipboardCheck,
		faEnvelope,
		faMapMarkerAlt
	} from '@fortawesome/free-solid-svg-icons';
	import { language, translations, type TranslationKey } from '$lib/stores/i18n.js';
	import { onMount, afterUpdate } from 'svelte';
	import PolicyTabs from '$lib/components/privacy/PolicyTabs.svelte';
	// Remove CSS import to prevent conflicts
	// import '$lib/styles/PrivacyPolicy.css';

	// Properly typed translation function for better type safety
	$: t = (key: TranslationKey): string => {
		const trans = translations as Record<string, Record<string, string>>;
		if (!trans[$language] || !trans[$language][key]) {
			return key;
		}
		return trans[$language][key];
	};

	// Cookie preferences state with defaults enabled
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

	// Implement lazy loading for tabs
	let visibleTab = activeTab;
	let isTabTransitioning = false;

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
			visibleTab = hash;
		}
	});

	afterUpdate(() => {
		// Focus management for accessibility
		if (activeTab === visibleTab && !isTabTransitioning) {
			const tabPanel = document.getElementById(`panel-${activeTab}`);
			if (tabPanel) {
				tabPanel.focus();
			}
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
	
	function setActiveTab(tabId: string) {
		if (activeTab === tabId) return;
		
		isTabTransitioning = true;
		setTimeout(() => {
			visibleTab = tabId;
			isTabTransitioning = false;
		}, 300); // Match with the CSS transition duration
		
		activeTab = tabId;
		window.location.hash = tabId;
	}

	function handleTabChange(event: CustomEvent<string>) {
		setActiveTab(event.detail);
	}
</script>

<svelte:head>
	<title>{t('privacyPolicy')} | Sandviken Marathon</title>
	<meta name="description" content={t('privacyIntro')} />
	<meta name="robots" content="noindex,follow" />
	<link rel="canonical" href="https://sandvikenmarathon.com/privacy" />
</svelte:head>

<div class="privacy-page" in:fade={{ duration: 300 }}>
	<div class="hero-section" role="banner">
		<div class="hero-pattern" aria-hidden="true"></div>
		<div class="hero-content">
			<h1>{t('privacyPolicy')}</h1>
			<p class="hero-intro">{t('privacyIntro')}</p>
			<div class="hero-badge">
				<FontAwesomeIcon icon={faChevronRight} class="badge-icon" />
				<span>{t('privacyLastUpdated')} {t('privacyDate')}</span>
			</div>
		</div>
	</div>
	
	<main class="policy-wrapper">
		<div class="tabs-container">
			<PolicyTabs {tabs} {activeTab} on:tabChange={handleTabChange} ariaLabel="Privacy Policy Sections" />

			<div class="tab-content">
				<!-- Overview tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'overview'}
					id="panel-overview"
					role="tabpanel"
					aria-labelledby="tab-overview"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faShield} />
						</div>
						<div>
							<h2 id="overview-heading">{t('privacyIntroTitle')}</h2>
							<p class="subtitle">{t('privacyIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('privacyIntroText')}</p>
						
						<div class="highlight-box">
							<div class="highlight-pattern" aria-hidden="true"></div>
							<p class="relative z-10">{t('privacyHighlight')}</p>
						</div>
						
						<nav class="policy-nav" aria-labelledby="policy-nav-heading">
							<h3 id="policy-nav-heading">In this Privacy Policy:</h3>
							<ul class="policy-nav-list">
								{#each tabs.slice(1) as tab}
									<li>
										<button 
											class="nav-link" 
											on:click={() => setActiveTab(tab.id)}
											aria-label={`Go to ${t(`${tab.label}`)} section`}
										>
											<div class="nav-icon" aria-hidden="true">
												<FontAwesomeIcon icon={tab.icon} />
											</div>
											<span>{t(`${tab.label}`)}</span>
											<FontAwesomeIcon icon={faChevronRight} class="chevron" />
										</button>
									</li>
								{/each}
							</ul>
						</nav>
					</div>
				</div>
				
				<!-- Data Collection tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'collection'}
					id="panel-collection"
					role="tabpanel"
					aria-labelledby="tab-collection"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faUserLock} />
						</div>
						<div>
							<h2 id="collection-heading">{t('infoCollectTitle')}</h2>
							<p class="subtitle">{t('infoCollectIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('infoCollectText')}</p>
						
						<div class="data-grid">
							{#each ['personal', 'contact', 'technical', 'usage'] as type, i}
								<article class="data-card">
									<header class="data-card-header">
										<div class="data-number" aria-hidden="true">{i + 1}</div>
										<h3>{t(`${type}InfoTitle`)}</h3>
									</header>
									<div class="data-card-body">
										<p>{t(`${type}InfoText`)}</p>
									</div>
								</article>
							{/each}
						</div>
					</div>
				</div>
				
				<!-- Data Usage tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'usage'}
					id="panel-usage"
					role="tabpanel"
					aria-labelledby="tab-usage"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faServer} />
						</div>
						<div>
							<h2 id="usage-heading">{t('infoUseTitle')}</h2>
							<p class="subtitle">{t('infoUseIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('infoUseText')}</p>
						
						<div class="usage-list">
							{#each ['eventReg', 'relationship', 'communication', 'websiteImprovement', 'security'] as type, i}
								<article class="usage-item">
									<div class="usage-icon" aria-hidden="true">
										<span>{i + 1}</span>
									</div>
									<div class="usage-content">
										<h3>{t(`${type}Title`)}</h3>
										<p>{t(`${type}Text`)}</p>
									</div>
								</article>
							{/each}
						</div>
					</div>
				</div>
				
				<!-- Cookies tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'cookies'}
					id="panel-cookies"
					role="tabpanel"
					aria-labelledby="tab-cookies" 
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faCookieBite} />
						</div>
						<div>
							<h2 id="cookies-heading">{t('cookiesTitle')}</h2>
							<p class="subtitle">{t('cookiesIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('cookiesText')}</p>
						
						<div class="cookie-grid">
							{#each Object.entries(cookiePreferences) as [type, enabled]}
								<div class="cookie-card" class:essential={type === 'essential'}>
									<div class="cookie-card-header">
										<div class="cookie-icon {type}" aria-hidden="true">
											<span class="cookie-dot"></span>
										</div>
										<h3 id="cookie-{type}-heading">{t(`${type}Title`)}</h3>
									</div>
									<div class="cookie-card-body">
										<p>{t(`${type}Text`)}</p>
										<div class="cookie-toggle">
											<label class="switch" class:disabled={type === 'essential'} for="cookie-{type}">
												<input
													type="checkbox"
													id="cookie-{type}"
													checked={enabled}
													disabled={type === 'essential'}
													on:change={() => handleCookiePreference(type as keyof typeof cookiePreferences)}
													aria-describedby="cookie-{type}-heading"
												>
												<span class="slider"></span>
												<span class="toggle-text">{enabled ? t('enabled') : t('disabled')}</span>
											</label>
										</div>
									</div>
								</div>
							{/each}
						</div>
						
						<p class="cookie-save-hint">
							<small>Your cookie preferences are automatically saved for future visits.</small>
						</p>
					</div>
				</div>
				
				<!-- Retention tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'retention'}
					id="panel-retention"
					role="tabpanel"
					aria-labelledby="tab-retention"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faDatabase} />
						</div>
						<div>
							<h2 id="retention-heading">{t('dataRetentionTitle')}</h2>
							<p class="subtitle">{t('dataRetentionIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('dataRetentionText')}</p>
						
						<div class="retention-card">
							<h3 id="retention-periods-heading">{t('retentionPeriodsTitle')}</h3>
							<ul class="retention-list" aria-labelledby="retention-periods-heading">
								{#each ['accountInfo', 'eventRegRetention', 'marketingPrefs', 'paymentInfo'] as type}
									<li>
										<FontAwesomeIcon icon={faChevronRight} class="list-icon" />
										<div>
											<strong>{t(`${type}Title`)}</strong>
											<p>{t(`${type}Text`)}</p>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
				
				<!-- Your Rights tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'rights'}
					id="panel-rights"
					role="tabpanel"
					aria-labelledby="tab-rights"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faClipboardCheck} />
						</div>
						<div>
							<h2 id="rights-heading">{t('yourRightsTitle')}</h2>
							<p class="subtitle">{t('yourRightsIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('yourRightsText')}</p>
						
						<div class="rights-grid">
							{#each ['access', 'correction', 'deletion', 'restriction'] as right}
								<article class="right-card">
									<h3>{t(`${right}Title`)}</h3>
									<p>{t(`${right}Text`)}</p>
								</article>
							{/each}
						</div>
						
						<div class="rights-note">
							<p><small>You will not have to pay a fee to access your personal data. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.</small></p>
						</div>
					</div>
				</div>
				
				<!-- Security tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'security'}
					id="panel-security"
					role="tabpanel" 
					aria-labelledby="tab-security"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faLock} />
						</div>
						<div>
							<h2 id="security-heading">{t('dataSecurityTitle')}</h2>
							<p class="subtitle">{t('dataSecurityIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('dataSecurityText')}</p>
						
						<div class="security-grid">
							{#each ['secureStorage', 'accessControl', 'regularUpdates', 'dataMinimization'] as feature}
								<article class="security-card">
									<div class="security-icon" aria-hidden="true">
										<span>{feature === 'secureStorage' ? '🔒' : 
											  feature === 'accessControl' ? '🛡️' :
											  feature === 'regularUpdates' ? '🔄' : '📊'}</span>
									</div>
									<div class="security-content">
										<h3>{t(`${feature}Title`)}</h3>
										<p>{t(`${feature}Text`)}</p>
									</div>
								</article>
							{/each}
						</div>
					</div>
				</div>
				
				<!-- Contact tab -->
				<div 
					class="tab-panel" 
					class:active={activeTab === 'contact'}
					id="panel-contact"
					role="tabpanel"
					aria-labelledby="tab-contact"
					tabindex="0"
				>
					<div class="tab-header">
						<div class="tab-icon-large" aria-hidden="true">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div>
							<h2 id="contact-heading">{t('privacyContactTitle')}</h2>
							<p class="subtitle">{t('privacyContactIntro')}</p>
						</div>
					</div>
					
					<div class="content-wrapper">
						<p class="mb-4">{t('privacyContactText')}</p>
						
						<div class="contact-grid">
							<div class="contact-card">
								<div class="contact-icon" aria-hidden="true">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div class="contact-content">
									<h3>{t('privacyContactEmail')}</h3>
									<p class="email-container">
										<a href="mailto:{t('privacyContactEmailAddress')}" class="contact-link">
											{t('privacyContactEmailAddress')}
										</a>
									</p>
								</div>
							</div>
							
							<div class="contact-card">
								<div class="contact-icon" aria-hidden="true">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</div>
								<div class="contact-content">
									<h3>{t('privacyContactAddress')}</h3>
									<address class="contact-address">
										{t('privacyContactAddressText')}
									</address>
								</div>
							</div>
						</div>
						
						<div class="contact-action">
							<a href="/contact" class="contact-button">
								<span>{t('privacyContactBtn')}</span>
								<FontAwesomeIcon icon={faChevronRight} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
  /* Use Svelte's scoped styling to avoid conflicts with global styles */
  /* These styles will only apply to this component */
  
  /* ===== GENERAL STYLES ===== */
  .privacy-page {
    background-color: #fafafa;
    min-height: 100vh;
    font-display: swap; /* Improve font loading performance */
  }

  /* ===== UTILITY CLASSES ===== */
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .relative {
    position: relative;
  }
  
  .z-10 {
    z-index: 10;
  }

  /* ===== HERO SECTION ===== */
  .hero-section {
    background-color: #000;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
  }
  
  .hero-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%),
                     radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%);
    background-size: 100px 100px;
    opacity: 0.5;
    z-index: 1;
    will-change: transform; /* Optimize for animation */
  }
  
  .hero-content {
    max-width: 1200px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  
  .hero-content h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }
  
  .hero-content h1::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: white;
  }
  
  .hero-intro {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 300;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .badge-icon {
    margin-right: 0.5rem;
  }
  
  /* ===== POLICY WRAPPER ===== */
  .policy-wrapper {
    max-width: 1200px;
    margin: -3rem auto 0;
    padding: 0 1.5rem 3rem;
    position: relative;
    z-index: 5;
  }
  
  .tabs-container {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    display: flex;
    min-height: 600px;
  }
  
  .tab-content {
    flex: 1;
    position: relative;
    overflow-y: auto;
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: rgba(0,0,0,0.2) transparent; /* For Firefox */
  }
  
  /* Custom scrollbar for WebKit browsers */
  .tab-content::-webkit-scrollbar {
    width: 6px;
  }
  
  .tab-content::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  .tab-content::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 6px;
  }
  
  /* ===== TAB PANELS ===== */
  .tab-panel {
    display: none;
    padding: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .tab-panel.active {
    display: block;
    opacity: 1;
  }
  
  .tab-header {
    background-color: #f8f9fa;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .tab-icon-large {
    width: 60px;
    height: 60px;
    background-color: #000;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  .subtitle {
    color: #6b7280;
    margin: 0;
    font-size: 0.95rem;
  }
  
  .content-wrapper {
    padding: 2rem;
  }
  
  /* ===== HIGHLIGHT BOX ===== */
  .highlight-box {
    background-color: #000;
    color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
  }
  
  .highlight-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.3;
  }
  
  /* ===== POLICY NAVIGATION ===== */
  .policy-nav {
    margin-top: 1.5rem;
  }
  
  .policy-nav h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #111827;
  }
  
  .policy-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    width: 100%;
    text-align: left;
    cursor: pointer;
    color: inherit;
    font: inherit;
  }
  
  .nav-link:hover, .nav-link:focus-visible {
    background-color: #f3f4f6;
    border-color: rgba(0, 0, 0, 0.1);
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  
  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: #000;
    color: white;
    border-radius: 6px;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .chevron {
    margin-left: auto;
    opacity: 0.3;
    font-size: 0.875rem;
  }
  
  /* ===== DATA CARDS ===== */
  .data-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  
  .data-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .data-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .data-card-header {
    background: linear-gradient(to right, #000, #1a1a1a);
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .data-number {
    background-color: white;
    color: #000;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
  }
  
  .data-card-header h3 {
    font-size: 1.1rem;
    margin: 0;
    color: white;
  }
  
  .data-card-body {
    padding: 1.25rem;
    flex-grow: 1;
  }
  
  /* ===== USAGE LIST ===== */
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .usage-item {
    display: flex;
    gap: 1rem;
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .usage-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .usage-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(to right, #000, #1a1a1a);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
  }
  
  .usage-content {
    flex: 1;
  }
  
  .usage-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  /* ===== COOKIE CARDS ===== */
  .cookie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  
  .cookie-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .cookie-card.essential {
    background-color: #f9fafb;
  }
  
  .cookie-card-header {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .cookie-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .cookie-icon.essential {
    background-color: #dcfce7;
    color: #166534;
  }
  
  .cookie-icon.functional {
    background-color: #dbeafe;
    color: #1e40af;
  }
  
  .cookie-icon.analytics {
    background-color: #fef3c7;
    color: #92400e;
  }
  
  .cookie-icon.marketing {
    background-color: #fee2e2;
    color: #b91c1c;
  }
  
  .cookie-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: currentColor;
  }
  
  .cookie-card-header h3 {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .cookie-card-body {
    padding: 1.25rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .cookie-toggle {
    margin-top: auto;
  }
  
  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  
  .switch.disabled {
    cursor: not-allowed;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #e5e7eb;
    border-radius: 20px;
    transition: 0.3s;
    flex-shrink: 0;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
  
  input:checked + .slider {
    background-color: #000;
  }
  
  input:focus-visible + .slider {
    box-shadow: 0 0 1px #000;
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  
  input:checked + .slider:before {
    transform: translateX(20px);
  }
  
  .toggle-text {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .cookie-save-hint {
    margin-top: 1rem;
    color: #6b7280;
    text-align: center;
  }
  
  /* ===== RETENTION AND RIGHTS ===== */
  .retention-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
  }
  
  .retention-card h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .retention-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .retention-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .retention-list li:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  
  .list-icon {
    margin-top: 0.25rem;
    color: #000;
    flex-shrink: 0;
  }
  
  .retention-list strong {
    display: block;
    margin-bottom: 0.25rem;
  }
  
  .rights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .right-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    height: 100%;
  }
  
  .right-card h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  
  .rights-note {
    color: #6b7280;
    margin-top: 1rem;
  }
  
  /* ===== SECURITY ===== */
  .security-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  
  .security-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    height: 100%;
  }
  
  .security-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  .security-content {
    flex: 1;
  }
  
  .security-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  /* ===== CONTACT ===== */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .contact-content {
    flex: 1;
    min-width: 0; /* Important for text overflow handling */
  }
  
  .contact-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .contact-content p, .contact-address {
    margin: 0;
    font-style: normal;
  }
  
  .email-container {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
  }
  
  .contact-link {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .contact-link:hover, .contact-link:focus-visible {
    color: #4b5563;
    text-decoration: underline;
  }
  
  .contact-action {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .contact-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #000;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  .contact-button:hover, .contact-button:focus-visible {
    background-color: #1a1a1a;
    transform: translateY(-2px);
  }
  
  /* ===== FOCUS STYLES FOR ACCESSIBILITY ===== */
  :focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  
  /* ===== RESPONSIVE STYLES ===== */
  @media (max-width: 1024px) {
    .policy-wrapper {
      margin-top: -2rem;
    }
    
    .hero-section {
      min-height: 35vh;
      padding: 3rem 1.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .tabs-container {
      flex-direction: column;
    }
    
    .data-grid, 
    .policy-nav-list,
    .rights-grid,
    .security-grid,
    .contact-grid,
    .cookie-grid {
      grid-template-columns: 1fr;
    }
    
    .hero-section {
      padding: 3rem 1rem;
      min-height: 30vh;
    }
    
    .tab-header {
      padding: 1rem 1.5rem;
    }
    
    .tab-icon-large {
      width: 48px;
      height: 48px;
      font-size: 1.25rem;
    }
    
    .content-wrapper {
      padding: 1.5rem;
    }
    
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .policy-wrapper {
      padding: 0 1rem 2rem;
      margin-top: -1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .tab-header {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      padding: 1.25rem 1rem;
    }
  }
  
  /* Support for reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style> 