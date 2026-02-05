'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function ContactCTA() {
  return (
    <section className="section-padding bg-bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3 text-sm tracking-wider uppercase">
              What&apos;s Next?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              I&apos;m currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get In Touch
                </Button>
              </Link>
              <a href="mailto:shahmunna122002@gmail.com">
                <Button variant="outline" size="lg">
                  shahmunna122002@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
