import { memo } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { DashboardPreview } from '@/components/ui/DashboardPreview';
import { TRUST_INDICATORS } from '@/constants/site';
import { ArrowRight, Phone } from 'lucide-react';
import { heroContainer, heroItem } from '@/animations';
import { useIntro } from '@/components/intro';

function HeroSection() {
  const { enabled, config } = useIntro();

  return (
    <section className="bg-hero-gradient relative min-h-screen overflow-hidden pt-20">
      <div
        className="hero-glow top-1/2 left-[-192px] -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="hero-glow right-[-192px] bottom-[-192px]"
        aria-hidden="true"
      />

      {enabled && (
        <div
          id={config.heroAnchorId}
          className="pointer-events-none absolute top-28 right-8 z-20 md:right-12"
          style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10 flex flex-col items-center pt-16 pb-0 text-center sm:pt-20">
        <motion.div
          className="flex w-full flex-col items-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroItem}>
            <Badge className="mb-8">
              Trusted by 2,400+ healthcare providers across India
            </Badge>
          </motion.div>

          <motion.div variants={heroItem}>
            <h1 className="type-hero mb-6 max-w-4xl text-white">
              Grow Your Practice
              <br />
              <span className="text-gradient-hero">
                Digitally. Effortlessly.
              </span>
            </h1>
          </motion.div>

          <motion.div variants={heroItem}>
            <p className="type-body-lg mb-10 max-w-2xl">
              MyDoctorCapsule is the all-in-one clinical growth platform -
              patient acquisition, digital visibility, appointment management,
              and reputation building, unified in one intelligent ecosystem.
            </p>
          </motion.div>

          <motion.div variants={heroItem}>
            <div className="mb-12 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <Button
                variant="primary"
                size="md"
                href="#cta"
                ariaLabel="Start free trial"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#workflow"
                ariaLabel="Book a demo"
                icon={Phone}
                iconPosition="left"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={heroContainer}
            className="mb-16 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4"
          >
            {TRUST_INDICATORS.map((label) => (
              <motion.div key={label} variants={heroItem}>
                <div className="flex items-center gap-2">
                  <CircleCheck
                    className="text-accent-green h-[18px] w-[18px]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm font-normal text-white/40">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={heroItem}
            className="w-full max-w-[760px] px-2 md:max-w-[860px] lg:max-w-[960px]"
          >
            <DashboardPreview />
          </motion.div>
        </motion.div>
      </Container>

      <div className="relative mt-12 -mb-px h-[90px] w-full">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,50 C180,35 240,35 360,50 C480,65 600,65 720,50 C840,35 960,35 1080,50 C1200,65 1260,65 1440,50 L1440,90 L0,90 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}

export default memo(HeroSection);
