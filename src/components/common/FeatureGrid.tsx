import { memo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { IconBox } from '@/components/common/IconBox';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';

interface FeatureGridItem {
  id: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  kicker: string;
  title: string;
  items: readonly FeatureGridItem[];
}

function FeatureGridComponent({ kicker, title, items }: FeatureGridProps) {
  return (
    <Section background="dark" padding="none" fullWidth className="py-24 lg:py-28">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-16 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p className="type-kicker !text-[#FFFFFF] !font-normal">{kicker}</p>
          <h2 className="type-section-title max-w-2xl !text-white">{title}</h2>
        </FadeLeft>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <div className="border-border-light h-full rounded-[var(--radius-card-lg)] border bg-white/5 p-9">
                <IconBox className="bg-primary mb-6 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                </IconBox>
                <p className="font-display mb-2 text-2xl text-white">{item.title}</p>
                <p className="font-body text-lg text-white/80">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export const FeatureGrid = memo(FeatureGridComponent);
