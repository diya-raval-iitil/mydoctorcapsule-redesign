import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Workflow from '@/sections/Workflow';
import HealthTips from '@/sections/HealthTips';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Workflow />
        <HealthTips />
      </main>
      <Footer />
    </>
  );
}

export default memo(HomePage);
