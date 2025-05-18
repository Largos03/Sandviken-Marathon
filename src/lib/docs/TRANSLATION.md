# Translation System Guide

This document explains how to use the translation system in the Sandviken Marathon website.

## Available Languages

The website supports the following languages:

- English (en) - default
- Swedish (sv)

## Using Translations in Components

There are several ways to use translations in your components:

### Method 1: Import from stores (recommended for complex components)

```svelte
<script>
	import { language, translations } from '$lib/stores/i18n.js';

	// This creates a reactive translation function
	$: t = (key) => translations[$language]?.[key] || key;
</script>

<h1>{t('pageTitle')}</h1><p>{t('pageDescription')}</p>
```

### Method 2: Using the T component (recommended for simple text)

```svelte
<script>
	import { T } from '$lib';
</script>

<h1><T key="pageTitle" /></h1><p><T key="pageDescription" /></p>
```

### Method 3: Using the context (useful in deeply nested components)

```svelte
<script>
	import { getContext } from 'svelte';

	// Get the translation function from context
	const { t } = getContext('translation');
</script>

<h1>{t('pageTitle')}</h1><p>{t('pageDescription')}</p>
```

## Adding New Translations

All translations are stored in `src/lib/stores/i18n.js`. To add new translations:

1. Add the key and English text in the `en` section
2. Add the corresponding Swedish translation in the `sv` section

For example:

```js
export const translations = {
	en: {
		// ... existing translations
		myNewKey: 'My English text'
	},
	sv: {
		// ... existing translations
		myNewKey: 'Min svenska text'
	}
};
```

## Language Switch

The language can be switched using the language switcher in the navbar. This saves the preference to localStorage, so it persists between visits.

## Best Practices

1. **Use semantic keys**: Use descriptive keys like `welcomeMessage` instead of just `message`
2. **Group by feature**: Keep related translations together in the i18n.js file
3. **Keep translations simple**: Avoid complex HTML in translations
4. **Test both languages**: Make sure to test both languages when making changes

## Handling Dynamic Content

For dynamic content, you can use template literals:

```svelte
<script>
	import { language, translations } from '$lib/stores/i18n.js';

	$: t = (key) => translations[$language]?.[key] || key;

	let username = 'John';
</script>

<p>{t('welcomeUser').replace('{username}', username)}</p>
```

And in the translations file:

```js
export const translations = {
	en: {
		welcomeUser: 'Welcome, {username}!'
	},
	sv: {
		welcomeUser: 'Välkommen, {username}!'
	}
};
```
