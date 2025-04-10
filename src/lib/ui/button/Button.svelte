<script>
    /**
     * @type {string} [href] - Optional URL for the button to navigate to
     * @type {string} [variant='default'] - Button variant (default, ghost, outline)
     * @type {string} [size='default'] - Button size (default, sm, lg, icon)
     * @type {string} [className] - Additional classes
     */
    export let href = undefined;
    export let variant = 'default';
    export let size = 'default';
    export let className = '';

    // Compute classes based on variant and size
    const variantClasses = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
    };

    const sizeClasses = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
    };

    const buttonClass = `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

{#if href}
    <a {href} class={buttonClass} on:click>
        <slot />
    </a>
{:else}
    <button class={buttonClass} on:click>
        <slot />
    </button>
{/if} 