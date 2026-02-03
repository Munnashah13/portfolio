'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Orb {
  id: number;
  size: number;
  color: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
  drift: { x: number[]; y: number[] };
}

const orbs: Orb[] = [
  {
    id: 1,
    size: 384,
    color: 'bg-accent/20',
    x: '15%',
    y: '10%',
    delay: 0,
    duration: 20,
    drift: { x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
  },
  {
    id: 2,
    size: 256,
    color: 'bg-accent/10',
    x: '70%',
    y: '60%',
    delay: 2,
    duration: 25,
    drift: { x: [0, -35, 25, 0], y: [0, 20, -35, 0] },
  },
  {
    id: 3,
    size: 192,
    color: 'bg-accent/15',
    x: '80%',
    y: '15%',
    delay: 4,
    duration: 18,
    drift: { x: [0, -25, 15, 0], y: [0, 30, -15, 0] },
  },
  {
    id: 4,
    size: 320,
    color: 'bg-accent/8',
    x: '5%',
    y: '65%',
    delay: 6,
    duration: 22,
    drift: { x: [0, 30, -25, 0], y: [0, -20, 30, 0] },
  },
  {
    id: 5,
    size: 160,
    color: 'bg-accent/12',
    x: '45%',
    y: '5%',
    delay: 3,
    duration: 24,
    drift: { x: [0, -20, 35, 0], y: [0, 25, -20, 0] },
  },
];

export function AnimatedOrbs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      {/* Animated orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.15, 0.95, 1],
                  x: orb.drift.x,
                  y: orb.drift.y,
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.5 }
              : {
                  duration: orb.duration,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}
