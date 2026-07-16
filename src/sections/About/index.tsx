import { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';
import { Section } from '@/components/common/Section';
import {
  HighlightHeading,
  SectionLabel,
  BodyText,
} from '@/components/common/Typography';
import {
  FadeLeft,
  FadeRight,
  SectionReveal,
  SectionBadge,
  SectionHeading,
  SectionBody,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { ABOUT_STATS } from '@/constants/site';
import { continuousMotion, cardHoverMotion } from '@/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="about" background="white" padding="default">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeLeft>
          <SectionReveal>
            <SectionBadge>
              <SectionLabel className="mb-0">Who We Are</SectionLabel>
            </SectionBadge>
            <SectionHeading>
              <HighlightHeading highlight="care deeply." className="mb-0">
                Built by healthcare technologists who
              </HighlightHeading>
            </SectionHeading>
            <SectionBody className="mb-8 mt-6 max-w-[540px] space-y-5">
              <BodyText>
                MyDoctorCapsule was born in 2022 from a simple frustration -
                brilliant doctors with life-changing expertise were invisible
                online while patients struggled to find them. Our founding team
                of ex-healthcare executives, digital marketers, and engineers
                decided to fix that.
              </BodyText>
              <BodyText>
                Today we operate in 18 cities, serve 2,400+ clinicians, and
                have helped facilitate over 180,000 patient appointments.
                We&apos;re not just a SaaS company - we&apos;re a growth
                partner embedded in India&apos;s healthcare ecosystem.
              </BodyText>
            </SectionBody>
          </SectionReveal>

          <StaggerContainer className="grid w-full max-w-[540px] grid-cols-1 gap-3 sm:grid-cols-3">
            {ABOUT_STATS.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="card-kpi hover:border-primary/20 px-5 py-3.5 hover:shadow-[var(--shadow-card-hover)]"
                  whileHover={cardHoverMotion}
                >
                  <p className="type-label !text-text-body/80 mb-1 !text-[10px]">
                    {card.title}
                  </p>
                  <p className="font-display text-text text-sm font-extrabold">
                    {card.value}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeLeft>

        <FadeRight className="flex justify-center lg:justify-end">
          <div className="relative aspect-[570/428] w-full max-w-[570px]">
            <div className="h-full w-full overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&fit=crop"
                alt="Healthcare professional in clinical setting"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                width={570}
                height={428}
              />
            </div>

            <motion.div
              className="border-border-light absolute -bottom-5 -left-2 w-[min(262px,76vw)] rounded-[18px] border bg-white p-6 shadow-[var(--shadow-card-hover)] sm:-left-8"
              animate={prefersReducedMotion ? undefined : { y: [0, -3, 0] }}
              transition={
                prefersReducedMotion ? undefined : continuousMotion.floatSoft
              }
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="bg-surface flex h-7 w-7 items-center justify-center rounded-lg">
                  <TrendingUp
                    className="text-accent-green h-4 w-4"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-text-body text-[11px] font-bold">
                  Average monthly growth
                </span>
              </div>
              <p className="font-display text-text text-2xl font-extrabold tracking-tight">
                +67%
              </p>
              <p className="text-text-body text-[10px] font-medium">
                new patients per practice
              </p>
            </motion.div>

            <motion.div
              className="bg-primary absolute top-5 -right-4 w-[138px] rounded-[18px] p-5 text-white shadow-[var(--shadow-primary)] sm:-right-6"
              animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { ...continuousMotion.floatSoft, delay: 0.5 }
              }
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <Award className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <p className="text-[11px] leading-tight font-bold">
                Best HealthTech
              </p>
              <p className="text-[9px] font-medium text-white/70">
                Startup 2024
              </p>
            </motion.div>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}

export default memo(AboutSection);
