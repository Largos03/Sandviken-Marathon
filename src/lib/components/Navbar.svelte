<script lang="ts">
    // Using vanilla JavaScript in the onMount lifecycle
    import { onMount } from 'svelte';
    
    // Import FontAwesome for icons (only for appearance, not functionality)
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
        faGlobe
    } from '@fortawesome/free-solid-svg-icons';
    
    // Import language store
    import { language, translations } from '$lib/stores/i18n.js';
    
    // Import CSS
    import '$lib/styles/Navbar.css';
    
    // Define types for better TypeScript support
    type Language = 'en' | 'sv';
    type HoverItemType = number | string | null;
    
    // Hover state for items
    let logoHovered = false;
    let hoveredItem: HoverItemType = null;
    
    // Mobile menu state
    let mobileMenuOpen = false;
    
    function setHovered(index: HoverItemType): void {
        hoveredItem = index;
    }
    
    function clearHovered(): void {
        hoveredItem = null;
    }
    
    function toggleMobileMenu(): void {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    // Language toggle function
    function toggleLanguage(): void {
        $language = $language === 'en' ? 'sv' : 'en';
        // Store language preference in localStorage
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('language', $language);
        }
    }
    
    onMount(() => {
        // Get the navbar element
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        // Track scroll position
        let lastScrollY = 0;
        
        // Load language preference from localStorage
        if (typeof localStorage !== 'undefined') {
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage === 'en' || savedLanguage === 'sv') {
                $language = savedLanguage;
            }
        }
        
        // Function to update navbar on scroll
        function handleScroll(): void {
            const scrollY = window.scrollY;
            
            // Only hide navbar once scrolled down a bit
            if (scrollY > 100) {
                if (scrollY > lastScrollY) {
                    // Scrolling down - hide navbar
                    if (navbar) navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up - show navbar
                    if (navbar) navbar.style.transform = 'translateY(0)';
                }
            } else {
                // At the top - always show
                if (navbar) navbar.style.transform = 'translateY(0)';
            }
            
            // Update last position
            lastScrollY = scrollY;
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    
    // Get translation based on current language
    $: t = (key: string): string => {
      const currentLang = $language as Language;
      const currentTranslations = translations[currentLang] as Record<string, string>;
      
      if (!currentTranslations || !currentTranslations[key]) {
        // Fallback to English or just the key itself if not found
        const englishTranslations = translations['en'] as Record<string, string>;
        return englishTranslations?.[key] || key;
      }
      return currentTranslations[key];
    };
</script>

<!-- Enhanced navbar with improved translucent styling -->
<div id="navbar" class="navbar">
  <div class="navbar-container">
    <!-- Logo (left-aligned) -->
    <div class="logo-container">
      <a href="/" class="logo-link">
        <img src="/Logo.png" alt="Sandviken Marathon Logo" 
             class="logo-image" 
             class:logo-hovered={logoHovered}
             on:mouseenter={() => logoHovered = true} 
             on:mouseleave={() => logoHovered = false} />
      </a>
    </div>
    
    <!-- Desktop Nav with better styling (centered) -->
    <div class="desktop-nav">
      <a href="/" class="nav-link" class:nav-link-hovered={hoveredItem === 0}
         on:mouseenter={() => setHovered(0)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faHome} /></span>
        <span>{t('home')}</span>
      </a>
      
      <a href="/about" class="nav-link" class:nav-link-hovered={hoveredItem === 1}
         on:mouseenter={() => setHovered(1)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faInfoCircle} /></span>
        <span>{t('about')}</span>
      </a>
      
      <a href="/course" class="nav-link" class:nav-link-hovered={hoveredItem === 2}
         on:mouseenter={() => setHovered(2)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faMapMarkerAlt} /></span>
        <span>{t('course')}</span>
      </a>
      
      <a href="/register" class="nav-link" class:nav-link-hovered={hoveredItem === 3}
         on:mouseenter={() => setHovered(3)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faClipboard} /></span>
        <span>{t('register')}</span>
      </a>
      
      <a href="/results" class="nav-link" class:nav-link-hovered={hoveredItem === 4}
         on:mouseenter={() => setHovered(4)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faMedal} /></span>
        <span>{t('results')}</span>
      </a>
      
      <a href="/contact" class="nav-link" class:nav-link-hovered={hoveredItem === 5}
         on:mouseenter={() => setHovered(5)} 
         on:mouseleave={clearHovered}>
        <span class="nav-icon"><Fa icon={faPhone} /></span>
        <span>{t('contact')}</span>
      </a>
      
      <!-- Language Toggle Button -->
      <button
        on:click={toggleLanguage}
        class="lang-toggle"
        class:nav-link-hovered={hoveredItem === 'lang'}
        on:mouseenter={() => setHovered('lang')}
        on:mouseleave={clearHovered}
        aria-label="Switch Language"
      >
        <span class="nav-icon"><Fa icon={faGlobe} /></span>
        <span>{$language === 'en' ? 'Svenska' : 'English'}</span>
      </button>
    </div>
    
    <!-- Mobile Menu Button (right-aligned) -->
    <div class="mobile-menu-container">
      <!-- Language Toggle Button for Mobile -->
      <button
        on:click={toggleLanguage}
        class="mobile-lang-toggle"
        class:nav-link-hovered={hoveredItem === 'lang-mobile'}
        on:mouseenter={() => setHovered('lang-mobile')}
        on:mouseleave={clearHovered}
        aria-label="Switch Language"
      >
        <span class="nav-icon"><Fa icon={faGlobe} /></span>
        <span class="sr-only">{$language === 'en' ? 'Svenska' : 'English'}</span>
      </button>
      
      <div class="mobile-menu-button" 
           role="button" 
           tabindex="0" 
           class:nav-link-hovered={hoveredItem === 'menu'}
           on:mouseenter={() => setHovered('menu')} 
           on:mouseleave={clearHovered}
           on:click={toggleMobileMenu}
           on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()}>
        <span class="menu-icon">
          {#if mobileMenuOpen}
            <Fa icon={faTimes} />
          {:else}
            <Fa icon={faBars} />
          {/if}
        </span>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="mobile-menu-dropdown" 
         class:animate-in={mobileMenuOpen}
         class:animate-out={!mobileMenuOpen}
         class:fade-in-0={mobileMenuOpen}
         class:fade-out-0={!mobileMenuOpen}
         class:zoom-in-95={mobileMenuOpen}
         class:zoom-out-95={!mobileMenuOpen}
         class:slide-in-from-top-2={mobileMenuOpen}
         role="menu"
         aria-orientation="vertical">
      <div class="dropdown-inner">
        <div class="dropdown-header">Navigation</div>
        
        <a href="/" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-0'}
           on:mouseenter={() => setHovered('mobile-0')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faHome} /></span>
          <span>{t('home')}</span>
        </a>
        
        <a href="/about" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-1'}
           on:mouseenter={() => setHovered('mobile-1')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faInfoCircle} /></span>
          <span>{t('about')}</span>
        </a>
        
        <a href="/course" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-2'}
           on:mouseenter={() => setHovered('mobile-2')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faMapMarkerAlt} /></span>
          <span>{t('course')}</span>
        </a>
        
        <a href="/register" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-3'}
           on:mouseenter={() => setHovered('mobile-3')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faClipboard} /></span>
          <span>{t('register')}</span>
        </a>
        
        <a href="/results" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-4'}
           on:mouseenter={() => setHovered('mobile-4')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faMedal} /></span>
          <span>{t('results')}</span>
        </a>
        
        <a href="/contact" class="dropdown-link" class:nav-link-hovered={hoveredItem === 'mobile-5'}
           on:mouseenter={() => setHovered('mobile-5')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span class="dropdown-icon"><Fa icon={faPhone} /></span>
          <span>{t('contact')}</span>
        </a>
      </div>
    </div>
  {/if}
</div> 