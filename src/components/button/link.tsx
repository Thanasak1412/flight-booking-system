import { cn } from '@/utils/client'

type Props = {
  children: React.ReactNode;
  className?: string;
  linkTo: string;
};

export default function Link({ children, linkTo, className }: Readonly<Props>) {
  return (
    <a
      className={cn(
        'inline-block rounded-sm whitespace-nowrap',
        'focus:outline-none focus:ring-4 font-medium text-base px-5 py-2.5 text-center me-2 mb-2',
        className
      )}
      href={linkTo}
    >
      {children}
    </a>
  );
}
