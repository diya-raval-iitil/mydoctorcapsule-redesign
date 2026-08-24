import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntro } from './useIntro';

const LOGO_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Premium fullscreen loader:
 * 1. Brand logo scales/blurs in and stays for 1.5s
 * 2. Cross-fades smoothly to YAKA brand logo for 1.5s
 */
function LoaderComponent() {
  const { config } = useIntro();
  const [showYaka, setShowYaka] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYaka(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: '#050810' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: config.loaderFadeDuration / 1000,
        ease: 'easeInOut',
      }}
    >
      {/* Soft radial glow behind the logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          width: config.loaderLogoSize * 2.6,
          height: config.loaderLogoSize * 2.6,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Fixed container for seamless logo cross-fade */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: config.loaderLogoSize,
            height: config.loaderLogoSize,
          }}
        >
          {/* First Logo: Initial Brand Logo */}
          <motion.img
            src={config.logo}
            alt="Brand Logo"
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ scale: 3.5, filter: 'blur(18px)', opacity: 0 }}
            animate={{
              scale: 1,
              filter: showYaka
                ? 'brightness(0) invert(1) blur(8px)'
                : 'brightness(0) invert(1) blur(0px)',
              opacity: showYaka ? 0 : 1,
            }}
            transition={{
              duration: showYaka ? 0.6 : 1.2,
              ease: LOGO_EASE,
            }}
          />

          {/* Second Logo: YAKA Brand Logo */}
          <motion.img
            src={config.brandLogo}
            alt="Yaka Logo"
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
            animate={{
              opacity: showYaka ? 1 : 0,
              filter: showYaka ? 'blur(0px)' : 'blur(10px)',
              scale: showYaka ? 1 : 0.9,
            }}
            transition={{ duration: 0.6, ease: LOGO_EASE }}
          />
        </div>

        {/* Shimmer loading line (80 x 2) sweeping left -> right */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: 80,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.12)',
          }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-y-0"
            style={{
              width: '40%',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
            }}
            animate={{ x: ['-120%', '300%'] }}
            transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export const Loader = memo(LoaderComponent);
