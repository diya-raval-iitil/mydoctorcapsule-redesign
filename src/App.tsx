import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LenisProvider } from '@/providers/LenisProvider';
import { IntroProvider, IntroOverlay } from '@/components/intro';
import { ComingSoonProvider } from '@/components/common/ComingSoonDialog';
import Home from '@/pages/Home';

function App() {
  return (
    <LenisProvider>
      <IntroProvider>
        <ComingSoonProvider>
          <MotionConfig reducedMotion="user">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
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
