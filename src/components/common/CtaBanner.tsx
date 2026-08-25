import { memo } from 'react';
import ctaPhoneMockup from '@/assets/images/cta-phone-mockup.png';
import { useComingSoon } from './ComingSoonDialog';
import appleStore from '@/assets/images/apple_store.svg';
import playStore from '@/assets/images/play_store.svg';
import { useTheme } from '@/context/ThemeContext';

function CtaBannerComponent() {
  const { openComingSoon } = useComingSoon();
  const { isDark } = useTheme();

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

        {/* Store Download Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={openComingSoon}
            className={`flex items-center gap-3 rounded-xl border border-white/20 px-5 py-2.5 text-white transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
              isDark
                ? 'bg-[#091027] hover:bg-[#010920]'
                : 'bg-[#010920] hover:bg-black'
            }`}
            aria-label="Download on the App Store"
          >
            <img src={appleStore} alt="App Store" className="h-7 w-7" />

            <div className="flex flex-col text-left">
              <span className="text-[10px] tracking-wider text-gray-300 uppercase">
                Download on the
              </span>
              <span className="text-sm leading-tight font-semibold">
                App Store
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={openComingSoon}
            className={`flex items-center gap-3 rounded-xl border border-white/20 px-5 py-2.5 text-white transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
              isDark
                ? 'bg-[#091027] hover:bg-[#010920]'
                : 'bg-[#010920] hover:bg-black'
            }`}
            aria-label="Get it on Google Play"
          >
            <img src={playStore} alt="Google Play" className="h-7 w-7" />

            <div className="flex flex-col text-left">
              <span className="text-[10px] tracking-wider text-gray-300 uppercase">
                Get it on
              </span>
              <span className="text-sm leading-tight font-semibold">
                Google Play
              </span>
            </div>
          </button>
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
