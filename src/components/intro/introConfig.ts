import type { IntroConfig } from './types';

/*
 * ============================================================================
 * INTRO CONFIGURATION  —  the ONLY file you edit per website.
 * ============================================================================
 *
 * 👉 WHEN INTEGRATING INTO A NEW SITE, change ONLY the two logo imports below
 *    (and optionally the size numbers). Everything else behaves identically
 *    across all five websites.
 *
 * The logos are imported (not hardcoded string paths) so Vite fingerprints and
 * bundles them correctly. To swap them, just point these imports at your new
 * asset files:
 *
 *   import brandLogo from '@/assets/logos/<your_brand>.png';  // icon + wordmark
 *   import iconLogo  from '@/assets/logos/<your_icon>.png';   // icon only
 */
import brandLogo from '@/assets/logos/yaka_brand.png'; // 👈 CHANGE PER SITE
import iconLogo from '@/assets/logos/yaka_logo.png'; //  👈 CHANGE PER SITE
import logo from '@/assets/logos/my_dr_capsule_logo.png';

export const introConfig: IntroConfig = {
  // --- Website-specific assets (edit these) -------------------------------
  brandLogo,
  iconLogo,
  logo,

  // --- Logo sizes (px). Tweak per site only if needed. --------------------
  loaderLogoSize: 110,
  heroLogoSize: 92,
  navbarLogoSize: 34,

  // --- Loader timing (ms) -------------------------------------------------
  loaderDuration: 3200,
  loaderFadeDuration: 600,

  // --- Scroll hand-off range (px) -----------------------------------------
  scrollStart: 50,
  scrollEnd: 240,

  // --- DOM anchors (kept identical across sites) --------------------------
  heroAnchorId: 'hero-logo-anchor',
  navbarAnchorId: 'navbar-logo-anchor',

  // --- Behaviour tuning (rarely changed) ----------------------------------
  mobileBreakpoint: 768, // below this width the intro is skipped entirely
  springStiffness: 90, // flight spring (viewport center -> hero)
  springDamping: 18,
  springMass: 1,
  navbarShiftX: 40, // how far navbar right content slides left (35–45px)
};
