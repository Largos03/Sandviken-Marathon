// SvelteKit application type definitions
// See https://svelte.dev/docs/kit/types#app.d.ts for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Environment variable type definitions
interface ImportMetaEnv {
	readonly VITE_PUBLIC_API_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

export {};
