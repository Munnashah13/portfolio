'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks';

interface PageTransitionProps {
  children: ReactNode;
}

const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const fullMotionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : fullMotionVariants;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
