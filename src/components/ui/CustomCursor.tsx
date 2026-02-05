'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type CursorVariant = 'default' | 'hover' | 'project' | 'external';

const cursorSizes: Record<CursorVariant, number> = {
  default: 40,
  hover: 60,
  project: 80,
  external: 60,
};

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useMediaQuery('(pointer: coarse)');
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, restDelta: 0.001 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [mouseX, mouseY, isVisible]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest(
      '[data-cursor="project"], a[target="_blank"], a, button, [role="button"], input, textarea, select'
    );

    if (!el) {
      setVariant('default');
      return;
    }

    if (el.matches('[data-cursor="project"]')) {
      setVariant('project');
    } else if (el.matches('a[target="_blank"]')) {
      setVariant('external');
    } else if (el.matches('a, button, [role="button"], input, textarea, select')) {
      setVariant('hover');
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement | null;

    const leftInteractive = target.closest(
      '[data-cursor="project"], a[target="_blank"], a, button, [role="button"], input, textarea, select'
    );
    const enteredInteractive = relatedTarget?.closest(
      '[data-cursor="project"], a[target="_blank"], a, button, [role="button"], input, textarea, select'
    );

    if (leftInteractive && !enteredInteractive) {
      setVariant('default');
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isTouch) return;

    document.documentElement.classList.add('custom-cursor-active');
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [
    prefersReducedMotion,
    isTouch,
    handleMouseMove,
    handleMouseOver,
    handleMouseOut,
    handleMouseLeave,
    handleMouseEnter,
  ]);

  if (prefersReducedMotion || isTouch) return null;

  const size = cursorSizes[variant];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10000]"
      aria-hidden="true"
    >
      {/* Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: variant === 'project' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Circle */}
      <motion.div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          x: circleX,
          y: circleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
          backgroundColor:
            variant === 'project'
              ? 'rgb(var(--accent-primary) / 0.8)'
              : variant === 'hover' || variant === 'external'
                ? 'rgb(var(--accent-primary) / 0.1)'
                : 'transparent',
          borderWidth: variant === 'project' ? 0 : 1.5,
          borderColor: 'rgb(var(--accent-primary) / 0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {variant === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-white text-xs font-medium"
          >
            View
          </motion.span>
        )}
        {variant === 'external' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-accent text-sm"
          >
            ↗
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
