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
    <Section
      background="transparent"
      padding="none"
      fullWidth
      className="bg-navy rounded-t-[var(--radius-panel)] px-[var(--container-px)] py-14 lg:px-[120px] lg:py-[60px]"
    >
      <StaggerContainer className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-[1.6fr_1fr_1fr] lg:gap-x-16">
        <StaggerItem>
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-1"
            aria-label={`${SITE_NAME} home`}
          >
            <img
              src={config.logo}
              alt="logo"
              className="h-[31px] w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <p className="font-display mb-3 text-base text-white">A YAKA Brand</p>
          <p className="font-display max-w-md text-base leading-[1.6] text-white/70">
            {SITE_TAGLINE}
          </p>
        </StaggerItem>

        {FOOTER_COLUMNS.map((column) => (
          <StaggerItem key={column.title}>
            <h3 className="font-body mb-5 text-sm font-bold tracking-[0.1em] text-white uppercase">
              {column.title}
            </h3>
            <ul role="list" className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {isInternalLink(link.href) ? (
                    <Link
                      to={link.href}
                      className="font-body text-sm text-white/80 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/80 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="mt-6 flex flex-col items-center justify-between gap-3  border-white/10 pt-6 sm:flex-row">
        <p className="font-body text-center text-sm text-white/60 sm:text-left">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
        <p className="font-body text-center text-sm text-white/60 sm:text-right">
          Privacy &middot; Terms
        </p>
      </FadeUp>
    </Section>
  );
}

export const Footer = memo(FooterComponent);
