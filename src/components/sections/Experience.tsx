'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Zap, Clock, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { experiences } from '@/data/experience';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

const transferableSkills = [
  { label: 'Teamwork', icon: Users },
  { label: 'Speed & Efficiency', icon: Zap },
  { label: 'Time Management', icon: Clock },
  { label: 'Communication', icon: MessageCircle },
];

export function Experience() {
  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-accent font-medium mb-3 text-sm tracking-wider uppercase">
              Where I&apos;ve Been
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Work Experience
            </h2>
            <p className="text-text-secondary max-w-xl">
              Real-world roles that shaped my work ethic, communication, and
              problem-solving skills.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience cards - clean horizontal layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <motion.div
                className="group relative h-full rounded-2xl bg-surface border border-border-subtle p-6 md:p-8 overflow-hidden transition-shadow hover:shadow-md"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <Badge variant="success" size="sm">
                        Current
                      </Badge>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-sm text-text-tertiary mb-5">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(exp.startDate)} &mdash;{' '}
                      {exp.current ? 'Present' : formatDate(exp.endDate!)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Key highlights - horizontal pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg border border-border-subtle"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transferable Skills strip */}
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border border-accent/10 p-6 md:p-8">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-5">
              Skills I Bring to Every Role
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {transferableSkills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <skill.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium text-sm">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
