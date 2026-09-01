import { memo, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { IconBox } from '@/components/common/IconBox';
import { FadeLeft, FadeRight } from '@/components/common/MotionWrappers';
import { PLATFORM_FEATURES } from '@/constants/site';
import { cn } from '@/utils/cn';
import platformImg from '@/assets/images/about-consultations.jpg';
import { useTheme } from '@/context/ThemeContext';

function ServicesPlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useTheme();

  return (
    <Section
      background={isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className="pb-24 lg:pb-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-14 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p className="type-kicker text-text">On The Platform</p>
          <h2 className="type-section-title max-w-xl">
            Everything you need, connected in one place.
          </h2>
        </FadeLeft>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <FadeLeft>
            <div
              className={cn(
                'divide-border flex flex-col divide-y overflow-hidden rounded-[var(--radius-card-lg)] border',
                isDark
                  ? 'divide-white/10 border-white/10'
                  : 'border-border divide-border',
              )}
            >
              {PLATFORM_FEATURES.map((feature, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={feature.id}
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
                          {feature.title}
                        </p>

                        <p
                          className={cn(
                            'font-body text-sm',
                            isDark ? 'text-white/70' : 'text-text-body',
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* <ChevronDown
          className={cn(
            'text-muted h-5 w-5 shrink-0 transition-transform duration-300',
            isActive && 'rotate-180',
          )}
          aria-hidden="true"
        /> */}
                  </button>
                );
              })}
            </div>
          </FadeLeft>

          <FadeRight className="overflow-hidden rounded-[var(--radius-card-lg)] border border-black/10">
            <img
              src={platformImg}
              alt="Doctor consulting with a patient"
              loading="lazy"
              decoding="async"
              className="h-full min-h-[400px] w-full object-cover"
            />
          </FadeRight>
        </div>
      </div>
    </Section>
  );
}

export default memo(ServicesPlatformSection);
