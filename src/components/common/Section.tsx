import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Container } from './Container';

type SectionBackground = 'white' | 'surface' | 'surface-alt' | 'dark' | 'transparent';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: SectionBackground;
  padding?: 'default' | 'md' | 'none';
  ariaLabel?: string;
  fullWidth?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  surface: 'bg-surface',
  'surface-alt': 'bg-surface-alt',
  dark: 'bg-hero-gradient',
  transparent: '',
};

const paddingStyles = {
  default: 'section-padding',
  md: 'section-padding-md',
  none: '',
};

function SectionComponent({
  children,
  id,
  className,
  containerClassName,
  background = 'white',
  padding = 'default',
  ariaLabel,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(backgroundStyles[background], paddingStyles[padding], className)}
      aria-label={ariaLabel}
    >
      {fullWidth ? children : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}

export const Section = memo(SectionComponent);
