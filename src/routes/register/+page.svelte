<script lang="ts">
    import { fade } from 'svelte/transition';
    import { language, tStore } from '$lib/stores/i18n.js';
    
    // Accept data from page.server.js
    export const data = {};
    
    // Use the derived translation store
    $: t = $tStore;
</script>

<div class="register-page" in:fade>
    <div class="container mx-auto px-4 py-8 md:py-16">
        <div class="max-w-2xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">{t('registerTitle')}</h1>
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <p class="text-xl md:text-2xl font-medium text-gray-700 mb-4">{t('comingSoon')}</p>
                <p class="text-base md:text-lg text-gray-600">{t('registrationInfo')}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .register-page {
        background-color: #f5f5f5;
        min-height: 100vh;
    }

    h1 {
        color: #333;
    }
</style>