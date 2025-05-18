<script lang="ts">
	// Using vanilla JavaScript in the onMount lifecycle
	import { onMount } from 'svelte';

	// Import FontAwesome for icons
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faBars,
		faTimes,
		faGlobe,
		faHome,
		faInfoCircle,
		faMapMarkerAlt,
		faClipboard,
		faMedal,
		faPhone
	} from '@fortawesome/free-solid-svg-icons';

	// Import language store
	import { language, tStore } from '$lib/stores/i18n';

	// Define types for better TypeScript support

	// States
	let mobileMenuOpen = false;
	let lastScrollY = 0;
	let menuButton: HTMLButtonElement;

	// Mobile menu handling
	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
		}
	}

	function closeMobileMenu(): void {
		if (mobileMenuOpen) {
			mobileMenuOpen = false;
			if (typeof document !== 'undefined') {
				document.body.style.overflow = '';
			}
		}
	}

	// Language toggle
	function toggleLanguage(): void {
		$language = $language === 'en' ? 'sv' : 'en';
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('language', $language);
		}
	}

	// Use the derived store for translations
	$: t = $tStore;

	onMount(() => {
		// Get the navbar element
		const navbar = document.getElementById('navbar') as HTMLElement | null;
		if (!navbar) return;

		// Apply padding to main content
		const mainContent = document.querySelector('main') as HTMLElement | null;
		if (mainContent) {
			const navbarHeight = navbar.offsetHeight;
			mainContent.style.paddingTop = `${navbarHeight}px`;
		}

		// Handle menu button visibility
		function updateMenuButtonVisibility() {
			if (!menuButton) return;
			menuButton.style.display = window.innerWidth < 768 ? 'flex' : 'none';
		}

		// Initial check
		updateMenuButtonVisibility();

		// Load language preference from localStorage
		if (typeof localStorage !== 'undefined') {
			const savedLanguage = localStorage.getItem('language');
			if (savedLanguage === 'en' || savedLanguage === 'sv') {
				$language = savedLanguage;
			}
		}

		// Scroll and resize event handlers
		function handleScroll(): void {
			const scrollY = window.scrollY;

			if (scrollY > 100) {
				// Toggle navbar visibility based on scroll direction
				if (navbar) {
					navbar.style.transform = scrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
				}
			} else {
				// Reset at top of page
				if (navbar) {
					navbar.style.transform = 'translateY(0)';
				}
			}

			lastScrollY = scrollY;
		}

		function handleResize(): void {
			updateMenuButtonVisibility();

			// Close mobile menu on desktop view
			if (window.innerWidth >= 768 && mobileMenuOpen) {
				closeMobileMenu();
			}

			// Update navbar height on resize
			if (navbar && mainContent) {
				const navbarHeight = navbar.offsetHeight;
				mainContent.style.paddingTop = `${navbarHeight}px`;
			}
		}

		// Add event listeners
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		// Clean up on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);

			if (mobileMenuOpen && typeof document !== 'undefined') {
				document.body.style.overflow = '';
			}
		};
	});
</script>

<!-- Main navbar container -->
<div
	id="navbar"
	class="fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out"
