import { memo } from 'react';
import { motion } from 'framer-motion';
import { useIntro } from './useIntro';

const LOGO_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Premium fullscreen loader: brand logo scales/blurs/fades in over a soft
 * radial glow, with a shimmer line sweeping underneath. Fade-out is handled by
 * the parent <AnimatePresence> via the `exit` transition.
 */
function LoaderComponent() {
  const { config } = useIntro();

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
        <motion.img
          src={config.brandLogo}
          alt=""
          draggable={false}
          style={{ width: config.loaderLogoSize, height: 'auto' }}
          initial={{ scale: 3.5, filter: 'blur(18px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1.3, ease: LOGO_EASE }}
        />

        {/* Shimmer loading line (80 x 2) sweeping left -> right */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{ width: 80, height: 2, backgroundColor: 'rgba(255,255,255,0.12)' }}
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
