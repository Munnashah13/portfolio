'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-error/10">
            <AlertTriangle className="h-12 w-12 text-error" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Something went wrong
        </h1>

        <p className="text-text-secondary mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} leftIcon={<RefreshCw className="h-4 w-4" />}>
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" leftIcon={<Home className="h-4 w-4" />}>
              Go Home
            </Button>
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-8 p-4 bg-bg-secondary rounded-xl text-left text-sm text-text-secondary overflow-auto">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}
