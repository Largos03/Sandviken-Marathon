<script lang="ts">	import '$lib/styles/app.css';
	import { Navbar, CookieConsent, SocialLink } from '$lib';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
	import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { language, tStore } from '$lib/stores/i18n';
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

		// Optimized scroll handler with throttling
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					showBackToTop = window.scrollY > 200;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

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
		<div class="mx-auto flex flex-col items-center px-6 max-w-[1100px]">			<div class="mb-3 flex items-center justify-center">
				<SocialLink icon={faFacebookF} href="https://facebook.com" label="Facebook" variant="footer" />
				<SocialLink icon={faTwitter} href="https://twitter.com" label="Twitter" variant="footer" />
				<SocialLink icon={faInstagram} href="https://instagram.com" label="Instagram" variant="footer" />
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
		<button
			class="back-to-top-btn group flex h-12 w-12 items-center justify-center rounded-full bg-black/90 text-white shadow-lg ring-2 ring-black/10 hover:bg-red-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-400"
			on:click={scrollToTop}
			aria-label={t('backToTop')}
			tabindex={showBackToTop ? 0 : -1}
		>
			<Fa icon={faArrowUp} class="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
		</button>
	</div>
</div>
