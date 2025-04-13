<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { 
		faShield, 
		faUserLock, 
		faCookieBite, 
		faServer, 
		faEnvelope, 
		faLock, 
		faDatabase,
		faChevronRight
	} from '@fortawesome/free-solid-svg-icons';
	import { language, translations } from '$lib/stores/i18n.js';
    import { T } from '$lib';
    
    // Accept data from page.server.js
    export let data;
    
    // Direct translation function
    $: t = (key) => {
      if (!translations[$language] || !translations[$language][key]) {
        return key;
      }
      return translations[$language][key];
    };
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<div class="privacy-page" in:fade>
	<!-- Hero Section -->
	<div class="hero-section">
		<div class="container mx-auto px-4 py-10 md:py-14 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-4">{t('privacyPolicy')}</h1>
			<div class="w-24 h-1 bg-white mx-auto mb-4"></div>
			<p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t('privacyIntro')}</p>
		</div>
	</div>
	
	<!-- Content Wrapper -->
	<div class="policy-wrapper">
		<!-- Last Updated Badge -->
		<div class="update-badge">
			<span>{t('privacyLastUpdated')} {t('privacyDate')}</span>
		</div>
		
		<!-- Introduction -->
		<section class="policy-card intro-card" class:visible>
			<div class="card-content">
				<h2>{t('privacyIntroTitle')}</h2>
				<p class="mb-6">{t('privacyIntroText')}</p>
				<div class="highlight-box">
					<p>{t('privacyHighlight')}</p>
				</div>
			</div>
			<div class="card-icon">
				<div class="icon-wrapper">
					<FontAwesomeIcon icon={faShield} />
				</div>
			</div>
		</section>
		
		<!-- Main Grid -->
		<div class="policy-grid">
			<!-- Information We Collect -->
			<section class="policy-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faUserLock} />
					</div>
					<h2>{t('infoCollectTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('infoCollectText')}</p>
					<div class="info-grid">
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">01</span>
								<h3>{t('personalInfoTitle')}</h3>
							</div>
							<p>{t('personalInfoText')}</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">02</span>
								<h3>{t('contactInfoTitle')}</h3>
							</div>
							<p>{t('contactInfoText')}</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">03</span>
								<h3>{t('technicalDataTitle')}</h3>
							</div>
							<p>{t('technicalDataText')}</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">04</span>
								<h3>{t('usageDataTitle')}</h3>
							</div>
							<p>{t('usageDataText')}</p>
						</div>
					</div>
				</div>
			</section>
			
			<!-- How We Use Your Information -->
			<section class="policy-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faServer} />
					</div>
					<h2>{t('infoUseTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('infoUseText')}</p>
					<div class="usage-list">
						<div class="usage-item">
							<div class="usage-icon">
								<span>01</span>
							</div>
							<div class="usage-content">
								<h3>{t('eventRegTitle')}</h3>
								<p>{t('eventRegText')}</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>02</span>
							</div>
							<div class="usage-content">
								<h3>{t('relationshipTitle')}</h3>
								<p>{t('relationshipText')}</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>03</span>
							</div>
							<div class="usage-content">
								<h3>{t('communicationTitle')}</h3>
								<p>{t('communicationText')}</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>04</span>
							</div>
							<div class="usage-content">
								<h3>{t('websiteImprovementTitle')}</h3>
								<p>{t('websiteImprovementText')}</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>05</span>
							</div>
							<div class="usage-content">
								<h3>{t('securityTitle')}</h3>
								<p>{t('securityText')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		
		<!-- Cookies -->
		<section class="policy-card" class:visible>
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faCookieBite} />
				</div>
				<h2>{t('cookiesTitle')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('cookiesText')}</p>
				<div class="cookie-types">
					<div class="cookie-type">
						<div class="cookie-icon essential">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>{t('essentialTitle')}</h3>
							<p>{t('essentialText')}</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon functional">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>{t('functionalTitle')}</h3>
							<p>{t('functionalText')}</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon analytics">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>{t('analyticsTitle')}</h3>
							<p>{t('analyticsText')}</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon marketing">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>{t('marketingTitle')}</h3>
							<p>{t('marketingText')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- 2-Column Cards -->
		<div class="policy-grid">
			<!-- Data Retention -->
			<section class="policy-card" class:visible>
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
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>{t('accountInfoTitle')}:</strong> {t('accountInfoText')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>{t('eventRegRetentionTitle')}:</strong> {t('eventRegRetentionText')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>{t('marketingPrefsTitle')}:</strong> {t('marketingPrefsText')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>{t('paymentInfoTitle')}:</strong> {t('paymentInfoText')}</span>
							</li>
						</ul>
						<div class="retention-tagline">
							<p>{t('dataMinimizationTagline')}</p>
						</div>
					</div>
				</div>
			</section>
			
			<!-- Your Rights -->
			<section class="policy-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faUserLock} />
					</div>
					<h2>{t('yourRightsTitle')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('yourRightsText')}</p>
					<div class="rights-grid">
						<div class="right-item">
							<h3>{t('accessTitle')}</h3>
							<p>{t('accessText')}</p>
						</div>
						<div class="right-item">
							<h3>{t('correctionTitle')}</h3>
							<p>{t('correctionText')}</p>
						</div>
						<div class="right-item">
							<h3>{t('deletionTitle')}</h3>
							<p>{t('deletionText')}</p>
						</div>
						<div class="right-item">
							<h3>{t('restrictionTitle')}</h3>
							<p>{t('restrictionText')}</p>
						</div>
					</div>
					<div class="rights-note">
						<p>{t('rightsNoteText')}</p>
					</div>
				</div>
			</section>
		</div>
		
		<!-- Security Feature -->
		<section class="policy-card security-card" class:visible>
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faLock} />
				</div>
				<h2>{t('dataSecurityTitle')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('dataSecurityText')}</p>
				<div class="security-features">
					<div class="security-feature">
						<div class="security-icon">
							<span>🔒</span>
						</div>
						<div class="security-content">
							<h3>{t('secureStorageTitle')}</h3>
							<p>{t('secureStorageText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🛡️</span>
						</div>
						<div class="security-content">
							<h3>{t('accessControlTitle')}</h3>
							<p>{t('accessControlText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🔄</span>
						</div>
						<div class="security-content">
							<h3>{t('regularUpdatesTitle')}</h3>
							<p>{t('regularUpdatesText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>📊</span>
						</div>
						<div class="security-content">
							<h3>{t('dataMinimizationTitle')}</h3>
							<p>{t('dataMinimizationText')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Contact -->
		<section class="policy-card contact-card" class:visible>
			<div class="contact-content">
				<h2>{t('privacyContactTitle')}</h2>
				<p class="mb-6">{t('privacyContactText')}</p>
				<div class="contact-info">
					<p><strong>{t('privacyContactEmail')}</strong> {t('privacyContactEmailAddress')}</p>
					<p><strong>{t('privacyContactAddress')}</strong> {t('privacyContactAddressText')}</p>
				</div>
			</div>
			<div class="contact-action">
				<a href="/contact" class="contact-btn">{t('privacyContactBtn')}</a>
			</div>
		</section>
	</div>
</div>

<style>
	:root {
		--primary-color: #000;
		--secondary-color: #333;
		--accent-color: #fff;
		--bg-light: #f9fafb;
		--text-primary: #111827;
		--text-secondary: #4b5563;
		--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		--radius-sm: 0.25rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
	}

	.privacy-page {
		background-color: #f5f5f5;
		color: var(--text-primary);
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	
	.hero-section {
		background-color: #000;
		color: white;
		padding: 2.5rem 0;
		position: relative;
	}
	
	.hero-section:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		opacity: 0.1;
	}
	
	.hero-section h1 {
		color: #ffffff;
	}
	
	.hero-section p {
		color: #E0E0E0;
		font-size: 1.25rem;
		line-height: 1.7;
		max-width: 700px;
		margin: 0 auto;
		font-weight: 400;
		text-shadow: 0 1px 2px rgba(0,0,0,0.1);
	}
	
	.policy-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
		position: relative;
		margin-top: -2rem;
		padding-bottom: 3rem;
	}
	
	.update-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: var(--accent-color);
		color: var(--primary-color);
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 500;
		box-shadow: var(--shadow-md);
		margin-bottom: 1.5rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.policy-card {
		background-color: var(--accent-color);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		margin-bottom: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.5s ease, transform 0.5s ease;
		overflow: hidden;
	}
	
	.policy-card.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.card-content {
		padding: 2rem;
	}
	
	.intro-card {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	
	.card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--primary-color);
		padding: 2rem;
	}
	
	.icon-wrapper {
		width: 80px;
		height: 80px;
		background-color: var(--accent-color);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		color: var(--primary-color);
	}
	
	.icon-wrapper.small {
		width: 48px;
		height: 48px;
		font-size: 1.25rem;
	}
	
	.highlight-box {
		background-color: var(--primary-color);
		color: var(--accent-color);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		margin-top: 1.5rem;
	}
	
	.policy-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}
	
	@media (min-width: 768px) {
		.policy-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.card-header {
		display: flex;
		align-items: center;
		padding: 1.5rem 2rem;
		background-color: var(--primary-color);
		color: var(--accent-color);
	}
	
	.card-header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-left: 1rem;
	}
	
	.card-body {
		padding: 2rem;
	}
	
	.info-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.info-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.info-item {
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
		height: 100%;
		display: flex;
		flex-direction: column;
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
		background-color: var(--primary-color);
		color: var(--accent-color);
		font-weight: 600;
		font-size: 0.875rem;
		margin-right: 0.75rem;
	}
	
	.info-item h3 {
		font-weight: 600;
		color: var(--text-primary);
		font-size: 1.125rem;
	}
	
	.usage-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	.usage-item {
		display: flex;
		align-items: flex-start;
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
	}
	
	.usage-icon {
		margin-right: 1rem;
		flex-shrink: 0;
	}
	
	.usage-icon span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		background-color: var(--primary-color);
		color: var(--accent-color);
		border-radius: var(--radius-sm);
		font-weight: 600;
	}
	
	.usage-content {
		flex: 1;
	}
	
	.usage-content h3 {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
	}
	
	.cookie-types {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.cookie-types {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.cookie-type {
		display: flex;
		align-items: flex-start;
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		height: 100%;
	}
	
	.cookie-icon {
		margin-right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	.cookie-icon.essential {
		background-color: #1e40af;
	}
	
	.cookie-icon.functional {
		background-color: #0369a1;
	}
	
	.cookie-icon.analytics {
		background-color: #4338ca;
	}
	
	.cookie-icon.marketing {
		background-color: #6d28d9;
	}
	
	.cookie-dot {
		width: 12px;
		height: 12px;
		background-color: white;
		border-radius: 50%;
	}
	
	.cookie-content {
		flex: 1;
	}
	
	.cookie-content h3 {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
		font-size: 1.125rem;
	}
	
	.retention-card {
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}
	
	.retention-card h3 {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
		font-size: 1.25rem;
		border-bottom: 2px solid var(--primary-color);
		padding-bottom: 0.5rem;
		display: inline-block;
	}
	
	.modern-list {
		list-style: none;
		padding: 0;
		margin-bottom: 1.5rem;
	}
	
	.modern-list li {
		display: flex;
		align-items: flex-start;
		margin-bottom: 0.75rem;
	}
	
	.modern-list li :global(svg) {
		color: var(--primary-color);
		margin-right: 0.5rem;
		margin-top: 0.25rem;
		flex-shrink: 0;
	}
	
	.retention-tagline {
		background-color: var(--primary-color);
		color: var(--accent-color);
		padding: 0.75rem;
		text-align: center;
		border-radius: var(--radius-sm);
		font-weight: 500;
		margin-top: 1.5rem;
	}
	
	.rights-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	
	.right-item {
		background-color: var(--primary-color);
		color: var(--accent-color);
		padding: 1.25rem;
		border-radius: var(--radius-md);
	}
	
	.right-item h3 {
		font-weight: 600;
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.5rem;
	}
	
	.rights-note {
		background-color: var(--bg-light);
		padding: 1rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--primary-color);
	}
	
	.security-features {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.security-features {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	.security-feature {
		display: flex;
		align-items: center;
		background-color: var(--bg-light);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}
	
	.security-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		background-color: var(--primary-color);
		border-radius: 50%;
		margin-right: 1rem;
		flex-shrink: 0;
	}
	
	.security-icon span {
		font-size: 1.5rem;
	}
	
	.security-content h3 {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
		font-size: 1.125rem;
	}
	
	.contact-card {
		display: grid;
		grid-template-columns: 1fr;
		background-color: var(--primary-color);
		color: var(--accent-color);
	}
	
	@media (min-width: 768px) {
		.contact-card {
			grid-template-columns: 2fr 1fr;
		}
	}
	
	.contact-content {
		padding: 2rem;
	}
	
	.contact-content h2 {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		position: relative;
		padding-bottom: 0.75rem;
	}
	
	.contact-content h2:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 3rem;
		height: 0.25rem;
		background-color: var(--accent-color);
	}
	
	.contact-info {
		padding: 1.5rem;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
	}
	
	.contact-info p {
		margin-bottom: 0.5rem;
	}
	
	.contact-action {
		background-image: linear-gradient(135deg, #333, #000);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	
	.contact-btn {
		display: inline-block;
		padding: 1rem 2rem;
		background-color: var(--accent-color);
		color: var(--primary-color);
		font-weight: 600;
		border-radius: var(--radius-md);
		transition: all 0.2s ease;
	}
	
	.contact-btn:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}
	
	h2 {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	
	p {
		line-height: 1.6;
		color: inherit;
	}
</style> 