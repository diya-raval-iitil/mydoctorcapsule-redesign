import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { CtaBanner } from '@/components/common/CtaBanner';
import FeaturedArticles from '@/sections/FeaturedArticles';
import AllArticles from '@/sections/AllArticles';

function HealthTipsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Health & Wellness"
          badge="Your Healthcare, All In One Place"
          title="Simple health information for everyday life."
          primaryLabel="Explore Articles"
          primaryHref="#featured-articles"
        />
        <div id="featured-articles">
          <FeaturedArticles />
        </div>
        <div id="all-articles">
          <AllArticles />
        </div>
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

export default memo(HealthTipsPage);
