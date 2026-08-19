import { memo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { IconBox } from '@/components/common/IconBox';
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { SERVICES_HIGHLIGHTS } from '@/constants/site';

function ServicesHighlightsSection() {
  return (
    <Section background="dark" padding="none" fullWidth className="py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] items-center gap-14 px-[var(--container-px)] lg:grid-cols-2 lg:gap-20">
        <FadeLeft className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="type-kicker !text-[#FFFFFF]">Why My Doctor Capsule</p>
            <h2 className="type-section-title max-w-xl !text-white">
              Built around trust, simplicity and access.
            </h2>
            <p className="font-body max-w-xl text-lg text-white/70">
              We bring healthcare services, professionals and technology together to
              create a convenient digital experience, so quality care is never out of
              reach for anyone in Hyderabad and beyond.
            </p>
          </div>
          <div>
            <Button variant="primary" size="sm" href="/contact" ariaLabel="Get started">
              Get Started
            </Button>
          </div>
        </FadeLeft>

        <FadeRight>
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SERVICES_HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.id}>
                <div className="border-border-light h-full rounded-[var(--radius-card-lg)] border bg-white/5 p-8">
                  <IconBox className="bg-primary mb-6 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
                  </IconBox>
                  <p className="font-display mb-2 text-xl text-white">{item.title}</p>
                  <p className="font-body text-sm text-white/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeRight>
      </div>
    </Section>
  );
}

export default memo(ServicesHighlightsSection);
