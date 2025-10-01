<!-- Main Navigation Component with mobile menu and language toggle -->
<script lang="ts">
	// Using vanilla JavaScript in the onMount lifecycle
	import { onMount } from 'svelte';

	// Import FontAwesome for icons
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faTimes,
		faGlobe,
		faHome,
		faInfoCircle,
		faMapMarkerAlt,
		faClipboard,
		faMedal,
		faPhone,
		faChevronRight
	} from '@fortawesome/free-solid-svg-icons';

	// Import language store
	import { language, tStore } from '$lib/stores/i18n';

	// Component state variables
	let mobileMenuOpen = false;
	let lastScrollY = 0;
	let menuButton: HTMLButtonElement;

	// Navigation items configuration
	const navItems = [
		{ href: '/', icon: faHome, key: 'home' },
		{ href: '/about', icon: faInfoCircle, key: 'about' },
		{ href: '/course', icon: faMapMarkerAlt, key: 'course' },
		{ href: '/register', icon: faClipboard, key: 'register' },
		{ href: '/results', icon: faMedal, key: 'results' },
		{ href: '/contact', icon: faPhone, key: 'contact' }
	];

	// Mobile menu handling functions
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

	// Language toggle function
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

		// Load language preference from localStorage
		if (typeof localStorage !== 'undefined') {
			const savedLanguage = localStorage.getItem('language');
			if (savedLanguage === 'en' || savedLanguage === 'sv') {
				$language = savedLanguage;
			}
		}

		// Optimized scroll handler with throttling
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const scrollY = window.scrollY;
					if (scrollY > 100) {
						navbar.style.transform = scrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
					} else {
						navbar.style.transform = 'translateY(0)';
					}
					lastScrollY = scrollY;
					ticking = false;
				});
				ticking = true;
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 768 && mobileMenuOpen) {
				closeMobileMenu();
			}
		};

		// Event listeners with passive scrolling for better performance
		window.addEventListener('scroll', handleScroll, { passive: true });
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
<div id="navbar" class="sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out">
	<div class="absolute inset-0 z-0 border-b border-gray-200/50 bg-white/90 backdrop-blur-lg"></div>
	<div class="relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
		<!-- Left section -->
		<div class="flex items-center">
			<!-- Mobile menu button -->
			<button
				class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-white transition-all duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none md:hidden {mobileMenuOpen
					? 'bg-gray-900'
					: ''}"
				on:click={toggleMobileMenu}
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileMenuOpen}
				bind:this={menuButton}
			>
				<div class="relative h-4 w-4">
					<span
						class="absolute top-0.5 left-0 h-0.5 w-4 transform bg-current transition-all duration-200 {mobileMenuOpen
							? 'translate-y-1.5 rotate-45'
							: ''}"
					></span>
					<span
						class="absolute top-2 left-0 h-0.5 w-4 bg-current transition-opacity duration-200 {mobileMenuOpen
							? 'opacity-0'
							: 'opacity-100'}"
					></span>
					<span
						class="absolute top-3.5 left-0 h-0.5 w-4 transform bg-current transition-all duration-200 {mobileMenuOpen
							? '-translate-y-1.5 -rotate-45'
							: ''}"
					></span>
				</div>
			</button>

			<!-- Logo -->
			<a href="/" class="ml-3 flex items-center md:ml-0">
				<img
					src="/Logo.png"
					alt="Sandviken Half-marathon Logo"
					class="h-10 w-auto drop-shadow-sm filter transition-transform duration-200 hover:scale-105"
				/>
			</a>
		</div>
		<!-- Desktop navigation -->
		<nav
			class="hidden items-center justify-center gap-2 overflow-hidden text-center font-semibold text-ellipsis whitespace-nowrap md:flex"
		>
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
				>
					<span
						class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500"
					>
						<FontAwesomeIcon icon={item.icon} size="sm" />
					</span>
					<span>{t(item.key)}</span>
					<span
						class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"
					></span>
				</a>
			{/each}
		</nav>
		<!-- Language toggle -->
		<div class="flex items-center">
			<button
				on:click={toggleLanguage}
				class="relative flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 no-underline transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
				aria-label={t('switchLanguageAria')}
			>
				<span class="inline-flex h-4 w-4 items-center justify-center text-red-500">
					<FontAwesomeIcon icon={faGlobe} size="sm" />
				</span>
				<span class="font-medium sm:hidden">{$language === 'en' ? 'SV' : 'EN'}</span>
				<span class="hidden font-medium sm:inline"
					>{$language === 'en' ? t('switchToSwedish') : t('switchToEnglish')}</span
				>
			</button>
		</div>
	</div>
