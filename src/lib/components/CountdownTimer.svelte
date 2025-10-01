<!-- Optimized Countdown Timer Component -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faClock } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';

	export let targetDate: string; // ISO date string
	export let label: string;

	// Use translation store
	$: t = $tStore;

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let interval: ReturnType<typeof setInterval> | null = null;

	const targetTime = new Date(targetDate).getTime();

	function updateCountdown() {
		const now = new Date().getTime();
		const timeRemaining = targetTime - now;

		if (timeRemaining > 0) {
			days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
		} else {
			days = hours = minutes = seconds = 0;
			if (interval) clearInterval(interval);
		}
	}

	onMount(() => {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
		return () => {
			if (interval) clearInterval(interval);
		};
	});

	// Reactive time units with translations
	$: timeUnits = [
		{ value: days, label: t('days') },
		{ value: hours, label: t('hours') },
		{ value: minutes, label: t('minutes') },
		{ value: seconds, label: t('seconds') }
	];
</script>

<div class="mx-auto w-full max-w-lg">
	<div class="mx-auto mb-4 text-center">
		<div
			class="inline-block rounded-xl border border-white/10 bg-gradient-to-r from-red-600/80 to-red-500/80 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase shadow-lg"
		>
			<FontAwesomeIcon icon={faClock} class="mr-2" />
			{label}
		</div>
	</div>

	<div
		class="rounded-2xl border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur-md sm:p-4 md:p-4"
	>
		<div
			class="xs:grid-cols-2 xs:gap-3 grid grid-cols-4 gap-2 divide-gray-700/30 sm:grid-cols-4 md:divide-x"
		>
			{#each timeUnits as unit, index (unit.label)}
				<div class="px-2 py-3 md:px-4">
					<div class="flex flex-col items-center">
						<span
							class="text-3xl font-bold text-white/95 md:text-5xl {index === 3
								? 'animate-pulse'
								: ''}"
						>
							{unit.value.toString().padStart(2, '0')}
						</span>
						<span class="mt-1 text-xs tracking-wider text-white/70 uppercase">
							{unit.label}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
