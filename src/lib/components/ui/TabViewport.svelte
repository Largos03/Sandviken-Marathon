<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    
    // Props
    export let activeTab: string;
    export let tabId: string;
    export let transitionDuration: number = 200;
    
    // Determine if this tab content should be shown
    $: isActive = activeTab === tabId;
    
    // Event dispatcher
    const dispatch = createEventDispatcher();
    
    // Focus management
    let tabPanel: HTMLDivElement;
    
    onMount(() => {
        if (isActive && tabPanel) {
            tabPanel.focus();
        }
    });
    
    // When tab becomes active, focus it
    $: if (isActive && tabPanel) {
        tabPanel.focus();
    }
</script>

{#if isActive}
    <div
        bind:this={tabPanel}
        role="tabpanel"
        id="panel-{tabId}"
        aria-labelledby="tab-{tabId}"
        tabindex="0"
        transition:fade={{ duration: transitionDuration }}
        class="focus:outline-none"
        on:outroend={() => dispatch('transitionComplete')}
    >
        <slot />
    </div>
{/if} 