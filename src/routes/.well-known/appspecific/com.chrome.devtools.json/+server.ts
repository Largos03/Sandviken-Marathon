// Handler for Chrome DevTools request to /.well-known/appspecific/com.chrome.devtools.json
// Returns 204 No Content to suppress SvelteKit 404 errors for this path
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return new Response(null, { status: 204 });
};
