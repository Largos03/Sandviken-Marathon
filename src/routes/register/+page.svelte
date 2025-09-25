<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tStore } from '$lib/stores/i18n';
	import RegistrationTimer from '$lib/components/RegistrationTimer.svelte';

	export const data = {};

	$: t = $tStore;
</script>

<div class="min-h-screen bg-gray-50" in:fade>
	<!-- Main Content -->
	<main>
		<div class="mx-auto px-6 py-8 md:py-16 max-w-[1100px]">
			<div class="mx-auto max-w-2xl">
				<div class="mb-8 text-center">
					<h1 class="mb-4 text-3xl font-bold text-neutral-700 md:mb-8 md:text-4xl">{t('registerTitle')}</h1>
					<div class="rounded-lg bg-white p-6 shadow-md md:p-8">
						<RegistrationTimer />
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
