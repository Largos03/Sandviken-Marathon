# Translation System Guide

This document explains how to use the translation system in the Sandviken Marathon website.

## Available Languages

The website supports the following languages:

- English (en) - default
- Swedish (sv)

## Using Translations in Components

There are several ways to use translations in your components:

### Method 1: Using the tStore

```svelte
<script>
	import { tStore } from '$lib/stores/i18n';
</script>

<h1>{$tStore('pageTitle')}</h1>
<p>{$tStore('pageDescription')}</p>
```

### Method 2: Using the t function

```svelte
<script>
	import { t } from '$lib/stores/i18n';
</script>

<h1>{t('pageTitle')}</h1>
<p>{t('pageDescription')}</p>
```

## Translation Files Organization

Translations are organized by feature in separate files in the `src/lib/stores` directory:

- `common.ts` - Common translations used across multiple pages
- `about.ts` - About page translations
- `contact.ts` - Contact page translations
- `course.ts` - Course page translations
- `home.ts` - Home page translations
- `privacy.ts` - Privacy policy page translations
- `register.ts` - Registration page translations
- `results.ts` - Results page translations
- `route.ts` - Course route specific translations
- `schedule.ts` - Race day schedule translations
- `tabs.ts` - Navigation section tabs translations
- `terms.ts` - Terms and conditions page translations

All these translations are combined and made available through the `i18n.ts` file.

## Adding New Translations

To add new translations:

1. Identify the appropriate feature file for your translation
2. Add the key and English text in the `en` section
3. Add the corresponding Swedish translation in the `sv` section

For example, in `src/lib/stores/about.ts`:

```ts
export const aboutTranslations = {
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

If you're adding translations for a new feature, create a new file with a similar structure.

## Language Switch

The language can be switched using the language switcher in the navbar. This saves the preference to localStorage, so it persists between visits.

## Best Practices

1. **Use semantic keys**: Use descriptive keys like `welcomeMessage` instead of just `message`
2. **Group by feature**: Keep related translations in their appropriate feature file
3. **Keep translations simple**: Avoid complex HTML in translations
4. **Test both languages**: Make sure to test both languages when making changes
5. **Keep feature files organized**: Use comments to group related translations within a file

## Handling Dynamic Content

For dynamic content, you can use template literals:

```svelte
<script>
	import { tStore } from '$lib/stores/i18n';

	let username = 'John';
</script>

<p>{$tStore('welcomeUser').replace('{username}', username)}</p>
```

And in the translations file:

```ts
export const commonTranslations = {
	en: {
		welcomeUser: 'Welcome, {username}!'
	},
	sv: {
		welcomeUser: 'Välkommen, {username}!'
	}
};
```
