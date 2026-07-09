import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { NAV_LINKS } from '@/constants/navigation';
import {
  useScrollPosition,
  useBodyScrollLock,
} from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import {
  drawer,
  motionTransition,
  navbarContainerVariants,
  navbarItemVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/animations';

const navLinkClass =
  'font-body text-sm font-medium leading-5 text-white/80 transition-colors duration-300 hover:text-white';

function NavbarComponent() {
  const isScrolled = useScrollPosition(40);
  const [isOpen, setIsOpen] = useState(false);

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
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-[var(--ease-out-expo)]',
          isScrolled ? 'top-4 px-4 md:px-6' : 'top-0',
        )}
      >
        <Container
          as="nav"
          aria-label="Main navigation"
          className={cn(
            'transition-all duration-300 ease-[var(--ease-out-expo)]',
            isScrolled
              ? 'bg-navy/75 max-w-[1280px] rounded-[9999px] border border-white/15 px-5 shadow-[0_12px_40px_rgba(2,6,23,0.12)] backdrop-blur-[16px]'
              : 'bg-transparent',
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
              className="hidden items-center gap-3 lg:flex"
              variants={navbarItemVariants}
            >
              <button
                type="button"
                className={cn('rounded-xl px-4 py-2', navLinkClass)}
                aria-label="Sign in"
              >
                Sign In
              </button>
              <Button
                variant="primary"
                size="sm"
                href="#cta"
                ariaLabel="Get started free"
              >
                Get Started Free
              </Button>
            </motion.div>

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
        </Container>
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
                      className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-8 space-y-3 border-t border-white/10 pt-8"
                variants={staggerItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Button
                  variant="ghost"
                  fullWidth
                  className="!text-white hover:!bg-white/10"
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  href="#cta"
                  ariaLabel="Get started free"
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
