// place files you want to import through the `$lib` alias in this folder.

// Export components
export { default as Navbar } from './components/Navbar.svelte';
export { default as CookieConsent } from './components/CookieConsent.svelte';
export { default as T } from './components/T.svelte';
export { default as Button } from './components/Button.svelte';
export { default as Section } from './components/Section.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Input } from './components/Input.svelte';
export { default as TextArea } from './components/TextArea.svelte';
export { default as Icon } from './components/Icon.svelte';

// Export translation utilities
export { language, translations, t, tStore } from './stores/i18n.js';

// Export viewport utilities
export { createViewportObserver, inView } from './utils/viewport';

// Export other utilities as needed
