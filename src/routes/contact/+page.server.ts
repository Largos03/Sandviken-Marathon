import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from './schema';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import type { PageServerLoad, Actions } from './$types';

// Helper function to escape HTML characters
function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

// Helper function to create HTML email template
function createEmailTemplate(data: {
	name: string;
	email: string;
	subject: string;
	message: string;
}): string {
	const { name, email, subject, message } = data;

	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 0;">
                            <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                                    🏃 Sandviken Half-Marathon
                                </h1>
                                <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">
                                    New Contact Form Submission
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <!-- Sender Info -->
                            <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                                <h2 style="margin: 0 0 15px 0; color: #991b1b; font-size: 18px;">
                                    📧 Contact Information
                                </h2>
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: bold; width: 80px;">
                                            Name:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px;">
                                            ${escapeHtml(name)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: bold;">
                                            Email:
                                        </td>
                                        <td style="padding: 8px 0;">
                                            <a href="mailto:${escapeHtml(email)}" style="color: #dc2626; text-decoration: none; font-size: 14px;">
                                                ${escapeHtml(email)}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: bold;">
                                            Subject:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px;">
                                            ${escapeHtml(subject)}
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Message Content -->
                            <div style="margin-bottom: 30px;">
                                <h2 style="margin: 0 0 15px 0; color: #111827; font-size: 18px;">
                                    💬 Message
                                </h2>
                                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 20px; border-radius: 6px; line-height: 1.6; color: #374151; font-size: 14px; white-space: pre-wrap;">${escapeHtml(message)}</div>
                            </div>

                            <!-- Call to Action -->
                            <div style="text-align: center; margin-top: 30px;">
                                <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(subject)}" 
                                   style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
                                    Reply to ${escapeHtml(name)}
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; text-align: center; color: #6b7280; font-size: 12px;">
                                This email was sent from the contact form on 
                                <a href="https://sandvikenhalfmarathon.com" style="color: #dc2626; text-decoration: none;">
                                    sandvikenhalfmarathon.com
                                </a>
                            </p>
                            <p style="margin: 10px 0 0 0; text-align: center; color: #9ca3af; font-size: 11px;">
                                © ${new Date().getFullYear()} Sandviken Half-Marathon. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
	`.trim();
}

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(contactSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		// Check if Resend API key is available
		if (!env.RESEND_API_KEY) {
			console.error('RESEND_API_KEY is not configured');
			return fail(500, {
				form,
				error: 'Email service is not properly configured. Please contact the administrator.'
			});
		}

		// Log API key info for debugging (first 10 chars only)
		console.log('API Key present:', env.RESEND_API_KEY ? `${env.RESEND_API_KEY.substring(0, 10)}...` : 'NOT SET');
		console.log('API Key length:', env.RESEND_API_KEY?.length);

		// Initialize Resend
		const resend = new Resend(env.RESEND_API_KEY);

		// Get email addresses from environment or use defaults
		const toEmail = env.CONTACT_EMAIL || 'traningsgruppensandivken@outlook.com';
		const fromEmail = env.FROM_EMAIL || 'Sandviken21k@contact.se';

		console.log('Email configuration:', {
			from: fromEmail,
			to: toEmail,
			replyTo: form.data.email,
			subject: `Contact Form: ${form.data.subject}`
		});

		try {
			// Send email using Resend
			const { data, error } = await resend.emails.send({
				from: fromEmail,
				to: toEmail,
				replyTo: form.data.email, // Set reply-to as the user's email
				subject: `Contact Form: ${form.data.subject}`,
				html: createEmailTemplate(form.data)
			});

			if (error) {
				console.error('Resend API error details:', {
					name: error.name,
					message: error.message,
					statusCode: (error as any).statusCode,
					fullError: JSON.stringify(error, null, 2)
				});
				return fail(500, {
					form,
					error: `Failed to send email: ${error.message || 'Please try again later or contact us directly.'}`
				});
			}

			console.log('Email sent successfully:', data);

			// Return success
			return { form, success: true };
		} catch (error) {
			console.error('Unexpected error sending email:', {
				error,
				message: error instanceof Error ? error.message : 'Unknown error',
				stack: error instanceof Error ? error.stack : undefined
			});
			return fail(500, {
				form,
				error: 'An unexpected error occurred. Please try again later.'
			});
		}
	}
};
