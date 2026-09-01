import { memo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { CtaBanner } from '@/components/common/CtaBanner';
import {
  FadeUp,
  FadeLeft,
  FadeRight,
} from '@/components/common/MotionWrappers';
import { getArticleBySlug } from '@/constants/site';
import { useIntro } from '@/components/intro';
import { useTheme } from '@/context/ThemeContext';

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
  const { isDark } = useTheme();

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
              style={{
                width: config.heroLogoSize,
                height: config.heroLogoSize,
              }}
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
                <Link
                  to="/health-tips"
                  className="text-white/60 hover:text-white"
                >
                  Health Tips
                </Link>
                <span className="text-white/60"> &nbsp;/&nbsp; </span>
                <span className="font-medium text-white">{article.title}</span>
              </p>

              <div className="flex flex-col gap-6">
                <h1 className="type-hero max-w-4xl text-white">
                  {article.title}
                </h1>
                <p className="font-display max-w-3xl text-2xl text-white/80">
                  {article.excerpt}
                </p>
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
                    <p className="font-display text-lg text-white">
                      {article.author}
                    </p>
                    <p className="font-body text-sm text-white/80">
                      {article.date}
                    </p>
                  </div>
                </div>
                <span className="text-white/60">/</span>
                <span
                  className="font-display rounded-[10px] px-4 py-1.5 text-base"
                  style={{
                    backgroundColor: article.tagBg,
                    color: article.tagText,
                  }}
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
          background={isDark ? 'surface' : 'white'}
          padding="none"
          fullWidth
          className="border-primary border-t-8 pb-24 lg:pb-28"
        >
          <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden lg:mb-20">
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />

            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isDark ? 'opacity-60' : 'opacity-0'
              }`}
              style={{
                background:
                  'linear-gradient(180deg, rgba(1, 9, 32, 0) 20%, #010920 100%)',
              }}
            />
          </div>

          <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-8 px-[var(--container-px)] lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
            {/* Sidebar Table of Contents */}
            <FadeLeft>
              <div
                className={`border-border sticky top-28 flex flex-col gap-6 rounded-[var(--radius-card-lg)] border p-8 bg-(--color-background)`}
              >
                <p
                  className={`font-display text-[28px] font-medium ${
                    isDark ? 'text-white' : 'text-text'
                  }`}
                >
                  Table of contents
                </p>

                <ul
                  role="list"
                  className="divide-border flex flex-col divide-y divide-dashed text-lg font-medium"
                >
                  {article.content.sections.map((section) => (
                    <li
                      key={section.heading}
                      className="py-4 first:pt-0 last:pb-0"
                    >
                      <a
                        href={`#${headingId(section.heading)}`}
                        className={`hover:text-primary transition-colors ${
                          isDark
                            ? 'text-white/80 hover:text-white'
                            : 'text-text/80 hover:text-text'
                        }`}
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeLeft>

            {/* Right Main Content */}
            <FadeRight className="flex flex-col gap-12">
              {/* Intro Text */}
              <div
                className={`flex flex-col gap-6 text-xl leading-8 ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}
              >
                {article.content.intro.map((paragraph, index) => (
                  <p key={index} className="font-display">
                    {paragraph}
                  </p>
                ))}

                {article.content.highlight && (
                  <p
                    className={`font-display font-semibold ${
                      isDark ? 'text-white' : 'text-text'
                    }`}
                  >
                    {article.content.highlight}
                  </p>
                )}
              </div>

              {/* Sections */}
              {article.content.sections.map((section) => (
                <div
                  key={section.heading}
                  id={headingId(section.heading)}
                  className="flex scroll-mt-28 flex-col gap-6"
                >
                  <h2
                    className={`font-display text-[32px] font-semibold ${
                      isDark ? 'text-white' : 'text-text'
                    }`}
                  >
                    {section.heading}
                  </h2>

                  {/* Section Body */}
                  {typeof section.body === 'string' && (
                    <p
                      className={`font-display text-xl leading-8 ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`}
                    >
                      {section.body}
                    </p>
                  )}
                  {Array.isArray(section.body) &&
                    section.body.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={`font-display text-xl leading-8 ${
                          isDark ? 'text-white/80' : 'text-black/80'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}

                  {section.sectionHighlight && (
                    <p
                      className={`font-display text-[20px] font-semibold ${
                        isDark ? 'text-white' : 'text-text'
                      }`}
                    >
                      {section.sectionHighlight}
                    </p>
                  )}

                  {/* Subsections rendering with conditional sizing */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="flex flex-col gap-6 pt-2">
                      {section.subsections.map((sub, sIdx) => {
                        const hasNumber = Boolean(sub.number);
                        return (
                          <div
                            key={sIdx}
                            className={`flex flex-col ${hasNumber ? 'gap-3' : 'gap-1.5'}`}
                          >
                            <h3
                              className={`font-display ${
                                hasNumber
                                  ? 'text-2xl font-semibold'
                                  : 'text-lg font-bold'
                              } ${isDark ? 'text-white' : 'text-text'}`}
                            >
                              {hasNumber
                                ? `${sub.number}. ${sub.heading}`
                                : sub.heading}
                            </h3>

                            {typeof sub.body === 'string' && (
                              <p
                                className={`font-display ${
                                  hasNumber
                                    ? 'text-xl leading-8'
                                    : 'text-base leading-relaxed'
                                } ${isDark ? 'text-white/80' : 'text-black/80'}`}
                              >
                                {sub.body}
                              </p>
                            )}

                            {Array.isArray(sub.body) &&
                              sub.body.map((subPara, spIdx) => (
                                <p
                                  key={spIdx}
                                  className={`font-display ${
                                    hasNumber
                                      ? 'text-xl leading-8'
                                      : 'text-base leading-relaxed'
                                  } ${isDark ? 'text-white/80' : 'text-black/80'}`}
                                >
                                  {subPara}
                                </p>
                              ))}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Bullets List Rendering (Keeps large text-xl sizing) */}
                  {section.bulletsIntro && (
                    <p
                      className={`font-display text-xl leading-8 ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`}
                    >
                      {section.bulletsIntro}
                    </p>
                  )}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul
                      className={`font-display flex list-disc flex-col gap-2 pl-6 text-lg leading-8 ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`}
                    >
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.bulletsOutro && (
                    <p
                      className={`font-display text-xl leading-8 ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`}
                    >
                      {section.bulletsOutro}
                    </p>
                  )}
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
