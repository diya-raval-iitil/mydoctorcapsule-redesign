import { memo } from 'react';
import { Shield, Linkedin } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { motion } from 'framer-motion';
import { useIntro } from '@/components/intro';
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
  const { config } = useIntro();

  return (
    <Section
      id="contact"
      background="white"
      padding="default"
      className="!py-10"
    >
      <StaggerContainer className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-12">
        <StaggerItem className="col-span-2 lg:col-span-1">
          <a
            href="/"
            className="mb-2 flex items-center gap-1"
            aria-label={`${SITE_NAME} home`}
          >
          <motion.img
            src={config.logo}
            alt="logo"
            className="h-full w-50"
            // style={{ opacity: brandOpacity }}
          />
          </a>
          <p className="text-text text-md mb-4">A <span className="font-bold">YAKA</span> Brand</p>
          <p className="text-text-body mb-5 max-w-xs text-sm leading-relaxed">
            {SITE_TAGLINE}
          </p>
          
          {/* Compliance Info */}
          <div className="text-muted flex items-center gap-2 text-xs mb-4">
            <Shield className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>DISHA Compliance + ISO 27001</span>
          </div>

          {/* LinkedIn Link (Filled Icon inside a Rounded Border Container) */}
          <a
            href="https://www.linkedin.com/company/mydoctorcapsule/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted border-muted-foreground/20 hover:text-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
            aria-label="Follow MyDoctor Capsule on LinkedIn"
          >
            <Linkedin className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
          </a>
        </StaggerItem>

        {FOOTER_COLUMNS.map((column) => (
          <StaggerItem key={column.title}>
            <h3 className="text-stale-900 mb-2 text-[11px] font-bold tracking-[0.12em] uppercase">
              {column.title}
            </h3>
            <ul role="list">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-body hover:text-primary text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="border-border mt-4 flex flex-col items-center justify-between gap-4 border-t pt-4 sm:flex-row">
        <p className="text-muted text-center text-sm sm:text-left">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
        <p className="text-muted text-center text-sm sm:text-right">
          Made with care for India&apos;s healthcare.
        </p>
      </FadeUp>
    </Section>
  );
}

export const Footer = memo(FooterComponent);