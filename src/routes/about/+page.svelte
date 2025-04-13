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
    <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">{t('aboutTitle')}</h1>
    <p class="text-base md:text-lg mb-4 md:mb-6">
        {t('aboutIntro')}
    </p>
    <p class="text-base md:text-lg mb-4 md:mb-6">
        {t('aboutMission')}
    </p>
    <h2 class="text-xl md:text-2xl font-bold mt-6 md:mt-8 mb-3 md:mb-4">{t('eventDetailsTitle')}</h2>
    <p class="text-base md:text-lg mb-4 md:mb-6">
        {t('eventDetailsDesc')}
    </p>
</div>

<style>
    h1, h2 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }
</style> 