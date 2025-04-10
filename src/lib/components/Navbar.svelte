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
        faBars
    } from '@fortawesome/free-solid-svg-icons';
    
    // Hover state for items
    let logoHovered = false;
    let hoveredItem = null;
    
    function setHovered(index) {
        hoveredItem = index;
    }
    
    function clearHovered() {
        hoveredItem = null;
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
<div id="navbar" style="position: fixed; top: 0; left: 0; width: 100%; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); box-shadow: 0 4px 20px rgba(0,0,0,0.02); border-bottom: 1px solid rgba(255, 255, 255, 0.1); z-index: 999; padding: 10px 20px; transition: transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;">
  <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; position: relative;">
    <!-- Logo (left-aligned) -->
    <div style="position: absolute; left: 0;">
      <a href="/" style="text-decoration: none; display: flex; align-items: center;">
        <img src="/Logo.webp" alt="Sandviken Marathon Logo" 
             style="height: 48px; width: auto; transition: transform 0.2s; {logoHovered ? 'transform: scale(1.05)' : ''}; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" 
             on:mouseenter={() => logoHovered = true} 
             on:mouseleave={() => logoHovered = false} />
      </a>
    </div>
    
    <!-- Desktop Nav with better styling (centered) -->
    <div class="desktop-nav" style="display: flex; gap: 20px; align-items: center; margin: 0 auto;">
      <a href="/" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 0 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(0)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faHome} /></span>
        <span>Home</span>
      </a>
      
      <a href="/about" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 1 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(1)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faInfoCircle} /></span>
        <span>About</span>
      </a>
      
      <a href="/course" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 2 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(2)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faMapMarkerAlt} /></span>
        <span>Course</span>
      </a>
      
      <a href="/register" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 3 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(3)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faClipboard} /></span>
        <span>Register</span>
      </a>
      
      <a href="/results" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 4 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(4)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faMedal} /></span>
        <span>Results</span>
      </a>
      
      <a href="/contact" style="text-decoration: none; color: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; {hoveredItem === 5 ? 'background-color: rgba(0,0,0,0.05); box-shadow: 0 2px 5px rgba(0,0,0,0.03);' : ''}" 
         on:mouseenter={() => setHovered(5)} 
         on:mouseleave={clearHovered}>
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; opacity: 0.8;"><Fa icon={faPhone} /></span>
        <span>Contact</span>
      </a>
    </div>
    
    <!-- Mobile Menu Button (right-aligned) -->
    <div class="mobile-menu" role="button" tabindex="0" style="display: none; cursor: pointer; padding: 8px; border-radius: 50%; transition: background-color 0.2s ease; {hoveredItem === 'menu' ? 'background-color: rgba(0,0,0,0.05);' : ''}; position: absolute; right: 0;"
         on:mouseenter={() => setHovered('menu')} 
         on:mouseleave={clearHovered}>
      <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; opacity: 0.8;"><Fa icon={faBars} /></span>
    </div>
  </div>
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
    }
    
    /* Fix icon sizing */
    :global(.fa-icon) {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.125em;
    }
</style> 