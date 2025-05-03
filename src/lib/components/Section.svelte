<script lang="ts">
  import { onMount } from 'svelte';
  import '$lib/styles/Section.css';
  
  // Props
  export let id: string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let subtitle: string | undefined = undefined;
  export let background: 'light' | 'dark' | 'primary' = 'light';
  export let padding: 'normal' | 'small' | 'large' = 'normal';
  export let withDivider: boolean = true;
  
  // Animation
  let visible = false;
  let sectionElement: HTMLElement;
  
  // Background colors
  $: bgClass = {
    light: 'bg-gray-50 text-black',
    dark: 'bg-black text-white',
    primary: 'bg-black text-white'
  }[background];
  
  // Padding sizes
  $: paddingClass = {
    small: 'py-8',
    normal: 'py-16',
    large: 'py-24'
  }[padding];
  
  onMount(() => {
    // Setup intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      }
    );
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  });
</script>

<section
  {id}
  class="{bgClass} {paddingClass} section-fade relative"
  class:visible
  bind:this={sectionElement}
  {...$$restProps}
>
  <div class="container mx-auto px-4 max-w-6xl">
    {#if title}
      <div class="section-header mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        {#if withDivider}
          <div class="section-divider"></div>
        {/if}
        {#if subtitle}
          <p class="text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>
        {/if}
      </div>
    {/if}
    
    <slot />
  </div>
</section> 