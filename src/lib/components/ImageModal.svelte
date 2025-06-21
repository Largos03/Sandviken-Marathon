<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faSearchPlus, faSearchMinus, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';

  export let open = false;
  export let imageSrc: string;
  export let altText = '';

  const dispatch = createEventDispatcher();

  let zoomLevel = 1;
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let imagePosition = { x: 0, y: 0 };
  let imageElement: HTMLImageElement;
  let containerElement: HTMLDivElement;

  function closeModal() {
    dispatch('close');
    resetZoom();
  }

  function resetZoom() {
    zoomLevel = 1;
    imagePosition = { x: 0, y: 0 };
  }

  function zoomIn() {
    if (zoomLevel < 3) {
      zoomLevel = Math.min(zoomLevel + 0.25, 3);
    }
  }

  function zoomOut() {
    if (zoomLevel > 1) {
      zoomLevel = Math.max(zoomLevel - 0.25, 1);
      if (zoomLevel === 1) {
        imagePosition = { x: 0, y: 0 };
      }
    }
  }

  function handleWheel(event: WheelEvent) {
    event.preventDefault();
    if (event.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  }

  function handleMouseDown(event: MouseEvent) {
    if (zoomLevel > 1) {
      isDragging = true;
      dragStart = {
        x: event.clientX - imagePosition.x,
        y: event.clientY - imagePosition.y
      };
      event.preventDefault();
    }
  }

  function handleMouseMove(event: MouseEvent) {
    if (isDragging && zoomLevel > 1) {
      imagePosition = {
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y
      };
    }
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleTouchStart(event: TouchEvent) {
    if (event.touches.length === 1 && zoomLevel > 1) {
      isDragging = true;
      const touch = event.touches[0];
      dragStart = {
        x: touch.clientX - imagePosition.x,
        y: touch.clientY - imagePosition.y
      };
      event.preventDefault();
    }
  }

  function handleTouchMove(event: TouchEvent) {
    if (isDragging && event.touches.length === 1 && zoomLevel > 1) {
      const touch = event.touches[0];
      imagePosition = {
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      };
      event.preventDefault();
    }
  }

  function handleTouchEnd() {
    isDragging = false;
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

<svelte:window on:keydown={handleKeydown} on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

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
      bind:this={containerElement}
      class="relative mx-4 my-8 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
      transition:fade={{ duration: 300, delay: 150, easing: quintOut }}
    >
      <!-- Close button -->
      <button
        on:click={closeModal}
        class="absolute top-2 right-2 z-20 rounded-full bg-white/90 p-2 text-gray-700 transition-colors hover:bg-white hover:text-black shadow-lg"
        aria-label="Close modal"
      >
        <FontAwesomeIcon icon={faTimes} class="h-5 w-5" />
      </button>

      <!-- Zoom controls -->
      <div class="absolute top-2 left-2 z-20 flex flex-col gap-2">
        <button
          on:click={zoomIn}
          disabled={zoomLevel >= 3}
          class="rounded-full bg-white/90 p-2 text-gray-700 transition-colors hover:bg-white hover:text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Zoom in"
          title="Zoom in"
        >
          <FontAwesomeIcon icon={faSearchPlus} class="h-4 w-4" />
        </button>
        <button
          on:click={zoomOut}
          disabled={zoomLevel <= 1}
          class="rounded-full bg-white/90 p-2 text-gray-700 transition-colors hover:bg-white hover:text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Zoom out"
          title="Zoom out"
        >
          <FontAwesomeIcon icon={faSearchMinus} class="h-4 w-4" />
        </button>
        <button
          on:click={resetZoom}
          disabled={zoomLevel === 1}
          class="rounded-full bg-white/90 p-2 text-gray-700 transition-colors hover:bg-white hover:text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Reset zoom"
          title="Reset zoom"
        >
          <FontAwesomeIcon icon={faExpand} class="h-4 w-4" />
        </button>
      </div>

      <!-- Zoom level indicator -->
      {#if zoomLevel > 1}
        <div class="absolute bottom-2 left-2 z-20 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 shadow-lg">
          {Math.round(zoomLevel * 100)}%
        </div>
      {/if}

      <!-- Help text -->
      <div class="absolute bottom-2 right-2 z-20 rounded-lg bg-white/90 px-3 py-1 text-xs text-gray-600 shadow-lg">
        {#if zoomLevel > 1}
          Drag to pan • Scroll to zoom
        {:else}
          Scroll to zoom • Click controls
        {/if}
      </div>      <!-- Image container -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div 
        class="flex h-[80vh] w-full items-center justify-center overflow-hidden bg-gray-100 cursor-{zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'}"
        on:wheel={handleWheel}
        on:mousedown={handleMouseDown}
        on:touchstart={handleTouchStart}
        on:touchmove={handleTouchMove}
        on:touchend={handleTouchEnd}
        role="application"
        aria-label="Zoomable image viewer - Use mouse wheel to zoom, drag to pan when zoomed"
      >
        {#if imageSrc}
          <img 
            bind:this={imageElement}
            src={imageSrc} 
            alt={altText} 
            class="max-h-full max-w-full object-contain transition-transform duration-200 select-none"
            style="transform: scale({zoomLevel}) translate({imagePosition.x / zoomLevel}px, {imagePosition.y / zoomLevel}px);"
            draggable="false"
          />
        {:else}
          <p id="image-modal-title" class="text-center text-lg font-semibold">Image not available</p>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Prevent text selection during drag operations */
  .select-none {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
</style>