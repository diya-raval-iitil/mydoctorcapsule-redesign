import { memo } from 'react';
import { motion } from 'framer-motion';
import { hoverMotion, iconHoverMotion } from '@/animations';
import type { LucideIcon } from 'lucide-react';
import { IconBox } from '@/components/common/IconBox';
import { cn } from '@/utils/cn';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

function FeatureCardComponent({
  title,
  description,
  icon: Icon,
  color,
  className,
}: FeatureCardProps) {
  return (
    <motion.article
      className={cn(
        'group relative overflow-hidden rounded-[18px] border border-border bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]',
        className,
      )}
      whileHover={hoverMotion}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-primary/5 to-accent/5" />
      </div>
      <motion.div whileHover={iconHoverMotion}>
        <IconBox className={cn('mb-6', color)}>
        <Icon className="h-6 w-6" aria-hidden="true" />
        </IconBox>
      </motion.div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-text">{title}</h3>
      <p className="text-base leading-relaxed tracking-tight text-muted">{description}</p>
    </motion.article>
  );
}

export const FeatureCard = memo(FeatureCardComponent);
