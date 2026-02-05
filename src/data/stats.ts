export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: 'Code' | 'Layers' | 'Clock' | 'Target';
}

export const stats: Stat[] = [
  { id: 'projects', value: 2, suffix: '+', label: 'Projects Completed', icon: 'Code' },
  { id: 'technologies', value: 10, suffix: '+', label: 'Technologies', icon: 'Layers' },
  { id: 'experience', value: 5, suffix: '+', label: 'Years Experience', icon: 'Clock' },
  { id: 'commitment', value: 100, suffix: '%', label: 'Commitment', icon: 'Target' },
];
