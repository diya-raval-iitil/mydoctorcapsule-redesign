import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { useIntro } from '@/components/intro';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from '@/constants/site';

const FOOTER_COLUMNS = [
  { title: 'Company', links: FOOTER_LINKS.company },
  { title: 'Legal', links: FOOTER_LINKS.legal },
] as const;

function isInternalLink(href: string) {
  return href.startsWith('/');
}

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  const { config } = useIntro();

  return (
    <footer className="bg-navy w-full">
      <Section
        background="transparent"
        padding="none"
        fullWidth
        className="mx-auto max-w-[1260px] px-6 py-10 sm:px-8 sm:py-12 lg:px-[60px] lg:py-6"
      >
        <StaggerContainer className="flex flex-col gap-y-8 sm:grid sm:grid-cols-[1.6fr_1fr_1fr] sm:gap-x-10 lg:grid-cols-[minmax(0,1fr)_150px_120px] lg:gap-x-10">
          {/* Brand Section */}
          <StaggerItem>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-1 lg:mb-2"
              aria-label={`${SITE_NAME} home`}
            >
              <img
                src={config.logo}
                alt="logo"
                className="h-7 w-auto object-contain lg:h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <p className="mt-3 mb-3 font-[family-name:var(--font-body)] text-[12px] tracking-wide text-white lg:mt-1 lg:mb-2">
              A <span className="font-bold">YAKA</span> Brand
            </p>

            <p className="font-display max-w-md text-xs leading-relaxed text-white/80 sm:text-[13px] lg:max-w-[330px]">
              {SITE_TAGLINE}
            </p>
          </StaggerItem>

          {/* Link Columns */}
          <div className="flex flex-row justify-between sm:contents">
            {FOOTER_COLUMNS.map((column) => (
              <StaggerItem key={column.title} className="flex-1 sm:flex-none">
                <ul
                  role="list"
                  className="space-y-2.5 sm:space-y-3 lg:space-y-2.5"
                >
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {isInternalLink(link.href) ? (
                        <Link
                          to={link.href}
                          className="font-body text-xs text-white/80 no-underline transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="font-body text-xs text-white/80 no-underline transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-6 flex flex-col items-start gap-2.5 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between lg:mt-5 lg:pt-4">
          <p className="font-body text-left text-[11px] text-white/80 sm:text-xs">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          <p className="font-body text-left text-[11px] text-white/80 sm:text-right sm:text-xs">
            <span>Privacy Policy</span>
            <span className="mx-5">Terms of service</span>
          </p>
        </div>
      </Section>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
