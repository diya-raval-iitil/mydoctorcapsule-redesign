import { memo } from 'react';
import { Section } from '@/components/common/Section';
import { ArticleCard } from '@/components/common/ArticleCard';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { ALL_ARTICLES } from '@/constants/site';

function AllArticlesSection() {
  return (
    <Section
      background="white"
      padding="none"
      fullWidth
      className="py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-14 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p className="type-kicker text-text">Health Tips</p>
          <h2 className="type-section-title max-w-xl">All Articles</h2>
        </FadeLeft>

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
      </div>
    </Section>
  );
}

export default memo(AllArticlesSection);
