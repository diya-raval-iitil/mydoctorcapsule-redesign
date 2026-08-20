import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { CtaBanner } from '@/components/common/CtaBanner';
import { StepList } from '@/components/common/StepList';
import HowItWorksSteps from '@/sections/HowItWorksSteps';
import { JOURNEY_STEPS } from '@/constants/site';

function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="How It Works"
          badge="Your Healthcare, All In One Place"
          title="Healthcare shouldn't feel complicated."
          primaryLabel="Explore Services"
          primaryHref="/services"
          secondaryLabel="Book a consulations"
          secondaryHref="/contact"
        />
        <HowItWorksSteps />
        <StepList
          kicker="Your Journey"
          title="Designed around your healthcare journey."
          buttonLabel="Start your journey"
          buttonHref="/contact"
          steps={JOURNEY_STEPS}
        />
        <Section
          background="white"
          padding="none"
          fullWidth
          className="rounded-[var(--radius-panel)] py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)]">
            <CtaBanner />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default memo(HowItWorksPage);
