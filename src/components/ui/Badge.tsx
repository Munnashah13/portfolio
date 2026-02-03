import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-accent/10 text-accent border-accent/20',
  secondary: 'bg-bg-secondary text-text-secondary border-border',
  outline: 'bg-transparent text-text-secondary border-border-strong',
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  error: 'bg-error/10 text-error border-error/20',
};

const badgeSizes: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        'transition-colors duration-[--duration-fast]',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
