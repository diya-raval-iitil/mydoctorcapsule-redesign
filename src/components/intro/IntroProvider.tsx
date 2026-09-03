import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLenisInstance } from '@/providers/LenisProvider';
import { introConfig } from './introConfig';
import type { IntroContextValue, IntroPhase } from './types';

// eslint-disable-next-line react-refresh/only-export-components
export const IntroContext = createContext<IntroContextValue | null>(null);

/**
 * Centralized intro state machine. Owns the single source of truth for the
 * intro phase and exposes transition helpers. Also locks scroll while the
 * loader / flight are on screen so the sequence always starts from the top.
 */
export function IntroProvider({ children }: { children: ReactNode }) {
  const config = introConfig;
  const lenis = useLenisInstance();

  // Computed once on mount. Plays on every refresh (no persistence).
  // Skipped only below mobileBreakpoint. Do NOT gate on prefers-reduced-motion:
  // that preference was forcing enabled=false → phase='finished' → IntroOverlay
  // returned null, so Loader / FloatingLogo never mounted on desktop.
  const [enabled] = useState(true);
  const [phase, setPhase] = useState<IntroPhase>(enabled ? 'loading' : 'finished');
  const [showLoader, setShowLoader] = useState(enabled);

  // Kick off the loader timer + guarantee we start scrolled to the top.
  useEffect(() => {
    if (!enabled) return;
    window.scrollTo(0, 0);
    const timer = window.setTimeout(
      () => setShowLoader(false),
      config.loaderDuration,
    );
    return () => window.clearTimeout(timer);
  }, [enabled, config.loaderDuration]);

  // Lock scroll during the loader + flight phases.
  useEffect(() => {
    if (!enabled) return;
    const locked = phase === 'loading' || phase === 'flying';
    if (locked) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [enabled, phase, lenis]);

  const onLoaderExitComplete = useCallback(() => setPhase('flying'), []);
  const goToHero = useCallback(() => setPhase('hero'), []);
  const goToScrolling = useCallback(
    () => setPhase((prev) => (prev === 'hero' ? 'scrolling' : prev)),
    [],
  );
  const finishIntro = useCallback(
    () => setPhase((prev) => (prev === 'finished' ? prev : 'finished')),
    [],
  );

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      config,
      enabled,
      showLoader,
      onLoaderExitComplete,
      goToHero,
      goToScrolling,
      finishIntro,
    }),
    [
      phase,
      config,
      enabled,
      showLoader,
      onLoaderExitComplete,
      goToHero,
      goToScrolling,
      finishIntro,
    ],
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}
