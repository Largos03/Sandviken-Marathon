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
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<div class="privacy-page" in:fade>
	<!-- Hero Section -->
	<div class="hero-section">
		<div class="container mx-auto px-4 py-16 md:py-24 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">Privacy Policy</h1>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white">We value your privacy and are committed to protecting your personal information</p>
		</div>
	</div>
	
	<!-- Content Wrapper -->
	<div class="policy-wrapper">
		<!-- Last Updated Badge -->
		<div class="update-badge">
			<span>Last updated: May 1, 2025</span>
		</div>
		
		<!-- Introduction -->
		<section class="policy-card intro-card" class:visible>
			<div class="card-content">
				<h2>Introduction</h2>
				<p class="mb-6">Sandviken Marathon ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
				<div class="highlight-box">
					<p>This document explains how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined in this policy.</p>
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
					<h2>Information We Collect</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">We may collect the following types of information:</p>
					<div class="info-grid">
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">01</span>
								<h3>Personal Information</h3>
							</div>
							<p>Name, email address, phone number when you register for our events</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">02</span>
								<h3>Contact Information</h3>
							</div>
							<p>Details provided when you fill out our contact form</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">03</span>
								<h3>Technical Data</h3>
							</div>
							<p>IP address, browser type, operating system information</p>
						</div>
						<div class="info-item">
							<div class="info-item-header">
								<span class="info-number">04</span>
								<h3>Usage Data</h3>
							</div>
							<p>Information about how you interact with our website</p>
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
					<h2>How We Use Your Information</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">We use your data for the following purposes:</p>
					<div class="usage-list">
						<div class="usage-item">
							<div class="usage-icon">
								<span>01</span>
							</div>
							<div class="usage-content">
								<h3>Event Registration</h3>
								<p>To register you as a participant in our marathons and events</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>02</span>
							</div>
							<div class="usage-content">
								<h3>Relationship Management</h3>
								<p>To maintain our relationship with you and provide support</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>03</span>
							</div>
							<div class="usage-content">
								<h3>Communication</h3>
								<p>To send you information about our events and services</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>04</span>
							</div>
							<div class="usage-content">
								<h3>Website Improvement</h3>
								<p>To improve our website and services based on user experience</p>
							</div>
						</div>
						<div class="usage-item">
							<div class="usage-icon">
								<span>05</span>
							</div>
							<div class="usage-content">
								<h3>Security</h3>
								<p>To ensure the security and proper functioning of our website</p>
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
				<h2>Cookies</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience and allows us to improve our site.</p>
				<div class="cookie-types">
					<div class="cookie-type">
						<div class="cookie-icon essential">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>Essential</h3>
							<p>Required for basic functionality</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon functional">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>Functional</h3>
							<p>Remember your preferences</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon analytics">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>Analytics</h3>
							<p>Help us improve our website</p>
						</div>
					</div>
					<div class="cookie-type">
						<div class="cookie-icon marketing">
							<span class="cookie-dot"></span>
						</div>
						<div class="cookie-content">
							<h3>Marketing</h3>
							<p>Track your activities across websites</p>
						</div>
					</div>
				</div>
				<p class="mt-6">You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
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
					<h2>Data Retention</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for.</p>
					<div class="retention-card">
						<h3>Retention Periods</h3>
						<ul class="modern-list">
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>Account information:</strong> Stored while your account is active</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>Event registration:</strong> Kept for 2 years after the event</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>Marketing preferences:</strong> Retained until you opt-out</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span><strong>Payment information:</strong> Never stored on our servers</span>
							</li>
						</ul>
						<div class="retention-tagline">
							<p>Data minimization is our priority</p>
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
					<h2>Your Rights</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">Under data protection laws, you have rights related to your personal data:</p>
					<div class="rights-grid">
						<div class="right-item">
							<h3>Access</h3>
							<p>Request access to your personal data</p>
						</div>
						<div class="right-item">
							<h3>Correction</h3>
							<p>Request correction of inaccurate data</p>
						</div>
						<div class="right-item">
							<h3>Deletion</h3>
							<p>Request erasure of your personal data</p>
						</div>
						<div class="right-item">
							<h3>Restriction</h3>
							<p>Request restriction of processing</p>
						</div>
					</div>
					<div class="rights-note">
						<p>You will not have to pay a fee to access your personal data. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.</p>
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
				<h2>Data Security</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">We have put in place appropriate security measures to protect your personal data:</p>
				<div class="security-features">
					<div class="security-feature">
						<div class="security-icon">
							<span>🔒</span>
						</div>
						<div class="security-content">
							<h3>Secure Storage</h3>
							<p>Data is stored securely with encryption</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🛡️</span>
						</div>
						<div class="security-content">
							<h3>Access Control</h3>
							<p>Strict access restrictions to your data</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>🔄</span>
						</div>
						<div class="security-content">
							<h3>Regular Updates</h3>
							<p>Frequent security updates and patches</p>
						</div>
					</div>
					<div class="security-feature">
						<div class="security-icon">
							<span>📊</span>
						</div>
						<div class="security-content">
							<h3>Data Minimization</h3>
							<p>We only collect what's necessary</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Contact -->
		<section class="policy-card contact-card" class:visible>
			<div class="contact-content">
				<h2>Contact Us</h2>
				<p class="mb-6">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
				<div class="contact-info">
					<p><strong>Email:</strong> privacy@sandvikenmarathon.com</p>
					<p><strong>Address:</strong> Sandviken Marathon, PO Box 123, Sandviken, Sweden</p>
				</div>
			</div>
			<div class="contact-action">
				<a href="/contact" class="contact-btn">Contact Us</a>
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
		background-color: var(--primary-color);
		position: relative;
		overflow: hidden;
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
	}
	
	@media (min-width: 768px) {
		.policy-grid {
			grid-template-columns: 1fr 1fr;
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
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.info-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	.info-item {
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.usage-item {
		display: flex;
		background-color: var(--bg-light);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
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
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.cookie-types {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	.cookie-type {
		display: flex;
		background-color: var(--bg-light);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		align-items: center;
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