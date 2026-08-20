import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LenisProvider } from '@/providers/LenisProvider';
import { IntroProvider, IntroOverlay } from '@/components/intro';
import { ComingSoonProvider } from '@/components/common/ComingSoonDialog';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import HowItWorks from '@/pages/HowItWorks';
import HealthTips from '@/pages/HealthTips';
import HealthTipDetail from '@/pages/HealthTipDetail';
import Contact from '@/pages/Contact';

function App() {
  return (
    <LenisProvider>
      <IntroProvider>
        <ComingSoonProvider>
          <MotionConfig reducedMotion="user">
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/health-tips" element={<HealthTips />} />
                <Route path="/health-tips/:slug" element={<HealthTipDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
            <IntroOverlay />
          </MotionConfig>
        </ComingSoonProvider>
      </IntroProvider>
    </LenisProvider>
  );
}

export default App;
