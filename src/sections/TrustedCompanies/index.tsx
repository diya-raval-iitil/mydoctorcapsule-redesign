import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  Star,
  TrendingUp,
  Baby,
  FlaskConical,
  Smile,
  Eye,
  Activity,
  HeartPulse,
  Users,
  Shield,
} from 'lucide-react';
import { Section } from '@/components/common/Section';
import {
  StaggerContainer,
  StaggerItem,
  FadeUp,
} from '@/components/common/MotionWrappers';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { STATS, SPECIALTIES } from '@/constants/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { zoomIn } from '@/animations';
import { cn } from '@/utils/cn';

const statIcons = {
  building: Building2,
  calendar: Calendar,
  star: Star,
  trending: TrendingUp,
} as const;

const specialtyIcons = {
  baby: Baby,
  flask: FlaskConical,
  smile: Smile,
  eye: Eye,
  activity: Activity,
  heart: HeartPulse,
  users: Users,
  shield: Shield,
} as const;

function TrustedCompaniesSection() {
  const prefersReducedMotion = useReducedMotion();
  const marqueeItems = [...SPECIALTIES, ...SPECIALTIES];

  return (
    <>
      <Section background="white" padding="md" ariaLabel="Statistics">
        <StaggerContainer className="grid grid-cols-2 gap-x-6 gap-y-12 text-center lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <StaggerItem
                key={stat.label}
                className="flex flex-col items-center"
              >
                <motion.div
                  variants={zoomIn}
                  className="bg-surface text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
                <p className="font-display text-primary text-3xl font-bold tracking-tight md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={'decimals' in stat ? stat.decimals : 0}
                  />
                  {stat.suffix}
                </p>
                <p className="text-muted mt-2 text-sm font-medium">
                  {stat.label}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <FadeUp
        className="border-primary/10 bg-surface border-b py-16"
        aria-label="Medical specialties"
      >
        <p className="text-muted mb-10 text-center text-xs font-bold tracking-[0.15em] uppercase">
          Serving 40+ Medical Specialties
        </p>
        <div className="mask-marquee relative h-[46px] w-full max-w-full overflow-hidden">
          <div
            className={cn(
              'marquee-track flex min-w-max gap-6 pr-6 whitespace-nowrap',
              !prefersReducedMotion && 'marquee-animate',
            )}
          >
            {marqueeItems.map((spec, index) => {
              const SpecIcon = specialtyIcons[spec.icon];
              return (
                <div
                  key={`${spec.name}-${index}`}
                  className="border-border flex shrink-0 items-center gap-2.5 rounded-full border bg-white px-6 py-3 shadow-sm select-none"
                >
                  <SpecIcon
                    className="text-primary h-4 w-4"
                    aria-hidden="true"
                  />
                  <span className="text-text-body text-sm font-medium">
                    {spec.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </>
  );
}

export default memo(TrustedCompaniesSection);
