# Sandviken Marathon Codebase Structure

This document provides an overview of the codebase structure and design decisions.

## Directory Structure

- `/src`: Main source code
  - `/app.css`: Global CSS including Tailwind imports
  - `/app.html`: Base HTML template
  - `/lib`: Reusable libraries and components
    - `/components`: Reusable UI components
    - `/stores`: State management with Svelte stores
    - `/styles`: Shared styles and utilities
    - `/types`: TypeScript type definitions
    - `/utils`: Utility functions
    - `/docs`: Documentation files
  - `/routes`: SvelteKit routes (pages)

## Key Components

### Component Library

- Core UI components:

  - `Button.svelte`: Reusable button component
  - `Card.svelte`: Content card component
  - `Section.svelte`: Page section with animations
  - `Hero.svelte`: Hero section for page headers
  - `Navbar.svelte`: Main navigation component
  - `CookieConsent.svelte`: Cookie consent banner

- Form components:

  - `Input.svelte`: Form input with validation
  - `TextArea.svelte`: Form textarea with validation

- Utility components:
  - `T.svelte`: Translation component
  - `Icon.svelte`: Icon wrapper for FontAwesome

For detailed component documentation, see `docs/COMPONENTS.md`.

### Translation System

- `src/lib/stores/i18n.ts`: Main translation system controller that combines translations from feature files
- Feature-specific translation files in the `src/lib/stores` directory:
  - `common.ts`: Common translations used across multiple pages
  - `about.ts`, `contact.ts`, etc.: Feature-specific translations
- Translation access via:
  - `tStore`: Reactive store for use in templates
  - `t()`: Function for use in JavaScript
- Currently supports English (en) and Swedish (sv)

### Styling System

- Uses a combination of Tailwind CSS and custom CSS
- `src/lib/styles/utilities.css`: Shared utility classes
- Global variables defined in app.css
- Component-specific styles using Svelte's scoped styling

### Utilities

- `src/lib/utils/viewport.ts`: Utilities for viewport detection and animations

## Best Practices

### Component Usage

1. Use the component library for all UI elements
2. Prefer composition over inheritance
3. Keep components small and focused on a single responsibility
4. Document props and usage patterns

### Translations

1. Use the `tStore` for reactive translations: `{$tStore('example')}`
2. For non-reactive cases, use the t function: `t('example')`
3. Keep translations organized in feature-specific files within the `src/lib/stores` directory

### Styling

1. Use utilities.css for common patterns
2. Leverage Tailwind classes when possible
3. Keep component-specific styles within the component

### Component Structure

1. Each component should have a clear single responsibility
2. Reuse components when possible
3. Follow the TypeScript typing conventions

## Recent Improvements

1. **Component Library**:

   - Created reusable UI components
   - Standardized form inputs
   - Added animation and viewport detection utilities

2. **Modular Translation System**:

   - Organized translations by feature into separate files
   - Improved maintenance by grouping related translations
   - Maintained type safety with centralized types
   - Simplified adding new translations by feature

3. **Reduced CSS Duplication**:

   - Extracted common styles to utilities.css
   - Standardized animation patterns
   - Created reusable button and layout classes

4. **Type Safety**:
   - Added proper TypeScript typing to translation functions
   - Fixed type declarations in various components
   - Added utility functions with TypeScript support

## Future Improvements

1. Implement testing for components
2. Further modularize page templates
3. Add state management for more complex features
4. Optimize load times by lazy-loading translations
