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
	<div class="mb-5 flex items-center">
		<div
			class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border-b-4 border-red-500 bg-black text-white shadow-md"
			aria-hidden="true"
		>
			<FontAwesomeIcon icon={faEnvelope} size="lg" class="text-red-100" />
		</div>
		<div>
			<h2 id={ariaLabelledby} class="text-2xl font-bold">{title}</h2>
			<p class="text-gray-500">{description}</p>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
		<div
			class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
		>
			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-sm"
				aria-hidden="true"
			>
				<FontAwesomeIcon icon={faEnvelope} size="lg" class="text-red-100" />
			</div>
			<h3 id="contact-email-label" class="mb-2 text-xl font-semibold">{emailLabel}:</h3>
			<a
				href="mailto:{emailAddress}"
				class="text-gray-600 hover:text-red-600 focus:text-red-700 focus:underline focus:outline-none"
				aria-labelledby="contact-email-label"
			>
				{emailAddress}
			</a>
		</div>

		<div
			class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md"
		>
			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-sm"
				aria-hidden="true"
			>
				<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" class="text-red-100" />
			</div>
			<h3 id="contact-address-label" class="mb-2 text-xl font-semibold">{addressLabel}:</h3>
			<address class="text-gray-600 not-italic" aria-labelledby="contact-address-label">
				{addressText}
			</address>
		</div>
	</div>

	<div class="text-center">
		<a
			href="/contact"
			class="focus:ring-opacity-50 inline-flex items-center justify-center rounded-md border-2 border-b-4 border-black border-red-500 bg-black px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 hover:bg-transparent hover:text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
			aria-label={buttonText}
		>
			{buttonText}
		</a>
	</div>
</section>
