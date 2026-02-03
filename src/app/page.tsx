import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <ContactCTA />
    </>
  );
}
