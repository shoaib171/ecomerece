import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategory(category: unknown): string {
  // Ensure the category is a string; otherwise, return an empty string
  if (typeof category !== 'string') {
    return '';
  }

  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Example usage
console.log(formatCategory("some-category")); // "Some Category"
console.log(formatCategory(null)); // ""
console.log(formatCategory(undefined)); // ""
console.log(formatCategory("another-example")); // "Another Example"
console.log(formatCategory(12345)); // "" (non-string input is safely handled)
