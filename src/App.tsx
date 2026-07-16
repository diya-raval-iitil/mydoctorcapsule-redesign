import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LenisProvider } from '@/providers/LenisProvider';
import { IntroProvider, IntroOverlay } from '@/components/intro';
import Home from '@/pages/Home';

function App() {
  return (
    <LenisProvider>
      <IntroProvider>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <IntroOverlay />
        </MotionConfig>
      </IntroProvider>
    </LenisProvider>
  );
}

export default App;
