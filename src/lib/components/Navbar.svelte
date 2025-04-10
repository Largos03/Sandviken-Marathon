<header
    class:header-hidden={!isHeaderVisible}
    class:header-visible={isHeaderVisible}
    class="sticky top-0 z-50 w-full border-b border-primary/10 bg-secondary/85 shadow-lg backdrop-blur-lg"
>
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
        <div class="flex flex-col items-center space-x-4">
            <a href="/" class="flex items-center space-x-2">
                <img src="/Logo.webp" alt="Sandviken Marathon Logo" class="h-12 !max-w-none" />
            </a>
        </div>

        <nav class="hidden space-x-4 md:flex">
            <Button href="/" variant="ghost" className=""><Fa icon={faHome} class="mr-2 h-4 w-4" /> Home</Button>
            <Button href="/about" variant="ghost" className=""
                ><Fa icon={faInfoCircle} class="mr-2 h-4 w-4" /> About</Button
            >
            <Button href="/course" variant="ghost" className=""
                ><Fa icon={faMapMarkerAlt} class="mr-2 h-4 w-4" /> Course</Button
            >
            <Button href="/register" variant="ghost" className=""><Fa icon={faClipboard} class="mr-2 h-4 w-4" />Register</Button>
            <Button href="/results" variant="ghost" className=""
                ><Fa icon={faMedal} class="mr-2 h-4 w-4" /> Results</Button
            >
            <Button href="/contact" variant="ghost" className=""
                ><Fa icon={faPhone} class="mr-2 h-4 w-4" /> Contact</Button
            >
        </nav>

        <div class="flex items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Fa icon={faBars} class="h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-6 min-w-40 lg:mr-2 ">
                    <DropdownMenuLabel className="lg:hidden">Pages</DropdownMenuLabel>

                    <a class="hover:cursor-grab lg:hidden" href="/about">
                        <DropdownMenuItem>
                            <Fa icon={faInfoCircle} class="h-4 w-4" />
                            <p class="hover:cursor-pointer">About</p>
                        </DropdownMenuItem>
                    </a>
                    <a class="hover:cursor-grab lg:hidden" href="/course">
                        <DropdownMenuItem>
                            <Fa icon={faMapMarkerAlt} class="h-4 w-4" />
                            <p class="hover:cursor-pointer">Course</p>
                        </DropdownMenuItem>
                    </a>
                    <a class="hover:cursor-grab lg:hidden" href="/register">
                        <DropdownMenuItem>
                            <Fa icon={faClipboard} class="h-4 w-4" />
                            <p class="hover:cursor-pointer">Register</p>
                        </DropdownMenuItem>
                    </a>
                    <a class="hover:cursor-grab lg:hidden" href="/results">
                        <DropdownMenuItem>
                            <Fa icon={faMedal} class="h-4 w-4" />
                            <p class="hover:cursor-pointer">Results</p>
                        </DropdownMenuItem>
                    </a>
                    <a class="hover:cursor-grab lg:hidden" href="/contact">
                        <DropdownMenuItem>
                            <Fa icon={faPhone} class="h-4 w-4" />
                            <p class="hover:cursor-pointer">Contact</p>
                        </DropdownMenuItem>
                    </a>

                    <DropdownMenuLabel className="">Information</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Fa icon={faInfoCircle} class="h-4 w-4" />
                        <a href="/about">About Us</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Fa icon={faTicketAlt} class="h-4 w-4" />
                        <a href="/register">Registration</a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</header>

<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { Button } from '../ui/button';
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
    
    // Import FontAwesome
    import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
    import { 
        faHome, 
        faInfoCircle, 
        faMapMarkerAlt, 
        faClipboard, 
        faMedal, 
        faPhone, 
        faBars,
        faTicketAlt
    } from '@fortawesome/free-solid-svg-icons';

    let isHeaderVisible = true; // Tracks if the header is visible
    let lastScrollY = 0; // Tracks the last scroll position
    let scrollingDown = false;
    let scrollTimer;

    // Adjustable parameters
    let hideThreshold = 100; // Pixels from the top before the header hides
    let scrollThreshold = 50; // How much user needs to scroll to hide/show navbar

    onMount(() => {
        if (!browser) return;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            scrollingDown = currentScrollY > lastScrollY;
            
            // Clear existing timer
            clearTimeout(scrollTimer);
            
            // If scrolling down and past the threshold, hide the header
            if (scrollingDown && currentScrollY > hideThreshold && Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
                isHeaderVisible = false;
            } 
            // If scrolling up, show the header
            else if (!scrollingDown && Math.abs(currentScrollY - lastScrollY) > 10) {
                isHeaderVisible = true;
            }
            
            // Set a timer to show the header if user hasn't scrolled for a while
            scrollTimer = setTimeout(() => {
                if (currentScrollY < hideThreshold) {
                    isHeaderVisible = true;
                }
            }, 1000);
            
            lastScrollY = currentScrollY;
        };

        // Initial setup
        if (window.scrollY < hideThreshold) {
            isHeaderVisible = true;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimer);
        };
    });
</script>

<style>
    .header-visible {
        transform: translateY(0);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 1;
    }

    .header-hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
    }
    
    /* Fix icon sizing */
    :global(.fa-icon) {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.125em;
    }
</style> 