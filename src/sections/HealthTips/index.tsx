import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { CtaBanner } from '@/components/common/CtaBanner';
import { ArticleCard } from '@/components/common/ArticleCard';
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { ALL_ARTICLES } from '@/constants/site';
import { useTheme } from '@/context/ThemeContext';

function HealthTipsSection() {
  const { isDark } = useTheme();

  return (
    <Section
      id="health-tips"
      background={isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className="py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-16 px-[var(--container-px)]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <FadeLeft className="flex flex-col gap-6">
            <p className="type-kicker text-text">Health Tips</p>
            <h2 className="type-section-title max-w-xl">
              Insights for a healthier life.
            </h2>
          </FadeLeft>
          <FadeRight>
            <Button
              variant="primary"
              size="sm"
              href="/health-tips"
              ariaLabel="Explore all health tips"
            >
              Explore All
            </Button>
          </FadeRight>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_ARTICLES.map((article) => (
            <StaggerItem key={article.id}>
              <ArticleCard
                image={article.image}
                tag={article.tag}
                tagBg={article.tagBg}
                tagText={article.tagText}
                readTime={article.readTime}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                authorPhoto={article.authorPhoto}
                date={article.date}
                href={`/health-tips/${article.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CtaBanner />
      </div>
    </Section>
  );
}

export default memo(HealthTipsSection);
