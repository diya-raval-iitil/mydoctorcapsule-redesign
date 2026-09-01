import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { NAV_LINKS } from '@/constants/navigation';

import { useBodyScrollLock } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import { useIntro } from '@/components/intro';
import { useTheme } from '@/context/ThemeContext';
import {
  drawer,
  motionTransition,
  navbarContainerVariants,
  navbarItemVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/animations';
import { ThemeToggle } from '../common/ThemeToggle';
import lightBrandLogo from '@/assets/images/my-doctor-logo-light.svg';
import lightIconLogo from '@/assets/images/yaka-brand-light.svg';

const navLinkClass = (isActive: boolean, isLight: boolean) =>
  cn(
    'font-display text-[15px] leading-5 whitespace-nowrap transition-colors',
    isLight
      ? isActive
        ? 'font-bold text-black'
        : 'font-normal text-black/70 hover:text-black'
      : isActive
        ? 'font-bold text-white'
        : 'font-normal text-white/70 hover:text-white',
  );

const MotionRouterLink = motion(Link);

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { enabled, phase, config } = useIntro();
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  const isContactLightTheme = pathname === '/contact' && !isDark;
  // const introShift = enabled && (phase === 'scrolling' || phase === 'finished');
  const showNavIcon = enabled && phase === 'finished';

  useBodyScrollLock(isOpen);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navbarContainerVariants}
        className={cn(
          'fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg',
          isContactLightTheme
            ? 'border-black/10 bg-white'
            : 'dark:bg-navy border-white/10 bg-(--color-surface)',
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto w-full max-w-[var(--container-max)]"
        >
          <div className="relative flex items-center justify-between gap-4 px-[var(--container-px)] py-4 xl:px-12 2xl:px-[60px]">
            {/* Main Brand Logo */}
            <MotionRouterLink
              to="/"
              className="relative z-10 flex shrink-0 items-center gap-1"
              aria-label="MyDoctorCapsule home"
              variants={navbarItemVariants}
            >
              <motion.img
                src={isContactLightTheme ? lightBrandLogo : config.logo}
                alt="logo"
                className="h-full w-50 object-contain xl:w-48"
                style={
                  isContactLightTheme
                    ? undefined
                    : { filter: 'brightness(0) invert(1)' }
                }
              />
            </MotionRouterLink>

            {/* Desktop Navigation (Visible only on xl screens 1280px+) */}
            <motion.ul
              className="hidden items-center gap-5 xl:flex 2xl:gap-8"
              role="list"
              variants={navbarContainerVariants}
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={navbarItemVariants}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      navLinkClass(isActive, isContactLightTheme)
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            {/* Desktop Action Group */}
            <motion.div
              className="relative hidden items-center gap-4 xl:flex 2xl:gap-6"
              // animate={{ x: introShift ? -config.navbarShiftX : 0 }}
              // transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div variants={navbarItemVariants}>
                <ThemeToggle />
              </motion.div>

              <motion.div variants={navbarItemVariants}>
                <Button
                  variant="primary"
                  size="sm"
                  ariaLabel="Get started"
                  href="/contact"
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Desktop Intro Icon Anchor */}
              {enabled && (
                <div
                  id={`${config.navbarAnchorId}-desktop`}
                  className="pointer-events-none flex shrink-0 items-center justify-center"
                  style={{
                    width: config.navbarLogoSize,
                    height: config.navbarLogoSize,
                  }}
                  aria-hidden="true"
                >
                  <img
                    src={isContactLightTheme ? lightIconLogo : config.iconLogo}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-contain"
                    style={{ opacity: showNavIcon ? 1 : 0 }}
                  />
                </div>
              )}
            </motion.div>

            {/* Mobile / Tablet View Controls (Active on screens up to 1279px) */}
            <div className="flex items-center gap-3 xl:hidden">
              <ThemeToggle />

              {/* Mobile / Tablet Intro Icon Display */}
              {enabled && (
                <div
                  id={`${config.navbarAnchorId}-mobile`}
                  className="pointer-events-none flex shrink-0 items-center justify-center"
                  style={{
                    width: config.navbarLogoSize,
                    height: config.navbarLogoSize,
                  }}
                  aria-hidden="true"
                >
                  <img
                    src={isContactLightTheme ? lightIconLogo : config.iconLogo}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-contain"
                    style={{ opacity: showNavIcon ? 1 : 0 }}
                  />
                </div>
              )}

              <button
                type="button"
                className={cn(
                  'relative flex h-10 w-10 items-center justify-center rounded-xl',
                  isContactLightTheme ? 'text-black' : 'text-white',
                )}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                <motion.span
                  initial={false}
                  animate={
                    isOpen
                      ? { opacity: 0, rotate: -90, scale: 0.85 }
                      : { opacity: 1, rotate: 0, scale: 1 }
                  }
                  transition={motionTransition.medium}
                  className="absolute"
                >
                  <Menu className="h-6 w-6" />
                </motion.span>
                <motion.span
                  initial={false}
                  animate={
                    isOpen
                      ? { opacity: 1, rotate: 0, scale: 1 }
                      : { opacity: 0, rotate: 90, scale: 0.85 }
                  }
                  transition={motionTransition.medium}
                  className="absolute"
                >
                  <X className="h-6 w-6" />
                </motion.span>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionTransition.medium}
              className="bg-navy/60 fixed inset-0 top-[96px] z-40 backdrop-blur-sm xl:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              variants={drawer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-navy fixed top-[96px] right-0 bottom-0 z-50 w-full max-w-sm border-l border-white/10 p-6 xl:hidden"
            >
              <motion.ul
                className="space-y-1"
                role="list"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={staggerItemVariants}>
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          'font-display block rounded-xl px-4 py-3 text-base',
                          isActive
                            ? 'bg-white/10 font-bold text-white'
                            : 'font-normal text-white/80 hover:bg-white/10',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-8 border-t border-white/10 pt-8"
                variants={staggerItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Button
                  variant="primary"
                  fullWidth
                  ariaLabel="Get started"
                  href="/contact"
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export const Navbar = memo(NavbarComponent);
