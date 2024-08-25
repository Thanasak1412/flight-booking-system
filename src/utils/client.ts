import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

// Tailwind CSS Class management with merge and clsx
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
