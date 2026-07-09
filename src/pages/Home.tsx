import { memo, lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';

const Hero = lazy(() => import('@/sections/Hero'));
const TrustedCompanies = lazy(() => import('@/sections/TrustedCompanies'));
const About = lazy(() => import('@/sections/About'));
const MissionVision = lazy(() => import('@/sections/MissionVision'));
const Features = lazy(() => import('@/sections/Features'));
const Workflow = lazy(() => import('@/sections/Workflow'));
const MobileApp = lazy(() => import('@/sections/MobileApp'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));
const CTA = lazy(() => import('@/sections/CTA'));
const Footer = lazy(() => import('@/sections/Footer'));

function SectionFallback() {
  return <div className="section-padding" aria-hidden="true" />;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrustedCompanies />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MissionVision />
        </Suspense> 
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Workflow />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MobileApp />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default memo(HomePage);
