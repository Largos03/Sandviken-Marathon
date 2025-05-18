<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let open = false;
  export let imageSrc: string;
  export let altText = '';

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }

  // Close on escape key (global)
  function handleKeydown(event: KeyboardEvent) {
    if (open && event.key === 'Escape') {
      closeModal();
    }
  }

  // Close backdrop on Enter/Space key
  function handleBackdropKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent spacebar from scrolling
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
    on:click|self={closeModal} 
    role="button" 
    tabindex="0" 
    aria-label="Close modal by clicking backdrop"
    on:keydown={handleBackdropKeydown}
    transition:fade={{ duration: 200, easing: quintOut }}
  >
    <div
      class="relative mx-4 my-8 max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-4 shadow-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
      transition:fade={{ duration: 300, delay: 150, easing: quintOut }}
    >
      <button
        on:click={closeModal}
        class="absolute top-2 right-2 z-10 rounded-full bg-white/50 p-1 text-gray-700 transition-colors hover:bg-gray-200 hover:text-black"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {#if imageSrc}
        <img src={imageSrc} alt={altText} class="max-h-[80vh] w-auto rounded" />
      {:else}
        <p id="image-modal-title" class="text-center text-lg font-semibold">Image not available</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Ensure clicks on the image itself don't close the modal if on:click|self is on the parent */
  img {
    pointer-events: auto;
  }
</style> 