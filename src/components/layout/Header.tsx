'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useMediaQuery } from '@/hooks';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';
import { navigationLinks } from '@/data/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[var(--z-fixed)]',
        'transition-all duration-[--duration-normal]',
        isScrolled
          ? 'glass border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 text-xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink href={link.href} isActive={pathname === link.href}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'relative z-10 p-2.5 rounded-xl',
                  'hover:bg-bg-secondary transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <MobileMenu
            links={navigationLinks}
            currentPath={pathname}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative px-4 py-2 text-sm font-medium rounded-xl',
        'transition-colors duration-[--duration-fast]',
        isActive
          ? 'text-accent'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-accent/10 rounded-xl -z-10"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}
