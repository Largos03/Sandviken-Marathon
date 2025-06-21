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
export { default as TabHandler } from './components/TabHandler.svelte';
export { default as HeroSection } from './components/HeroSection.svelte';

// Export optimized components
export { default as IconButton } from './components/IconButton.svelte';
export { default as IconCard } from './components/IconCard.svelte';
export { default as CountdownTimer } from './components/CountdownTimer.svelte';
export { default as StatsCard } from './components/StatsCard.svelte';

// Export translation utilities
export { language, t, tStore, detectBrowserLanguage } from './stores/i18n';

// Export utility functions
export { cn } from './utils';
