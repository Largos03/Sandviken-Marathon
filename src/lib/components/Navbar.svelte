<script lang="ts">
    // Using vanilla JavaScript in the onMount lifecycle
    import { onMount } from 'svelte';
    
    // Import FontAwesome for icons
    import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
    import { 
        faHome, 
        faInfoCircle, 
        faMapMarkerAlt, 
        faClipboard, 
        faMedal, 
        faPhone, 
        faBars,
        faTimes,
        faGlobe,
        faChevronRight
    } from '@fortawesome/free-solid-svg-icons';
    
    // Import language store
    import { language, translations, t, type Language } from '$lib/stores/i18n.js';
    
    // Define types for better TypeScript support
    type HoverItemType = number | null;
    
    // States
    let hoveredItem: HoverItemType = null;
    let mobileMenuOpen = false;
    let menuButton: HTMLButtonElement | null = null;
    
    // Navigation item hover state
    function setHovered(index: HoverItemType): void {
        hoveredItem = index;
    }
    
    function clearHovered(): void {
        hoveredItem = null;
    }
    
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
    
    onMount(() => {
        // Get the navbar element
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        // Apply padding to main content
        const mainContent = document.querySelector('main');
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
        let lastScrollY = 0;
        
        function handleScroll(): void {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                // Toggle navbar visibility based on scroll direction
                if (navbar) {
                    navbar.style.transform = scrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
                }
                
                // Add scrolled class for visual changes
                if (navbar && !navbar.classList.contains('navbar-scrolled')) {
                    navbar.classList.add('navbar-scrolled');
                }
            } else {
                // Reset at top of page
                if (navbar) {
                    navbar.style.transform = 'translateY(0)';
                    navbar.classList.remove('navbar-scrolled');
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

<style>
  /* Core navbar styles */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    transition: transform 0.3s ease-in-out, background-color 0.3s;
  }
  
  .navbar-bg {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 0;
  }
  
  .navbar-scrolled {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
  }
  
  .navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 48px;
  }
  
  /* Link styles */
  .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s;
    color: #333;
    text-decoration: none;
  }
  
  .link:hover {
    color: #e53e3e;
  }
  
  .link.icon-only {
    width: 32px;
    height: 32px;
  }
  
  .title {
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* Navigation item hover effect */
  .hover-indicator {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e53e3e;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }
  
  .link:hover .hover-indicator {
    transform: scaleX(1);
  }
  
  /* Language button */
  .language-button {
    background-color: rgba(243, 244, 246, 0.6);
    border: 1px solid rgba(229, 231, 235, 0.5);
    border-radius: 9999px;
    transition: background-color 0.3s;
  }

  .language-button:hover {
    background-color: rgba(229, 231, 235, 0.8);
  }
  
  /* Mobile panel styles */
  .panel-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
  }
  
  .panel-overlay.visible {
    visibility: visible;
    opacity: 1;
  }
  
  .panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    max-width: 280px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 100;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  
  .panel.visible {
    transform: translateX(0);
  }
  
  /* Panel elements */
  .panel-close, .panel-nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .panel-close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: background-color 0.2s;
  }
  
  .panel-close:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .panel-header {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(240, 240, 240, 0.7);
  }
  
  .panel-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  
  .panel-nav-link {
    display: flex;
    align-items: center;
    padding: 12px;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid rgba(240, 240, 240, 0.5);
    transition: background-color 0.2s;
    font-size: 14px;
  }
  
  .panel-nav-link:hover {
    background-color: rgba(245, 245, 245, 0.8);
  }
  
  .panel-nav-icon {
    margin-right: 12px;
    color: #e53e3e;
    opacity: 0.85;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  /* Logo hover effect */
  .logo {
    transition: transform 0.2s;
  }
  
  .logo:hover {
    transform: scale(1.05);
  }
</style>

<!-- Main navbar container -->
<div id="navbar" class="navbar">
  <div class="navbar-bg"></div>
  <div class="navbar-inner max-w-7xl mx-auto px-3">
    <!-- Left section -->
    <div class="left flex items-center">
      <!-- Mobile menu button -->
      <button 
        class="link icon-only md:hidden flex items-center justify-center focus:outline-none" 
        on:click={toggleMobileMenu}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        style="display: none;"
        bind:this={menuButton}
      >
        <Fa icon={faBars} size="sm" />
      </button>
      
      <!-- Logo -->
      <a href="/" class="flex items-center ml-2 md:ml-0">
        <img 
          src="/Logo.png" 
          alt="Sandviken Marathon Logo" 
          class="h-8 w-auto filter drop-shadow-sm logo"
        />
      </a>
    </div>
    
    <!-- Desktop navigation -->
    <nav class="title hidden md:flex items-center justify-center gap-2">
      <a 
        href="/" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(0)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faHome} size="sm" />
        </span>
        <span>{t('home')}</span>
        <span class="hover-indicator"></span>
      </a>
      
      <a 
        href="/about" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(1)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faInfoCircle} size="sm" />
        </span>
        <span>{t('about')}</span>
        <span class="hover-indicator"></span>
      </a>
      
      <a 
        href="/course" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(2)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faMapMarkerAlt} size="sm" />
        </span>
        <span>{t('course')}</span>
        <span class="hover-indicator"></span>
      </a>
      
      <a 
        href="/register" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(3)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faClipboard} size="sm" />
        </span>
        <span>{t('register')}</span>
        <span class="hover-indicator"></span>
      </a>
      
      <a 
        href="/results" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(4)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faMedal} size="sm" />
        </span>
        <span>{t('results')}</span>
        <span class="hover-indicator"></span>
      </a>
      
      <a 
        href="/contact" 
        class="link font-medium text-sm px-3 py-1" 
        on:mouseenter={() => setHovered(5)} 
        on:mouseleave={clearHovered}
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80 mr-1.5">
          <Fa icon={faPhone} size="sm" />
        </span>
        <span>{t('contact')}</span>
        <span class="hover-indicator"></span>
      </a>
    </nav>
    
    <!-- Language toggle -->
    <div class="right flex items-center">
      <button
        on:click={toggleLanguage}
        class="language-button relative px-2 py-1 font-medium text-xs flex items-center gap-1.5 cursor-pointer"
        aria-label="Switch Language"
      >
        <span class="inline-flex items-center justify-center w-3.5 h-3.5 text-red-500 text-opacity-80">
          <Fa icon={faGlobe} size="sm" />
        </span>
        <span class="hidden sm:inline">{$language === 'en' ? t('switchToSwedish') : t('switchToEnglish')}</span>
      </button>
    </div>
  </div>
