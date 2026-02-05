'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedOrbs } from '@/components/motion/AnimatedOrbs';
import { MagneticWrapper } from '@/components/motion/MagneticWrapper';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Animated background orbs */}
      <AnimatedOrbs />

      <div className="container">
        <div className="max-w-5xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name - bold and dominant */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[clamp(3rem,10vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-6"
          >
            <span className="text-white">Munna</span>
            <br />
            <span className="text-white">Shah</span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-xl md:text-2xl text-text-secondary font-medium mb-6 max-w-2xl"
          >
            Full-Stack Developer &mdash; I design and build digital products
            that are fast, accessible, and built to last.
          </motion.p>

          {/* Subtle tech stack mention */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-text-tertiary mb-10 text-sm tracking-wide"
          >
            React &middot; Next.js &middot; TypeScript &middot; Node.js &middot; Tailwind CSS
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticWrapper>
              <Link href="/projects">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  View My Work
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </MagneticWrapper>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-text-tertiary text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
