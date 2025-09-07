/// <reference types="@sveltejs/kit" />

// Environment variables type definitions
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

// Private environment variables (server-side only)
declare module '$env/static/private' {
	export const RESEND_API_KEY: string;
}

export {};
