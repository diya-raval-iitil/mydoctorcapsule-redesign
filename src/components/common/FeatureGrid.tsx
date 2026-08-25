import { memo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { IconBox } from '@/components/common/IconBox';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface FeatureGridItem {
  id: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  kicker: string;
  title: string;
  items: readonly FeatureGridItem[];
  className?: string;
}

function FeatureGridComponent({
  kicker,
  title,
  items,
  className,
}: FeatureGridProps) {
  const { isDark } = useTheme();

  return (
    <Section
      background={isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className={cn('py-24 lg:py-28', className)}
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-16 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p
            className={`type-kicker !font-normal ${
              isDark ? 'text-white' : 'text-text'
            }`}
          >
            {kicker}
          </p>

          <h2
            className={`type-section-title max-w-2xl ${
              isDark ? 'text-white' : 'text-text'
            }`}
          >
            {title}
          </h2>
        </FadeLeft>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className={`border-border h-full rounded-[var(--radius-card-lg)] border p-9 ${
                  isDark ? 'bg-white/5' : 'bg-white'
                }`}
              >
                <IconBox className="bg-primary mb-6 rounded-full">
                  <ShieldCheck
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </IconBox>

                <p
                  className={`font-display mb-2 text-2xl ${
                    isDark ? 'text-white' : 'text-text'
                  }`}
                >
                  {item.title}
                </p>

                <p
                  className={`font-body text-lg ${
                    isDark ? 'text-white/80' : 'text-text-body'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export const FeatureGrid = memo(FeatureGridComponent);
