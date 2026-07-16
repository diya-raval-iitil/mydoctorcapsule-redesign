import type { Transition } from 'framer-motion';

const hoverTransition: Transition = { duration: 0.3, ease: 'easeInOut' };

export const cardHoverMotion = {
  scale: 1.01,
  boxShadow:
    '0 0 0 1px rgba(26, 86, 219, 0.25), 0 24px 70px rgba(15, 23, 42, 0.12)',
  transition: hoverTransition,
};

export const hoverMotion = cardHoverMotion;

export const ctaHoverMotion = {
  scale: 1.02,
  boxShadow: '0 12px 40px rgba(26, 86, 219, 0.35)',
  transition: hoverTransition,
};

export const iconHoverMotion = {
  scale: 1.05,
  transition: hoverTransition,
};

export const tapMotion = {
  scale: 0.99,
};

export const arrowHoverMotion = {
  x: 2,
  transition: hoverTransition,
};

export const iconBackHoverMotion = {
  x: -2,
  transition: hoverTransition,
};
