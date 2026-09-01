import { useEffect } from 'react';
import { useLenisInstance } from '@/providers/LenisProvider';

export function useBodyScrollLock(locked: boolean): void {
  const lenis = useLenisInstance();

  useEffect(() => {
    if (locked) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [locked, lenis]);
}
