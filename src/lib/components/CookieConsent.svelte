<script lang="ts">
    import { fade } from 'svelte/transition';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faTimes } from '@fortawesome/free-solid-svg-icons';
    import { tStore } from '$lib/stores/i18n.js';
    import { onMount } from 'svelte';
    import '$lib/styles/CookieConsent.css';

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
    <div class="cookie-notice" transition:fade>
        <div class="notice-content">
            <p>{t('cookieNoticeText')}</p>
            <button class="dismiss-button" on:click={dismissNotice}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    </div>
{/if} 