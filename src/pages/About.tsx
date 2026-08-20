import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { CtaBanner } from '@/components/common/CtaBanner';
import { FeatureGrid } from '@/components/common/FeatureGrid';
import AboutProblemVision from '@/sections/AboutProblemVision';
import { ABOUT_FEATURES } from '@/constants/site';

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="About My Doctor Capsule"
          badge="Your Healthcare, All In One Place"
          title="We're making healthcare simpler, more connected and more accessible."
          primaryLabel="Get Started"
          primaryHref="/contact"
          secondaryLabel="Learn More"
          secondaryHref="/contact"
        />
        <AboutProblemVision />
        <FeatureGrid
          kicker="What We Bring Together"
          title="Everything you need for connected healthcare."
          items={ABOUT_FEATURES}
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

export default memo(AboutPage);
