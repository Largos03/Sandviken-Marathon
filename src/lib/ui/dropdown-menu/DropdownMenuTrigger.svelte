<script>
    import { getContext } from 'svelte';
    import { dropdownOpen } from './DropdownMenu.svelte';
    
    // Toggle the dropdown
    function toggleDropdown() {
        $dropdownOpen = !$dropdownOpen;
    }
</script>

<div 
    on:click={toggleDropdown}
    class="inline-flex cursor-pointer"
>
    <slot />
</div> 