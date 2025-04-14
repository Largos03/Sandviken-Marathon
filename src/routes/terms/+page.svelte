<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { 
		faRunning, 
		faCopyright, 
		faUserShield, 
		faEdit,
		faChevronRight,
		faGavel,
		faShieldAlt,
		faShieldHalved,
		faExclamationCircle,
		faCheckCircle
	} from '@fortawesome/free-solid-svg-icons';
	import { language, translations } from '$lib/stores/i18n.js';
    
    // Accept data from page.server.js
    export const data = {};
    
    // Direct translation function
    $: t = (key: string): string => {
      // Type assertion for translations
      const trans = translations as Record<string, Record<string, string>>;
      if (!trans[$language] || !trans[$language][key]) {
        return key;
      }
      return trans[$language][key];
    };
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<div class="terms-page" in:fade>
	<!-- Hero Section -->
	<div class="hero-section relative overflow-hidden">
		<div class="hero-pattern absolute inset-0 opacity-10"></div>
		<div class="container mx-auto px-4 py-16 md:py-20 text-center relative z-10">
			<div class="bg-gray-100 text-gray-900 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide">
				{t('lastUpdated')} {t('termsDate')}
			</div>
			<h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('terms')}</h1>
			<div class="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
			<p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">{t('termsIntro')}</p>
		</div>
	</div>
	
	<!-- Content Wrapper -->
	<div class="terms-wrapper max-w-7xl mx-auto px-4 py-12 md:py-16">
		<!-- Introduction -->
		<section class="terms-card intro-card bg-white rounded-2xl p-8 shadow-lg mb-12" class:visible>
			<div class="flex flex-col md:flex-row gap-8 items-center">
				<div class="flex-1">
					<h2 class="text-2xl md:text-3xl font-bold mb-4">{t('agreementToTerms')}</h2>
					<p class="text-gray-600 mb-6 leading-relaxed">{t('termsAgreementText')}</p>
					<div class="bg-gray-50 border-l-4 border-gray-900 p-4 rounded-r-lg">
						<div class="flex items-start">
							<FontAwesomeIcon icon={faExclamationCircle} class="text-gray-900 mt-1 mr-3" />
							<p class="text-gray-700">{t('termsReviewText')}</p>
						</div>
					</div>
				</div>
				<div class="flex-shrink-0">
					<div class="w-20 h-20 md:w-24 md:h-24 bg-gray-900 text-white rounded-2xl flex items-center justify-center">
						<FontAwesomeIcon icon={faGavel} class="text-3xl md:text-4xl" />
					</div>
				</div>
			</div>
		</section>
		
		<!-- Event Registration -->
		<section class="terms-card bg-white rounded-2xl p-8 shadow-lg mb-12" class:visible>
			<div class="card-header flex items-center gap-4 mb-8">
				<div class="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
					<FontAwesomeIcon icon={faRunning} />
				</div>
				<h2 class="text-2xl md:text-3xl font-bold">{t('eventRegistration')}</h2>
			</div>
			<div class="card-body">
				<p class="text-gray-600 mb-8 leading-relaxed">{t('registrationText')}</p>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each Array(5) as _, i}
						<div class="registration-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
							<div class="flex items-center gap-4 mb-4">
								<span class="text-3xl font-bold text-gray-200">0{i + 1}</span>
								<h3 class="text-lg font-semibold">{t([
									'physicalFitness',
									'riskAcceptance',
									'nonRefundableFees',
									'scheduleChanges',
									'ruleCompliance'
								][i])}</h3>
							</div>
							<p class="text-gray-600">{t([
								'physicalFitnessText',
								'riskAcceptanceText',
								'nonRefundableFeesText',
								'scheduleChangesText',
								'ruleComplianceText'
							][i])}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
		
		<!-- Intellectual Property -->
		<section class="terms-card bg-white rounded-2xl p-8 shadow-lg mb-12" class:visible>
			<div class="card-header flex items-center gap-4 mb-8">
				<div class="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
					<FontAwesomeIcon icon={faCopyright} />
				</div>
				<h2 class="text-2xl md:text-3xl font-bold">{t('intellectualProperty')}</h2>
			</div>
			<div class="card-body">
				<p class="text-gray-600 mb-8 leading-relaxed">{t('intellectualPropertyText')}</p>
				<div class="grid md:grid-cols-3 gap-6 mb-8">
					{#each ['copyright', 'limitedLicense', 'restrictions'] as item}
						<div class="ip-item bg-gray-50 rounded-xl p-6">
							<h3 class="text-lg font-semibold mb-3">{t(item)}</h3>
							<p class="text-gray-600">{t(`${item}Text`)}</p>
						</div>
					{/each}
				</div>
				<p class="text-gray-600 italic">{t('ipConclusion')}</p>
			</div>
		</section>
		
		<!-- User Conduct -->
		<section class="terms-card bg-white rounded-2xl p-8 shadow-lg mb-12" class:visible>
			<div class="card-header flex items-center gap-4 mb-8">
				<div class="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
					<FontAwesomeIcon icon={faUserShield} />
				</div>
				<h2 class="text-2xl md:text-3xl font-bold">{t('userConduct')}</h2>
			</div>
			<div class="card-body">
				<p class="text-gray-600 mb-8 leading-relaxed">{t('userConductText')}</p>
				<div class="grid gap-4">
					{#each Array(4) as _, i}
						<div class="conduct-card bg-gray-50 rounded-xl p-6 flex items-start gap-4">
							<div class="flex-shrink-0">
								<FontAwesomeIcon icon={faCheckCircle} class="text-gray-900 text-xl" />
							</div>
							<p class="text-gray-700">{t(`conductRule${i + 1}`)}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
		
		<!-- Two Column Section -->
		<div class="grid md:grid-cols-2 gap-8">
			<!-- Limitation of Liability -->
			<section class="terms-card bg-white rounded-2xl p-8 shadow-lg" class:visible>
				<div class="card-header flex items-center gap-4 mb-8">
					<div class="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
						<FontAwesomeIcon icon={faShieldHalved} />
					</div>
					<h2 class="text-2xl font-bold">{t('limitationOfLiability')}</h2>
				</div>
				<div class="card-body">
					<p class="text-gray-600 mb-6 leading-relaxed">{t('liabilityText')}</p>
					<ul class="space-y-4">
						{#each Array(5) as _, i}
							<li class="flex items-start gap-3">
								<FontAwesomeIcon icon={faChevronRight} class="text-gray-900 mt-1 flex-shrink-0" />
								<span class="text-gray-700">{t(`liabilityItem${i + 1}`)}</span>
							</li>
						{/each}
					</ul>
				</div>
			</section>
			
			<!-- Modifications -->
			<section class="terms-card bg-white rounded-2xl p-8 shadow-lg" class:visible>
				<div class="card-header flex items-center gap-4 mb-8">
					<div class="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
						<FontAwesomeIcon icon={faEdit} />
					</div>
					<h2 class="text-2xl font-bold">{t('modifications')}</h2>
				</div>
				<div class="card-body">
					<p class="text-gray-600 mb-6 leading-relaxed">{t('modificationsText')}</p>
					<div class="space-y-6">
						<div class="bg-gray-50 rounded-xl p-6">
							<div class="flex items-start gap-4">
								<div class="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
									<span class="font-semibold">1</span>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2">{t('modificationNotice')}</h3>
									<p class="text-gray-600">{t('modificationPoint1')}</p>
								</div>
							</div>
						</div>
						
						<div class="bg-gray-50 rounded-xl p-6">
							<div class="flex items-start gap-4">
								<div class="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
									<span class="font-semibold">2</span>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2">{t('modificationEffect')}</h3>
									<p class="text-gray-600">{t('modificationPoint2')}</p>
								</div>
							</div>
						</div>
						
						<div class="bg-gray-50 rounded-xl p-6">
							<div class="flex items-start gap-4">
								<div class="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
									<span class="font-semibold">3</span>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2">{t('modificationAcceptance')}</h3>
									<p class="text-gray-600">{t('modificationPoint3')}</p>
								</div>
							</div>
						</div>
					</div>
					
					<div class="mt-8 p-4 bg-gray-900 text-white rounded-xl">
						<div class="flex items-start gap-3">
							<FontAwesomeIcon icon={faExclamationCircle} class="text-white mt-1 flex-shrink-0" />
							<p class="text-sm">{t('modificationDisclaimer')}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
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
		background-color: #f9fafb;
		min-height: 100vh;
	}
	
	.hero-section {
		background-color: #000;
		color: white;
	}
	
	.hero-pattern {
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
	
	.terms-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
		position: relative;
		margin-top: -2rem;
		padding-bottom: 3rem;
	}
	
	.terms-card {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease;
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
	
	:global(.fa-icon) {
		width: 1em;
		height: 1em;
	}
</style> 