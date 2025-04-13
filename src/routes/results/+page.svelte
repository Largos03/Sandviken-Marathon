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
    <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">{t('resultsTitle')}</h1>
    
    <div class="mb-4 md:mb-8">
        <label for="year" class="block mb-2 text-base md:text-lg font-medium">{t('selectYear')}:</label>
        <select id="year" class="w-full md:w-auto px-3 md:px-4 py-2 border rounded-md">
            <option value="2024">{t('resultsYear')}</option>
        </select>
    </div>
    
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border text-sm md:text-base">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">{t('position')}</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">{t('name')}</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">{t('country')}</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">{t('category')}</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">{t('time')}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-3 md:px-6 py-2 md:py-4">1</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Emil G</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('sweden')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('menCategory')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:43:12</td>
                </tr>
                <tr class="border-t bg-gray-50">
                    <td class="px-3 md:px-6 py-2 md:py-4">2</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Olle Z</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('sweden')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('womenCategory')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:45:37</td>
                </tr>
                <tr class="border-t">
                    <td class="px-3 md:px-6 py-2 md:py-4">3</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Anton B</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('sweden')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">{t('menCategoryYoung')}</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:48:21</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="mt-6 md:mt-8">
        <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('previousYears')}</h2>
        <p class="text-base md:text-lg mb-3 md:mb-4">
            {t('resultsDownload')}
        </p>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
            <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">{t('resultsYear')} {t('resultsPdf')}</a>
        </div>
    </div>
</div>

<style>
    h1, h2 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }
    
    @media (max-width: 640px) {
        table {
            font-size: 0.875rem;
        }
    }
</style> 