import { useState, useEffect } from 'react';
import { useLenisInstance } from '@/providers/LenisProvider';

export function useScrollPosition(threshold = 50): boolean {
  const lenis = useLenisInstance();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = (scroll: number) => {
      setIsScrolled(scroll > threshold);
    };

    if (lenis) {
      update(lenis.scroll);

      const onScroll = ({ scroll }: { scroll: number }) => {
        update(scroll);
      };

      lenis.on('scroll', onScroll);
      return () => {
        lenis.off('scroll', onScroll);
      };
    }

    const handleScroll = () => {
      update(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lenis, threshold]);

  return isScrolled;
}

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
