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
		faTimes
	} from '@fortawesome/free-solid-svg-icons';
	import { language, translations } from '$lib/stores/i18n.js';
	import { onMount } from 'svelte';

	$: t = (key: string): string => {
		const trans = translations as Record<string, Record<string, string>>;
		if (!trans[$language] || !trans[$language][key]) {
			return key;
		}
		return trans[$language][key];
	};

	// Cookie preferences state with defaults enabled
	let cookiePreferences = {
		essential: true,
		functional: true,
		analytics: true,
		marketing: true
	};

	let showCookieNotice = false;

	onMount(() => {
		// Check if user has seen the notice before
		const hasSeenNotice = localStorage.getItem('cookieNoticeSeen');
		if (!hasSeenNotice) {
			showCookieNotice = true;
		}

		// Load saved preferences if they exist
		const savedPreferences = localStorage.getItem('cookiePreferences');
		if (savedPreferences) {
			cookiePreferences = JSON.parse(savedPreferences);
		}
	});

	function handleCookiePreference(type: keyof typeof cookiePreferences) {
		if (type === 'essential') return;
		cookiePreferences[type] = !cookiePreferences[type];
		localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
	}

	function dismissNotice() {
		showCookieNotice = false;
		localStorage.setItem('cookieNoticeSeen', 'true');
	}
</script>

<svelte:head>
	<title>{t('privacyPolicy')} | Sandviken Marathon</title>
	<meta name="description" content={t('privacyIntro')} />
</svelte:head>

