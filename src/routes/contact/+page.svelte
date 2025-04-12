<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactSchema } from './schema';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import { 
		faEnvelope, 
		faPhone, 
		faLocationDot, 
		faClock
	} from '@fortawesome/free-solid-svg-icons';
	import {
		faFacebookF,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { z } from 'zod';
	
	type FormData = {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
	
	interface PageData {
		form: SuperValidated<FormData>;
	}
	
	export let data: PageData;
	
	// Track form status manually
	let formSubmitted = false;
	let showSuccess = false;
	
	const { form, enhance, errors, constraints } = superForm<FormData>(data.form, {
		validators: zodClient(contactSchema),
		resetForm: true,
		onSubmit: () => {
			formSubmitted = true;
			showSuccess = false;
		},
		onResult: () => {
			showSuccess = true;
		}
	});

	// Type assertion for form fields
	$: name = $form?.name ?? '';
	$: email = $form?.email ?? '';
	$: subject = $form?.subject ?? '';
	$: message = $form?.message ?? '';

	// Type assertion for error fields
	$: nameError = $errors?.name ?? '';
	$: emailError = $errors?.email ?? '';
	$: subjectError = $errors?.subject ?? '';
	$: messageError = $errors?.message ?? '';
	
	// Create a safe constraints object
	$: safeConstraints = {
		name: $constraints?.name || {},
		email: $constraints?.email || {},
		subject: $constraints?.subject || {},
		message: $constraints?.message || {}
	};
</script>

<div class="contact-page">
	<!-- Hero Section -->
	<div class="hero-section">
		<div class="container">
			<div class="hero-content">
				<h1>Contact Us</h1>
				<p>We're here to help with any questions about the Sandviken Marathon</p>
			</div>
			<div class="hero-pattern"></div>
		</div>
	</div>

	<div class="container">
		<div class="contact-grid">
			<!-- Contact Information Card -->
			<div class="info-card">
				<div class="card-header">
					<h2>Get in Touch</h2>
					<p>Have questions about the Sandviken Marathon? We're here to help!</p>
				</div>
				
				<div class="contact-info">
					<div class="info-item">
						<div class="icon-wrapper">
							<Fa icon={faEnvelope} />
						</div>
						<div class="info-content">
							<h3>Email</h3>
							<p>info@sandvikenmarathon.se</p>
						</div>
					</div>
					
					<div class="info-item">
						<div class="icon-wrapper">
							<Fa icon={faPhone} />
						</div>
						<div class="info-content">
							<h3>Phone</h3>
							<p>+46 (0) 123 456 789</p>
						</div>
					</div>
					
					<div class="info-item">
						<div class="icon-wrapper">
							<Fa icon={faLocationDot} />
						</div>
						<div class="info-content">
							<h3>Address</h3>
							<p>Marathon Office, Sandviken City Center, 811 80 Sandviken, Sweden</p>
						</div>
					</div>
					
					<div class="info-item">
						<div class="icon-wrapper">
							<Fa icon={faClock} />
						</div>
						<div class="info-content">
							<h3>Office Hours</h3>
							<p>Monday to Friday: 9:00 - 17:00</p>
							<p>Saturday and Sunday: Closed</p>
						</div>
					</div>
				</div>
				
				<div class="social-links">
					<h3>Follow Us</h3>
					<div class="social-icons">
						<a href="https://facebook.com" class="social-icon">
							<Fa icon={faFacebookF} />
						</a>
						<a href="https://twitter.com" class="social-icon">
							<Fa icon={faTwitter} />
						</a>
						<a href="https://instagram.com" class="social-icon">
							<Fa icon={faInstagram} />
						</a>
					</div>
				</div>
			</div>
			
			<!-- Contact Form Card -->
			<div class="form-card">
				<div class="card-header">
					<h2>Send Us a Message</h2>
					<p>Fill out the form below and we'll get back to you as soon as possible.</p>
				</div>
				
				{#if showSuccess}
					<div class="success-message">
						<svg class="success-icon" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<p>Thank you for your message! We'll get back to you soon.</p>
					</div>
				{/if}
				
				<form method="POST" use:enhance class="contact-form">
					<div class="form-group">
						<label for="name">Name</label>
						<input 
							type="text" 
							id="name" 
							name="name" 
							bind:value={name}
							class="form-input {nameError ? 'error' : ''}"
							{...safeConstraints.name}
							placeholder="Your name"
						/>
						{#if nameError}
							<p class="error-message">{nameError}</p>
						{/if}
					</div>
					
					<div class="form-group">
						<label for="email">Email</label>
						<input 
							type="email" 
							id="email" 
							name="email" 
							bind:value={email}
							class="form-input {emailError ? 'error' : ''}"
							{...safeConstraints.email}
							placeholder="Your email address"
						/>
						{#if emailError}
							<p class="error-message">{emailError}</p>
						{/if}
					</div>
					
					<div class="form-group">
						<label for="subject">Subject</label>
						<input 
							type="text" 
							id="subject" 
							name="subject" 
							bind:value={subject}
							class="form-input {subjectError ? 'error' : ''}"
							{...safeConstraints.subject}
							placeholder="What is this regarding?"
						/>
						{#if subjectError}
							<p class="error-message">{subjectError}</p>
						{/if}
					</div>
					
					<div class="form-group">
						<label for="message">Message</label>
						<textarea 
							id="message" 
							name="message" 
							bind:value={message}
							rows="5" 
							class="form-input {messageError ? 'error' : ''}"
							{...safeConstraints.message}
							placeholder="Your message here..."
						></textarea>
						{#if messageError}
							<p class="error-message">{messageError}</p>
						{/if}
					</div>
					
					<button 
						type="submit" 
						class="submit-button"
						disabled={formSubmitted}
					>
						{formSubmitted ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.fa-icon) {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}
	
	.contact-page {
		background-color: #fff;
		min-height: 100vh;
		padding: 0;
		width: 100%;
	}
	
	.hero-section {
		background-color: #000;
		color: white;
		padding: 4rem 0;
		overflow: hidden;
		margin-bottom: 0;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
	}
	
	.hero-content {
		position: relative;
		text-align: center;
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
		z-index: 2;
		padding: 0 1rem;
	}
	
	.hero-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		opacity: 0.1;
	}
	
	.hero-section h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		letter-spacing: -0.025em;
		text-transform: uppercase;
		text-align: center;
	}
	
	.hero-section p {
		font-size: 1.1rem;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
		text-align: center;
	}
	
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin: 0 auto;
		width: 100%;
		max-width: 1200px;
	}
	
	@media (min-width: 992px) {
		.contact-grid {
			grid-template-columns: minmax(350px, 1fr) minmax(500px, 2fr);
			gap: 2rem;
			box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
			margin: 2rem auto;
		}
	}
	
	.info-card, .form-card {
		background-color: white;
		padding: 2.5rem;
		position: relative;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
	}
	
	.info-card {
		background-color: #f7f7f7;
		text-align: center;
	}
	
	@media (min-width: 992px) {
		.info-card {
			border-right: 1px solid #eee;
		}
	}
	
	.card-header {
		margin-bottom: 1.5rem;
		padding-bottom: 0;
		text-align: center;
	}
	
	.card-header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin-bottom: 0.75rem;
		position: relative;
		display: block;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #000;
		width: max-content;
		margin-left: auto;
		margin-right: auto;
	}
	
	.card-header p {
		color: #555;
		line-height: 1.5;
		font-size: 0.95rem;
		max-width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
	
	.contact-info {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
		flex: 1;
		width: 100%;
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.info-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0;
		transition: all 0.2s ease;
		text-align: left;
	}
	
	.info-item:hover {
		transform: translateX(5px);
	}
	
	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		background-color: #000;
		color: white;
		flex-shrink: 0;
	}
	
	.info-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.info-content h3 {
		font-size: 0.85rem;
		font-weight: 600;
		color: #000;
		margin-bottom: 0.4rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.info-content p {
		color: #555;
		line-height: 1.4;
		margin: 0;
		font-size: 0.9rem;
	}
	
	.social-links {
		border-top: 1px solid #eaeaea;
		padding-top: 1.5rem;
		margin-top: auto;
		text-align: center;
	}
	
	.social-links h3 {
		font-size: 0.85rem;
		font-weight: 600;
		color: #000;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		display: block;
		width: 100%;
	}
	
	.social-icons {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
	}
	
	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		color: #000;
		background-color: white;
		border: 1px solid #eaeaea;
		transition: all 0.2s ease;
	}
	
	.social-icon:hover {
		background-color: #000;
		color: white;
	}
	
	.success-message {
		display: flex;
		align-items: center;
		background-color: #f0f9f0;
		color: #2c7a2c;
		padding: 1rem;
		margin-bottom: 1.5rem;
		border: 1px solid #d0e9d0;
	}
	
	.success-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.75rem;
		flex-shrink: 0;
	}
	
	.form-card {
		padding: 2.5rem 3rem;
	}
	
	.contact-form {
		display: grid;
		gap: 1.5rem;
		width: 100%;
	}
	
	.form-group {
		display: grid;
		gap: 0.5rem;
		width: 100%;
	}
	
	.form-group label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #000;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.form-input {
		padding: 0.75rem 1rem;
		border: 1px solid #e0e0e0;
		font-size: 0.95rem;
		transition: all 0.2s ease;
		background-color: #fff;
		width: 100%;
	}
	
	.form-input:focus {
		outline: none;
		border-color: #000;
		background-color: white;
		box-shadow: none;
	}
	
	.form-input.error {
		border-color: #ff0000;
	}
	
	.form-input.error:focus {
		box-shadow: none;
	}
	
	.error-message {
		color: #ff0000;
		font-size: 0.8rem;
		margin-top: 0.25rem;
	}
	
	.submit-button {
		background-color: #000;
		color: white;
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		position: relative;
		overflow: hidden;
		justify-self: center;
		margin-top: 0.5rem;
		min-width: 180px;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
	
	.submit-button:hover {
		background-color: #333;
	}
	
	.submit-button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		background-color: #555;
	}
	
	@media (max-width: 991px) {
		.contact-grid {
			width: 100%;
			max-width: 800px;
			margin: 2rem auto;
		}
		
		.info-card, .form-card {
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
		}
	}
	
	@media (max-width: 768px) {
		.hero-section {
			padding: 3rem 0;
		}
		
		.hero-section h1 {
			font-size: 2.2rem;
			margin-bottom: 0.75rem;
		}
		
		.hero-section p {
			font-size: 1.1rem;
		}
		
		.container {
			width: 100%;
			padding: 1.5rem 0;
		}
		
		.contact-grid {
			width: 100%;
			gap: 2rem;
		}
		
		.info-card, .form-card {
			padding: 1.75rem;
		}
		
		.card-header {
			margin-bottom: 1.25rem;
		}
		
		.card-header h2 {
			font-size: 1.4rem;
		}
		
		.submit-button {
			width: 100%;
		}
	}
	
	@media (max-width: 480px) {
		.hero-section {
			padding: 2.5rem 0;
		}
		
		.hero-section h1 {
			font-size: 1.8rem;
		}
		
		.contact-grid {
			width: 100%;
			margin: 0;
		}
		
		.info-card, .form-card {
			padding: 1.5rem;
			box-shadow: none;
			border-radius: 0;
		}
		
		.social-icons {
			justify-content: space-between;
		}
	}
</style> 