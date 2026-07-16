import { memo, type ReactNode, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { ctaHoverMotion, tapMotion } from '@/animations';
import { cn } from '@/utils/cn';

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
    'rounded-[var(--radius-button)] bg-gradient-to-br from-primary to-primary-dark text-white shadow-[var(--shadow-primary-lg)] hover:shadow-[0_12px_40px_0_rgba(26,86,219,0.55)]',
  secondary:
    'rounded-[var(--radius-button)] border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  outline:
    'rounded-[var(--radius-button)] border border-white/20 bg-transparent text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white',
  ghost:
    'rounded-[var(--radius-button)] bg-transparent text-text hover:bg-surface',
  white:
    'rounded-[var(--radius-button)] bg-white text-navy shadow-lg hover:bg-white/95 hover:shadow-xl',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'py-[14px] px-[28px] text-sm leading-6',
  lg: 'px-9 py-4.5 text-sm',
};

function ButtonComponent({
  children,
  variant = 'primary',
  size = 'md',
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
    'font-body inline-flex items-center justify-center gap-2 text-center font-semibold select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
