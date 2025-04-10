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

<div class="container mx-auto px-4 py-16">
	<h1 class="text-4xl font-bold mb-8">Contact Us</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
			<p class="text-lg mb-6">
				Have questions about the Sandviken Marathon? We're here to help! Fill out the form and we'll get back to you as soon as possible.
			</p>
			
			<div class="mb-6">
				<h3 class="text-xl font-bold mb-2">Contact Information</h3>
				<p class="mb-1"><strong>Email:</strong> info@sandvikenmarathon.se</p>
				<p class="mb-1"><strong>Phone:</strong> +46 (0) 123 456 789</p>
				<p class="mb-4"><strong>Address:</strong> Marathon Office, Sandviken City Center, 811 80 Sandviken, Sweden</p>
			</div>
			
			<div class="mb-6">
				<h3 class="text-xl font-bold mb-2">Office Hours</h3>
				<p class="mb-1">Monday to Friday: 9:00 - 17:00</p>
				<p>Saturday and Sunday: Closed</p>
			</div>
			
			<div>
				<h3 class="text-xl font-bold mb-2">Follow Us</h3>
				<div class="flex space-x-4">
					<a href="#" class="text-blue-600 hover:text-blue-800">Facebook</a>
					<a href="#" class="text-blue-400 hover:text-blue-600">Twitter</a>
					<a href="#" class="text-pink-600 hover:text-pink-800">Instagram</a>
				</div>
			</div>
		</div>
		
		<div>
			<form class="bg-gray-100 p-6 rounded-lg">
				<div class="mb-4">
					<label for="name" class="block mb-2">Name</label>
					<input 
						type="text" 
						id="name" 
						class="w-full px-4 py-2 border rounded-md" 
						placeholder="Your name"
					/>
				</div>
				
				<div class="mb-4">
					<label for="email" class="block mb-2">Email</label>
					<input 
						type="email" 
						id="email" 
						class="w-full px-4 py-2 border rounded-md" 
						placeholder="Your email"
					/>
				</div>
				
				<div class="mb-4">
					<label for="subject" class="block mb-2">Subject</label>
					<select id="subject" class="w-full px-4 py-2 border rounded-md">
						<option value="">Select a subject</option>
						<option value="registration">Registration</option>
						<option value="sponsorship">Sponsorship</option>
						<option value="volunteering">Volunteering</option>
						<option value="other">Other</option>
					</select>
				</div>
				
				<div class="mb-4">
					<label for="message" class="block mb-2">Message</label>
					<textarea 
						id="message" 
						class="w-full px-4 py-2 border rounded-md" 
						rows="5" 
						placeholder="Your message"
					></textarea>
				</div>
				
				<button 
					type="submit" 
					class="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
				>
					Send Message
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	h1, h2, h3 {
		color: #333;
	}
	
	p {
		color: #555;
		line-height: 1.6;
	}
	
	label {
		font-weight: 500;
	}
</style> 