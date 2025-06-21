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

	// States
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
<div
	id="navbar"
	class="sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out"
>
	<div class="absolute inset-0 z-0 bg-white/70 backdrop-blur-sm"></div>
	<div class="relative z-10 mx-auto flex h-12 w-full max-w-7xl items-center justify-between px-3">
		<!-- Left section -->
		<div class="flex items-center">
			<!-- Mobile menu button -->			<button
				class="relative flex h-8 w-8 items-center justify-center text-gray-700 no-underline transition-colors duration-300 hover:text-red-600 focus:outline-none md:hidden"
				on:click={toggleMobileMenu}
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileMenuOpen}
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
		<nav class="hidden items-center justify-center gap-2 overflow-hidden text-center font-semibold text-ellipsis whitespace-nowrap md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="group relative flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-red-600"
				>
					<span class="text-opacity-80 mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center text-red-500">
						<FontAwesomeIcon icon={item.icon} size="sm" />
					</span>
					<span>{t(item.key)}</span>
					<span class="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 transform rounded bg-red-600 transition-transform duration-300 group-hover:scale-x-100"></span>
				</a>
			{/each}
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
		{#each navItems as item}
			<a
				href={item.href}
				class="flex items-center border-b border-gray-100/50 p-3 text-sm text-gray-700 no-underline transition-colors duration-200 hover:bg-gray-50/80"
				on:click={closeMobileMenu}
			>
				<span class="mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center text-red-600 opacity-85">
					<FontAwesomeIcon icon={item.icon} size="sm" />
				</span>
				<span>{t(item.key)}</span>
			</a>
		{/each}
	</div>
</nav>
