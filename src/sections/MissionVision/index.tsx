import { memo } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb } from 'lucide-react';
import { cardHoverMotion } from '@/animations';
import { Section } from '@/components/common/Section';
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrappers';
import { cn } from '@/utils/cn';

const CARDS = [
  {
    id: 'mission',
    title: 'Mission',
    description:
      'To make quality healthcare more accessible through comprehensive essential services.',
    icon: Target,
    featured: false,
  },
  {
    id: 'vision',
    title: 'Vision',
    description:
      'Creating a digitally connected healthcare ecosystem where every service is accessible, trusted, and affordable.',
    icon: Eye,
    featured: true,
  },
  {
    id: 'approach',
    title: 'Approach',
    description:
      'We bring expert-led healthcare services together with a seamless digital experience to help you conveniently access doctor consultations, medicines, and lab tests.',
    icon: Lightbulb,
    featured: false,
  },
] as const;

function MissionVisionSection() {
  return (
    <Section id="solutions" background="white" padding="md">
      <StaggerContainer className="grid items-stretch gap-6 md:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <StaggerItem key={card.id} className="h-full">
              <motion.article
                className={cn(
                  'flex h-full flex-col overflow-hidden p-10',
                  card.featured
                    ? 'rounded-[18px] border border-border-light bg-gradient-to-br from-navy to-navy-light text-white shadow-[var(--shadow-card)]'
                    : 'card-surface hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]',
                )}
                whileHover={cardHoverMotion}
              >
                <div
                  className={cn(
                    'mb-8 flex h-12 w-12 items-center justify-center rounded-xl',
                    card.featured ? 'bg-white/5' : 'bg-surface',
                  )}
                >
                  <Icon
                    className={cn('h-6 w-6', card.featured ? 'text-accent' : 'text-primary')}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={cn(
                    'mb-4 font-display text-2xl font-bold tracking-tight',
                    card.featured ? 'text-white' : 'text-text',
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    'text-base leading-relaxed',
                    card.featured ? 'text-white/70' : 'text-text-body',
                  )}
                >
                  {card.description}
                </p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}

export default memo(MissionVisionSection);
