// Utility functions for the Sandviken Half-marathon website
// Why separate file: Centralized utilities for reuse across components
import { type ClassValue, clsx } from 'clsx'; // Handles conditional class objects/arrays
import { twMerge } from 'tailwind-merge'; // Merges conflicting Tailwind classes

/**
 * Utility function for conditionally joining Tailwind CSS classes together.
 * Purpose: Simplify dynamic class application in Svelte components.
 * Why needed: Tailwind classes can conflict; this ensures proper merging and deduplication.
 * Intent: Improve developer experience by handling complex class logic automatically.
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns A single string of merged, deduplicated Tailwind classes
 * 
 * @example
 * // Basic usage
 * cn('bg-red-500', 'text-white') // 'bg-red-500 text-white'
 * 
 * // Conditional classes
 * cn('bg-red-500', isActive && 'text-white') // 'bg-red-500 text-white' or 'bg-red-500'
 * 
 * // Object syntax
 * cn({ 'bg-red-500': isError, 'bg-blue-500': !isError }) // 'bg-red-500' or 'bg-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
