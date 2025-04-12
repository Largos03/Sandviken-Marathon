<script>
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
        faTimes
    } from '@fortawesome/free-solid-svg-icons';
    
    // Hover state for items
    let logoHovered = false;
    let hoveredItem = null;
    
    // Mobile menu state
    let mobileMenuOpen = false;
    
    function setHovered(index) {
        hoveredItem = index;
    }
    
    function clearHovered() {
        hoveredItem = null;
    }
    
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    onMount(() => {
        // Get the navbar element
        const navbar = document.getElementById('navbar');
        
        // Track scroll position
        let lastScrollY = 0;
        
        // Function to update navbar on scroll
        function handleScroll() {
            const scrollY = window.scrollY;
            
            // Only hide navbar once scrolled down a bit
            if (scrollY > 100) {
                if (scrollY > lastScrollY) {
                    // Scrolling down - hide navbar
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up - show navbar
                    navbar.style.transform = 'translateY(0)';
                }
            } else {
                // At the top - always show
                navbar.style.transform = 'translateY(0)';
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
</script>

<!-- Enhanced navbar with improved translucent styling -->
<div id="navbar" style="position: fixed; top: 0; left: 0; width: 100%; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); box-shadow: 0 4px 20px rgba(0,0,0,0.02); border-bottom: 1px solid rgba(255, 255, 255, 0.1); z-index: 999; padding: 5px 15px; transition: transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;">
  <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; position: relative;">
    <!-- Logo (left-aligned) -->
    <div style="position: relative; left: 0; display: flex; align-items: center;">
      <a href="/" style="text-decoration: none; display: flex; align-items: center;">
        <img src="/Logo.webp" alt="Sandviken Marathon Logo" 
             style="height: 40px; width: auto; transition: transform 0.2s; {logoHovered ? 'transform: scale(1.05)' : ''}; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" 
             on:mouseenter={() => logoHovered = true} 
             on:mouseleave={() => logoHovered = false} />
      </a>
    </div>
    
    <!-- Desktop Nav with better styling (centered) -->
    <div class="desktop-nav" style="display: flex; gap: 15px; align-items: center; margin: 0 auto;">
      <a href="/" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 0 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(0)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faHome} /></span>
        <span>Home</span>
      </a>
      
      <a href="/about" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 1 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(1)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faInfoCircle} /></span>
        <span>About</span>
      </a>
      
      <a href="/course" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 2 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(2)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faMapMarkerAlt} /></span>
        <span>Course</span>
      </a>
      
      <a href="/register" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 3 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(3)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faClipboard} /></span>
        <span>Register</span>
      </a>
      
      <a href="/results" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 4 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(4)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faMedal} /></span>
        <span>Results</span>
      </a>
      
      <a href="/contact" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 6px 10px; border-radius: 6px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 5 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(5)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; opacity: 0.8;"><Fa icon={faPhone} /></span>
        <span>Contact</span>
      </a>
    </div>
    
    <!-- Mobile Menu Button (right-aligned) -->
    <div class="mobile-menu" role="button" tabindex="0" style="display: none; cursor: pointer; padding: 6px; border-radius: 50%; transition: background-color 0.2s ease; {hoveredItem === 'menu' ? 'background-color: rgba(0,0,0,0.05);' : ''}; position: absolute; right: 0;"
         on:mouseenter={() => setHovered('menu')} 
         on:mouseleave={clearHovered}
         on:click={toggleMobileMenu}
         on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()}>
      <span style="display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; opacity: 0.8;">
        {#if mobileMenuOpen}
          <Fa icon={faTimes} />
        {:else}
          <Fa icon={faBars} />
        {/if}
      </span>
    </div>
  </div>
  
  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="mobile-menu-dropdown" 
         style="position: absolute; top: 100%; right: 0; width: auto; min-width: 200px; max-width: 300px; background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(15px); box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; z-index: 998; padding: 5px 0; display: none; margin-top: 5px; margin-right: 10px;"
         class:animate-in={mobileMenuOpen}
         class:animate-out={!mobileMenuOpen}
         class:fade-in-0={mobileMenuOpen}
         class:fade-out-0={!mobileMenuOpen}
         class:zoom-in-95={mobileMenuOpen}
         class:zoom-out-95={!mobileMenuOpen}
         class:slide-in-from-top-2={mobileMenuOpen}
         role="menu"
         aria-orientation="vertical">
      <div style="padding: 0 5px;">
        <div style="padding: 8px 12px; font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.7);">Navigation</div>
        
        <a href="/" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-0' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-0')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faHome} /></span>
          <span>Home</span>
        </a>
        
        <a href="/about" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-1' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-1')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faInfoCircle} /></span>
          <span>About</span>
        </a>
        
        <a href="/course" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-2' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-2')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faMapMarkerAlt} /></span>
          <span>Course</span>
        </a>
        
        <a href="/register" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-3' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-3')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faClipboard} /></span>
          <span>Register</span>
        </a>
        
        <a href="/results" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-4' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-4')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faMedal} /></span>
          <span>Results</span>
        </a>
        
        <a href="/contact" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; border-radius: 6px; margin-bottom: 2px; font-size: 14px; {hoveredItem === 'mobile-5' ? 'background-color: rgba(0,0,0,0.05);' : ''}" 
           on:mouseenter={() => setHovered('mobile-5')} 
           on:mouseleave={clearHovered}
           on:click={() => mobileMenuOpen = false}>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faPhone} /></span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  {/if}
</div>

<style>
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .desktop-nav {
            display: none !important;
        }
        .mobile-menu {
            display: block !important;
        }
        .mobile-menu-dropdown {
            display: block !important;
        }
    }
    
    /* Fix icon sizing */
    :global(.fa-icon) {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.125em;
    }
    
    /* Animation classes */
    .animate-in {
        animation: fadeIn 0.2s ease-out;
    }
    
    .animate-out {
        animation: fadeOut 0.2s ease-in;
    }
    
    .fade-in-0 {
        opacity: 1;
    }
    
    .fade-out-0 {
        opacity: 0;
    }
    
    .zoom-in-95 {
        transform: scale(1);
    }
    
    .zoom-out-95 {
        transform: scale(0.95);
    }
    
    .slide-in-from-top-2 {
        transform: translateY(0);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0) scale(1); }
        to { opacity: 0; transform: translateY(-10px) scale(0.95); }
    }
</style> 