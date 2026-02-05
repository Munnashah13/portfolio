'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('preloader-shown');

    if (alreadyShown || prefersReducedMotion) {
      setIsLoading(false);
      setHasChecked(true);
      return;
    }

    setHasChecked(true);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('preloader-shown', 'true');
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [prefersReducedMotion]);

  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Name reveal */}
          <div className="flex overflow-hidden mb-8">
            {'Munna Shah'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-5xl font-bold text-text-primary"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-border-subtle rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
