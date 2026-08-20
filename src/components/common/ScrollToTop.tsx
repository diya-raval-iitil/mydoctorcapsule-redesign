import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisInstance } from '@/providers/LenisProvider';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenisInstance();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
