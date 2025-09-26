// SvelteKit configuration for the Sandviken Half-marathon website
// Purpose: Configure the SvelteKit framework for optimal development and deployment
// Why SvelteKit: Provides SSR, routing, and build optimization out of the box
// Intent: Ensure the app works across different hosting environments seamlessly
import adapter from '@sveltejs/adapter-auto'; // Auto-selects the best adapter for the deployment platform
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // Preprocesses Svelte files with TypeScript support

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessor setup - enables TypeScript compilation and other transformations
	// Why vitePreprocess: Integrates with Vite's fast processing pipeline
	preprocess: vitePreprocess(),

	kit: {
		// Build adapter configuration - determines how the app is deployed
		// Why adapter-auto: Automatically chooses the right adapter for the hosting platform
		// Intent: Simplifies deployment without manual adapter switching
		adapter: adapter(),

		// Path aliases for cleaner imports
		// Why $lib: Standard SvelteKit alias for the lib directory
		// Intent: Reduces relative path complexity in imports
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
