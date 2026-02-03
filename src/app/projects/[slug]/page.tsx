import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { projects, getProjectBySlug } from '@/data/projects';
import { formatDate } from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container">
        {/* Back button */}
        <ScrollReveal>
          <Link href="/projects" className="inline-block mb-8">
            <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to Projects
            </Button>
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg mb-6">{project.description}</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-text-tertiary">
                <Calendar className="h-4 w-4" />
                {formatDate(project.startDate)} -{' '}
                {project.endDate ? formatDate(project.endDate) : 'Present'}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button rightIcon={<ExternalLink className="h-4 w-4" />}>
                    Live Demo
                  </Button>
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" rightIcon={<Github className="h-4 w-4" />}>
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Image */}
        <ScrollReveal>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg-secondary mb-12">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <ScrollReveal className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
              <div className="text-text-secondary whitespace-pre-line">
                {project.longDescription || project.description}
              </div>
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Links</h3>
                <div className="space-y-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
