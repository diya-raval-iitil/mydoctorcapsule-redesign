import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { SectionLabel, SectionHeading } from '@/components/common/Typography';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';

function TestimonialsSection() {
  return (
    <Section id="testimonials" background="surface-alt" padding="default">
      <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
        <SectionLabel className="mb-4">Doctor Stories</SectionLabel>
        <SectionHeading>Real doctors. Real growth.</SectionHeading>
      </FadeUp>

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
