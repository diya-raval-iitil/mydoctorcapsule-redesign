import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/common/Section';
import {
  FadeLeft,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { FEATURED_ARTICLES } from '@/constants/site';

function FeaturedArticlesSection() {
  return (
    <Section
      background="white"
      padding="none"
      fullWidth
      className="py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-14 px-[var(--container-px)]">
        <FadeLeft className="flex flex-col gap-6">
          <p className="type-kicker text-text">Tips for fitness</p>
          <h2 className="type-section-title max-w-xl">Featured Articles</h2>
        </FadeLeft>

        <StaggerContainer className="flex flex-col gap-8">
          {FEATURED_ARTICLES.map((article) => (
            <StaggerItem key={article.id}>
              <Link
                to={`/health-tips/${article.slug}`}
                className="border-border card-hover grid overflow-hidden rounded-[var(--radius-card-lg)] border bg-white sm:grid-cols-2"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="h-90 min-h-[280px] w-full object-cover"
                />
                <div className="flex flex-col justify-between gap-6 p-8 lg:p-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <span
                        className="font-display rounded-[10px] px-4 py-1.5 text-base"
                        style={{ backgroundColor: article.tagBg, color: article.tagText }}
                      >
                        {article.tag}
                      </span>
                      <span className="font-body text-text text-sm font-semibold">
                        {article.readTime}
                      </span>
                    </div>
                    <p className="font-display text-text text-2xl font-medium">{article.title}</p>
                    <p className="type-body text-base">{article.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={article.authorPhoto}
                        alt={article.author}
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-display text-text text-lg">{article.author}</p>
                        <p className="font-body text-muted text-sm">{article.date}</p>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="bg-primary flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

export default memo(FeaturedArticlesSection);
