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
  variant?: 'dark' | 'default';
}

function FeatureGridComponent({
  kicker,
  title,
  items,
  className,
  variant = 'default',
}: FeatureGridProps) {
  const { isDark } = useTheme();

  const isDarkVariant = variant === 'dark';

  return (
    <Section
      background={isDarkVariant ? 'dark' : isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className={cn('py-24 lg:py-28', className)}
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-16 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p
            className={cn(
              'type-kicker !font-normal',
              isDarkVariant
                ? '!text-[#FFFFFF]'
                : isDark
                  ? 'text-white'
                  : 'text-text',
            )}
          >
            {kicker}
          </p>

          <h2
            className={cn(
              'type-section-title',
              isDarkVariant
                ? 'text-[#FFFFFF]!'
                : ` ${isDark ? 'text-white' : 'text-white'}`,
            )}
          >
            {title}
          </h2>
        </FadeLeft>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className={cn(
                  'h-full rounded-[var(--radius-card-lg)] border p-9',
                  isDarkVariant
                    ? 'border-border-light bg-white/5'
                    : `border-border ${isDark ? 'border-[#2323231A] bg-[#010920]' : 'bg-white'}`,
                )}
              >
                <IconBox className="bg-primary mb-6 rounded-full">
                  <ShieldCheck
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </IconBox>

                <p
                  className={cn(
                    'font-display mb-2 text-2xl',
                    isDarkVariant || isDark ? 'text-white' : 'text-black',
                  )}
                >
                  {item.title}
                </p>

                <p
                  className={cn(
                    'font-body text-lg',
                    isDarkVariant
                      ? 'text-white/70'
                      : isDark
                        ? 'text-white/[0.698]'
                        : 'text-black/80',
                  )}
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
