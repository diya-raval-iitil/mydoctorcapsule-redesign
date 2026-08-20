import { memo } from 'react';
import { Section } from '@/components/common/Section';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { HOW_IT_WORKS_FEATURES } from '@/constants/site';

function HowItWorksStepsSection() {
  return (
    <Section
      background="white"
      padding="none"
      fullWidth
      className="rounded-[var(--radius-panel)] py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-14 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p className="type-kicker text-text">What We Bring Together</p>
          <h2 className="type-section-title max-w-2xl">Four steps to better healthcare.</h2>
        </FadeLeft>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_FEATURES.map((item) => (
            <StaggerItem key={item.id}>
              <div className="border-border h-full rounded-[var(--radius-card-lg)] border bg-white p-8">
                <div className="bg-primary font-display mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white">
                  {item.number}
                </div>
                <p className="font-display text-text mb-3 text-2xl font-medium">{item.title}</p>
                <p className="font-body text-text-body text-base">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export default memo(HowItWorksStepsSection);
