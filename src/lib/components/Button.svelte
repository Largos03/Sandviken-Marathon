<script lang="ts">
  // Props
  export let variant: 'primary' | 'secondary' | 'light' = 'primary';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  
  // Computed classes
  $: variantClasses = {
    primary: 'bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800',
    secondary: 'bg-transparent text-white border-white hover:bg-white hover:text-black',
    light: 'bg-white text-black border-white hover:bg-transparent hover:text-white',
  }[variant];
  
  $: sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-3',
    large: 'px-8 py-4 text-lg',
  }[size];
  
  $: classes = `
    inline-block font-semibold rounded-md border-2 transition-all duration-300
    transform hover:-translate-y-1 hover:shadow-md
    ${variantClasses} ${sizeClasses} ${fullWidth ? 'w-full text-center' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
    ${$$restProps.class || ''}
  `;
</script>

{#if href !== undefined}
  <a {href} class={classes} class:w-full={fullWidth} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button {type} {disabled} class={classes} class:w-full={fullWidth} on:click {...$$restProps}>
    <slot />
  </button>
{/if} 