'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingSizes = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  const cardClasses = cn(
    'rounded-2xl bg-surface border border-border-subtle',
    'shadow-sm',
    hover && 'hover:shadow-md hover:border-border transition-shadow duration-[--duration-normal]',
    paddingSizes[padding],
    className
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('text-xl font-semibold text-text-primary', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-text-secondary mt-1', className)}>{children}</p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-border-subtle', className)}>
      {children}
    </div>
  );
}
