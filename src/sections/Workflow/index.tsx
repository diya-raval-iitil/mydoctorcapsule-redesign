import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/common/Section';
import { SectionLabel } from '@/components/common/Typography';
import {
  FadeLeft,
  FadeRight,
  SectionReveal,
  SectionBadge,
  SectionHeading,
} from '@/components/common/MotionWrappers';
import { WORKFLOW_STEPS } from '@/constants/site';
import { cn } from '@/utils/cn';

function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(WORKFLOW_STEPS.length - 1);
  const activeStep = WORKFLOW_STEPS[activeIndex];

  const activateStep = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Section id="workflow" background="white" padding="default">
      <SectionReveal className="mb-14 max-w-2xl text-left">
        <SectionBadge className="mb-4">
          <SectionLabel className="mb-0">How It Works</SectionLabel>
        </SectionBadge>
        <SectionHeading>
          <h2 className="type-section-title">
            From setup to <span className="text-primary">full growth</span> in
            days.
          </h2>
        </SectionHeading>
      </SectionReveal>

      <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeLeft className="flex flex-col justify-between">
          <div
            className="flex w-full flex-col gap-3"
            role="tablist"
            aria-label="Workflow steps"
          >
            {WORKFLOW_STEPS.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={step.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`workflow-panel-${step.id}`}
                  id={`workflow-tab-${step.id}`}
                  onMouseEnter={() => activateStep(index)}
                  onFocus={() => activateStep(index)}
                  onClick={() => activateStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      activateStep(index);
                    }
                  }}
                  tabIndex={0}
                  className={cn(
                    'group focus-visible:ring-primary relative flex w-full cursor-pointer flex-col rounded-[18px] border p-5 text-left transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-6',
                    isActive
                      ? 'border-primary bg-primary shadow-[0_18px_44px_rgba(26,86,219,0.22)]'
                      : 'border-border bg-surface-alt hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]',
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        'font-display shrink-0 pt-0.5 text-xs font-bold tracking-wider',
                        isActive ? 'text-white/70' : 'text-muted',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex w-full min-w-0 flex-col gap-1">
                      <h3
                        className={cn(
                          'font-display text-base font-bold tracking-tight sm:text-lg',
                          isActive ? 'text-white' : 'text-text',
                        )}
                      >
                        {step.title}
                      </h3>

                      <motion.div
                        id={`workflow-panel-${step.id}`}
                        role="tabpanel"
                        aria-labelledby={`workflow-tab-${step.id}`}
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          height: { duration: 0.4, ease: 'easeInOut' },
                          opacity: { duration: 0.3, ease: 'easeInOut' },
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className={cn(
                            'font-body max-w-xl pt-1 pb-1 text-sm leading-relaxed',
                            isActive ? 'text-white/80' : 'text-text-body',
                          )}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeLeft>

        <FadeRight className="relative h-full min-h-[450px] w-full lg:sticky lg:top-24">
          <div className="border-border relative h-full w-full overflow-hidden rounded-[24px] border shadow-[var(--shadow-card)]">
            <AnimatePresence initial={false}>
              <motion.img
                key={activeStep.id}
                src={activeStep.image}
                alt={`${activeStep.title} dashboard preview`}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute bottom-6 left-6 z-10">
              <span className="font-display rounded-xl bg-black/40 px-4 py-2 text-sm font-bold tracking-tight text-white backdrop-blur-md">
                {activeStep.title}
              </span>
            </div>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}

export default memo(WorkflowSection);
