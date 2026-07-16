import { AnimatePresence } from 'framer-motion';
import { Loader } from './Loader';
import { FloatingLogo } from './FloatingLogo';
import { useIntro } from './useIntro';

/**
 * Renders the intro visuals (loader + floating logo) as a fixed overlay.
 * Place once at the app root, as a sibling of the routed content. Reads all
 * state from the IntroProvider, so it renders nothing when the intro is
 * disabled (viewport below mobileBreakpoint) or already finished.
 */
export function IntroOverlay() {
  const { enabled, phase, showLoader, onLoaderExitComplete } = useIntro();

  if (!enabled) return null;

  const isFlying =
    phase === 'flying' || phase === 'hero' || phase === 'scrolling';

  return (
    <>
      <AnimatePresence onExitComplete={onLoaderExitComplete}>
        {showLoader && <Loader key="intro-loader" />}
      </AnimatePresence>
      {isFlying && <FloatingLogo />}
    </>
  );
}
