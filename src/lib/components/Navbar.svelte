<script>
    import { Button } from '../ui/button';
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
    import { onMount } from 'svelte';
    
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

    // Track scroll position
    let y;
    let previousY = 0;
    let hidden = false;
    
    // Simple function to update navbar visibility based on scroll direction
    function updateNavbarVisibility() {
        // We're scrolling down
        if (y > previousY && y > 50) {
            hidden = true;
        } 
        // We're scrolling up
        else if (y < previousY) {
            hidden = false;
        }
        
        // Update previous scroll position
        previousY = y;
    }
    
    // Watch scroll position
    $: if (typeof y !== 'undefined') {
        updateNavbarVisibility();
    }
</script>

<svelte:window bind:scrollY={y}/>

<!-- Apply the hide class conditionally with Svelte's class directive -->
<nav class="navbar" class:hide={hidden}>
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <div class="flex flex-col items-center space-x-4">
            <a href="/" class="flex items-center space-x-2 transition-transform hover:scale-105">
                <img src="/Logo.webp" alt="Sandviken Marathon Logo" class="h-12 !max-w-none" />
            </a>
        </div>

        <div class="hidden space-x-1 md:flex">
            <Button href="/" variant="ghost" className="hover:bg-gray-300">
                <Fa icon={faHome} class="mr-2 h-4 w-4" /> Home</Button>
            
                <Button href="/about" variant="ghost" className="hover:bg-gray-300"
                ><Fa icon={faInfoCircle} class="mr-2 h-4 w-4" /> About</Button
            >
            <Button href="/course" variant="ghost" className="hover:bg-gray-300"
                ><Fa icon={faMapMarkerAlt} class="mr-2 h-4 w-4" /> Course</Button
            >
            <Button href="/register" variant="ghost" className="hover:bg-gray-300">
                <Fa icon={faClipboard} class="mr-2 h-4 w-4" />Register</Button>
            
                <Button href="/results" variant="ghost" className="hover:bg-gray-300"
                ><Fa icon={faMedal} class="mr-2 h-4 w-4" /> Results</Button
            >
            <Button href="/contact" variant="ghost" className="hover:bg-gray-300"
                ><Fa icon={faPhone} class="mr-2 h-4 w-4" /> Contact</Button
            >
        </div>

        <div class="flex items-center justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <span class="rounded-full p-2 transition-colors hover:bg-gray-300">
                        <Fa icon={faBars} class="h-6 w-6" />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-6 min-w-40 lg:mr-2">
                    <DropdownMenuLabel className="lg:hidden">Pages</DropdownMenuLabel>

                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer lg:hidden" href="/about">
                            <Fa icon={faInfoCircle} class="mr-2 h-4 w-4" />
                            <span>About</span>
                        </a>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer lg:hidden" href="/course">
                            <Fa icon={faMapMarkerAlt} class="mr-2 h-4 w-4" />
                            <span>Course</span>
                        </a>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer lg:hidden" href="/register">
                            <Fa icon={faClipboard} class="mr-2 h-4 w-4" />
                            <span>Register</span>
                        </a>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer lg:hidden" href="/results">
                            <Fa icon={faMedal} class="mr-2 h-4 w-4" />
                            <span>Results</span>
                        </a>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer lg:hidden" href="/contact">
                            <Fa icon={faPhone} class="mr-2 h-4 w-4" />
                            <span>Contact</span>
                        </a>
                    </DropdownMenuItem>

                    <DropdownMenuLabel className="">Information</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer" href="/about">
                            <Fa icon={faInfoCircle} class="mr-2 h-4 w-4" />
                            <span>About Us</span>
                        </a>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <a class="flex w-full items-center hover:cursor-pointer" href="/register">
                            <Fa icon={faTicketAlt} class="mr-2 h-4 w-4" />
                            <span>Registration</span>
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</nav>

<!-- Spacer to prevent content jump -->
<div class="h-[60px]"></div>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
        background-color: rgba(var(--secondary), 0.9);
        backdrop-filter: blur(8px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    /* Use a more straightforward transform property */
    .navbar.hide {
        transform: translateY(-100%);
    }
    
    /* Fix icon sizing */
    :global(.fa-icon) {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.125em;
    }
</style> 