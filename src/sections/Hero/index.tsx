import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HERO_HIGHLIGHTS, STATS } from '@/constants/site';
import { heroContainer, heroItem } from '@/animations';
import { motion } from 'framer-motion';
import { useIntro } from '@/components/intro';

const MOBILE_BREAKPOINT_QUERY = '(max-width: 767px)';

function HeroSection() {
  const { enabled, config } = useIntro();
  const [videoMounted, setVideoMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileVideoFailedRef = useRef(false);
  const [, forceRerenderAfterVideoError] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mount video client-side to prevent SSR hydration autoplay blocks.
  useEffect(() => {
    setVideoMounted(true);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
    setIsMobile(mql.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const handleVideoError = useCallback(() => {
    if (isMobile && !mobileVideoFailedRef.current) {
      mobileVideoFailedRef.current = true;
      forceRerenderAfterVideoError((n) => n + 1);
    }
  }, [isMobile]);

  const heroVideoSrc =
    isMobile && !mobileVideoFailedRef.current
      ? '/hero_bg_video_mobile.mp4'
      : '/hero_bg_video.mp4';

  useEffect(() => {
    if (!videoMounted) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);
    document.addEventListener('touchstart', playVideo, {
      once: true,
      passive: true,
    });
    document.addEventListener('scroll', playVideo, {
      once: true,
      passive: true,
    });
    document.addEventListener('click', playVideo, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
      document.removeEventListener('touchstart', playVideo);
      document.removeEventListener('scroll', playVideo);
      document.removeEventListener('click', playVideo);
    };
  }, [videoMounted, heroVideoSrc]);

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#010920] md:bg-gradient-to-b md:from-[#000508] md:via-[#2e4896] md:to-[#1246d6] pt-[180px] pb-24 lg:pt-[220px] lg:pb-32">
        {/* Background Video */}
        {videoMounted && (
          <video
            key={heroVideoSrc}
            ref={videoRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain object-center pt-24 md:object-cover"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            onError={handleVideoError}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        )}

        {/* Optional overlay to adjust text contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-black/30"
        />

        {enabled && (
          <div
            id={config.heroAnchorId}
            className="pointer-events-none absolute top-20 right-8 z-20 md:right-12"
            style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
            aria-hidden="true"
          />
        )}

        <Container className="relative z-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-4"
            >
              <p className="type-kicker !font-normal !text-[#FFFFFF]">
                Healthcare that fits your life
              </p>
              <span className="bg-primary font-body rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-medium text-white">
                Your Healthcare, All In One Place
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="type-hero max-w-2xl text-white"
            >
              Healthcare Designed Around Your Daily Needs
            </motion.h1>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="sm"
                href="/services"
                ariaLabel="Explore the platform"
              >
                Explore the platform
              </Button>
              <Button
                variant="outline"
                size="sm"
                href="/contact"
                ariaLabel="Request a demo"
              >
                Request a demo
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative bg-[#010920] bg-cover bg-center py-20 lg:py-32">
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={heroItem}>
              <video
                src="/home_hero_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full rounded-xl object-cover lg:sticky lg:top-28"
                aria-label="MyDoctorCapsule platform walkthrough"
              />
            </motion.div>

            <div className="flex flex-col gap-16">
              <motion.div variants={heroItem} className="flex flex-col gap-10">
                <p className="type-lead max-w-xl text-white">
                  Bring essential healthcare services together in one convenient
                  digital experience — from finding the right specialist to
                  managing health records, prescriptions and lab reports, all
                  from your phone.
                </p>

                <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-card-lg)] border border-[#232323] sm:grid-cols-3">
                  {HERO_HIGHLIGHTS.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="flex flex-col gap-3 border-[#232323] bg-transparent p-6 sm:border-b-0 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-r"
                    >
                      <p className="font-display text-base font-medium text-white">
                        {highlight.title}
                      </p>
                      <p className="font-body text-sm text-white/70">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={heroItem} className="flex flex-col gap-8">
                <p className="font-display text-2xl text-white">
                  My Dr. Capsule in numbers
                </p>
                <div className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-card-lg)] border border-[#232323]">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-3 border-[#232323] bg-transparent px-6 py-10 text-center [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r"
                    >
                      <p className="font-display text-4xl font-normal text-white">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          decimals={'decimals' in stat ? stat.decimals : 0}
                        />
                      </p>
                      <p className="font-body text-base text-white/80">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default memo(HeroSection);