>
	<div class="absolute inset-0 z-0 bg-white/70"></div>
	<div class="relative z-10 mx-auto flex h-12 w-full max-w-7xl items-center justify-between px-3">
		<!-- Left section -->
		<div class="flex items-center">
			<!-- Mobile menu button -->
			<button
				class="relative flex h-8 w-8 items-center justify-center text-gray-700 no-underline transition-colors duration-300 hover:text-red-600 focus:outline-none md:hidden"
				on:click={toggleMobileMenu}
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileMenuOpen}
				style="display: none;"
				bind:this={menuButton}
			>
				<FontAwesomeIcon icon={faBars} size="sm" />
			</button>

			<!-- Logo -->
			<a href="/" class="ml-2 flex items-center md:ml-0">
				<img
					src="/Logo.png"
					alt="Sandviken Marathon Logo"
					class="h-8 w-auto drop-shadow-sm filter transition-transform duration-200 hover:scale-105"
				/>
			</a>
		</div>

		<!-- Desktop navigation -->
		<nav
			class="hidden items-center justify-center gap-2 overflow-hidden text-center font-semibold text-ellipsis whitespace-nowrap md:flex"
		>
			<a
				href="/"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faHome} size="sm" />
				</span>
				<span>{t('home')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>

			<a
				href="/about"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faInfoCircle} size="sm" />
				</span>
				<span>{t('about')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>

			<a
				href="/course"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
				</span>
				<span>{t('course')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>

			<a
				href="/register"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faClipboard} size="sm" />
				</span>
				<span>{t('register')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>

			<a
				href="/results"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faMedal} size="sm" />
				</span>
				<span>{t('results')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>

			<a
				href="/contact"
				class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
			>
				<span
					class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faPhone} size="sm" />
				</span>
				<span>{t('contact')}</span>
				<span
					class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
				></span>
			</a>
		</nav>

		<!-- Language toggle -->
		<div class="flex items-center">
			<button
				on:click={toggleLanguage}
				class="relative flex cursor-pointer items-center gap-1.5 rounded-full border border-gray-200/50 bg-gray-100/60 px-2 py-1 text-xs font-medium text-gray-700 no-underline transition-colors duration-300 hover:bg-gray-200/80 hover:text-red-600"
				aria-label="Switch Language"
			>
				<span
					class="text-opacity-80 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
				>
					<FontAwesomeIcon icon={faGlobe} size="sm" />
				</span>
				<span class="hidden sm:inline"
					>{$language === 'en' ? t('switchToSwedish') : t('switchToEnglish')}</span
				>
			</button>
		</div>
	</div>
</div>

<!-- Mobile menu overlay -->
<button
	class="fixed inset-0 z-[99] m-0 cursor-pointer border-none bg-black/30 p-0 transition-opacity duration-300 outline-none md:hidden {mobileMenuOpen
		? 'visible opacity-100'
		: 'invisible opacity-0'}"
	on:click={closeMobileMenu}
	on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
	aria-label="Close menu"
	tabindex={mobileMenuOpen ? 0 : -1}
></button>

<!-- Mobile menu panel -->
<nav
	class="fixed top-0 left-0 z-[100] h-full w-3/4 max-w-[280px] overflow-y-auto overscroll-contain bg-white/95 shadow-[2px_0_8px_rgba(0,0,0,0.1)] transition-transform duration-300 md:hidden {mobileMenuOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
	aria-label="Mobile navigation"
>
	<div class="flex items-center justify-between border-b border-gray-100/70 p-3">
		<h3 class="text-base font-semibold text-gray-700">{t('navigation')}</h3>
		<button
			class="absolute top-2 right-2 z-[2] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/5"
			on:click={closeMobileMenu}
			aria-label="Close menu"
		>
			<FontAwesomeIcon icon={faTimes} size="sm" />
		</button>
	</div>

	<div class="panel-content">
		<a
			href="/"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faHome} size="sm" />
			</span>
			<span>{t('home')}</span>
		</a>

		<a
			href="/about"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faInfoCircle} size="sm" />
			</span>
			<span>{t('about')}</span>
		</a>

		<a
			href="/course"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
			</span>
			<span>{t('course')}</span>
		</a>

		<a
			href="/register"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faClipboard} size="sm" />
			</span>
			<span>{t('register')}</span>
		</a>

		<a
			href="/results"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faMedal} size="sm" />
			</span>
			<span>{t('results')}</span>
		</a>

		<a
			href="/contact"
			class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
			on:click={closeMobileMenu}
		>
			<span
				class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85"
			>
				<FontAwesomeIcon icon={faPhone} size="sm" />
			</span>
			<span>{t('contact')}</span>
		</a>
	</div>
</nav>
