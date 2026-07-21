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
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
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
            className="relative w-full max-w-[420px] rounded-[24px] bg-white px-8 py-10 text-center shadow-[0_24px_64px_rgba(5,13,31,0.18)]"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={motionTransition.default}
          >
            <h2
              id="coming-soon-title"
              className="font-display text-text mb-3 text-2xl font-bold tracking-tight"
            >
              Coming Soon
            </h2>
            <p
              id="coming-soon-description"
              className="font-body text-text-body mb-8 text-base leading-relaxed"
            >
              Getting ready to serve you soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="font-body bg-navy hover:bg-navy-mid focus-visible:ring-primary rounded-xl px-10 py-3 text-sm font-semibold text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
