import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Home from '@/pages/Home';
import { useLenis } from '@/hooks/useLenis';

function App() {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
