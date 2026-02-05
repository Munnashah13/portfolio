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
    url: 'https://www.linkedin.com/in/munna-shah-129b50317/',
    label: 'LinkedIn',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    url: 'mailto:shahmunna122002@gmail.com',
    label: 'Email',
    icon: 'Mail',
  },
];
