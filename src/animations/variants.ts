import type { Variants } from 'framer-motion';
import { motionDuration, motionEase, motionTransition } from './transitions';

export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.large,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.large,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition.large,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition.large,
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.large,
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: motionTransition.large,
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.default,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: motionTransition.default,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.default,
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const heroContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: motionDuration.hero, ease: motionEase },
  },
};

export const drawer: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: motionTransition.default,
  },
  exit: {
    x: '100%',
    transition: motionTransition.default,
  },
};

export const navbarContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const navbarItem: Variants = {
  hidden: { opacity: 0, y: -8, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: motionTransition.large,
  },
};

export const fadeUpVariants = fadeUp;
export const fadeDownVariants = fadeDown;
export const fadeLeftVariants = fadeLeft;
export const fadeRightVariants = fadeRight;
export const fadeInVariants = fadeIn;
export const scaleInVariants = fadeScale;
export const blurRevealVariants = blurReveal;
export const zoomInVariants = zoomIn;
export const staggerContainerVariants = staggerContainer;
export const staggerItemVariants = staggerItem;
export const staggerFastVariants = staggerFast;
export const navbarContainerVariants = navbarContainer;
export const navbarItemVariants = navbarItem;
