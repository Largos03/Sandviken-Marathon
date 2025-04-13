<script>
  import { language, translations } from '$lib/stores/i18n.js';
  
  export let key;
  export let fallback = key; // Use the key as fallback by default
  
  // Get translation based on current language
  $: text = getTranslation(key, $language);
  
  // Helper function to safely get translations
  function getTranslation(key, lang) {
    // Check if the language exists in translations
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    
    // Check if English translation exists as a fallback
    if (lang !== 'en' && translations['en'] && translations['en'][key]) {
      return translations['en'][key];
    }
    
    // Return the fallback value if no translation found
    return fallback;
  }
</script>

{text} 