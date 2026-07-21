import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { SectionLabel, SectionHeading } from '@/components/common/Typography';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import {
  SectionReveal,
  SectionBadge,
  SectionHeading as SectionHeadingReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';

function TestimonialsSection() {
  return (
    <Section id="testimonials" background="surface-alt" padding="default">
      <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
        <SectionBadge>
          <SectionLabel className="mb-0">Doctor Stories</SectionLabel>
        </SectionBadge>
        <SectionHeadingReveal>
          <SectionHeading>Stories that say it all!</SectionHeading>
        </SectionHeadingReveal>
      </SectionReveal>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem key={testimonial.id}>
            <ReviewCard
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              hospital={testimonial.hospital}
              initials={testimonial.initials}
              avatarColor={testimonial.avatarColor}
              rating={testimonial.rating}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export default memo(TestimonialsSection);
