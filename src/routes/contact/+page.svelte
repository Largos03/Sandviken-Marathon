<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactSchema } from './schema';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import {
		faEnvelope,
		faPhone,
		faClock,
		faCheck,
		faExclamationTriangle
	} from '@fortawesome/free-solid-svg-icons';
	import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { tStore as t } from '$lib/stores/i18n';
	import { EVENT_CONFIG } from '$lib/config';
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
		error?: string;
	}

	export let data: PageData;

	let formSubmitted = false;
	let showSuccess = false;
	let showError = false;
	let errorMessage = '';
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
			showError = false;
			console.log('Form submission started');
		},
		onResult: (event) => {
			console.log('Form result received:', event.result);

			if (event.result.type === 'success') {
				showSuccess = true;
				showError = false;
				formSubmitted = false;
				console.log('Form submitted successfully');
			} else if (event.result.type === 'failure') {
				showError = true;
				showSuccess = false;
				formSubmitted = false;
				errorMessage = event.result.data?.error || 'An error occurred';
				console.error('Form submission failed:', event.result.data);
			}
			touchedFields = {
				name: false,
				email: false,
				subject: false,
				message: false
			};
		},
		onError: (error) => {
			console.error('Form error:', error);
			showError = true;
			showSuccess = false;
			formSubmitted = false;
			errorMessage = 'An unexpected error occurred. Please try again.';
		}
	});

	$: nameError = $errors?.name ? $t(String($errors.name)) : '';
	$: emailError = $errors?.email ? $t(String($errors.email)) : '';
	$: subjectError = $errors?.subject ? $t(String($errors.subject)) : '';
	$: messageError = $errors?.message ? $t(String($errors.message)) : '';

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

	function shouldShowError(field: keyof typeof touchedFields, error: string) {
		if ((formSubmitted || touchedFields[field]) && error) {
			return true;
		}
		return false;
	}
</script>

<div class="min-h-screen" in:fade>
	<!-- Simple header with subtle texture -->
	<header class="bg-hero-dark">
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
						<ContactItem
							icon={faEnvelope}
							title={$t('email')}
							href="mailto:{EVENT_CONFIG.organizerEmail}"
						>
							{EVENT_CONFIG.organizerEmail}
						</ContactItem>

						<ContactItem
							icon={faPhone}
							title={$t('phone')}
							href="tel:{EVENT_CONFIG.organizerPhone}"
						>
							{EVENT_CONFIG.organizerPhone}
						</ContactItem>

						<ContactItem icon={faClock} title={$t('telephoneHours')}>
							{$t('telephoneHoursContent')}
						</ContactItem>
					</ul>

					<h2 class="mb-6 border-b pb-2 text-xl font-semibold">{$t('followUs')}</h2>
					<div class="flex space-x-4">
						<SocialLink
							icon={faFacebookF}
							href="https://facebook.com/share/1BLyunYz3p/?mibextid=wwXlfr"
							label="Facebook"
							variant="contact"
						/>
						<SocialLink
							icon={faInstagram}
							href="https://instagram.com/sandviken21k"
							label="Instagram"
							variant="contact"
						/>
					</div>
				</div>

				<!-- Contact form -->
				<div class="lg:col-span-2">
					<h2 class="mb-6 border-b pb-2 text-xl font-semibold">{$t('sendMessage')}</h2>

					{#if showError}
						<div class="mb-6 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
							<div class="flex">
								<div class="flex-shrink-0">
									<Fa icon={faExclamationTriangle} class="text-red-500" />
								</div>
								<div class="ml-3">
									<p class="font-medium">{$t('errorSendingMessage')}</p>
									<p class="text-sm">{errorMessage}</p>
								</div>
							</div>
						</div>
					{/if}

					{#if showSuccess}
						<div class="mb-6 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-700">
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
								error={shouldShowError('name', nameError) ? nameError : undefined}
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
								error={shouldShowError('email', emailError) ? emailError : undefined}
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
							error={shouldShowError('subject', subjectError) ? subjectError : undefined}
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
							error={shouldShowError('message', messageError) ? messageError : undefined}
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
