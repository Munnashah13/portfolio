export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  category: ProjectCategory;
  startDate: string;
  endDate?: string;
}

export type ProjectCategory =
  | 'web-app'
  | 'mobile-app'
  | 'api'
  | 'cli'
  | 'library'
  | 'open-source';

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'tools'
  | 'languages';

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  label: string;
  icon: string;
}
