<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import '$lib/styles/Icon.css';

  // Props
  export let icon: IconDefinition;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2x' | '3x' = 'md';
  export let color: string | undefined = undefined;
  export let spin: boolean = false;
  export let pulse: boolean = false;
  export let fixedWidth: boolean = false;

  // Convert size to FA format
  $: faSize = size === 'md' ? undefined : size;
  
  // Style for custom color
  $: style = color ? `color: ${color};` : undefined;
</script>

<span 
  class={`icon-wrapper ${$$props.class || ''}`}
  style={style}
>
  <FontAwesomeIcon 
    {icon} 
    size={faSize} 
    spin={spin} 
    pulse={pulse} 
    fw={fixedWidth} 
    {...$$restProps} 
  />
</span> 