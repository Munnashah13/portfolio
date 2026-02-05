import { Metadata } from 'next';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { socialLinks } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, job opportunities, or just to say hello.',
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Get In Touch
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                Fill out the form below or reach out directly via email.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border-subtle">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:shahmunna122002@gmail.com"
                    className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    shahmunna122002@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Location
                  </h3>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin className="h-5 w-5" />
                    Prince Edward Island, Canada
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Social
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = socialIcons[social.platform];
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-bg-secondary hover:bg-bg-tertiary text-text-secondary hover:text-accent transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-success">
                      Available for work
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    I&apos;m currently open to freelance projects and full-time
                    opportunities.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
