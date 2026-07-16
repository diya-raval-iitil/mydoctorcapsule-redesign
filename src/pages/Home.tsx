import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Hero from '@/sections/Hero';
import TrustedCompanies from '@/sections/TrustedCompanies';
import About from '@/sections/About';
import MissionVision from '@/sections/MissionVision';
import Features from '@/sections/Features';
import Workflow from '@/sections/Workflow';
import MobileApp from '@/sections/MobileApp';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <About />
        <MissionVision />
        <Features />
        <Workflow />
        <MobileApp />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default memo(HomePage);
