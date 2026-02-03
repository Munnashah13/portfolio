import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'project-one',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    longDescription: `Built a comprehensive e-commerce solution that handles thousands of daily transactions.

Features include:
- Real-time inventory tracking
- Stripe payment integration
- Admin dashboard with analytics
- Customer order management
- Automated email notifications`,
    thumbnail: '/images/projects/ecommerce.jpg',
    images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma'],
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
    },
    featured: true,
    category: 'web-app',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
  },
  {
    id: '2',
    slug: 'project-two',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and Kanban boards.',
    longDescription: `Developed a productivity app that helps teams organize and track their work efficiently.

Key features:
- Drag-and-drop Kanban boards
- Real-time collaboration
- Team workspaces
- File attachments
- Activity timeline`,
    thumbnail: '/images/projects/taskapp.jpg',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    links: {
      github: 'https://github.com/yourusername/taskapp',
      live: 'https://taskapp-demo.vercel.app',
    },
    featured: true,
    category: 'web-app',
    startDate: '2023-08-01',
    endDate: '2023-12-01',
  },
  {
    id: '3',
    slug: 'project-three',
    title: 'REST API Boilerplate',
    description: 'A production-ready Node.js REST API boilerplate with authentication, rate limiting, and comprehensive documentation.',
    longDescription: `Created a scalable API boilerplate that accelerates backend development.

Includes:
- JWT authentication
- Role-based access control
- Rate limiting
- API documentation with Swagger
- Automated testing setup`,
    thumbnail: '/images/projects/api.jpg',
    techStack: ['Node.js', 'Express', 'TypeScript', 'JWT', 'Swagger', 'Jest'],
    links: {
      github: 'https://github.com/yourusername/api-boilerplate',
    },
    featured: false,
    category: 'api',
    startDate: '2023-05-01',
    endDate: '2023-07-01',
  },
  {
    id: '4',
    slug: 'project-four',
    title: 'CLI Tool for Developers',
    description: 'A command-line tool that automates common development tasks like project scaffolding and code generation.',
    longDescription: `Built a developer productivity CLI that streamlines repetitive tasks.

Features:
- Project scaffolding
- Code generation templates
- Git workflow automation
- Configuration management`,
    thumbnail: '/images/projects/cli.jpg',
    techStack: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer'],
    links: {
      github: 'https://github.com/yourusername/dev-cli',
    },
    featured: false,
    category: 'cli',
    startDate: '2023-03-01',
    endDate: '2023-04-01',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
