import { useContext } from 'react';
import { IntroContext } from './IntroProvider';
import type { IntroContextValue } from './types';

/** Access the centralized intro state machine. */
export function useIntro(): IntroContextValue {
  const ctx = useContext(IntroContext);
  if (!ctx) {
    throw new Error('useIntro must be used within an <IntroProvider>');
  }
  return ctx;
}
