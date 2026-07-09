import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
  id?: string;
}

function ContainerComponent({
  children,
  className,
  as: Component = 'div',
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn('mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)]', className)}
    >
      {children}
    </Component>
  );
}

export const Container = memo(ContainerComponent);
