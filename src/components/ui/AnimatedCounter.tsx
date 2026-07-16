import { memo, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const easeOutExpo = (t: number): number =>
  t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

function AnimatedCounterComponent({
  value,
  suffix = '',
  decimals = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    if (!isInView) return;

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(easeOutExpo(progress) * value);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration, prefersReducedMotion]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

export const AnimatedCounter = memo(AnimatedCounterComponent);
