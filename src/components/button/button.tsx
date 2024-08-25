'use client';

import type { MouseEventHandler } from 'react';
import { cn } from '@/utils/client';

type Props = {
  children: React.ReactNode;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  className,
  handleClick,
}: Readonly<Props>) {
  return (
    <button
      className={cn(
        'focus:outline-none focus:ring-4 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-lg',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
