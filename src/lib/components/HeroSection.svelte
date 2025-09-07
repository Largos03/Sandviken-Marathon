<!-- Reusable Hero Section Component with animated title and description -->
<script lang="ts">
	import { fly } from 'svelte/transition';

	// Component props
	export let title: string;
	export let description: string;
	export let lastUpdated: string = '';
</script>

<div class="relative bg-black py-10 text-white md:py-14" role="banner">
	<!-- Subtle grid pattern overlay -->
	<div class="absolute inset-0 opacity-20">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto px-6 text-center max-w-[1100px]">
		<h1
			class="relative mb-3 inline-block text-3xl font-bold md:text-4xl"
			in:fly={{ y: -20, duration: 800, delay: 300 }}
		>
			{title}
			<span
				class="shadow-[0_0_8px_rgba(255,255,255,0.6)] absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-full bg-red-500/80"
			></span>
		</h1>
		<p
			class="mx-auto mb-5 max-w-xl text-base font-light opacity-90 md:text-lg"
			in:fly={{ y: 20, duration: 800, delay: 400 }}
		>
			{description}
		</p>
		{#if lastUpdated}
			<div
				class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm"
				in:fly={{ y: 20, duration: 800, delay: 500 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-1.5 h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				{lastUpdated}
			</div>
		{/if}
	</div>
</div>
