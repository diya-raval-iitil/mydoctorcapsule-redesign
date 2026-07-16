import { memo, useEffect, useRef } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useIntro } from './useIntro';
import {
  clamp,
  getElementCenter,
  getViewportCenter,
  lerp,
  type Point,
} from './utils';

/**
 * The single logo that travels: viewport center -> hero anchor -> navbar anchor.
 * Only transforms + opacity are animated (via Motion values), so scrolling never
 * triggers React re-renders or layout thrashing.
 */
function FloatingLogoComponent() {
  const { phase, config, goToHero, goToScrolling, finishIntro } = useIntro();

  const baseSize = config.heroLogoSize;
  const navScale = config.navbarLogoSize / config.heroLogoSize;

  // Position is expressed as the logo's CENTER in viewport coordinates.
  const start = useRef(getViewportCenter());
  const x = useMotionValue(start.current.x);
  const y = useMotionValue(start.current.y);
  const scale = useMotionValue(config.loaderLogoSize / config.heroLogoSize);
  const brandOpacity = useMotionValue(1);
  const iconOpacity = useMotionValue(0);

  // Hero anchor is captured once (fixed viewport point the logo rests at).
  const heroCenter = useRef<Point | null>(null);

  // --- Flight: viewport center -> hero anchor (spring) ---------------------
  useEffect(() => {
    if (phase !== 'flying') return;

    const hero = getElementCenter(config.heroAnchorId) ?? getViewportCenter();
    heroCenter.current = hero;

    const spring = {
      type: 'spring' as const,
      stiffness: config.springStiffness,
      damping: config.springDamping,
      mass: config.springMass,
    };

    const controls = [
      animate(x, hero.x, spring),
      animate(y, hero.y, spring),
      animate(scale, 1, spring),
    ];

    let cancelled = false;
    Promise.all(controls.map((c) => c.finished))
      .then(() => {
        if (!cancelled) goToHero();
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      controls.forEach((c) => c.stop());
    };
  }, [phase, config, x, y, scale, goToHero]);

  // --- Hero rest + scroll hand-off -> navbar anchor ------------------------
  useEffect(() => {
    if (phase !== 'hero' && phase !== 'scrolling') return;

    if (!heroCenter.current) {
      heroCenter.current =
        getElementCenter(config.heroAnchorId) ?? getViewportCenter();
    }
    const hero = heroCenter.current;
    const range = Math.max(config.scrollEnd - config.scrollStart, 1);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Resting in the hero (before the hand-off threshold).
      if (scrollY <= config.scrollStart) {
        x.set(hero.x);
        y.set(hero.y);
        scale.set(1);
        brandOpacity.set(1);
        iconOpacity.set(0);
        return;
      }

      if (phase === 'hero') goToScrolling();

      // Navbar anchor is measured live so it tracks the pill morph exactly.
      const nav = getElementCenter(config.navbarAnchorId) ?? hero;
      const p = clamp((scrollY - config.scrollStart) / range, 0, 1);

      x.set(lerp(hero.x, nav.x, p));
      y.set(lerp(hero.y, nav.y, p));
      scale.set(lerp(1, navScale, p));
      brandOpacity.set(1 - p);
      iconOpacity.set(p);

      if (p >= 1) finishIntro();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [
    phase,
    config,
    navScale,
    x,
    y,
    scale,
    brandOpacity,
    iconOpacity,
    goToScrolling,
    finishIntro,
  ]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[70]"
      style={{ x, y }}
      aria-hidden="true"
    >
      <motion.div
        className="relative"
        style={{ x: '-50%', y: '-50%', scale, width: baseSize, height: baseSize }}
      >
        <motion.img
          src={config.brandLogo}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ opacity: brandOpacity }}
        />
        <motion.img
          src={config.iconLogo}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ opacity: iconOpacity }}
        />
      </motion.div>
    </motion.div>
  );
}

export const FloatingLogo = memo(FloatingLogoComponent);
