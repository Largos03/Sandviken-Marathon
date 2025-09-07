<!-- Reusable Card component with optional link, title, and styling variants -->
<script lang="ts">
	// Component props
	export let href: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let elevated: boolean = false;
	export let interactive: boolean = false;
	export let padding: 'none' | 'small' | 'medium' | 'large' = 'medium';

	// Computed classes for padding
	$: paddingClass = {
		none: 'p-0',
		small: 'p-3',
		medium: 'p-5',
		large: 'p-8'
	}[padding];

	// Computed base classes for styling
	$: baseClasses = `
    bg-white rounded-lg overflow-hidden
    ${elevated ? 'shadow-md' : 'border border-gray-100'}
    ${interactive ? 'transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg' : ''}
    ${$$restProps.class || ''}
  `;
</script>

{#if href}
	<a {href} class={baseClasses} {...$$restProps}>
		<div class={paddingClass}>
			{#if title}
				<h3 class="mb-3 text-xl font-bold">{title}</h3>
			{/if}
			<slot />
		</div>
	</a>
{:else}
	<div class="{baseClasses} {paddingClass}" {...$$restProps}>
		{#if title}
			<h3 class="mb-3 text-xl font-bold">{title}</h3>
		{/if}
		<slot />
	</div>
{/if}
