import { useRef } from 'react';
import { useInView, type UseInViewOptions } from 'framer-motion';
import { defaultViewport } from '@/animations';

type RevealAnimationState = {
  ref: React.RefObject<HTMLDivElement | null>;
  animate: 'hidden' | 'visible';
  isInView: boolean;
};

export function useRevealAnimation(
  viewport: UseInViewOptions = defaultViewport,
): RevealAnimationState {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewport);

  return {
    ref,
    animate: isInView ? 'visible' : 'hidden',
    isInView,
  };
}
