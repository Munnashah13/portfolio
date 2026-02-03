'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-all duration-[--duration-normal] overflow-hidden"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-2xl"
        aria-label={`View ${project.title} project details`}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-bg-secondary">
          {!imageError ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-[--duration-slow] group-hover:scale-105"
              onError={() => setImageError(true)}
              priority={index < 3}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text-tertiary">No image</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent',
              'opacity-0 group-hover:opacity-100',
              'transition-opacity duration-[--duration-normal]'
            )}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <Badge variant="secondary" size="sm">
            {project.category}
          </Badge>

          {/* Title */}
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary line-clamp-2">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" size="sm">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </Link>

      {/* External Links */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={cn(
              'p-2 rounded-xl bg-surface/90 backdrop-blur-sm',
              'text-text-primary hover:text-accent',
              'transition-colors duration-[--duration-fast]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label="View source code on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={cn(
              'p-2 rounded-xl bg-surface/90 backdrop-blur-sm',
              'text-text-primary hover:text-accent',
              'transition-colors duration-[--duration-fast]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label="View live demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border-subtle overflow-hidden">
      <div className="aspect-video bg-bg-secondary animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-5 w-20 bg-bg-secondary rounded-full animate-pulse" />
        <div className="h-6 w-3/4 bg-bg-secondary rounded-lg animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-bg-secondary rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-bg-secondary rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-bg-secondary rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-bg-secondary rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
