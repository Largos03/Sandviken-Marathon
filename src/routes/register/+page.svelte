<script>
    import { language, translations } from '$lib/stores/i18n.js';
    
    // Accept data from page.server.js
    export let data;
    
    // Direct translation function
    $: t = (key) => {
      if (!translations[$language] || !translations[$language][key]) {
        return key;
      }
      return translations[$language][key];
    };
</script>

<div class="container mx-auto px-4 py-8 md:py-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">{t('registerTitle')}</h1>
    <p class="text-base md:text-lg mb-4 md:mb-6">{t('registerIntro')}</p>
</div>

<style>
    h1 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }
</style>