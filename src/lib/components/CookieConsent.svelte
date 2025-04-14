<script lang="ts">
    import { fade } from 'svelte/transition';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faTimes } from '@fortawesome/free-solid-svg-icons';
    import { language, translations } from '$lib/stores/i18n.js';
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

    $: t = (key: string): string => {
        const trans = translations as Record<string, Record<string, string>>;
        if (!trans[$language] || !trans[$language][key]) {
            return key;
        }
        return trans[$language][key];
    };
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

<style>
    .cookie-notice {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
        max-width: 400px;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        border: 1px solid rgba(0,0,0,0.1);
        overflow: hidden;
        transition: opacity 0.2s ease;
    }

    .notice-content {
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .notice-content p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
        color: #4b5563;
    }

    .dismiss-button {
        background: none;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        color: #9ca3af;
        transition: color 0.2s ease;
        flex-shrink: 0;
    }

    .dismiss-button:hover {
        color: #4b5563;
    }

    @media (max-width: 640px) {
        .cookie-notice {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
        }
    }
</style> 