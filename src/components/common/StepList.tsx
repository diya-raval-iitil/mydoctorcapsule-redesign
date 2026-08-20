import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';

interface StepListItem {
  id: string;
  title: string;
  stepLabel: string;
  description: string;
}

interface StepListProps {
  kicker: string;
  title: string;
  buttonLabel: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  steps: readonly StepListItem[];
}

function StepListComponent({
  kicker,
  title,
  buttonLabel,
  buttonHref,
  onButtonClick,
  steps,
}: StepListProps) {
  return (
    <Section background="dark" padding="none" fullWidth className="py-24 lg:py-28">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-16 px-[var(--container-px)]">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <FadeLeft className="flex max-w-xl flex-col gap-6">
            <p className="type-kicker !text-[#FFFFFF] !font-normal">{kicker}</p>
            <h2 className="type-section-title !text-white">{title}</h2>
          </FadeLeft>
          <FadeRight>
            <Button
              variant="primary"
              size="sm"
              href={buttonHref}
              onClick={onButtonClick}
              ariaLabel={buttonLabel}
            >
              {buttonLabel}
            </Button>
          </FadeRight>
        </div>

        <StaggerContainer className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
          {steps.map((step, index) => (
            <StaggerItem key={step.id}>
              <div className="flex flex-col justify-between gap-4 py-10 sm:flex-row sm:items-start sm:gap-16">
                <div className="flex shrink-0 items-center gap-6 sm:w-[280px]">
                  <span className="font-display text-primary/20 text-6xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-display text-2xl font-semibold text-white">{step.title}</p>
                    <p className="text-primary font-body text-sm">{step.stepLabel}</p>
                  </div>
                </div>
                <p className="font-display max-w-2xl text-lg leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export const StepList = memo(StepListComponent);
