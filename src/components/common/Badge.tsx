import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
  dot?: boolean;
}

const variantStyles = {
  default:
    'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] text-white/90 backdrop-blur-sm',
  dark: 'inline-flex items-center gap-2 rounded-full border border-primary/20 bg-navy/10 text-primary',
  light:
    'inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 text-primary',
};

function BadgeComponent({
  children,
  className,
  variant = 'default',
  dot = true,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'px-4 py-1.5 font-body text-xs font-medium tracking-tight',
        variantStyles[variant],
        className,
      )}
    >
      {dot && variant === 'default' && (
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-accent-green shadow-[0_0_8px_#34d399]"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}

export const Badge = memo(BadgeComponent);
