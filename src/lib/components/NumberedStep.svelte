<!-- Optimized Numbered Step Component -->
<script lang="ts">
	export let number: number;
	export let title: string;
	export let description: string | undefined = undefined;
	export let variant: 'default' | 'black' | 'red' = 'default';

	const variantClasses = {
		default: 'bg-gray-800 text-white',
		black: 'bg-black text-white',
		red: 'bg-red-500 text-white'
	}[variant];
</script>

<div class="flex items-start">
	<div
		class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full {variantClasses} text-sm font-bold"
	>
		{number}
	</div>
	<div>
		<h4 class="font-semibold text-gray-800">{title}</h4>
		{#if description}
			<p class="text-sm text-gray-600">{description}</p>
		{/if}
		<slot />
	</div>
</div>
