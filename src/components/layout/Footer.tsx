import { memo } from 'react';
import { Shield } from 'lucide-react';
import { Section } from '@/components/common/Section';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/common/MotionWrappers';
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from '@/constants/site';

const FOOTER_COLUMNS = [
  { title: 'Platform', links: FOOTER_LINKS.platform },
  { title: 'Specialties', links: FOOTER_LINKS.specialties },
  { title: 'Company', links: FOOTER_LINKS.company },
  { title: 'Legal', links: FOOTER_LINKS.legal },
] as const;

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      id="contact"
      background="white"
      padding="default"
      className="!pt-20 !pb-10"
    >
      <StaggerContainer className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <StaggerItem>
          <a
            href="/"
            className="mb-5 inline-block"
            aria-label={`${SITE_NAME} home`}
          >
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-text">MyDoctor</span>
              <span className="text-accent">Capsule</span>
            </span>
          </a>
          <p className="text-text-body mb-5 max-w-xs text-sm leading-relaxed">
            {SITE_TAGLINE}
          </p>
          <div className="text-muted flex items-center gap-2 text-xs">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            <span>DISHA Compliance + ISO 27001</span>
          </div>
        </StaggerItem>

        {FOOTER_COLUMNS.map((column) => (
          <StaggerItem key={column.title}>
            <h3 className="text-muted mb-5 text-[11px] font-bold tracking-[0.12em] uppercase">
              {column.title}
            </h3>
            <ul className="space-y-3" role="list">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-body hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="border-border mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
        <p className="text-muted text-sm">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
        <p className="text-muted text-sm">
          Made with care for India&apos;s healthcare.
        </p>
      </FadeUp>
    </Section>
  );
}

export const Footer = memo(FooterComponent);
