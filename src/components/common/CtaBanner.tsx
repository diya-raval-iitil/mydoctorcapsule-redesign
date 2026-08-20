import { memo } from 'react';
import { Button } from '@/components/common/Button';
import ctaPhoneMockup from '@/assets/images/cta-phone-mockup.png';

function CtaBannerComponent() {
  return (
    <div className="bg-surface-alt border-border flex flex-col items-center gap-12 rounded-[30px] border p-10 lg:flex-row lg:justify-between lg:p-14">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="type-section-title max-w-lg !text-[clamp(28px,3.4vw,40px)]">
            Manage Your Health Smarter with MyDoctorCapsule!
          </h3>
          <p className="type-body max-w-xl">
            Explain that the complete property platform is coming soon.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm" href="/services" ariaLabel="Explore all services">
            Explore all services
          </Button>
          <Button variant="secondary" size="sm" href="/contact" ariaLabel="Book a consulations">
            Book a consulations
          </Button>
        </div>
      </div>

      <div className="w-full max-w-[380px] shrink-0">
        <img
          src={ctaPhoneMockup}
          alt="MyDoctorCapsule app showing a book-a-video-consultation prompt"
          loading="lazy"
          decoding="async"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export const CtaBanner = memo(CtaBannerComponent);
