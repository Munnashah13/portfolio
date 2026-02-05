import { Metadata } from 'next';
import { MapPin, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { experiences } from '@/data/experience';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, skills, and experience as a full-stack developer.',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <ScrollReveal>
            <div className="relative aspect-square max-w-xs md:max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-bg-secondary border border-border-subtle">
                <Image
                  src="/images/me.jpg"
                  alt="Munna Shah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <Badge variant="default" className="mb-4">
                About Me
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Hi, I&apos;m Munna Shah
              </h1>
              <p className="text-text-secondary text-lg mb-6">
                I&apos;m a full-stack developer and undergraduate Computer Science student
                at the University of Prince Edward Island (UPEI), passionate about building
                clean, functional, and user-friendly web applications. I love turning ideas
                into real products using modern technologies.
              </p>
              <p className="text-text-secondary text-lg mb-8">
                I specialize in React, Next.js, TypeScript, and Node.js. When I&apos;m not
                coding, I&apos;m learning something new or working on personal projects
                that push my skills forward.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-text-secondary">
                  <MapPin className="h-4 w-4 text-accent" />
                  Prince Edward Island, Canada
                </span>
                <span className="flex items-center gap-2 text-text-secondary">
                  <Mail className="h-4 w-4 text-accent" />
                  shahmunna122002@gmail.com
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Get In Touch</Button>
                </Link>
                <a href="https://www.linkedin.com/in/munna-shah-129b50317/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">View LinkedIn</Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Experience Timeline */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Work Experience
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Real-world experience that shaped my work ethic and professional skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border-subtle">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="success" size="sm">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-text-tertiary">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(exp.startDate)} -{' '}
                      {exp.current ? 'Present' : formatDate(exp.endDate!)}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-text-secondary flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
