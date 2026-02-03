'use client';

import { motion, Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function AnimatedLetters({ text, className, delay = 0 }: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
