import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Pur & Simple',
    role: 'Team Member',
    location: 'Prince Edward Island, Canada',
    startDate: '2024-05-01',
    current: true,
    description:
      'Contributing to a fast-paced restaurant environment, delivering exceptional guest experiences while developing strong professional skills.',
    achievements: [
      'Deliver fast, friendly service in a high-volume breakfast and brunch setting',
      'Collaborate with team members to ensure smooth operations during peak hours',
      'Handle customer inquiries and resolve issues with a solutions-first approach',
      'Maintain quality standards and attention to detail across all tasks',
    ],
  },
  {
    id: '2',
    company: "McDonald's",
    role: 'Crew Member',
    location: 'Prince Edward Island, Canada',
    startDate: '2023-06-01',
    endDate: '2024-04-01',
    current: false,
    description:
      'Operated efficiently in one of the world\'s most demanding fast-service environments, building foundational professional skills.',
    achievements: [
      'Managed multiple stations during rush hours, handling 200+ orders per shift',
      'Trained new team members on operations and safety protocols',
      'Consistently recognized for speed and accuracy under pressure',
      'Developed strong time management and multitasking abilities',
    ],
  },
];
