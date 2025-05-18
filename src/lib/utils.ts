import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function for conditionally joining Tailwind CSS classes together.
 * It merges multiple class values into a single string after processing with clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
