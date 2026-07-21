import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { NAV_LINKS } from '@/constants/navigation';
import {
  useScrollPosition,
  useBodyScrollLock,
} from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import { useIntro } from '@/components/intro';
import { useComingSoon } from '@/components/common/ComingSoonDialog';
import {
  drawer,
  motionTransition,
  navbarContainerVariants,
  navbarItemVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/animations';

const navLinkClass =
  'font-body text-sm font-medium leading-5 text-white/80 hover:text-white';

function NavbarComponent() {
  const isScrolled = useScrollPosition(40);
  const [isOpen, setIsOpen] = useState(false);
  const { enabled, phase, config } = useIntro();
  const { openComingSoon } = useComingSoon();

  const introShift =
    enabled && (phase === 'scrolling' || phase === 'finished');
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
        className="fixed top-0 right-0 left-0 z-50 px-[var(--container-px)]"
      >
        <motion.nav
          aria-label="Main navigation"
          animate={{
            marginTop: isScrolled ? 14 : 0,
            paddingLeft: isScrolled ? 28 : 0,
            paddingRight: isScrolled ? 22 : 0,
            borderRadius: isScrolled ? 9999 : 0,
            backgroundColor: isScrolled
              ? 'rgba(9, 17, 33, 0.55)'
              : 'rgba(9, 17, 33, 0)',
            boxShadow: isScrolled
              ? '0 8px 32px rgba(2, 6, 23, 0.28)'
              : '0 0 0 rgba(0, 0, 0, 0)',
            borderColor: isScrolled
              ? 'rgba(255, 255, 255, 0.12)'
              : 'rgba(255, 255, 255, 0)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            WebkitBackdropFilter: isScrolled ? 'blur(20px)' : undefined,
          }}
          className={cn(
            'mx-auto w-full max-w-[var(--container-max)]',
            isScrolled && 'max-w-[1200px]',
          )}
        >
            <div className="relative flex h-[72px] items-center justify-between">
              <motion.a
                href="/"
                className="relative z-10"
                aria-label="MyDoctorCapsule home"
                variants={navbarItemVariants}
              >
                <span className="font-display text-lg font-bold tracking-tight">
                  <span className="text-white">MyDoctor</span>
                  <span className="text-accent">Capsule</span>
                </span>
              </motion.a>

              <motion.ul
                className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
                role="list"
                variants={navbarContainerVariants}
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={navbarItemVariants}>
                    <a href={link.href} className={navLinkClass}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="hidden lg:block"
                animate={{ x: introShift ? -config.navbarShiftX : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  variants={navbarItemVariants}
                >
                  <Button
                    variant="primary"
                    size="sm"
                    ariaLabel="Get started free"
                    onClick={openComingSoon}
                  >
                    Get Started Free
                  </Button>
                </motion.div>
              </motion.div>

              {enabled && (
                <div
                  id={config.navbarAnchorId}
                  className="pointer-events-none absolute top-1/2 right-0 flex -translate-y-1/2 items-center justify-center"
                  style={{
                    width: config.navbarLogoSize,
                    height: config.navbarLogoSize,
                  }}
                  aria-hidden="true"
                >
                  <img
                    src={config.iconLogo}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-contain"
                    style={{ opacity: showNavIcon ? 1 : 0 }}
                  />
                </div>
              )}

              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden"
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
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionTransition.medium}
              className="bg-navy/60 fixed inset-0 top-[72px] z-40 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              variants={drawer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-navy fixed top-[72px] right-0 bottom-0 z-50 w-full max-w-sm border-l border-white/10 p-6 lg:hidden"
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
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                    >
                      {link.label}
                    </a>
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
                  ariaLabel="Get started free"
                  onClick={() => {
                    closeMenu();
                    openComingSoon();
                  }}
                >
                  Get Started Free
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
