<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactSchema } from './schema';
	
	// Temporary type definition until SvelteKit generates types
	type PageData = { form: any, success?: boolean };

	export let data: PageData;
	
	// Track form status manually
	let formSubmitted = false;
	let showSuccess = false;
	
	const { form, enhance, errors, constraints } = superForm(data.form, {
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
</script>

<div class="contact-container">
	<h1>Contact Us</h1>
	<p>If you have any questions about the Sandviken Marathon, please fill out the form below and we'll get back to you as soon as possible.</p>

	{#if formSubmitted && showSuccess}
		<div class="confirmation-box">
			<div class="check-icon">✓</div>
			<p class="confirmation-message">Thank you! Your message has been sent successfully. We will contact you shortly.</p>
		</div>
	{/if}

	<form method="POST" use:enhance class="contact-form">
		<div class="form-group">
			<label for="name">Name</label>
			<input 
				type="text" 
				id="name" 
				name="name"
				bind:value={$form.name}
				aria-invalid={$errors.name ? 'true' : undefined}
				{...$constraints.name}
			/>
			{#if $errors.name}<span class="error">{$errors.name}</span>{/if}
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input 
				type="email" 
				id="email" 
				name="email"
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				{...$constraints.email}
			/>
			{#if $errors.email}<span class="error">{$errors.email}</span>{/if}
		</div>

		<div class="form-group">
			<label for="subject">Subject</label>
			<input 
				type="text" 
				id="subject" 
				name="subject"
				bind:value={$form.subject}
				aria-invalid={$errors.subject ? 'true' : undefined}
				{...$constraints.subject}
			/>
			{#if $errors.subject}<span class="error">{$errors.subject}</span>{/if}
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea 
				id="message" 
				name="message"
				rows="5"
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
				{...$constraints.message}
			></textarea>
			{#if $errors.message}<span class="error">{$errors.message}</span>{/if}
		</div>

		<button type="submit" class="submit-button">Send Message</button>
	</form>
</div>

<style>
	.contact-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 2rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: bold;
	}

	input, textarea {
		padding: 0.75rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: #0066cc;
		box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
	}

	.error {
		color: #e53e3e;
		font-size: 0.875rem;
		margin-top: 0.25rem;
	}

	.confirmation-box {
		background-color: #d4edda;
		border: 1px solid #c3e6cb;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.check-icon {
		background-color: #28a745;
		color: white;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	.confirmation-message {
		color: #155724;
		font-weight: 500;
		margin: 0;
	}

	.submit-button {
		background-color: #0066cc;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.2s;
		align-self: flex-start;
	}

	.submit-button:hover {
		background-color: #004e9c;
	}

	input[aria-invalid="true"], 
	textarea[aria-invalid="true"] {
		border-color: #e53e3e;
	}
</style> 