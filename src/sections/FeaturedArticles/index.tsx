import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { ArticleCard } from '@/components/common/ArticleCard';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { HEALTH_ARTICLES } from '@/constants/site';
import { useTheme } from '@/context/ThemeContext';

function FeaturedArticlesSection() {
  const { isDark } = useTheme();
  return (
    <Section
      background={isDark ? 'surface' : 'white'}
      padding="none"
      fullWidth
      className="border-primary border-t-8 pt-24 lg:pt-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-14 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p
            className={
              isDark ? 'type-kicker text-white' : 'type-kicker text-text'
            }
          >
            Tips for fitness
          </p>

          <h2
            className={`type-section-title max-w-xl ${
              isDark ? 'text-white' : 'text-text'
            }`}
          >
            Featured Articles
          </h2>
        </FadeLeft>

        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].flatMap(() =>
            HEALTH_ARTICLES.map((article) => (
              <StaggerItem key={`${article.id}-${Math.random()}`}>
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
            )),
          )}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export default memo(FeaturedArticlesSection);
