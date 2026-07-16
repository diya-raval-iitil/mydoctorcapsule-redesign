import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { SectionLabel } from '@/components/common/Typography';
import {
  SectionReveal,
  SectionBadge,
  SectionHeading,
  SectionBody,
  SectionActions,
} from '@/components/common/MotionWrappers';
import { CTA_META } from '@/constants/site';
import { motionTransition } from '@/animations';

function CTASection() {
  return (
    <Section
      id="cta"
      background="transparent"
      padding="default"
      fullWidth
      className="relative overflow-hidden bg-[linear-gradient(135deg,#050D1F,#0A1C3E,#0C2461)]"
    >
      <motion.div
        className="bg-cta-radial pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={motionTransition.large}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)]">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>
            <SectionLabel className="mb-0 !text-white/50">
              Get Started Today
            </SectionLabel>
          </SectionBadge>
          <SectionHeading>
            <h2 className="type-section-title-cta text-white">
              Your next 100 patients are searching right now.
            </h2>
          </SectionHeading>
          <SectionBody className="mt-6">
            <p className="font-body text-base leading-relaxed text-white/60">
              Join 2,400+ doctors who chose MyDoctorCapsule to build a thriving,
              future-proof practice. 14-day free trial. No credit card required.
            </p>
          </SectionBody>

          <SectionActions className="mt-10 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="md"
              href="#"
              ariaLabel="Start your free trial"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Your Free Trial
            </Button>
            <Button
              variant="outline"
              size="md"
              href="#contact"
              ariaLabel="Talk to an advisor"
              icon={Phone}
              iconPosition="left"
            >
              Talk to an Advisor
            </Button>
          </SectionActions>

          <p className="text-sm text-white/40">{CTA_META.join(' + ')}</p>
        </SectionReveal>
      </div>
    </Section>
  );
}

export default memo(CTASection);
