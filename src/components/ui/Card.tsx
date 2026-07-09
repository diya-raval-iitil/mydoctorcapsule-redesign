import { memo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { hoverMotion } from '@/animations';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-8',
};

function CardComponent({
  children,
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  const Component = hover ? motion.div : 'div';

  const baseClasses = cn(
    'rounded-[18px] border border-border bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]',
    paddingStyles[padding],
    className,
  );

  if (hover) {
    return (
      <Component
        className={baseClasses}
        whileHover={hoverMotion}
      >
        {children}
      </Component>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

export const Card = memo(CardComponent);
