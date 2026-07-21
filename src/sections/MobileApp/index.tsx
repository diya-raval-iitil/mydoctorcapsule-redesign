import { memo } from 'react';
import {
  Bell,
  BriefcaseMedical,
  ChartNoAxesColumn,
  Lock,
  MessageSquare,
  RefreshCw,
  Star,
} from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Section } from '@/components/common/Section';
import { SectionLabel } from '@/components/common/Typography';
import {
  FadeLeft,
  FadeRight,
  SectionReveal,
  SectionBadge,
  SectionHeading,
  SectionBody,
  SectionActions,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { MOBILE_FEATURES } from '@/constants/site';
import { continuousMotion, ctaHoverMotion, tapMotion } from '@/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useComingSoon } from '@/components/common/ComingSoonDialog';

const APPOINTMENTS = [
  {
    initials: 'A',
    name: 'Amit Khanna',
    time: '09:00 - Consultation',
    status: 'confirmed',
  },
  {
    initials: 'R',
    name: 'Reena Desai',
    time: '10:30 - Follow-up',
    status: 'confirmed',
  },
  {
    initials: 'V',
    name: 'Vikram Joshi',
    time: '12:00 - New Patient',
    status: 'pending',
  },
] as const;

const featureIcons = {
  bell: Bell,
  message: MessageSquare,
  chart: ChartNoAxesColumn,
  lock: Lock,
  sync: RefreshCw,
} as const;

function MobileAppSection() {
  const prefersReducedMotion = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  return (
    <Section
      id="mobile"
      background="transparent"
      padding="default"
      fullWidth
      className="bg-mobile-gradient"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeLeft>
            <SectionReveal>
              <SectionBadge>
                <SectionLabel className="!text-accent mb-0">
                  Mobile App
                </SectionLabel>
              </SectionBadge>
              <SectionHeading>
                <h2 className="type-section-title text-white">
                  Your health,
                  <br />
                  <span className="text-gradient-hero">in your pocket.</span>
                </h2>
              </SectionHeading>
              <SectionBody className="mt-6">
                <p className="font-body max-w-xl text-base leading-relaxed text-white/60">
                  Take the convenience of MyDoctorCapsule wherever you go.
                  Access healthcare essentials anytime, anywhere with the mobile
                  app.
                </p>
              </SectionBody>
              <SectionActions className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.button
                  type="button"
                  aria-label="Download on the App Store"
                  className="focus-ring font-body inline-flex items-center justify-center gap-3 rounded-[16px] border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white hover:border-white/40 hover:bg-white/10"
                  whileHover={ctaHoverMotion}
                  whileTap={tapMotion}
                  onClick={openComingSoon}
                >
                  <FaApple className="h-5 w-5" aria-hidden="true" />
                  App Store
                </motion.button>
                <motion.button
                  type="button"
                  aria-label="Get it on Google Play"
                  className="focus-ring font-body inline-flex items-center justify-center gap-3 rounded-[16px] border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white hover:border-white/40 hover:bg-white/10"
                  whileHover={ctaHoverMotion}
                  whileTap={tapMotion}
                  onClick={openComingSoon}
                >
                  <FaGooglePlay className="h-4 w-4" aria-hidden="true" />
                  Google Play
                </motion.button>
              </SectionActions>
            </SectionReveal>

            <StaggerContainer className="mb-10 mt-10 max-w-xl space-y-4">
              {MOBILE_FEATURES.map((feature) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <StaggerItem key={feature.label}>
                    <div className="flex items-center gap-3.5">
                      <div className="text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-body text-[15px] text-white/75">
                        {feature.label}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeLeft>

          <FadeRight className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] py-10">
              <div
                className="bg-primary/20 pointer-events-none absolute top-1/2 left-1/2 h-[110%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
                aria-hidden="true"
              />

              <motion.div
                className="bg-text relative z-10 mx-auto w-[280px] rounded-[48px] border-4 border-slate-600/60 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:w-[300px]"
                animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
                transition={
                  prefersReducedMotion ? undefined : continuousMotion.floatSlow
                }
              >
                <div className="bg-surface-alt relative flex h-[520px] flex-col overflow-hidden rounded-[38px] sm:h-[560px]">
                  <div className="bg-text absolute top-0 left-1/2 z-50 h-5 w-20 -translate-x-1/2 rounded-b-2xl" />

                  <div className="bg-primary px-4 pt-10 pb-6 text-left">
                    <p className="text-[11px] font-semibold text-white/70">
                      Wednesday, 2 Jul
                    </p>
                    <h4 className="font-display text-lg font-bold text-white">
                      Good Morning, Dr. Sharma
                    </h4>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        { label: 'Today', value: '8' },
                        { label: 'Pending', value: '3' },
                        { label: 'Rating', value: '4.9' },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl bg-white/15 px-2 py-2 text-center"
                        >
                          <p className="font-display text-base font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-[9px] text-white/70">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden p-4">
                    <p className="text-muted mb-3 text-[11px] font-bold tracking-wider uppercase">
                      Today&apos;s Appointments
                    </p>
                    <div className="space-y-2">
                      {APPOINTMENTS.map((appt) => (
                        <div
                          key={appt.name}
                          className="border-border flex items-center gap-3 rounded-xl border bg-white p-3 shadow-sm"
                        >
                          <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                            {appt.initials}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-text truncate text-xs font-bold">
                              {appt.name}
                            </p>
                            <p className="text-muted text-[10px]">
                              {appt.time}
                            </p>
                          </div>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[9px] font-bold lowercase ${
                              appt.status === 'confirmed'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'bg-amber-50 text-amber-600'
                            }`}
                          >
                            {appt.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="border-border-light absolute top-[18%] -right-1 z-20 w-[min(230px,70vw)] rounded-[16px] border bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:-right-8"
                animate={prefersReducedMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  prefersReducedMotion ? undefined : continuousMotion.floatSoft
                }
              >
                <div className="flex items-start gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                    <BriefcaseMedical
                      className="h-4 w-4 text-emerald-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-text text-xs font-bold">New Booking!</p>
                    <p className="text-muted text-[10px] leading-snug">
                      Priya Menon booked for Thu 3 Jul at 11:00 AM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="border-border-light absolute top-[45%] -left-2 z-20 w-[min(200px,60vw)] rounded-[16px] border bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:-left-12"
                animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { ...continuousMotion.floatSoft, delay: 0.8 }
                }
              >
                <div className="mb-1 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-text-body text-[11px] leading-snug italic">
                  &ldquo;Excellent care, very professional!&rdquo;
                </p>
              </motion.div>
            </div>
          </FadeRight>
        </div>
      </div>
    </Section>
  );
}

export default memo(MobileAppSection);
