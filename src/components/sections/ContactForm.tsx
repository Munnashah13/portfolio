'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: null });
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormState({ status: 'error', message: 'Please fix the errors below.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState({
        status: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      e.currentTarget.reset();
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Failed to send message. Please try again later or email me directly.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {formState.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              'p-4 rounded-xl flex items-start gap-3',
              formState.status === 'success'
                ? 'bg-success/10 text-success border border-success/20'
                : 'bg-error/10 text-error border border-error/20'
            )}
            role="alert"
          >
            {formState.status === 'success' ? (
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            )}
            {formState.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={formState.status === 'loading'}
          className={cn(
            'w-full px-4 py-3 rounded-xl',
            'bg-surface border',
            'text-text-primary placeholder:text-text-tertiary',
            'transition-colors duration-[--duration-fast]',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            errors.name ? 'border-error' : 'border-border-strong'
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-error">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={formState.status === 'loading'}
          className={cn(
            'w-full px-4 py-3 rounded-xl',
            'bg-surface border',
            'text-text-primary placeholder:text-text-tertiary',
            'transition-colors duration-[--duration-fast]',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            errors.email ? 'border-error' : 'border-border-strong'
          )}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-error">{errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={formState.status === 'loading'}
          className={cn(
            'w-full px-4 py-3 rounded-xl resize-none',
            'bg-surface border',
            'text-text-primary placeholder:text-text-tertiary',
            'transition-colors duration-[--duration-fast]',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            errors.message ? 'border-error' : 'border-border-strong'
          )}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="text-sm text-error">{errors.message}</p>
        )}
      </div>

      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        isLoading={formState.status === 'loading'}
        fullWidth
        rightIcon={<Send className="h-4 w-4" />}
      >
        Send Message
      </Button>
    </form>
  );
}
