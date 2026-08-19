import { memo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { CtaBanner } from '@/components/common/CtaBanner';
import { FadeUp, FadeLeft, FadeRight } from '@/components/common/MotionWrappers';
import { getArticleBySlug } from '@/constants/site';
import { useIntro } from '@/components/intro';

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function HealthTipDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { enabled, config } = useIntro();
  const article = getArticleBySlug(Number(slug));

  if (!article) {
    return <Navigate to="/health-tips" replace />;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-hero-gradient relative overflow-hidden pt-[220px] pb-24 lg:pt-[248px] lg:pb-24">
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
              <p className="font-body text-base">
                <Link to="/" className="text-white/60 hover:text-white">
                  Home
                </Link>
                <span className="text-white/60"> &nbsp;/&nbsp; </span>
                <Link to="/health-tips" className="text-white/60 hover:text-white">
                  Health Tips
                </Link>
                <span className="text-white/60"> &nbsp;/&nbsp; </span>
                <span className="font-medium text-white">{article.title}</span>
              </p>

              <div className="flex flex-col gap-6">
                <h1 className="type-hero max-w-4xl text-white">{article.title}</h1>
                <p className="font-display max-w-3xl text-2xl text-white/80">{article.excerpt}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={article.authorPhoto}
                    alt={article.author}
                    loading="lazy"
                    decoding="async"
                    className="h-[50px] w-[50px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-lg text-white">{article.author}</p>
                    <p className="font-body text-sm text-white/80">{article.date}</p>
                  </div>
                </div>
                <span className="text-white/60">/</span>
                <span
                  className="font-display rounded-[10px] px-4 py-1.5 text-base"
                  style={{ backgroundColor: article.tagBg, color: article.tagText }}
                >
                  {article.tag}
                </span>
                <span className="font-body text-sm font-semibold text-white">
                  {article.readTime}
                </span>
              </div>
            </FadeUp>
          </Container>
        </section>

        <Section
          background="white"
          padding="none"
          fullWidth
          className="pb-24 lg:pb-28 border-primary rounded-[var(--radius-panel)] border-t-8"
        >
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            decoding="async"
            className="mb-16 aspect-[21/9] w-full rounded-[2rem] object-cover lg:mb-20"
          />

          <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-8 px-[var(--container-px)] lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
            <FadeLeft>
              <div className="border-border sticky top-28 flex flex-col gap-10 rounded-[var(--radius-card-lg)] border bg-white p-8">
                <p className="font-display text-text text-[32px] font-medium">Table of contents</p>
                <ul role="list" className="divide-border flex flex-col divide-y divide-dashed">
                  {article.content.sections.map((section) => (
                    <li key={section.heading} className="py-4 first:pt-0 last:pb-0">
                      <a
                        href={`#${headingId(section.heading)}`}
                        className="font-display hover:text-primary text-xl text-black/80"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeLeft>

            <FadeRight className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 text-xl leading-8 text-black/80">
                {article.content.intro.map((paragraph, index) => (
                  <p key={index} className="font-display">
                    {paragraph}
                  </p>
                ))}
                <p className="font-display text-text font-semibold">
                  {article.content.highlight}
                </p>
              </div>

              {article.content.sections.map((section) => (
                <div
                  key={section.heading}
                  id={headingId(section.heading)}
                  className="flex scroll-mt-28 flex-col gap-4"
                >
                  <h2 className="font-display text-text text-[32px] font-medium">
                    {section.heading}
                  </h2>
                  <p className="font-display text-xl leading-8 text-black/80">{section.body}</p>
                </div>
              ))}
            </FadeRight>
          </div>

          <div className="mx-auto mt-16 w-full max-w-[var(--container-max)] px-[var(--container-px)]">
            <CtaBanner />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default memo(HealthTipDetailPage);
