import { memo } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { hoverMotion } from '@/animations';
import { cn } from '@/utils/cn';

interface ReviewCardProps {
  quote: string;
  name: string;
  role: string;
  hospital: string;
  initials: string;
  avatarColor: string;
  rating: number;
  className?: string;
}

function ReviewCardComponent({
  quote,
  name,
  role,
  hospital,
  initials,
  avatarColor,
  rating,
  className,
}: ReviewCardProps) {
  return (
    <motion.article
      className={cn(
        'flex h-full flex-col rounded-[18px] border border-border bg-white p-8 shadow-[var(--shadow-card)] hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]',
        className,
      )}
      whileHover={hoverMotion}
    >
      <div className="mb-6 flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mb-8 flex-1 font-body text-base leading-relaxed text-text-body italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: avatarColor }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-display text-sm font-bold text-text">{name}</p>
          <p className="text-sm text-muted">
            {role} + {hospital}
          </p>
        </div>
      </footer>
    </motion.article>
  );
}

export const ReviewCard = memo(ReviewCardComponent);
