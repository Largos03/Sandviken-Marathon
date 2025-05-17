<script lang="ts">
	import "$lib/styles/app.css";
	import { Navbar, CookieConsent } from "$lib";
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import {
		faFacebookF,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import { language, tStore } from '$lib/stores/i18n.js';
	import { onMount } from 'svelte';
	
	// Accept data from layout.js
	export let data;
	
	// Initialize language from server data if available
	if (data.lang) {
		language.set(data.lang as 'en' | 'sv');
	}
	
	// Use the derived translation store
	$: t = $tStore;
	
	onMount(() => {
		// Update the html lang attribute when language changes
		document.documentElement.lang = $language;
	});
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	
	<main class="flex-grow">
		<slot />
	</main>
	
	<CookieConsent />
	
	<footer class="bg-black text-white py-4 md:py-5 mt-auto">
		<div class="container mx-auto px-4 flex flex-col items-center">
			<div class="flex items-center justify-center mb-3">
				<a href="https://facebook.com" class="flex items-center justify-center w-7 h-7 mx-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:-translate-y-0.5" aria-label="Facebook">
					<Fa icon={faFacebookF} />
				</a>
				<a href="https://twitter.com" class="flex items-center justify-center w-7 h-7 mx-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:-translate-y-0.5" aria-label="Twitter">
					<Fa icon={faTwitter} />
				</a>
				<a href="https://instagram.com" class="flex items-center justify-center w-7 h-7 mx-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:-translate-y-0.5" aria-label="Instagram">
					<Fa icon={faInstagram} />
				</a>
			</div>
			<div class="flex items-center justify-center mb-3 text-xs md:text-sm text-white">
				<a href="/contact" class="mx-2 hover:underline">{t('contact')}</a>
				<span>|</span>
				<a href="/privacy" class="mx-2 hover:underline">{t('privacyPolicy')}</a>
				<span>|</span>
				<a href="/terms" class="mx-2 hover:underline">{t('terms')}</a>
			</div>
			<p class="text-center text-xs md:text-sm text-white">{t('copyright')}</p>
		</div>
	</footer>
</div>
  