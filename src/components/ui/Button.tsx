'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-text-inverse hover:bg-accent-hover shadow-sm hover:shadow-md',
  secondary:
    'bg-surface-elevated text-text-primary hover:bg-bg-tertiary border border-border',
  ghost: 'text-text-primary hover:bg-bg-secondary',
  outline:
    'border border-border-strong text-text-primary hover:bg-bg-secondary hover:border-accent',
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm gap-1.5',
  md: 'h-11 px-5 text-base gap-2',
  lg: 'h-13 px-7 text-lg gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      type = 'button',
      onClick,
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center',
          'rounded-xl font-medium',
          'transition-colors duration-[--duration-fast] ease-[--ease-default]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && 'w-full',
          className
        )}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

function LoadingSpinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
