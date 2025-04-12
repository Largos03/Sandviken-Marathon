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
		faShieldAlt
	} from '@fortawesome/free-solid-svg-icons';
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<div class="terms-page" in:fade>
	<!-- Hero Section -->
	<div class="hero-section">
		<div class="container mx-auto px-4 py-16 md:py-24 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">Terms & Conditions</h1>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white">Please read our terms and conditions before using our website or registering for events</p>
		</div>
	</div>
	
	<!-- Content Wrapper -->
	<div class="terms-wrapper">
		<!-- Last Updated Badge -->
		<div class="update-badge">
			<span>Last updated: May 1, 2025</span>
		</div>
		
		<!-- Introduction -->
		<section class="terms-card intro-card" class:visible>
			<div class="card-content">
				<h2>Agreement to Terms</h2>
				<p class="mb-6">These Terms and Conditions constitute a legally binding agreement made between you and Sandviken Marathon concerning your use of our website and participation in our events. By using our website or registering for our events, you agree to be bound by these Terms.</p>
				<div class="highlight-box">
					<p>Please review these terms carefully. By accessing this website or registering for our events, you acknowledge that you have read, understood, and agree to be bound by all terms stated herein.</p>
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
					<h2>Event Registration</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">By registering for Sandviken Marathon events, you acknowledge and agree to the following:</p>
					<div class="registration-grid">
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">01</span>
								<h3>Physical Fitness</h3>
							</div>
							<p>You are physically fit and have no medical conditions that would prevent safe participation</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">02</span>
								<h3>Risk Acceptance</h3>
							</div>
							<p>You understand that participating in athletic events involves risk of serious injury</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">03</span>
								<h3>Non-Refundable Fees</h3>
							</div>
							<p>Registration fees are non-refundable unless stated otherwise in our refund policy</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">04</span>
								<h3>Schedule Changes</h3>
							</div>
							<p>Event dates and times may be subject to change due to various circumstances</p>
						</div>
						<div class="registration-item">
							<div class="registration-item-header">
								<span class="registration-number">05</span>
								<h3>Rule Compliance</h3>
							</div>
							<p>You agree to follow all rules, regulations, and instructions of event organizers</p>
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
					<h2>Intellectual Property Rights</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">The content on our website, including without limitation text, graphics, logos, images, audio clips, and software, is owned by Sandviken Marathon and is protected by copyright and other intellectual property laws.</p>
					<div class="ip-grid">
						<div class="ip-item">
							<h3>Copyright</h3>
							<p>All content is protected by copyright laws and treaties around the world</p>
						</div>
						<div class="ip-item">
							<h3>Limited License</h3>
							<p>You may view and use our content for personal, non-commercial purposes only</p>
						</div>
						<div class="ip-item">
							<h3>Restrictions</h3>
							<p>You may not reproduce, distribute, modify, or create derivative works from any content</p>
						</div>
					</div>
					<p class="mt-6">Any unauthorized use of our intellectual property may violate copyright, trademark, and other laws and could result in legal action.</p>
				</div>
			</section>
		</div>
		
		<!-- User Conduct -->
		<section class="terms-card" class:visible>
			<div class="card-header">
				<div class="icon-wrapper small">
					<FontAwesomeIcon icon={faUserShield} />
				</div>
				<h2>User Conduct</h2>
			</div>
			<div class="card-body">
				<p class="mb-6">When using our website, you agree not to engage in any of the following prohibited activities:</p>
				<div class="conduct-cards">
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>Use the website in any way that violates any applicable law</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>Attempt to gain unauthorized access to any portion of the website</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>Use the website to transmit any virus, worm, or other malicious code</p>
						</div>
					</div>
					<div class="conduct-card">
						<div class="conduct-icon">
							<span class="conduct-dot"></span>
						</div>
						<div class="conduct-content">
							<p>Impersonate or attempt to impersonate Sandviken Marathon</p>
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
						<FontAwesomeIcon icon={faExclamationTriangle} />
					</div>
					<h2>Limitation of Liability</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">In no event shall Sandviken Marathon, nor its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
					<div class="liability-list">
						<ul class="modern-list">
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>Your access to or use of or inability to access or use the website</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>Any conduct or content of any third party on the website</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>Any content obtained from the website</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>Unauthorized access, use or alteration of your transmissions or content</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>Participation in any Sandviken Marathon events</span>
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
					<h2>Modifications</h2>
				</div>
				<div class="card-body">
					<p class="mb-6">We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the "Last Updated" date.</p>
					<div class="change-grid">
						<div class="change-item">
							<div class="change-number">1</div>
							<div class="change-content">
								<p>We post updates on this page</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">2</div>
							<div class="change-content">
								<p>We update the "Last Updated" date</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">3</div>
							<div class="change-content">
								<p>We may notify you via email for significant changes</p>
							</div>
						</div>
						<div class="change-item">
							<div class="change-number">4</div>
							<div class="change-content">
								<p>Continued use constitutes acceptance of changes</p>
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
		<section class="terms-card contact-card" class:visible>
			<div class="contact-content">
				<h2>Contact Us</h2>
				<p class="mb-6">If you have any questions about these Terms, please contact us at:</p>
				<div class="contact-info">
					<p><strong>Email:</strong> terms@sandvikenmarathon.com</p>
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
		background-color: var(--primary-color);
		position: relative;
		overflow: hidden;
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
	}
	
	@media (min-width: 768px) {
		.terms-grid {
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
	
	.registration-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.registration-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	.registration-item {
		background-color: var(--bg-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
	}
	
	.registration-item-header {
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
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
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.conduct-cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.conduct-card {
		display: flex;
		background-color: var(--bg-light);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
	}
	
	.conduct-icon {
		margin-right: 1rem;
		flex-shrink: 0;
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
		gap: 1rem;
	}
	
	@media (min-width: 640px) {
		.security-features {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	.security-feature {
		display: flex;
		align-items: center;
		background-color: var(--bg-light);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--primary-color);
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
		color: var(--accent-color);
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