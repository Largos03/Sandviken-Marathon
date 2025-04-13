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
    <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">{t('coursePageTitle')}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
        <div>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('courseDetailsTitle')}</h2>
            <p class="text-base md:text-lg mb-3 md:mb-4">
                {t('coursePageIntro')}
            </p>
            <p class="text-base md:text-lg mb-3 md:mb-4">
                {t('courseDescription')}
            </p>
            
            <h3 class="text-lg md:text-xl font-bold mt-4 md:mt-6 mb-2">{t('courseHighlights')}:</h3>
            <ul class="list-disc pl-6 mb-4 md:mb-6">
                <li class="mb-2">{t('startFinish')}</li>
                <li class="mb-2">{t('scenicWaterfront')}</li>
                <li class="mb-2">{t('historicNeighborhoods')}</li>
                <li class="mb-2">{t('forestViews')}</li>
            </ul>
            
            <h3 class="text-lg md:text-xl font-bold mt-4 md:mt-6 mb-2">{t('aidStations')}:</h3>
            <p class="text-base md:text-lg mb-3 md:mb-4">
                {t('aidStationDetails')}
            </p>
        </div>
        
        <div class="bg-gray-100 p-4 md:p-6 rounded-lg">
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('courseMap')}</h2>
            <div class="bg-gray-300 h-48 md:h-64 flex items-center justify-center mb-3 md:mb-4">
                <p class="text-gray-600">{t('courseMapPlaceholder')}</p>
            </div>
            <h3 class="text-lg md:text-xl font-bold mt-3 md:mt-4 mb-2">{t('elevationProfile')}</h3>
            <div class="bg-gray-300 h-24 md:h-32 flex items-center justify-center">
                <p class="text-gray-600">{t('elevationProfilePlaceholder')}</p>
            </div>
        </div>
    </div>
    
    <h2 class="text-xl md:text-2xl font-bold mt-6 md:mt-8 mb-3 md:mb-4">{t('raceDayInfo')}</h2>
    <p class="text-base md:text-lg mb-3 md:mb-4">
        {t('raceDayDetails')}
    </p>
</div>

<style>
    h1, h2, h3 {
        color: #333;
    }
    
    p, li {
        color: #555;
        line-height: 1.6;
    }
</style> 