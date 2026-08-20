import { memo } from 'react';
import { Section } from '@/components/common/Section';
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { STATS } from '@/constants/site';
import problemImg from '@/assets/images/about-consultations.jpg';
import statIconProviders from '@/assets/images/stat-icon-providers.png';
import statIconAppointments from '@/assets/images/stat-icon-appointments.png';
import statIconRating from '@/assets/images/stat-icon-rating.png';
import statIconGrowth from '@/assets/images/stat-icon-growth.png';

const STAT_ICONS = [statIconProviders, statIconAppointments, statIconRating, statIconGrowth];

function AboutProblemVisionSection() {
  return (
    <Section
      background="white"
      padding="none"
      fullWidth
      className="border-primary rounded-[var(--radius-panel)] border-t-8 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-28 px-[var(--container-px)]">
        {/* The Problem */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeLeft className="flex flex-col gap-6">
            <p className="type-kicker text-text">The Problem</p>
            <h2 className="type-section-title max-w-xl">
              Healthcare shouldn&apos;t feel fragmented.
            </h2>
            <p className="type-body max-w-xl">
              Finding a doctor, booking an appointment, arranging diagnostic tests or
              getting medicines can often mean using multiple services.
            </p>
            <p className="type-body max-w-xl">
              My Doctor Capsule brings these essential healthcare needs together
              through one connected platform.
            </p>
          </FadeLeft>

          <FadeRight className="overflow-hidden rounded-[var(--radius-card-lg)]">
            <img
              src={problemImg}
              alt="Doctor consulting with a patient"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </FadeRight>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col gap-14">
          <FadeLeft className="flex flex-col gap-6">
            <p className="type-kicker text-text">Our Vision</p>
            <h2 className="type-section-title max-w-2xl">
              One connected ecosystem for better healthcare access.
            </h2>
            <p className="type-body max-w-2xl">
              We aim to make everyday healthcare more convenient by connecting people
              with the services and professionals they need all from a single,
              trusted platform.
            </p>
          </FadeLeft>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div className="border-border card-hover flex h-full flex-col items-center gap-4 rounded-[var(--radius-card-lg)] border bg-white p-8 text-center">
                  <img
                    src={STAT_ICONS[index]}
                    alt=""
                    aria-hidden="true"
                    className="h-[80px] w-[80px] object-contain"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-display text-text text-[34px] font-medium">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </p>
                    <p className="type-body text-sm">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutProblemVisionSection);
