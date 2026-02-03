import type { NavigationItem, SocialLink } from '@/types';

export const navigationLinks: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: 'Linkedin',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
    icon: 'Twitter',
  },
  {
    platform: 'email',
    url: 'mailto:your@email.com',
    label: 'Email',
    icon: 'Mail',
  },
];
