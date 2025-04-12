<script>
	import "../app.css";
	import { Navbar } from "$lib";
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import {
		faFacebookF,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	
	<main class="flex-grow">
		<slot />
	</main>
	
	<footer class="bg-gray-900 text-white py-4 md:py-5 mt-auto">
		<div class="container mx-auto px-4 flex flex-col items-center">
			<div class="social-links mb-3">
				<a href="https://facebook.com" class="social-icon mx-2" aria-label="Facebook">
					<Fa icon={faFacebookF} />
				</a>
				<a href="https://twitter.com" class="social-icon mx-2" aria-label="Twitter">
					<Fa icon={faTwitter} />
				</a>
				<a href="https://instagram.com" class="social-icon mx-2" aria-label="Instagram">
					<Fa icon={faInstagram} />
				</a>
			</div>
			<div class="footer-links mb-3 text-xs md:text-sm">
				<a href="/contact" class="mx-2 hover:underline">Contact</a>
				<span>|</span>
				<a href="/privacy" class="mx-2 hover:underline">Privacy Policy</a>
				<span>|</span>
				<a href="/terms" class="mx-2 hover:underline">Terms</a>
			</div>
			<p class="text-center text-xs md:text-sm opacity-80">&copy; 2025 Sandviken Marathon. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.social-links {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		color: white;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		transition: all 0.2s ease;
	}
	
	.social-icon:hover {
		background-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}
	
	.footer-links {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.8);
	}
	
	:global(.fa-icon) {
		width: 0.8em;
		height: 0.8em;
	}
</style>
  