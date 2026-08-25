import {
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useBodyScrollLock } from '@/hooks/useScrollPosition';
import { motionTransition } from '@/animations';
import { useTheme } from '@/context/ThemeContext';

interface ComingSoonContextValue {
  openComingSoon: () => void;
}

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function useComingSoon(): ComingSoonContextValue {
  const ctx = useContext(ComingSoonContext);

  if (!ctx) {
    throw new Error('useComingSoon must be used within a ComingSoonProvider');
  }

  return ctx;
}

function ComingSoonModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { isDark } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="bg-navy/40 absolute inset-0 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={motionTransition.medium}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            aria-describedby="coming-soon-description"
            className={`relative w-full max-w-[420px] rounded-[24px] px-8 py-10 text-center shadow-[0_24px_64px_rgba(5,13,31,0.18)] ${
              isDark ? 'bg-[#091027]' : 'bg-white'
            }`}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={motionTransition.default}
          >
            <h2
              id="coming-soon-title"
              className={`font-display mb-3 text-2xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-text'
              }`}
            >
              Coming Soon
            </h2>

            <p
              id="coming-soon-description"
              className={`font-body mb-8 text-base leading-relaxed ${
                isDark ? 'text-white/70' : 'text-text-body'
              }`}
            >
              Getting ready to serve you soon.
            </p>

            <button
              type="button"
              onClick={onClose}
              className={`font-body rounded-xl px-10 py-3 text-sm font-semibold text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
                isDark
                  ? 'bg-[#010920] hover:bg-[#15203b] focus-visible:ring-white/50'
                  : 'bg-navy hover:bg-navy-mid focus-visible:ring-primary'
              }`}
            >
              Okay
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ComingSoonProviderComponent({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock(isOpen);

  const openComingSoon = useCallback(() => setIsOpen(true), []);
  const closeComingSoon = useCallback(() => setIsOpen(false), []);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon }}>
      {children}
      <ComingSoonModal isOpen={isOpen} onClose={closeComingSoon} />
    </ComingSoonContext.Provider>
  );
}

export const ComingSoonProvider = memo(ComingSoonProviderComponent);
