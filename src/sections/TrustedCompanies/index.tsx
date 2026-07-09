import { memo, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
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
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { STATS, SPECIALTIES } from '@/constants/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  continuousMotion,
  defaultViewport,
  zoomIn,
} from '@/animations';

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

function AnimatedCounter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, defaultViewport);
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      setCount(easeProgress * value);

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString()}
    </span>
  );
}

function TrustedCompaniesSection() {
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();
  const marqueeItems = [...SPECIALTIES, ...SPECIALTIES];

  useEffect(() => {
    if (prefersReducedMotion) return;

    controls.start({
      x: ['0%', '-50%'],
      transition: continuousMotion.marquee,
    });
  }, [controls, prefersReducedMotion]);

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
        className="border-primary/10 bg-surface overflow-hidden border-b py-16"
        aria-label="Medical specialties"
      >
        <p className="text-muted mb-10 text-center text-xs font-bold tracking-[0.15em] uppercase">
          Serving 40+ Medical Specialties
        </p>
        <div className="mask-marquee relative h-[46px] w-full max-w-full overflow-hidden [contain:layout_paint]">
          <motion.div
            className="marquee-track absolute top-0 left-0 flex min-w-max gap-6 pr-6 whitespace-nowrap"
            animate={controls}
            style={{ x: prefersReducedMotion ? 0 : undefined }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => {
              if (!prefersReducedMotion) {
                controls.start({
                  x: ['0%', '-50%'],
                  transition: continuousMotion.marquee,
                });
              }
            }}
          >
            {marqueeItems.map((spec, index) => {
              const SpecIcon = specialtyIcons[spec.icon];
              return (
                <div
                  key={`${spec.name}-${index}`}
                  className="border-border flex items-center gap-2.5 rounded-full border bg-white px-6 py-3 shadow-sm select-none"
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
          </motion.div>
        </div>
      </FadeUp>
    </>
  );
}

export default memo(TrustedCompaniesSection);
