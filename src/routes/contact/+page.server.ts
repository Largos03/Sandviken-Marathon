import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from './schema';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import type { PageServerLoad, Actions } from './$types';

// Initialize Resend with the API key
const resend = new Resend(RESEND_API_KEY);

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(contactSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));

		console.log('Form validation result:', { valid: form.valid, data: form.data, errors: form.errors });

		if (!form.valid) {
			console.log('Form validation failed:', form.errors);
			return fail(400, { form });
		}

		// Check if Resend API key is available
		if (!RESEND_API_KEY) {
			console.error('RESEND_API_KEY is not configured');
			return fail(500, {
				form,
				error: 'Email service is not properly configured. Please contact the administrator.'
			});
		}

		try {
			console.log('Attempting to send email with data:', form.data);
			
			// Send email using Resend
			const emailResult = await resend.emails.send({
				from: 'Sandviken Marathon <onboarding@resend.dev>', // Use Resend's default domain for testing
				to: ['traningsgruppensandviken@outlook.com'],
				subject: `Contact Form: ${form.data.subject}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${form.data.name}</p>
					<p><strong>Email:</strong> ${form.data.email}</p>
					<p><strong>Subject:</strong> ${form.data.subject}</p>
					<p><strong>Message:</strong></p>
					<p>${form.data.message.replace(/\n/g, '<br>')}</p>
				`,
			});

			console.log('✅ Email sent successfully:', emailResult);

			return {
				form,
				success: true
			};
		} catch (error) {
			console.error('❌ Email sending failed:', error);
			
			// Log more detailed error information
			if (error instanceof Error) {
				console.error('Error message:', error.message);
				console.error('Error stack:', error.stack);
			}
			
			return fail(500, {
				form,
				error: 'Failed to send email. Please try again later.'
			});
		}
	}
};
