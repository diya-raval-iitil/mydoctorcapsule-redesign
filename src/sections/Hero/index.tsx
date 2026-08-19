import { memo } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HERO_HIGHLIGHTS, STATS } from '@/constants/site';
import { heroContainer, heroItem } from '@/animations';
import { motion } from 'framer-motion';
import { useIntro } from '@/components/intro';
import homeHeroBg from '@/assets/images/home_hero_bg.png';

function HeroSection() {
  const { enabled, config } = useIntro();

  return (
    <>
      <section className="relative overflow-hidden md:h-screen h-[80vh] flex items-center">
        <img
          src={homeHeroBg}
          alt=""
          aria-hidden="true"
          className="absolute top-[10%] inset-0 h-full w-full object-cover"
        />
        {enabled && (
          <div
            id={config.heroAnchorId}
            className="pointer-events-none absolute top-28 right-8 z-20 md:right-12"
            style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
            aria-hidden="true"
          />
        )}

        <Container className="relative z-10">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.div
              variants={heroItem}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <p className="type-kicker !text-[#FFFFFF] !font-normal">Healthcare that fits your life</p>
              <span className="bg-primary font-body rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-medium text-white">
                Your Healthcare, All In One Place
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="type-hero mb-10 lg:max-w-3xl text-white"
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
      <section className="relative bg-cover bg-center bg-[#010920] lg:py-32 py-20">
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={heroItem}
            >
              <video
                src="/home_hero_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover rounded-xl lg:sticky lg:top-28"
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

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card-lg)] border border-white/10 sm:grid-cols-3">
                  {HERO_HIGHLIGHTS.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="flex flex-col gap-3 bg-white/[0.03] p-6"
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
                <p className="font-display text-2xl text-white">My Dr. Capsule in numbers</p>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card-lg)] border border-white/10">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-3 bg-white/[0.03] px-6 py-10 text-center"
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
