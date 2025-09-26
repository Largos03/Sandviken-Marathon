<!-- Reusable Button component with multiple variants and sizes -->
<script lang="ts">
	import { cn } from '$lib/utils';

	// Component props
	export let variant: 'primary' | 'secondary' | 'light' | 'red' | 'outline' = 'primary';
	export let href: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let fullWidth: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';

	// Computed classes for variants and sizes
	const variantClasses = {
		primary: 'bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800',
		secondary: 'bg-transparent text-white border-white hover:bg-white hover:text-black',
		light: 'bg-white text-black border-white hover:bg-transparent hover:text-white',
		red: 'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700',
		outline: 'bg-transparent text-black border-black hover:bg-black hover:text-white'
	};

	const sizeClasses = {
		small: 'px-3 py-1.5 text-sm',
		medium: 'px-5 py-3',
		large: 'px-8 py-4 text-lg'
	};

	$: classes = cn(
		'inline-block font-semibold rounded-md border-2 transition-all duration-300',
		'transform hover:-translate-y-1 hover:shadow-md',
		variantClasses[variant],
		sizeClasses[size],
		fullWidth && 'w-full text-center',
		disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
		$$restProps.class
	);
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
