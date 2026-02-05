'use client';

import { useRef, ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface MagneticWrapperProps {
  children: ReactNode;
  radius?: number;
  strength?: number;
  className?: string;
}

export function MagneticWrapper({
  children,
  radius = 50,
  strength = 8,
  className,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useMediaQuery('(pointer: coarse)');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  if (prefersReducedMotion || isTouch) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    const maxDistance = radius + Math.max(rect.width, rect.height) / 2;

    if (distance < maxDistance) {
      const factor = (1 - distance / maxDistance) * strength;
      x.set(distX * (factor / maxDistance) * strength);
      y.set(distY * (factor / maxDistance) * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
