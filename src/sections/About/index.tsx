import { memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { IconBox } from '@/components/common/IconBox';
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { SERVICES } from '@/constants/site';
import { cn } from '@/utils/cn';
import connectedCareImg from '@/assets/images/about-connected-care.png';
import { useTheme } from '@/context/ThemeContext';

const HIGHLIGHTS = [
  {
    title: 'Patient-first',
    description: 'Every decision centers on patient wellbeing and dignity.',
  },
  {
    title: 'Technology-driven',
    description: 'Modern infrastructure for faster, smarter care.',
  },
  {
    title: 'Connected care',
    description: 'Seamless links between you and your care team.',
  },
] as const;

function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];
  const { isDark } = useTheme();

  return (
    <Section
      id="about"
      background={isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className="py-24 transition-colors duration-300 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-28 px-[var(--container-px)]">
        {/* Part 1 — intro + highlight cards */}
        <div className="grid items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeLeft className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <p
                className={cn(
                  'type-kicker',
                  isDark ? 'text-white/80' : 'text-text',
                )}
              >
                About My Doctor Capsule
              </p>
              <h2
                className={cn(
                  'type-section-title max-w-xl',
                  isDark && 'text-white',
                )}
              >
                Making healthcare simpler, more connected &amp; accessible.
              </h2>
              <p
                className={cn(
                  'type-body max-w-xl',
                  isDark ? 'text-white/70' : 'text-text-body',
                )}
              >
                We bring healthcare services, professionals and technology
                together to create a convenient digital experience, so quality
                care is never out of reach for anyone in Hyderabad and beyond.
              </p>
            </div>
            <div>
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                ariaLabel="Get started"
              >
                Get Started
              </Button>
            </div>
          </FadeLeft>

          <FadeRight>
            <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <StaggerItem key={item.title}>
                  <div
                    className={cn(
                      'card-hover flex h-full flex-col gap-8 rounded-[var(--radius-card-lg)] border p-8 backdrop-blur-sm transition-colors duration-300',
                      isDark
                        ? 'border-white/10 bg-slate-900/60 text-white'
                        : 'border-border text-text bg-white',
                    )}
                  >
                    <IconBox className="bg-primary rounded-full">
                      <ShieldCheck
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </IconBox>
                    <div className="flex flex-col gap-2">
                      <p
                        className={cn(
                          'font-display text-xl font-medium',
                          isDark ? 'text-white' : 'text-text',
                        )}
                      >
                        {item.title}
                      </p>
                      <p
                        className={cn(
                          'font-body text-sm leading-relaxed',
                          isDark ? 'text-white/70' : 'text-text-body',
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div
                  className={cn(
                    'h-full overflow-hidden rounded-[var(--radius-card-lg)] border transition-colors duration-300',
                    isDark ? 'border-white/10' : 'border-border',
                  )}
                >
                  <img
                    src={connectedCareImg}
                    alt="Doctor writing notes on a clipboard"
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[220px] w-full object-cover"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeRight>
        </div>

        {/* Part 2 — services accordion */}
        <div className="flex flex-col gap-14">
          <FadeLeft className="flex flex-col gap-6">
            <p
              className={cn(
                'type-kicker',
                isDark ? 'text-white/80' : 'text-text',
              )}
            >
              About My Doctor Capsule
            </p>
            <h2
              className={cn(
                'type-section-title max-w-xl',
                isDark && 'text-white',
              )}
            >
              Everything you need for connected healthcare.
            </h2>
          </FadeLeft>

          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <FadeLeft>
              <div
                className={cn(
                  'flex flex-col divide-y overflow-hidden rounded-[var(--radius-card-lg)] border transition-colors duration-300',
                  isDark
                    ? 'divide-white/10 border-white/10'
                    : 'border-border divide-border',
                )}
              >
                {SERVICES.map((service, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={cn(
                        'focus-visible:ring-primary flex w-full items-center justify-between gap-6 p-8 text-left transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none',
                        isDark
                          ? isActive
                            ? 'bg-slate-800/80'
                            : 'bg-slate-900/60 hover:bg-slate-800/40'
                          : isActive
                            ? 'bg-surface-alt'
                            : 'hover:bg-surface-alt/60 bg-white',
                      )}
                    >
                      <div className="flex items-center gap-6">
                        <IconBox className="bg-primary shrink-0 rounded-full">
                          <ShieldCheck
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </IconBox>
                        <div className="flex flex-col gap-1">
                          <p
                            className={cn(
                              'font-display text-xl font-medium',
                              isDark ? 'text-white' : 'text-text',
                            )}
                          >
                            {service.title}
                          </p>
                          <p
                            className={cn(
                              'font-body text-sm',
                              isDark ? 'text-white/70' : 'text-text-body',
                            )}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 transition-transform duration-300',
                          isDark
                            ? isActive
                              ? 'rotate-180 text-white'
                              : 'text-white/50'
                            : isActive
                              ? 'text-text rotate-180'
                              : 'text-muted',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </FadeLeft>

            <FadeRight className="relative min-h-[500px] overflow-hidden rounded-[var(--radius-card-lg)] border border-black/10">
              <AnimatePresence>
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="from-navy/20 to-navy absolute inset-0 bg-gradient-to-b" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-10">
                    <p className="font-display text-lg text-white">
                      {activeService.title}
                    </p>
                    <p className="font-display text-2xl text-white">
                      {activeService.description}
                    </p>
                    <p className="font-body max-w-md text-sm text-white/80">
                      {activeService.detailDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-border-light rounded-full border bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </FadeRight>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutSection);
