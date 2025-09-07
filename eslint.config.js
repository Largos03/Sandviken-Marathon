// ESLint configuration for the Sandviken Half-marathon project
// Purpose: Enforce code quality, consistency, and best practices across the codebase
// Why comprehensive: Combines rules for JS, TS, Svelte, and Prettier to catch various issues
// Intent: Maintain high code standards and prevent common mistakes
import prettier from 'eslint-config-prettier'; // Disables ESLint rules that conflict with Prettier
import js from '@eslint/js'; // Core JavaScript recommended rules
import { includeIgnoreFile } from '@eslint/compat'; // Gitignore-based file ignoring
import svelte from 'eslint-plugin-svelte'; // Svelte-specific linting rules
import globals from 'globals'; // Predefined global variables for different environments
import { fileURLToPath } from 'node:url'; // Node.js utility for file path handling
import ts from 'typescript-eslint'; // TypeScript ESLint rules and parser
import svelteConfig from './svelte.config.js'; // Svelte configuration for proper parsing
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url)); // Path to gitignore for ignoring files

export default ts.config(
	// Include gitignore patterns to avoid linting generated/ignored files
	includeIgnoreFile(gitignorePath),
	
	// Base recommended rules for JavaScript
	js.configs.recommended,
	
	// TypeScript recommended rules for type safety
	...ts.configs.recommended,
	
	// Svelte recommended rules for component best practices
	...svelte.configs.recommended,
	
	// Prettier config to avoid style conflicts
	prettier,
	
	// Additional Prettier compatibility for Svelte
	...svelte.configs['flat/prettier'],
	
	{
		// Global variables available in browser and Node.js environments
		// Why: Prevents false positives for globals like window, document, process
		languageOptions: {
			globals: {
				...globals.browser, // Browser globals (window, document, etc.)
				...globals.node // Node.js globals (process, __dirname, etc.)
			}
		}
	},
	
	{
		// Specific configuration for Svelte files
		// Why separate: Svelte files need special parsing and TypeScript integration
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'], // Don't lint config files
		
		languageOptions: {
			parserOptions: {
				projectService: true, // Enable TypeScript project service for better analysis
				extraFileExtensions: ['.svelte'], // Recognize .svelte files
				parser: ts.parser, // Use TypeScript parser for Svelte files
				svelteConfig // Pass Svelte config for proper preprocessing
			}
		}
	}
);
