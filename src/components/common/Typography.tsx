import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
}

export const SectionLabel = memo(function SectionLabel({
  children,
  className,
}: Omit<TypographyProps, 'as'>) {
  return <span className={cn('type-label block', className)}>{children}</span>;
});

export const SectionHeading = memo(function SectionHeading({
  children,
  className,
  as: Component = 'h2',
}: TypographyProps) {
  return (
    <Component className={cn('type-section-title', className)}>{children}</Component>
  );
});

export const BodyText = memo(function BodyText({
  children,
  className,
  as: Component = 'p',
}: TypographyProps) {
  return <Component className={cn('type-body', className)}>{children}</Component>;
});

export const Caption = memo(function Caption({
  children,
  className,
  as: Component = 'p',
}: TypographyProps) {
  return <Component className={cn('type-caption', className)}>{children}</Component>;
});

interface HighlightHeadingProps {
  children: ReactNode;
  highlight: ReactNode;
  className?: string;
}

export const HighlightHeading = memo(function HighlightHeading({
  children,
  highlight,
  className,
}: HighlightHeadingProps) {
  return (
    <h2 className={cn('type-section-title', className)}>
      {children}{' '}
      <span className="text-primary">{highlight}</span>
    </h2>
  );
});
