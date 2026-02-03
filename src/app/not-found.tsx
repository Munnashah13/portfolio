import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-8xl font-bold text-accent/20">404</span>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Page Not Found
        </h1>

        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button leftIcon={<Home className="h-4 w-4" />}>
              Go Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
