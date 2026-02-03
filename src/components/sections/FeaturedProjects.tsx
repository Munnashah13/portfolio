'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-text-secondary max-w-xl">
                A selection of projects I&apos;ve worked on recently.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View All Projects
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
