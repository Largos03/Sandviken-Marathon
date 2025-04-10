<script>
    import { createEventDispatcher } from 'svelte';
    import { writable } from 'svelte/store';

    export let open = false;

    const dispatch = createEventDispatcher();
    
    export const dropdownOpen = writable(open);
    
    // Watch for changes to the open prop
    $: if (open !== $dropdownOpen) {
        $dropdownOpen = open;
        if (open) {
            dispatch('open');
        } else {
            dispatch('close');
        }
    }
    
    // Update the open prop when the store changes
    function handleStoreChange(value) {
        if (value !== open) {
            open = value;
        }
    }
    
    // Subscribe to store changes
    $: $dropdownOpen, handleStoreChange($dropdownOpen);
</script>

<div class="relative">
    <slot />
</div> 