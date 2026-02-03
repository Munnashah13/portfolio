'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { experiences } from '@/data/experience';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export function Experience() {
  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Work Experience
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              My professional journey building products and leading teams.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2 z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-surface rounded-2xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">
                            {exp.role}
                          </h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <Badge variant="success" size="sm">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-text-tertiary mb-4">
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

                      <p className="text-text-secondary mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
