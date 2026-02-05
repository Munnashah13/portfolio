'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { skillGroups } from '@/data/skills';
import { cn } from '@/lib/utils';

export function Skills() {
  return (
    <section className="section-padding bg-bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-accent font-medium mb-3 text-sm tracking-wider uppercase">
              What I Work With
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills & Techniques
            </h2>
            <p className="text-text-secondary max-w-xl">
              The technologies and tools I use to turn ideas into real, working products.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Frontend - spans 2 columns on large */}
          <ScrollReveal className="lg:col-span-2">
            <SkillCard group={skillGroups[0]} index={0} />
          </ScrollReveal>

          {/* Backend */}
          <ScrollReveal delay={0.1}>
            <SkillCard group={skillGroups[1]} index={1} />
          </ScrollReveal>

          {/* Data */}
          <ScrollReveal delay={0.15}>
            <SkillCard group={skillGroups[2]} index={2} />
          </ScrollReveal>

          {/* DevOps */}
          <ScrollReveal delay={0.2}>
            <SkillCard group={skillGroups[3]} index={3} />
          </ScrollReveal>

          {/* Workflow */}
          <ScrollReveal delay={0.25}>
            <SkillCard group={skillGroups[4]} index={4} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group relative h-full rounded-2xl bg-surface border border-border-subtle p-6 md:p-8 overflow-hidden transition-shadow hover:shadow-md"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle gradient accent in corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

      {/* Category number */}
      <span className="text-[5rem] md:text-[6rem] font-black text-bg-secondary/80 absolute -bottom-4 -right-2 leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-text-primary mb-1">
            {group.label}
          </h3>
          <p className="text-text-tertiary text-sm">{group.description}</p>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgb(var(--accent-primary) / 0.15)',
              }}
              className={cn(
                'px-3.5 py-2 rounded-xl text-sm font-medium',
                'bg-bg-secondary text-text-primary',
                'border border-border-subtle',
                'cursor-default transition-colors'
              )}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
