<!-- Optimized Info Item Component -->
<script lang="ts">
	export let title: string;
	export let description: string;
	export let variant: 'default' | 'hover' = 'default';

	const containerClasses =
		variant === 'hover'
			? 'rounded-lg border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-sm'
			: '';
</script>

<div class="flex items-start {containerClasses}">
	<div
		class="mt-0.5 mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white"
	>
		<span class="h-2 w-2 rounded-full bg-red-200"></span>
	</div>
	<div>
		<h3 class="font-medium text-gray-900">{title}</h3>
		<p class="mt-1 text-gray-600">{description}</p>
		<slot />
	</div>
</div>
