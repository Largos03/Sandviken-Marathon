// place files you want to import through the `$lib` alias in this folder.

// Export components
export { default as Navbar } from './components/Navbar.svelte';
export { default as CookieConsent } from './components/CookieConsent.svelte';
export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Input } from './components/Input.svelte';
export { default as TextArea } from './components/TextArea.svelte';
export { default as ContactSection } from './components/ContactSection.svelte';
export { default as SidebarNav } from './components/SidebarNav.svelte';
export { default as TabsNav } from './components/TabsNav.svelte';
export { default as ImageModal } from './components/ImageModal.svelte';

// Export translation utilities
export { language, translations, t, tStore } from './stores/i18n.js';

// Export other utilities as needed
