import { memo, type ReactNode } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { FadeUp } from '@/components/common/MotionWrappers';
import { useIntro } from '@/components/intro';

interface PageHeroProps {
  kicker: string;
  badge: string;
  title: ReactNode;
  primaryLabel: string;
  onPrimaryClick?: () => void;
  primaryHref?: string;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  secondaryHref?: string;
}

function PageHeroComponent({
  kicker,
  badge,
  title,
  primaryLabel,
  onPrimaryClick,
  primaryHref,
  secondaryLabel,
  onSecondaryClick,
  secondaryHref,
}: PageHeroProps) {
  const { enabled, config } = useIntro();

  return (
    <section className="bg-hero-gradient relative overflow-hidden pt-[150px] pb-24 md:pt-[220px] lg:pt-[248px] lg:pb-32">
      {enabled && (
        <div
          id={config.heroAnchorId}
          className="pointer-events-none absolute top-20 right-8 z-20 md:right-12"
          style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10">
        <FadeUp className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <p className="type-kicker !font-normal !text-[#FFFFFF]">{kicker}</p>
            <span className="bg-primary font-body rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-medium text-white">
              {badge}
            </span>
          </div>

          <h1 className="type-hero max-w-4xl text-white">{title}</h1>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="sm"
              href={primaryHref}
              onClick={onPrimaryClick}
              ariaLabel={primaryLabel}
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button
                variant="outline"
                size="sm"
                href={secondaryHref}
                onClick={onSecondaryClick}
                ariaLabel={secondaryLabel}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

export const PageHero = memo(PageHeroComponent);
