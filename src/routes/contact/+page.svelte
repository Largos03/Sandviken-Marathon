<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactSchema } from './schema';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import {
		faEnvelope,
		faPhone,
		faLocationDot,
		faClock,
		faCheck
	} from '@fortawesome/free-solid-svg-icons';
	import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { tStore as t } from '$lib/stores/i18n';
	import { fade } from 'svelte/transition';
	import { ContactItem, SocialLink } from '$lib';
	import Input from '$lib/components/Input.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Button from '$lib/components/Button.svelte';

	type FormData = {
		name: string;
		email: string;
		subject: string;
		message: string;
	};

	interface PageData {
		form: SuperValidated<FormData>;
	}

	// Accept data from page.server.js
	export let data: PageData;

	// Track form status and touched fields
	let formSubmitted = false;
	let showSuccess = false;
	let touchedFields = {
		name: false,
		email: false,
		subject: false,
		message: false
	};

	const { form, enhance, errors, constraints } = superForm<FormData>(data.form, {
		validators: zodClient(contactSchema),
		resetForm: true,
		onSubmit: () => {
			formSubmitted = true;
			showSuccess = false;
		},
		onResult: () => {
			showSuccess = true;
			// Reset touched state when form is successfully submitted
			touchedFields = {
				name: false,
				email: false,
				subject: false,
				message: false
			};
		}
	});

	// Type assertion for error fields
	$: nameError = $errors?.name ? String($errors.name) : '';
	$: emailError = $errors?.email ? String($errors.email) : '';
	$: subjectError = $errors?.subject ? String($errors.subject) : '';
	$: messageError = $errors?.message ? String($errors.message) : '';

	// Create a safe constraints object
	$: safeConstraints = {
		name: $constraints?.name || {},
		email: $constraints?.email || {},
		subject: $constraints?.subject || {},
		message: $constraints?.message || {}
	};

	// Handle field blur events to mark them as touched
	function handleBlur(field: keyof typeof touchedFields) {
		touchedFields[field] = true;
	}

	// Helper to determine if we should show an error
	function shouldShowError(field: keyof typeof touchedFields, error: string) {
		// Only show errors if the field has been touched or form was submitted
		if ((formSubmitted || touchedFields[field]) && error) {
			// Translate the error message
			return true;
		}
		return false;
	}

	// Translate error message
	function translateError(error: string): string {
		// If the error message is a translation key, translate it
		// This needs to use the imported tStore ($t) now or be adjusted
		// For now, let's assume error messages from superforms are already strings or pre-translated
		// If they are keys, this function needs to use $t(error)
		return error; // Simplified for now, may need to revisit if errors are keys
	}
</script>

<div class="min-h-screen" in:fade>
	<!-- Simple header with subtle texture -->
	<header class="bg-black py-16 text-white">
		<div class="mx-auto max-w-screen-xl px-6">
			<h1 class="text-4xl font-bold">{$t('contactTitle')}</h1>
			<div class="mt-4 mb-4 h-1 w-16 bg-red-500"></div>
			<p class="max-w-xl text-gray-300">{$t('contactSubtitle')}</p>
		</div>
	</header>

	<main class="bg-white py-16">
		<div class="mx-auto max-w-screen-xl px-6">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="lg:col-span-1">
					<h2 class="mb-6 border-b pb-2 text-xl font-semibold">{$t('getInTouch')}</h2>

					<ul class="mb-10 space-y-6 text-gray-700">
						<ContactItem icon={faEnvelope} title={$t('email')} href="mailto:info@sandvikenmarathon.se">
							info@sandvikenmarathon.se
						</ContactItem>

						<ContactItem icon={faPhone} title={$t('phone')} href="tel:+461234567">
							+46 (0) 123 456 789
						</ContactItem>

						<ContactItem icon={faLocationDot} title={$t('address')}>
							<address class="not-italic">
								Marathon Office<br />
								Sandviken City Center<br />
								811 80 Sandviken, Sweden
							</address>
						</ContactItem>

						<ContactItem icon={faClock} title={$t('officeHours')}>
							<p>{$t('monToFri')}</p>
							<p>{$t('weekends')}</p>
						</ContactItem>
					</ul>

					<h2 class="mb-6 border-b pb-2 text-xl font-semibold">{$t('followUs')}</h2>
					<div class="flex space-x-4">
						<SocialLink icon={faFacebookF} href="https://facebook.com" label="Facebook" variant="contact" />
						<SocialLink icon={faTwitter} href="https://twitter.com" label="Twitter" variant="contact" />
						<SocialLink icon={faInstagram} href="https://instagram.com" label="Instagram" variant="contact" />
					</div>
				</div>

				<!-- Contact form -->
				<div class="lg:col-span-2">
					<h2 class="mb-6 border-b pb-2 text-xl font-semibold">{$t('sendMessage')}</h2>

					{#if showSuccess}
						<div class="mb-6 border-l-4 border-green-500 bg-green-50 p-4 text-green-700">
							<div class="flex">
								<div class="flex-shrink-0">
									<Fa icon={faCheck} class="text-green-500" />
								</div>
								<div class="ml-3">
									<p class="font-medium">{$t('successMessage')}</p>
								</div>
							</div>
						</div>
					{/if}

					<form method="POST" use:enhance class="space-y-6">
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<Input
								id="name"
								name="name"
								bind:value={$form.name}
								label={$t('formName')}
								error={shouldShowError('name', nameError) ? translateError(nameError) : undefined}
								placeholder={$t('formName')}
								required={true}
								on:blur={() => handleBlur('name')}
								{...safeConstraints.name}
							/>

							<Input
								id="email"
								name="email"
								type="email"
								bind:value={$form.email}
								label={$t('formEmail')}
								error={shouldShowError('email', emailError)
									? translateError(emailError)
									: undefined}
								placeholder={$t('formEmail')}
								required={true}
								on:blur={() => handleBlur('email')}
								{...safeConstraints.email}
							/>
						</div>

						<Input
							id="subject"
							name="subject"
							bind:value={$form.subject}
							label={$t('formSubject')}
							error={shouldShowError('subject', subjectError)
								? translateError(subjectError)
								: undefined}
							placeholder={$t('formSubject')}
							required={true}
							on:blur={() => handleBlur('subject')}
							{...safeConstraints.subject}
						/>

						<TextArea
							id="message"
							name="message"
							bind:value={$form.message}
							label={$t('formMessage')}
							error={shouldShowError('message', messageError)
								? translateError(messageError)
								: undefined}
							placeholder={$t('formMessage')}
							required={true}
							rows={5}
							on:blur={() => handleBlur('message')}
							{...safeConstraints.message}
						/>

						<div class="flex justify-end pt-2">
							<Button type="submit" variant="primary" disabled={formSubmitted}>
								{formSubmitted ? $t('sending') : $t('sendButton')}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>
</div>
