import { memo, type ReactNode, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ctaHoverMotion, tapMotion } from '@/animations';
import { cn } from '@/utils/cn';

const MotionLink = motion(Link);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'rounded-[var(--radius-button)] bg-gradient-to-br from-primary to-primary-dark text-white hover:shadow-[0_12px_40px_0_rgba(26,86,219,0.55)] !shadow-none',
  secondary:
    'rounded-[var(--radius-button)] border border-[#0000001A] bg-[#0000000A] text-[#232323] backdrop-blur-sm hover:bg-white/20 !shadow-none',
  outline:
    'rounded-[var(--radius-button)] border border-white/20 bg-transparent text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white',
  ghost:
    'rounded-[var(--radius-button)] bg-transparent text-text hover:bg-surface',
  white:
    'rounded-[var(--radius-button)] bg-white text-navy shadow-lg hover:bg-white/95 hover:shadow-xl',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-3 text-base',
  md: 'px-8 py-5 text-lg',
  lg: 'px-10 py-5 text-lg',
};

function ButtonComponent({
  children,
  variant = 'primary',
  size = 'sm',
  fullWidth = false,
  className,
  href,
  ariaLabel,
  disabled,
  type = 'button',
  onClick,
  icon: Icon,
  iconPosition = 'right',
}: ButtonProps) {
  const classes = cn(
    'font-display inline-flex items-center justify-center gap-2 text-center font-medium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'group',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  );

  // Content helper to cleanly handle layout with icon alignment
  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-[250ms] ease-[var(--ease-out-expo)] group-hover:-translate-x-0.5">
          <Icon className="h-4 w-4" />
        </span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-[250ms] ease-[var(--ease-out-expo)] group-hover:translate-x-0.5">
          <Icon className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('/')) {
      return (
        <MotionLink
          to={href}
          aria-label={ariaLabel}
          className={classes}
          whileHover={ctaHoverMotion}
          whileTap={tapMotion}
        >
          {renderContent()}
        </MotionLink>
      );
    }

    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        whileHover={ctaHoverMotion}
        whileTap={tapMotion}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={ctaHoverMotion}
      whileTap={tapMotion}
    >
      {renderContent()}
    </motion.button>
  );
}

export const Button = memo(ButtonComponent);
