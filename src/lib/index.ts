// place files you want to import through the `$lib` alias in this folder.

export { default as Navbar } from './components/Navbar.svelte';
export { default as T } from './components/T.svelte';

// Export translation utilities
export { language, translations, t } from './stores/i18n.js';
