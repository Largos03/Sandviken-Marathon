<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tStore } from '$lib/stores/i18n';

	// Accept data from page.server.js
	export const data = {};

	// Use the derived translation store
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
						<p class="mb-4 text-xl font-medium text-gray-700 md:text-2xl">{t('comingSoon')}</p>
						<p class="text-base text-gray-600 md:text-lg">{t('registrationInfo')}</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
