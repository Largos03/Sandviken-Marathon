<script lang="ts">
	import { onMount } from 'svelte';

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
	class="{bgClass} {paddingClass} relative translate-y-5 opacity-0 transition-all duration-800 ease-in-out"
	class:opacity-100={visible}
	class:translate-y-0={visible}
	bind:this={sectionElement}
	{...$$restProps}
>
	<div class="mx-auto max-w-6xl px-6">
		{#if title}
			<div class="mx-auto mb-12 max-w-[700px] text-center">
				<h2 class="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
				{#if withDivider}
					<div class="mx-auto mb-4 h-[3px] w-[50px] bg-current opacity-60"></div>
				{/if}
				{#if subtitle}
					<p class="mx-auto max-w-2xl text-lg opacity-80">{subtitle}</p>
				{/if}
			</div>
		{/if}

		<slot />
	</div>
</section>
