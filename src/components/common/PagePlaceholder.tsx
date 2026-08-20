import { memo } from 'react';
import { Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeUp } from '@/components/common/MotionWrappers';
import { useIntro } from '@/components/intro';

interface PagePlaceholderProps {
  kicker: string;
  title: string;
  subtitle: string;
}

function PagePlaceholderComponent({ kicker, title, subtitle }: PagePlaceholderProps) {
  const { enabled, config } = useIntro();

  return (
    <section className="bg-hero-gradient relative overflow-hidden pt-[220px] pb-24 lg:pt-[248px] lg:pb-32">
      <div className="hero-glow top-0 left-[-192px]" aria-hidden="true" />
      <div className="hero-glow right-[-192px] bottom-[-192px]" aria-hidden="true" />

      {enabled && (
        <div
          id={config.heroAnchorId}
          className="pointer-events-none absolute top-20 left-1/2 z-20 -translate-x-1/2"
          style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10 text-center">
        <FadeUp>
          <p className="type-kicker mb-5 text-white">{kicker}</p>
          <h1 className="type-hero mx-auto mb-6 max-w-3xl text-white">{title}</h1>
          <p className="type-lead mx-auto mb-10 max-w-xl text-white/60">{subtitle}</p>
          <div className="border-border-light bg-white/5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 backdrop-blur-sm">
            <Sparkles className="text-accent h-4 w-4" aria-hidden="true" />
            <span className="font-body text-sm font-medium text-white/80">
              This page is coming soon
            </span>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

export const PagePlaceholder = memo(PagePlaceholderComponent);
