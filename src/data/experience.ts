import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    role: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2022-06-01',
    current: true,
    description: 'Leading frontend development for the main product platform, mentoring junior developers, and architecting scalable solutions.',
    achievements: [
      'Led migration from legacy codebase to Next.js, improving performance by 40%',
      'Implemented design system used across 5 product teams',
      'Reduced bundle size by 60% through code splitting and lazy loading',
      'Mentored 4 junior developers through structured learning programs',
    ],
  },
  {
    id: '2',
    company: 'Startup Labs',
    role: 'Full Stack Developer',
    location: 'New York, NY',
    startDate: '2020-03-01',
    endDate: '2022-05-01',
    current: false,
    description: 'Built and maintained multiple client projects from concept to deployment, working across the full technology stack.',
    achievements: [
      'Developed 10+ production applications for various clients',
      'Built real-time collaboration features using WebSockets',
      'Integrated payment systems processing $2M+ annually',
      'Established CI/CD pipelines reducing deployment time by 70%',
    ],
  },
  {
    id: '3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    location: 'Austin, TX',
    startDate: '2018-08-01',
    endDate: '2020-02-01',
    current: false,
    description: 'Created responsive web applications and interactive user interfaces for diverse client projects.',
    achievements: [
      'Built 20+ responsive websites with pixel-perfect designs',
      'Improved website performance scores by average of 35%',
      'Collaborated with designers to create cohesive user experiences',
      'Introduced automated testing, reducing bugs by 50%',
    ],
  },
];
