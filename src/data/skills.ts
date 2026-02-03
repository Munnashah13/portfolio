import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },

  // Database
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Redis', level: 70, category: 'database' },
  { name: 'Prisma', level: 85, category: 'database' },

  // DevOps
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'Vercel', level: 90, category: 'devops' },

  // Tools
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export const skillCategories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
];
