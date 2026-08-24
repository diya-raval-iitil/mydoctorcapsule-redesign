import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { CtaBanner } from '@/components/common/CtaBanner';
import { FeatureGrid } from '@/components/common/FeatureGrid';
import ServicesPlatform from '@/sections/ServicesPlatform';
import ServicesHighlights from '@/sections/ServicesHighlights';
import { SERVICES_FEATURES } from '@/constants/site';

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Our Services"
          badge="Your Healthcare, All In One Place"
          title="Healthcare solutions designed around you."
          primaryLabel="Explore Services"
          primaryHref="#platform"
          secondaryLabel="Book a consulations"
          secondaryHref="/contact"
        />
        <FeatureGrid
          kicker="What We Bring Together"
          title="Everything you need for connected healthcare."
          items={SERVICES_FEATURES}
        />
        <div id="platform">
          <ServicesPlatform />
        </div>
        <ServicesHighlights />
        <Section
          background="white"
          padding="none"
          fullWidth
          className="py-24 lg:py-28"
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

export default memo(ServicesPage);
