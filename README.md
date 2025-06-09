# Sandviken Marathon Website

A modern, responsive website for the Sandviken Marathon event built with SvelteKit.

## Features

- Multi-language support (English and Swedish)
- Responsive design for all devices
- Modular component architecture
- Accessible web design

## Project Structure

This project follows a component-based architecture using SvelteKit:

- `src/` - Source code
  - `routes/` - SvelteKit routes (pages)
  - `lib/` - Reusable libraries and components
    - `components/` - UI components
    - `stores/` - State management
    - `styles/` - CSS styles and utilities
    - `utils/` - Helper functions
    - `docs/` - Project documentation

## Component Library

We've built a comprehensive set of reusable components to ensure consistency:

- **Core UI Components**: Button, Card, Section, Hero, Navbar, etc.
- **Form Components**: Input, TextArea, etc.
- **Utility Components**: Translation component, Icon wrapper, etc.

See `src/lib/docs/COMPONENTS.md` for detailed component documentation.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sandviken-marathon.git
cd sandviken-marathon

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm run dev
```

## Development

### Language Support

The website supports English and Swedish. All text content is managed through a modular translation system:

```svelte
<script>
  import { tStore } from '$lib/stores/i18n';
</script>

<!-- Using the reactive translation store -->
<p>{$tStore('welcomeMessage')}</p>

<!-- Or with the t function -->
<script>
  import { t } from '$lib/stores/i18n';
</script>

<p>{t('welcomeMessage')}</p>
```

Translations are organized by feature in separate files in the `src/lib/stores` directory. See `src/lib/docs/TRANSLATION.md` for detailed documentation on the translation system.

### Styling

We use a combination of Tailwind CSS and custom CSS. Common utility classes are defined in `src/lib/styles/utilities.css`.

## Building for Production

```bash
npm run build
# or
pnpm run build
```

## Deployment

The site is deployed automatically when changes are pushed to the main branch.

## Documentation

- `docs/CODEBASE_STRUCTURE.md` - Overall codebase structure
- `docs/COMPONENTS.md` - Component documentation
- `docs/TRANSLATION.md` - Translation system guide
