<script>
    import { getContext } from 'svelte';
    import { dropdownOpen } from './DropdownMenu.svelte';
    
    // Toggle the dropdown
    function toggleDropdown() {
        $dropdownOpen = !$dropdownOpen;
    }

    function handleKeyDown(event) {
        // Toggle on Enter or Space key
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleDropdown();
        }
    }
</script>

<button 
    type="button"
    on:click={toggleDropdown}
    on:keydown={handleKeyDown}
    aria-expanded={$dropdownOpen}
    aria-haspopup="true"
    class="inline-flex cursor-pointer border-none bg-transparent p-0"
>
    <slot />
</button> 