import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Badge } from './Badge';
import { Heading } from './Heading';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}

function SectionTitleComponent({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {badge && (
        <Badge variant={dark ? 'default' : 'light'} className="mb-6">
          {badge}
        </Badge>
      )}
      <Heading
        as="h2"
        className={cn(
          dark ? 'text-white' : 'text-text',
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed tracking-tight',
            dark ? 'text-white/70' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export const SectionTitle = memo(SectionTitleComponent);
