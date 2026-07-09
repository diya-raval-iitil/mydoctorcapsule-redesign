import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  className?: string;
  gradient?: boolean;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: 'text-[36px] sm:text-[48px] lg:text-[64px]',
  h2: 'text-[28px] sm:text-[36px] lg:text-[48px]',
  h3: 'text-[22px] sm:text-[28px] lg:text-[32px]',
  h4: 'text-lg sm:text-xl',
};

function HeadingComponent({
  children,
  as: Component = 'h2',
  className,
  gradient = false,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'font-bold tracking-tight',
        levelStyles[Component],
        gradient && 'text-gradient',
        className,
      )}
    >
      {children}
    </Component>
  );
}

export const Heading = memo(HeadingComponent);
