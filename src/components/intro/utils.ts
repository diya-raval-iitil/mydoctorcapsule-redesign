/**
 * Generic math + DOM helpers for the intro system.
 * No website-specific logic lives here.
 */

export interface Point {
  x: number;
  y: number;
}

/** Clamp a number to the inclusive [min, max] range. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation between a and b by t (0..1). */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Center point (viewport coordinates) of a DOM element by id, or null. */
export function getElementCenter(id: string): Point | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return null;
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

/** Center of the current viewport. */
export function getViewportCenter(): Point {
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

/** True when the OS "reduce motion" preference is enabled. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** True when the viewport is narrower than the given breakpoint. */
export function isMobileViewport(breakpoint: number): boolean {
  return typeof window !== 'undefined' && window.innerWidth < breakpoint;
}
