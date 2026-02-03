import { Metadata } from 'next';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, from full-stack applications to open-source libraries.',
};

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Projects
            </h1>
            <p className="text-text-secondary text-lg">
              A collection of projects I&apos;ve built, from full-stack web applications
              to open-source libraries and developer tools.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
