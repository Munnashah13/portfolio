import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'odd-jobs',
    title: 'ODD Jobs',
    description: 'A platform connecting people who need odd jobs done with skilled workers in their local area. Features real-time job posting, bidding, and secure payments.',
    longDescription: `Built a comprehensive job marketplace that connects homeowners and businesses with local service providers.

Features include:
- Real-time job posting and notifications
- Bidding system for service providers
- Secure payment processing
- Rating and review system
- Location-based job matching
- In-app messaging between clients and workers`,
    thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=750&fit=crop', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=750&fit=crop'],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma'],
    links: {
      github: 'https://github.com/Munnashah13/odd-jobs',
      live: 'https://odd-jobs-demo.vercel.app',
    },
    featured: true,
    category: 'web-app',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
  },
  {
    id: '2',
    slug: 'medicine-delivery',
    title: 'Medicine Delivery App',
    description: 'A healthcare delivery application that enables users to order prescription and over-the-counter medicines with doorstep delivery and prescription management.',
    longDescription: `Developed a comprehensive medicine delivery platform to make healthcare more accessible.

Key features:
- Prescription upload and verification
- Medicine search with alternatives
- Real-time order tracking
- Scheduled deliveries
- Medicine reminders
- Integration with local pharmacies`,
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=500&fit=crop',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Firebase'],
    links: {
      github: 'https://github.com/Munnashah13/medicine-delivery',
      live: 'https://medicine-delivery-demo.vercel.app',
    },
    featured: true,
    category: 'mobile-app',
    startDate: '2023-08-01',
    endDate: '2023-12-01',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
