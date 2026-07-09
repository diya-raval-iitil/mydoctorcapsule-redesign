import type { Transition } from 'framer-motion';

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  fast: 0.15,
  medium: 0.25,
  default: 0.35,
  large: 0.5,
  hero: 0.6,
  max: 0.7,
} as const;

export const motionTransition = {
  fast: { duration: motionDuration.fast, ease: motionEase },
  medium: { duration: motionDuration.medium, ease: motionEase },
  default: { duration: motionDuration.default, ease: motionEase },
  large: { duration: motionDuration.large, ease: motionEase },
  hero: { duration: motionDuration.hero, ease: motionEase },
  hover: { duration: motionDuration.medium, ease: motionEase },
  linearLoop: { ease: 'linear', repeat: Infinity },
} satisfies Record<string, Transition>;

export const continuousMotion = {
  floatSoft: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  floatSlow: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  marquee: { duration: 30, repeat: Infinity, ease: 'linear' },
} satisfies Record<string, Transition>;
