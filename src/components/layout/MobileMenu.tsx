'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useFocusTrap } from '@/hooks';
import { cn } from '@/lib/utils';
import type { NavigationItem } from '@/types';

interface MobileMenuProps {
  links: NavigationItem[];
  currentPath: string;
  onClose: () => void;
}

export function MobileMenu({ links, currentPath, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useFocusTrap(menuRef, true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <motion.div
        ref={menuRef}
        id="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-sm',
          'bg-surface z-[var(--z-modal)]',
          'shadow-lg border-l border-border',
          'flex flex-col'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className={cn(
              'p-2 rounded-xl',
              'hover:bg-bg-secondary transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 pb-8">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-lg font-medium',
                    'transition-colors duration-[--duration-fast]',
                    currentPath === link.href
                      ? 'bg-accent/10 text-accent'
                      : 'text-text-primary hover:bg-bg-secondary'
                  )}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
