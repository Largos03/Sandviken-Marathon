// Vite configuration for the Sandviken Half-marathon website
// Purpose: Define build tool settings for development and production
// Why Vite: Fast development server and optimized production builds
// Why SvelteKit: Full-stack framework with SSR, routing, and deployment flexibility
// Why Tailwind: Utility-first CSS for rapid UI development and consistency
import tailwindcss from '@tailwindcss/vite'; // Vite plugin for Tailwind CSS processing
import { sveltekit } from '@sveltejs/kit/vite'; // SvelteKit Vite plugin for framework integration
import { defineConfig } from 'vite'; // Type-safe configuration helper

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()] // Enable SvelteKit and Tailwind processing
});
