<script lang="ts">
  import { language, translations } from '$lib/stores/i18n.js';
  
  // Define types for better TypeScript support
  type Language = 'en' | 'sv';
  type TranslationKey = string;
  type TranslationRecord = Record<string, string>;
  
  export let key: TranslationKey;
  export let fallback: string = key; // Use the key as fallback by default
  
  // Get translation based on current language
  $: text = getTranslation(key, $language as Language);
  
  // Helper function to safely get translations
  function getTranslation(key: TranslationKey, lang: Language): string {
    // Check if the language exists in translations
    const currentTranslations = translations[lang] as TranslationRecord;
    if (currentTranslations && currentTranslations[key]) {
      return currentTranslations[key];
    }
    
    // Check if English translation exists as a fallback
    if (lang !== 'en') {
      const englishTranslations = translations['en'] as TranslationRecord;
      if (englishTranslations && englishTranslations[key]) {
        return englishTranslations[key];
      }
    }
    
    // Return the fallback value if no translation found
    return fallback;
  }
</script>

{text} 