</div>

<!-- Mobile menu overlay -->
<div
	class="fixed inset-0 z-[99] bg-black/40 transition-opacity duration-300 md:hidden {mobileMenuOpen
		? 'visible opacity-100'
		: 'invisible opacity-0'}"
	on:click={closeMobileMenu}
	on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
	aria-label={t('closeMenuAria')}
	tabindex={mobileMenuOpen ? 0 : -1}
	role="button"
></div>

<!-- Mobile menu panel -->
<nav
	class="fixed top-0 right-0 z-[100] h-full w-72 max-w-[80vw] overflow-hidden bg-white shadow-xl transition-transform duration-400 ease-out md:hidden {mobileMenuOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	aria-label={t('mobileNavigationAria')}
>
	<!-- Header -->
	<div class="relative bg-gray-800 p-5 text-white">
		<div class="absolute top-3 right-3">
			<button
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
				on:click={closeMobileMenu}
				aria-label={t('closeMenuAria')}
			>
				<FontAwesomeIcon icon={faTimes} size="sm" />
			</button>
		</div>

		<div class="pr-12">
			<p class="text-sm text-white">{t('navigateToSection')}</p>
		</div>
	</div>
	<!-- Navigation Items -->
	<div class="flex h-full flex-col">
		<div class="mobile-menu-content flex-1 overflow-y-auto py-2">
			{#each navItems as item, index (item.href)}
				<a
					href={item.href}
					class="group mx-3 my-1 flex items-center rounded-lg p-3 text-gray-700 no-underline transition-all duration-200 hover:bg-gray-50 hover:text-red-600 {mobileMenuOpen
						? 'animate-slideIn'
						: ''}"
					on:click={closeMobileMenu}
					style="animation-delay: {mobileMenuOpen ? index * 80 + 150 : 0}ms"
				>
					<div
						class="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-red-600 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white"
					>
						<FontAwesomeIcon icon={item.icon} size="sm" />
					</div>
					<div class="flex flex-1 flex-col">
						<span class="text-base font-medium">{t(item.key)}</span>
					</div>
					<div
						class="translate-x-1 transform opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
					>
						<FontAwesomeIcon
							icon={faChevronRight}
							class="h-3 w-3 text-gray-400 group-hover:text-red-500"
						/>
					</div>
				</a>
			{/each}
		</div>
		<!-- Footer Section -->
		<div class="border-t border-gray-100 p-4">
			<div class="flex items-center justify-between">
				<div class="text-sm text-gray-600">
					<div class="font-medium">{t('eventDateNavbar')}</div>
					<div class="text-xs text-gray-500">{t('eventLocation')}</div>
				</div>
				<button
					on:click={toggleLanguage}
					class="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-red-600"
					aria-label="Switch Language"
				>
					<FontAwesomeIcon icon={faGlobe} class="h-3 w-3 text-red-500" />
					<span>{$language === 'en' ? 'SV' : 'EN'}</span>
				</button>
			</div>
		</div>
	</div>
</nav>

<style>
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.animate-slideIn {
		animation: slideIn 0.3s ease-out forwards;
		opacity: 0;
	}

	/* Custom scrollbar for mobile menu */
	.mobile-menu-content {
		scrollbar-width: thin;
		scrollbar-color: rgba(239, 68, 68, 0.3) transparent;
	}

	.mobile-menu-content::-webkit-scrollbar {
		width: 4px;
	}

	.mobile-menu-content::-webkit-scrollbar-track {
		background: transparent;
	}

	.mobile-menu-content::-webkit-scrollbar-thumb {
		background: rgba(239, 68, 68, 0.3);
		border-radius: 2px;
	}

	.mobile-menu-content::-webkit-scrollbar-thumb:hover {
		background: rgba(239, 68, 68, 0.5);
	}
</style>
