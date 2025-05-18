<script lang="ts">
	import '$lib/styles/app.css';
	import { Navbar, CookieConsent } from '$lib';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { language, tStore } from '$lib/stores/i18n.js';
	import { onMount } from 'svelte';

	// Accept data from layout.js
	export let data;

	// Back to Top button state and function
	let showBackToTop = false;
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Initialize language from server data if available
	if (data.lang) {
		language.set(data.lang as 'en' | 'sv');
	}

	// Use the derived translation store
	$: t = $tStore;

	onMount(() => {
		// Update the html lang attribute when language changes
		document.documentElement.lang = $language;

		// Logic for Back to Top button
		const handleScroll = () => {
			showBackToTop = window.scrollY > 200;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-grow">
		<slot />
	</main>

	<CookieConsent />

	<footer class="mt-auto bg-black py-4 text-white md:py-5">
		<div class="mx-auto flex flex-col items-center px-6 max-w-[1100px]">
			<div class="mb-3 flex items-center justify-center">
				<a
					href="https://facebook.com"
					class="mx-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
					aria-label="Facebook"
				>
					<Fa icon={faFacebookF} />
				</a>
				<a
					href="https://twitter.com"
					class="mx-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
					aria-label="Twitter"
				>
					<Fa icon={faTwitter} />
				</a>
				<a
					href="https://instagram.com"
					class="mx-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
					aria-label="Instagram"
				>
					<Fa icon={faInstagram} />
				</a>
			</div>
			<div class="mb-3 flex items-center justify-center text-xs text-white md:text-sm">
				<a href="/contact" class="mx-2 hover:underline">{t('contact')}</a>
				<span>|</span>
				<a href="/privacy" class="mx-2 hover:underline">{t('privacyPolicy')}</a>
				<span>|</span>
				<a href="/terms" class="mx-2 hover:underline">{t('terms')}</a>
			</div>
			<p class="text-center text-xs text-white md:text-sm">{t('copyright')}</p>
		</div>
	</footer>

	<div class="fixed bottom-5 right-5 z-50 {showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300">
		<div class="mx-auto flex flex-col items-center px-6 max-w-[1100px]">
			<button
				on:click={scrollToTop}
			>
				Back to Top
			</button>
		</div>
	</div>
</div>
