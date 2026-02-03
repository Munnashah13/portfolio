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
    url: 'https://github.com/Munnashah13',
    label: 'GitHub',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/munnashah',
    label: 'LinkedIn',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    url: 'mailto:mshah16778@upei.ca',
    label: 'Email',
    icon: 'Mail',
  },
];
