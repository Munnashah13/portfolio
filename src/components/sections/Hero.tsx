'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedText } from '@/components/motion/AnimatedText';
import { AnimatedOrbs } from '@/components/motion/AnimatedOrbs';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Animated background orbs */}
      <AnimatedOrbs />

      <div className="container">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-tight mb-4">
            <AnimatedText text="Munna Shah" className="text-text-primary" delay={0.2} />
          </h1>

          {/* Title */}
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-text-secondary mb-6">
            <AnimatedText text="I build things for the web." delay={0.4} />
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-text-secondary text-lg max-w-2xl mb-10"
          >
            I&apos;m a full-stack developer specializing in building exceptional digital
            experiences. Currently focused on creating accessible, human-centered
            products with modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-border-strong flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
