<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { 
		faFileContract, 
		faRunning, 
		faCopyright, 
		faUserShield, 
		faExclamationTriangle, 
		faEdit,
		faEnvelope,
		faChevronRight,
		faGavel,
		faShieldAlt,
		faShieldHalved,
		faInfoCircle
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

<div class="terms-page" in:fade>
	<!-- Hero Section -->
	<div class="hero-section">
		<div class="container mx-auto px-4 py-10 md:py-14 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-4">{t('terms')}</h1>
			<div class="w-24 h-1 bg-white mx-auto mb-4"></div>
			<p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t('termsIntro')}</p>
		</div>
	</div>
	
	<!-- Content Wrapper -->
	<div class="terms-wrapper">
		<!-- Last Updated Badge -->
		<div class="update-badge">
			<span>{t('lastUpdated')} {t('termsDate')}</span>
		</div>
		
		<!-- Introduction -->
		<section class="terms-card intro-card" class:visible>
			<div class="card-content">
				<h2>{t('agreementToTerms')}</h2>
				<p class="mb-6">{t('termsAgreementText')}</p>
				<div class="highlight-box">
					<p>{t('termsReviewText')}</p>
				</div>
			</div>
			<div class="card-icon">
				<div class="icon-wrapper">
					<FontAwesomeIcon icon={faGavel} />
				</div>
			</div>
		</section>
		
		<!-- Main Grid -->
		<div class="terms-grid">
			<!-- Event Registration -->
			<section class="terms-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faRunning} />
					</div>
					<h2>{t('eventRegistration')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('registrationText')}</p>
					<div class="registration-grid">
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">01</span>
								<h3>{t('physicalFitness')}</h3>
							</div>
							<p>{t('physicalFitnessText')}</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">02</span>
								<h3>{t('riskAcceptance')}</h3>
							</div>
							<p>{t('riskAcceptanceText')}</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">03</span>
								<h3>{t('nonRefundableFees')}</h3>
							</div>
							<p>{t('nonRefundableFeesText')}</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">04</span>
								<h3>{t('scheduleChanges')}</h3>
							</div>
							<p>{t('scheduleChangesText')}</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">05</span>
								<h3>{t('ruleCompliance')}</h3>
							</div>
							<p>{t('ruleComplianceText')}</p>
						</div>
					</div>
				</div>
			</section>
			
			<!-- Intellectual Property Rights -->
			<section class="terms-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faCopyright} />
					</div>
					<h2>{t('intellectualProperty')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('intellectualPropertyText')}</p>
					<div class="ip-grid">
						<div class="ip-item">
							<h3>{t('copyright')}</h3>
							<p>{t('copyrightText')}</p>
						</div>
						<div class="ip-item">
							<h3>{t('limitedLicense')}</h3>
							<p>{t('limitedLicenseText')}</p>
						</div>
						<div class="ip-item">
							<h3>{t('restrictions')}</h3>
							<p>{t('restrictionsText')}</p>
						</div>
					</div>
					<p class="mt-6">{t('ipConclusion')}</p>
				</div>
			</section>
		</div>
		
		<!-- User Conduct -->
		<section class="terms-card" class:visible>
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faUserShield} />
				</div>
				<h2>{t('userConduct')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('userConductText')}</p>
				<div class="conduct-cards">
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>{t('conductRule1')}</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>{t('conductRule2')}</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>{t('conductRule3')}</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>{t('conductRule4')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- 2-Column Cards -->
		<div class="terms-grid">
			<!-- Limitation of Liability -->
			<section class="terms-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faShieldHalved} />
					</div>
					<h2>{t('limitationOfLiability')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('liabilityText')}</p>
					<div class="liability-list">
						<ul class="modern-list">
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>{t('liabilityItem1')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>{t('liabilityItem2')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>{t('liabilityItem3')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>{t('liabilityItem4')}</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>{t('liabilityItem5')}</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
			
			<!-- Modifications -->
			<section class="terms-card" class:visible>
				<div class="card-header">
					<div class="icon-wrapper small">
						<FontAwesomeIcon icon={faEdit} />
					</div>
					<h2>{t('modifications')}</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">{t('modificationsText')}</p>
					<div class="change-grid">
						<div class="change-item">
							<div class="change-number">1</div>
							<div class="change-content">
								<p>{t('modificationStep1')}</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">2</div>
							<div class="change-content">
								<p>{t('modificationStep2')}</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">3</div>
							<div class="change-content">
								<p>{t('modificationStep3')}</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">4</div>
							<div class="change-content">
								<p>{t('modificationStep4')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		
		<!-- Security Feature -->
		<section class="terms-card security-card" class:visible>
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faShieldAlt} />
				</div>
				<h2>{t('dataSecurity')}</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">{t('dataSecurityText')}</p>
				<div class="security-features">
					<div class="security-feature">
						<div class="security-icon">
							<span>🔒</span>
						</div>
						<div class="security-content">
							<h3>{t('secureStorage')}</h3>
							<p>{t('secureStorageText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🛡️</span>
						</div>
						<div class="security-content">
							<h3>{t('accessControl')}</h3>
							<p>{t('accessControlText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🔄</span>
						</div>
						<div class="security-content">
							<h3>{t('regularUpdates')}</h3>
							<p>{t('regularUpdatesText')}</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>📊</span>
						</div>
						<div class="security-content">
							<h3>{t('dataMinimization')}</h3>
							<p>{t('dataMinimizationText')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Contact -->
		<section class="terms-card contact-card" class:visible>
			<div class="contact-content">
				<h2>{t('termsContactUs')}</h2>
				<p class="mb-6">{t('termsContactText')}</p>
				<div class="contact-info">
					<p><strong>{t('termsEmail')}</strong> {t('termsEmailAddress')}</p>
					<p><strong>{t('termsAddress')}</strong> {t('termsAddressText')}</p>
				</div>
			</div>
			<div class="contact-action">
				<a href="/contact" class="contact-btn">{t('termsContactBtn')}</a>
			</div>
		</section>
	</div>
</div>

<style>
	:root {
		--primary-color: #000;
		--secondary-color: #333;
		--accent-color: #fff;
		--bg-light: #f5f5f5;
		--text-primary: #111827;
		--text-secondary: #4b5563;
		--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		--radius-sm: 0.25rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
	}

	.terms-page {
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
	
	.terms-wrapper {
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
	
	.terms-card {
		background-color: var(--accent-color);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		margin-bottom: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.5s ease, transform 0.5s ease;
		overflow: hidden;
	}
	
	.terms-card.visible {
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
	
	.terms-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}
	
	@media (min-width: 768px) {
		.terms-grid {
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
	
	.registration-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.registration-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.registration-item {
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.registration-item-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	
	.registration-number {
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
	
	.registration-item h3 {
		font-weight: 600;
		color: var(--text-primary);
		font-size: 1.125rem;
	}
	
	.ip-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.ip-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	
	.ip-item {
		background-color: var(--primary-color);
		color: var(--accent-color);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}
	
	.ip-item h3 {
		font-weight: 600;
		margin-bottom: 0.75rem;
		font-size: 1.125rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.5rem;
	}
	
	.conduct-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	
	@media (min-width: 640px) {
		.conduct-cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.conduct-card {
		display: flex;
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
		height: 100%;
		align-items: flex-start;
	}
	
	.conduct-icon {
		margin-right: 1.25rem;
		flex-shrink: 0;
		margin-top: 0.25rem;
	}
	
	.conduct-content {
		flex: 1;
	}
	
	.conduct-dot {
		display: block;
		width: 1rem;
		height: 1rem;
		background-color: var(--primary-color);
		border-radius: 50%;
	}
	
	.modern-list {
		list-style: none;
		padding: 0;
	}
	
	.modern-list li {
		display: flex;
		align-items: flex-start;
		margin-bottom: 0.75rem;
		background-color: var(--bg-light);
		padding: 1rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--primary-color);
	}
	
	.modern-list li :global(svg) {
		color: var(--primary-color);
		margin-right: 0.75rem;
		margin-top: 0.25rem;
		flex-shrink: 0;
	}
	
	.change-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.change-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.change-item {
		display: flex;
		align-items: center;
		background-color: var(--bg-light);
		padding: 1rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}
	
	.change-number {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		background-color: var(--primary-color);
		color: var(--accent-color);
		border-radius: 50%;
		font-weight: 600;
		margin-right: 1rem;
		flex-shrink: 0;
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
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
		height: 100%;
	}
	
	.security-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		background-color: var(--primary-color);
		border-radius: 50%;
		margin-right: 1.25rem;
		flex-shrink: 0;
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
	
	.liability-list {
		margin-top: 1.5rem;
	}
</style> 