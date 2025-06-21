<!-- Optimized Info Card Component -->
<script lang="ts">
	export let title: string;
	export let description: string;
	export let number: number | undefined = undefined;
</script>

<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:border-l-3 hover:border-red-400/30 hover:shadow-md">
	<div class="flex items-center border-b border-gray-100 p-4">
		{#if number !== undefined}
			<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
				{number}
			</div>
		{/if}
		<h3 class="font-semibold">{title}</h3>
	</div>
	<div class="p-4">
		<p class="text-gray-600">{description}</p>
		<slot />
	</div>
</div>
