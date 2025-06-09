<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { onMount } from 'svelte';

	let showCookieNotice = false;

	onMount(() => {
		// Check if user has seen the notice before
		const hasSeenNotice = localStorage.getItem('cookieNoticeSeen');
		if (!hasSeenNotice) {
			showCookieNotice = true;
		}
	});

	function dismissNotice() {
		showCookieNotice = false;
		localStorage.setItem('cookieNoticeSeen', 'true');
	}

	// Use the derived store for translations
	$: t = $tStore;
</script>

{#if showCookieNotice}
	<div
		class="fixed right-8 bottom-8 z-50 max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
		transition:fade={{ duration: 200 }}
		role="alert"
		aria-live="polite"
	>
		<div class="flex items-center gap-4 p-4">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="text-sm text-gray-600">{@html t('cookieNoticeText')}</p>
			<button
				class="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600"
				on:click={dismissNotice}
				aria-label="Dismiss cookie notice"
			>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</div>
	</div>
{/if}
