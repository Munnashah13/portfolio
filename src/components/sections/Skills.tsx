'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import { cn } from '@/lib/utils';

export function Skills() {
  return (
    <section className="section-padding bg-bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills & Technologies
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A collection of tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.id} delay={categoryIndex * 0.1}>
              <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category.label}
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.05}>
                  {getSkillsByCategory(category.id).map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillBar name={skill.name} level={skill.level} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-xs text-text-tertiary">{level}%</span>
      </div>
      <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={cn(
            'h-full rounded-full',
            level >= 90 ? 'bg-accent' : level >= 75 ? 'bg-accent/80' : 'bg-accent/60'
          )}
        />
      </div>
    </div>
  );
}
