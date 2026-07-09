import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface IconBoxProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
};

function IconBoxComponent({ children, className, size = 'md' }: IconBoxProps) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-2xl',
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

export const IconBox = memo(IconBoxComponent);
