import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

type LenisContextValue = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(instance);
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    let rafId = 0;

    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
}

export function useLenisInstance(): Lenis | null {
  return useContext(LenisContext).lenis;
}
