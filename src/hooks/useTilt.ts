'use client';

import { useRef, useCallback, useState } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface TiltConfig {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

interface TiltValues {
  ref: React.RefObject<HTMLElement | null>;
  style: {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
    scale: MotionValue<number>;
    transformPerspective: number;
  };
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  glareX: MotionValue<number>;
  glareY: MotionValue<number>;
  glareOpacity: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isActive: boolean;
}

export function useTilt(config?: TiltConfig): TiltValues {
  const {
    maxTilt = 8,
    perspective = 1000,
    scale: hoverScale = 1.02,
  } = config || {};

  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useMediaQuery('(pointer: coarse)');
  const [isHovering, setIsHovering] = useState(false);

  const isActive = !prefersReducedMotion && !isTouch;

  const springConfig = { stiffness: 300, damping: 25 };

  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const scaleValue = useMotionValue(1);

  const rotateX = useSpring(rotateXValue, springConfig);
  const rotateY = useSpring(rotateYValue, springConfig);
  const scale = useSpring(scaleValue, springConfig);

  const parallaxXValue = useMotionValue(0);
  const parallaxYValue = useMotionValue(0);
  const parallaxX = useSpring(parallaxXValue, springConfig);
  const parallaxY = useSpring(parallaxYValue, springConfig);

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacityValue = useMotionValue(0);
  const glareOpacity = useSpring(glareOpacityValue, springConfig);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isActive || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const percentX = mouseX / (rect.width / 2);
      const percentY = mouseY / (rect.height / 2);

      rotateXValue.set(-percentY * maxTilt);
      rotateYValue.set(percentX * maxTilt);

      parallaxXValue.set(-percentX * 5);
      parallaxYValue.set(-percentY * 5);

      glareX.set(((e.clientX - rect.left) / rect.width) * 100);
      glareY.set(((e.clientY - rect.top) / rect.height) * 100);
      glareOpacityValue.set(0.15);
    },
    [isActive, maxTilt, rotateXValue, rotateYValue, parallaxXValue, parallaxYValue, glareX, glareY, glareOpacityValue]
  );

  const onMouseLeave = useCallback(() => {
    if (!isActive) return;
    rotateXValue.set(0);
    rotateYValue.set(0);
    scaleValue.set(1);
    parallaxXValue.set(0);
    parallaxYValue.set(0);
    glareOpacityValue.set(0);
    setIsHovering(false);
  }, [isActive, rotateXValue, rotateYValue, scaleValue, parallaxXValue, parallaxYValue, glareOpacityValue]);

  const onMouseEnter = useCallback(() => {
    if (!isActive) return;
    scaleValue.set(hoverScale);
    setIsHovering(true);
  }, [isActive, hoverScale, scaleValue]);

  return {
    ref,
    style: {
      rotateX,
      rotateY,
      scale,
      transformPerspective: perspective,
    },
    parallaxX,
    parallaxY,
    glareX,
    glareY,
    glareOpacity,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
    isActive,
  };
}
