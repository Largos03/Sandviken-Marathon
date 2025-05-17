<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
	
	// Props
	export let title: string;
	export let description: string;
	export let emailAddress: string = 'contact@sandvikenmarathon.com';
	export let emailLabel: string = 'email';
	export let addressLabel: string = 'address';
	export let buttonText: string = 'Contact Us';
	export let addressText: string = 'Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sweden';
	export let ariaLabelledby: string = 'contact-section-title';
</script>

<section aria-labelledby={ariaLabelledby}>
	<div class="flex items-center mb-5">
		<div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 shadow-md border-b-4 border-red-500" aria-hidden="true">
			<FontAwesomeIcon icon={faEnvelope} size="lg" class="text-red-100" />
		</div>
		<div>
			<h2 id={ariaLabelledby} class="text-2xl font-bold">{title}</h2>
			<p class="text-gray-500">{description}</p>
		</div>
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
		<div class="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200 shadow-sm hover:border-l-3 hover:border-red-400/30">
			<div class="w-12 h-12 mb-4 bg-black text-white rounded-full flex items-center justify-center shadow-sm" aria-hidden="true">
				<FontAwesomeIcon icon={faEnvelope} size="lg" class="text-red-100" />
			</div>
			<h3 id="contact-email-label" class="text-xl font-semibold mb-2">{emailLabel}:</h3>
			<a 
				href="mailto:{emailAddress}" 
				class="text-gray-600 hover:text-red-600 focus:outline-none focus:underline focus:text-red-700"
				aria-labelledby="contact-email-label"
			>
				{emailAddress}
			</a>
		</div>
		
		<div class="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200 shadow-sm hover:border-l-3 hover:border-red-400/30">
			<div class="w-12 h-12 mb-4 bg-black text-white rounded-full flex items-center justify-center shadow-sm" aria-hidden="true">
				<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" class="text-red-100" />
			</div>
			<h3 id="contact-address-label" class="text-xl font-semibold mb-2">{addressLabel}:</h3>
			<address class="not-italic text-gray-600" aria-labelledby="contact-address-label">
				{addressText}
			</address>
		</div>
	</div>
	
	<div class="text-center">
		<a 
			href="/contact" 
			class="inline-flex items-center justify-center px-6 py-3 border-2 border-black bg-black text-white font-medium rounded-md hover:bg-transparent hover:text-black transition-colors duration-200 shadow-md border-b-4 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
			aria-label={buttonText}
		>
			{buttonText}
		</a>
	</div>
</section> 