/**
 * Shared types for the reusable intro animation system.
 * This file is generic and should NOT need editing per-website.
 */

/**
 * The intro state machine phases, in order:
 * loading  -> fullscreen loader is visible
 * flying   -> brand logo springs from viewport center to the hero anchor
 * hero     -> logo rests at the hero anchor, waiting for scroll
 * scrolling-> logo travels from hero anchor to navbar anchor (scroll linked)
 * finished -> intro complete, floating logo unmounted, navbar shows icon
 */
export type IntroPhase =
  'loading' | 'flying' | 'hero' | 'scrolling' | 'finished';

export interface IntroConfig {
  /** Full brand logo (icon + wordmark). Shown in loader + hero. */
  brandLogo: string;
  /** Icon-only logo. Shown in the navbar at the end. */
  iconLogo: string;
  logo: string;
  /** Rendered size (px) of the logo inside the fullscreen loader. */
  loaderLogoSize: number;
  /** Rendered size (px) of the logo when resting in the hero. */
  heroLogoSize: number;
  /** Rendered size (px) of the icon logo when docked in the navbar. */
  navbarLogoSize: number;

  /** How long the loader stays on screen before fading out (ms). */
  loaderDuration: number;
  /** Loader fade-out duration (ms). */
  loaderFadeDuration: number;

  /** Scroll offset (px) at which the logo starts moving toward the navbar. */
  scrollStart: number;
  /** Scroll offset (px) at which the logo finishes docking in the navbar. */
  scrollEnd: number;

  /** DOM id of the invisible anchor placed at the hero's top-right. */
  heroAnchorId: string;
  /** DOM id of the invisible anchor placed at the navbar's right edge. */
  navbarAnchorId: string;

  /** Below this viewport width (px) the whole intro is skipped. */
  mobileBreakpoint: number;

  /** Flight spring config (Framer Motion). */
  springStiffness: number;
  springDamping: number;
  springMass: number;

  /** How far (px) the navbar's right content shifts left to make room. */
  navbarShiftX: number;
}

export interface IntroContextValue {
  phase: IntroPhase;
  config: IntroConfig;
  /** True when the intro should run (desktop + motion allowed). */
  enabled: boolean;
  /** Whether the loader element should currently be mounted. */
  showLoader: boolean;
  /** Called by the loader's AnimatePresence once it has fully faded out. */
  onLoaderExitComplete: () => void;
  /** Transition helpers used by the floating logo. */
  goToHero: () => void;
  goToScrolling: () => void;
  finishIntro: () => void;
}

export interface ArticleSubsection {
  number?: string;
  heading: string;
  body?: string | string[];
}

export interface ArticleSection {
  heading: string;
  body?: string | string[];
  subsections?: ArticleSubsection[];
  bulletsIntro?: string;
  bullets?: string[];
  bulletsOutro?: string;
  sectionHighlight?: string;
}

export interface ArticleContent {
  intro: string[];
  highlight: string;
  sections: ArticleSection[];
}

export interface HealthArticle {
  slug: number;
  id: string;
  tag: string;
  tagBg: string;
  tagText: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorPhoto: string;
  date: string;
  image: string;
  content: ArticleContent;
}