{#if showCookieNotice}
	<div class="cookie-notice" transition:fade>
		<div class="notice-content">
			<p>{t('cookieNoticeText')}</p>
			<button class="dismiss-button" on:click={dismissNotice}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</div>
	</div>
{/if}

<div class="privacy-page" in:fade>
	<div class="hero-section">
		<div class="hero-pattern"></div>
		<div class="container mx-auto px-4 py-16 md:py-24 relative z-10">
			<h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{t('privacyPolicy')}</h1>
			<div class="w-32 h-1 bg-white mb-8 transform -skew-x-12"></div>
			<p class="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">{t('privacyIntro')}</p>
		</div>
	</div>
	
	<main class="policy-wrapper">
		<div class="update-badge">
			<FontAwesomeIcon icon={faChevronRight} class="mr-2" />
			<span>{t('privacyLastUpdated')} {t('privacyDate')}</span>
		</div>
		
		<section class="policy-card intro-card">
			<div class="card-content">
				<h2 class="text-3xl md:text-4xl mb-6 tracking-tight">{t('privacyIntroTitle')}</h2>
				<p class="mb-8 text-lg leading-relaxed">{t('privacyIntroText')}</p>
				<div class="highlight-box">
					<div class="highlight-pattern"></div>
					<p class="relative z-10 text-lg">{t('privacyHighlight')}</p>
				</div>
			</div>
			<div class="card-icon">
				<div class="icon-wrapper">
					<FontAwesomeIcon icon={faShield} />
				</div>
			</div>
		</section>
		
		<div class="policy-grid">
			<section class="policy-card hover-effect">
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faUserLock} />
					</div>
					<h2>{t('infoCollectTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-8 text-lg">{t('infoCollectText')}</p>
					<div class="info-grid">
						{#each ['personal', 'contact', 'technical', 'usage'] as type, i}
							<div class="info-item">
								<div class="info-item-header">
									<span class="info-number">{String(i + 1).padStart(2, '0')}</span>
									<h3>{t(`${type}InfoTitle`)}</h3>
								</div>
								<p>{t(`${type}InfoText`)}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>
			
			<section class="policy-card hover-effect">
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faServer} />
					</div>
					<h2>{t('infoUseTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('infoUseText')}</p>
					<div class="usage-list">
						{#each ['eventReg', 'relationship', 'communication', 'websiteImprovement', 'security'] as type, i}
							<div class="usage-item">
								<div class="usage-icon">
									<span>{String(i + 1).padStart(2, '0')}</span>
								</div>
								<div class="usage-content">
									<h3>{t(`${type}Title`)}</h3>
									<p>{t(`${type}Text`)}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
		
		<section class="policy-card hover-effect">
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faCookieBite} />
				</div>
				<h2>{t('cookiesTitle')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-8 text-lg">{t('cookiesText')}</p>
				<div class="cookie-types">
					{#each Object.entries(cookiePreferences) as [type, enabled]}
						<div class="cookie-type" class:essential={type === 'essential'}>
							<div class="cookie-content">
								<div class="cookie-header">
									<div class="cookie-icon {type}">
										<span class="cookie-dot"></span>
									</div>
									<h3>{t(`${type}Title`)}</h3>
								</div>
								<p class="cookie-description">{t(`${type}Text`)}</p>
								<div class="cookie-toggle">
									<label class="switch" class:disabled={type === 'essential'}>
										<input
											type="checkbox"
											checked={enabled}
											disabled={type === 'essential'}
											on:change={() => handleCookiePreference(type as keyof typeof cookiePreferences)}
										>
										<span class="slider"></span>
										<span class="toggle-text">{enabled ? t('enabled') : t('disabled')}</span>
									</label>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
		
		<div class="policy-grid">
			<section class="policy-card">
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faDatabase} />
					</div>
					<h2>{t('dataRetentionTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('dataRetentionText')}</p>
					<div class="retention-card">
						<h3>{t('retentionPeriodsTitle')}</h3>
						<ul class="modern-list">
							{#each ['accountInfo', 'eventRegRetention', 'marketingPrefs', 'paymentInfo'] as type}
								<li>
									<FontAwesomeIcon icon={faChevronRight} />
									<span><strong>{t(`${type}Title`)}:</strong> {t(`${type}Text`)}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</section>
			
			<section class="policy-card">
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faUserLock} />
					</div>
					<h2>{t('yourRightsTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('yourRightsText')}</p>
					<div class="rights-grid">
						{#each ['access', 'correction', 'deletion', 'restriction'] as right}
							<div class="right-item">
								<h3>{t(`${right}Title`)}</h3>
								<p>{t(`${right}Text`)}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
		
		<section class="policy-card security-card">
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faLock} />
				</div>
				<h2>{t('dataSecurityTitle')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('dataSecurityText')}</p>
				<div class="security-features">
					{#each ['secureStorage', 'accessControl', 'regularUpdates', 'dataMinimization'] as feature}
						<div class="security-feature">
							<div class="security-icon">
								<span>{feature === 'secureStorage' ? '🔒' : 
									  feature === 'accessControl' ? '🛡️' :
									  feature === 'regularUpdates' ? '🔄' : '📊'}</span>
							</div>
							<div class="security-content">
								<h3>{t(`${feature}Title`)}</h3>
								<p>{t(`${feature}Text`)}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
		
		<section class="policy-card contact-card">
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faUserLock} />
				</div>
				<h2>{t('privacyContactTitle')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('privacyContactText')}</p>
				<div class="contact-info">
					<div class="contact-item">
						<h3>{t('privacyContactEmail')}</h3>
						<p>{t('privacyContactEmailAddress')}</p>
					</div>
					<div class="contact-item">
						<h3>{t('privacyContactAddress')}</h3>
						<p>{t('privacyContactAddressText')}</p>
					</div>
					<a href="/contact" class="contact-button">{t('privacyContactBtn')}</a>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.privacy-page {
		background-color: #fafafa;
		min-height: 100vh;
	}
	
	.hero-section {
		background-color: #000;
		color: rgba(255, 255, 255, 0.95);
		padding: 2.5rem 0;
		position: relative;
		overflow: hidden;
	}
	
	.hero-pattern {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
			linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
			linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
			linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
			linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77);
		background-size: 80px 140px;
		background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0;
		opacity: 0.05;
	}
	
	.policy-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		position: relative;
		margin-top: -4rem;
	}
	
	.update-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.5rem;
		background-color: white;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		box-shadow: 0 4px 6px rgba(0,0,0,0.05);
		margin-bottom: 2rem;
		transform: translateY(-50%);
		border: 1px solid rgba(0,0,0,0.1);
	}
	
	.policy-card {
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 4px 6px rgba(0,0,0,0.05);
		margin-bottom: 2rem;
		overflow: hidden;
		transition: box-shadow 0.2s ease;
	}
	
	.hover-effect:hover {
		box-shadow: 0 8px 12px rgba(0,0,0,0.1);
	}
	
	.intro-card {
		display: grid;
		grid-template-columns: 1fr auto;
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
	}
	
	.card-content {
		padding: 3rem;
	}
	
	.card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		padding: 3rem;
		position: relative;
		overflow: hidden;
	}
	
	.card-icon::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%);
	}
	
	.icon-wrapper {
		width: 100px;
		height: 100px;
		background-color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		color: #000;
		position: relative;
		z-index: 1;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	}
	
	.icon-wrapper.small {
		width: 48px;
		height: 48px;
		font-size: 1.25rem;
		margin-right: 1rem;
	}
	
	.highlight-box {
		background-color: #000;
		color: white;
		padding: 2rem;
		border-radius: 1rem;
		margin-top: 2rem;
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
		opacity: 0.5;
	}
	
	.card-header {
		display: flex;
		align-items: center;
		padding: 1.5rem 2rem;
		background: linear-gradient(to right, #000, #1a1a1a);
		color: white;
	}
	
	.card-header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		color: rgba(255, 255, 255, 0.95);
	}
	
	.card-body {
		padding: 2rem;
	}
	
	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}
	
	.info-item {
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
		padding: 1.5rem;
		border-radius: 1rem;
		box-shadow: 0 2px 4px rgba(0,0,0,0.05);
		border: 1px solid rgba(0,0,0,0.1);
		transition: box-shadow 0.2s ease;
	}
	
	.info-item:hover {
		box-shadow: 0 4px 8px rgba(0,0,0,0.1);
	}
	
	.info-item-header {
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	
	.info-number {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: #000;
		color: white;
		font-weight: 600;
		font-size: 0.875rem;
		margin-right: 0.75rem;
	}
	
	.usage-list {
		display: grid;
		gap: 1.5rem;
	}
	
	.usage-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.75rem;
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
		border: 1px solid rgba(0,0,0,0.1);
		transition: box-shadow 0.2s ease;
	}
	
	.usage-item:hover {
		box-shadow: 0 2px 4px rgba(0,0,0,0.05);
	}
	
	.usage-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		background-color: #000;
		color: white;
		border-radius: 50%;
		font-weight: 600;
		flex-shrink: 0;
	}
	
	.cookie-types {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
	
	.cookie-type {
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
		border-radius: 1rem;
		border: 1px solid rgba(0,0,0,0.1);
		overflow: hidden;
		transition: box-shadow 0.2s ease;
	}
	
	.cookie-type:hover {
		border-color: rgba(0,0,0,0.2);
		box-shadow: 0 4px 12px rgba(0,0,0,0.05);
	}
	
	.cookie-type.essential {
		background: linear-gradient(135deg, #f8f8f8 0%, #f3f3f3 100%);
	}
	
	.cookie-content {
		padding: 1.5rem;
	}
	
	.cookie-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.cookie-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	.cookie-icon.essential { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); }
	.cookie-icon.functional { background: linear-gradient(135deg, #0369a1 0%, #075985 100%); }
	.cookie-icon.analytics { background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%); }
	.cookie-icon.marketing { background: linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%); }
	
	.cookie-dot {
		width: 1rem;
		height: 1rem;
		background-color: white;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
	
	.cookie-description {
		color: #4b5563;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		font-size: 0.95rem;
	}
	
	.cookie-toggle {
		display: flex;
		justify-content: flex-end;
		padding-top: 1rem;
		border-top: 1px solid rgba(0,0,0,0.1);
	}
	
	.switch {
		position: relative;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}
	
	.switch.disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
	
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	
	.slider {
		position: relative;
		display: inline-block;
		width: 3.5rem;
		height: 2rem;
		background-color: #e5e7eb;
		border-radius: 2rem;
		transition: background-color 0.2s ease;
		margin-right: 0.75rem;
	}
	
	.slider:before {
		content: "";
		position: absolute;
		height: 1.5rem;
		width: 1.5rem;
		left: 0.25rem;
		bottom: 0.25rem;
		background-color: white;
		border-radius: 50%;
		transition: transform 0.2s ease;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
	
	input:checked + .slider {
		background-color: #000;
	}
	
	input:checked + .slider:before {
		transform: translateX(1.5rem);
	}
	
	.toggle-text {
		font-size: 0.875rem;
		font-weight: 500;
		color: #4b5563;
		min-width: 4rem;
	}
	
	.switch.disabled .toggle-text {
		color: #9ca3af;
	}
	
	.retention-card {
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
		padding: 1.5rem;
		border-radius: 1rem;
		border: 1px solid rgba(0,0,0,0.1);
	}
	
	.modern-list {
		list-style: none;
		padding: 0;
	}
	
	.modern-list li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	
	.modern-list li:last-child {
		margin-bottom: 0;
		border-bottom: none;
	}
	
	.rights-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.rights-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.right-item {
		background-color: #f9fafb;
		padding: 1.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px rgba(0,0,0,0.05);
		transition: box-shadow 0.2s ease;
	}
	
	.right-item:hover {
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	}
	
	.security-features {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.security-features {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.security-feature {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background-color: #f9fafb;
		padding: 1.5rem;
		border-radius: 0.5rem;
		transition: box-shadow 0.2s ease;
	}
	
	.security-feature:hover {
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	}
	
	.security-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		background-color: #000;
		color: white;
		border-radius: 50%;
		font-size: 1.25rem;
		flex-shrink: 0;
	}
	
	.contact-card {
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
	}
	
	.contact-info {
		display: grid;
		gap: 1.5rem;
	}
	
	.contact-item {
		background-color: white;
		padding: 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 2px 4px rgba(0,0,0,0.05);
		border: 1px solid rgba(0,0,0,0.1);
	}
	
	.contact-button {
		display: inline-block;
		background-color: #000;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 500;
		transition: background-color 0.2s ease;
		text-align: center;
		margin-top: 1rem;
	}
	
	.contact-button:hover {
		background-color: #1a1a1a;
	}
	
	h2 {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: inherit;
	}
	
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #111827;
	}
	
	p {
		color: #4b5563;
		line-height: 1.6;
	}
	
	@media (max-width: 768px) {
		.intro-card {
			grid-template-columns: 1fr;
		}
		
		.card-icon {
			padding: 2rem;
		}
		
		.icon-wrapper {
			width: 80px;
			height: 80px;
			font-size: 2rem;
		}
		
		.card-content {
			padding: 2rem;
		}
		
		.policy-wrapper {
			padding: 1.5rem;
		}
	}
	
	@media (max-width: 640px) {
		.cookie-types {
			grid-template-columns: 1fr;
		}
		
		.cookie-content {
			padding: 1.25rem;
		}
		
		.cookie-icon {
			width: 2.5rem;
			height: 2.5rem;
		}
		
		.cookie-dot {
			width: 0.875rem;
			height: 0.875rem;
		}
		
		.hero-section {
			padding: 2rem 0;
		}
		
		.hero-section h1 {
			font-size: 2.5rem;
		}
		
		.update-badge {
			padding: 0.5rem 1rem;
			font-size: 0.75rem;
		}
	}

	.cookie-notice {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 1000;
		max-width: 400px;
		background: white;
		border-radius: 1rem;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
		border: 1px solid rgba(0,0,0,0.1);
		overflow: hidden;
		transition: opacity 0.2s ease;
	}

	.notice-content {
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.notice-content p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: #4b5563;
	}

	.dismiss-button {
		background: none;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
		color: #9ca3af;
		transition: color 0.2s ease;
		flex-shrink: 0;
	}

	.dismiss-button:hover {
		color: #4b5563;
	}

	@media (max-width: 640px) {
		.cookie-notice {
			bottom: 1rem;
			right: 1rem;
			left: 1rem;
			max-width: none;
		}
	}
</style> 