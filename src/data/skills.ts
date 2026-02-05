export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  skills: SkillItem[];
  accent: string;
  size: 'large' | 'medium' | 'small';
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building interfaces that feel alive',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML/CSS' },
    ],
    accent: 'accent',
    size: 'large',
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Powering what runs behind the scenes',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Python' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
    accent: 'accent',
    size: 'medium',
  },
  {
    id: 'database',
    label: 'Data',
    description: 'Structured storage, fast retrieval',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Prisma' },
      { name: 'Redis' },
    ],
    accent: 'accent',
    size: 'small',
  },
  {
    id: 'devops',
    label: 'DevOps',
    description: 'Ship fast, ship reliably',
    skills: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'CI/CD' },
      { name: 'Vercel' },
    ],
    accent: 'accent',
    size: 'small',
  },
  {
    id: 'tools',
    label: 'Workflow',
    description: 'The tools I reach for daily',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Linux' },
    ],
    accent: 'accent',
    size: 'medium',
  },
];
