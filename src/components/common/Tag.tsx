import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface TagProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

function TagComponent({ children, className, icon }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text shadow-sm',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export const Tag = memo(TagComponent);
