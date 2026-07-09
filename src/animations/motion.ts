import { motionTransition } from './transitions';

export const hoverMotion = {
  scale: 1.01,
  transition: motionTransition.hover,
};

export const ctaHoverMotion = {
  scale: 1.02,
  boxShadow: '0 12px 40px rgba(26, 86, 219, 0.28)',
  transition: motionTransition.hover,
};

export const iconHoverMotion = {
  scale: 1.05,
  transition: motionTransition.hover,
};

export const tapMotion = {
  scale: 0.99,
};

export const arrowHoverMotion = {
  x: 2,
  transition: motionTransition.hover,
};

export const iconBackHoverMotion = {
  x: -2,
  transition: motionTransition.hover,
};
