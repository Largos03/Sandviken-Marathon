<script>
    import { dropdownOpen } from './DropdownMenu.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    export let className = '';
    
    // Close when clicking outside
    let contentEl;
    
    function handleClickOutside(event) {
        if (contentEl && !contentEl.contains(event.target) && $dropdownOpen) {
            $dropdownOpen = false;
        }
    }
    
    onMount(() => {
        // Only add event listeners in the browser
        if (browser) {
            document.addEventListener('click', handleClickOutside);
        }
    });
    
    onDestroy(() => {
        // Only remove event listeners in the browser
        if (browser) {
            document.removeEventListener('click', handleClickOutside);
        }
    });
</script>

{#if $dropdownOpen}
    <div 
        bind:this={contentEl}
        class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 {className}"
    >
        <slot />
    </div>
{/if} 