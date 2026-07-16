import { memo } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/common/Section';
import {
  HighlightHeading,
  SectionLabel,
  BodyText,
} from '@/components/common/Typography';
import {
  SectionReveal,
  SectionBadge,
  SectionHeading,
  SectionBody,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { FEATURES } from '@/constants/features';
import { cn } from '@/utils/cn';
import { cardHoverMotion, iconHoverMotion } from '@/animations';

function FeaturesSection() {
  return (
    <Section id="features" background="surface" padding="default">
      <SectionReveal className="mb-16 max-w-4xl text-left">
        <SectionBadge className="mb-4">
          <SectionLabel className="mb-0">Platform Features</SectionLabel>
        </SectionBadge>
        <SectionHeading>
          <HighlightHeading highlight="to grow." className="mb-0">
            Everything your practice needs
          </HighlightHeading>
        </SectionHeading>
        <SectionBody className="mt-5 max-w-2xl">
          <BodyText>
            From your first Google impression to a loyal patient relationship -
            MyDoctorCapsule covers every touchpoint of the modern patient
            journey.
          </BodyText>
        </SectionBody>
      </SectionReveal>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          const isFeatured = feature.featured;

          return (
            <StaggerItem key={feature.id}>
              <motion.article
                className={cn(
                  'hover:border-primary/20 relative flex h-full w-full flex-col items-start overflow-hidden p-8 hover:shadow-[var(--shadow-card-hover)]',
                  'card-surface',
                  isFeatured && 'bg-white',
                  feature.glowClass,
                )}
                whileHover={cardHoverMotion}
              >
                <motion.div
                  className={cn(
                    'relative mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl',
                    feature.accentBgClass,
                    feature.accentClass,
                  )}
                  whileHover={iconHoverMotion}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </motion.div>
                <span
                  className={cn(
                    'type-label relative mb-2.5 !text-[10px]',
                    feature.accentClass,
                  )}
                >
                  {feature.tag}
                </span>
                <h3 className="font-display text-text mb-3 text-lg font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="font-body text-text-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}

export default memo(FeaturesSection);