</div>

<!-- Mobile menu overlay -->
<button 
  class="panel-overlay md:hidden {mobileMenuOpen ? 'visible' : ''}" 
  on:click={closeMobileMenu}
  on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
  aria-label="Close menu"
  tabindex={mobileMenuOpen ? 0 : -1}
></button>

<!-- Mobile menu panel -->
<nav class="panel md:hidden {mobileMenuOpen ? 'visible' : ''}" aria-label="Mobile navigation">
  <div class="panel-header">
    <h3 class="panel-title">{t('navigation')}</h3>
    <button class="panel-close" on:click={closeMobileMenu} aria-label="Close menu">
      <Fa icon={faTimes} size="sm" />
    </button>
  </div>
  
  <div class="panel-content">
    <a href="/" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faHome} size="sm" />
      </span>
      <span>{t('home')}</span>
    </a>
    
    <a href="/about" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faInfoCircle} size="sm" />
      </span>
      <span>{t('about')}</span>
    </a>
    
    <a href="/course" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faMapMarkerAlt} size="sm" />
      </span>
      <span>{t('course')}</span>
    </a>
    
    <a href="/register" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faClipboard} size="sm" />
      </span>
      <span>{t('register')}</span>
    </a>
    
    <a href="/results" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faMedal} size="sm" />
      </span>
      <span>{t('results')}</span>
    </a>
    
    <a href="/contact" class="panel-nav-link" on:click={closeMobileMenu}>
      <span class="panel-nav-icon">
        <Fa icon={faPhone} size="sm" />
      </span>
      <span>{t('contact')}</span>
    </a>
  </div>
</nav> 