import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Full-Stack Developer',
    template: '%s | Portfolio',
  },
  description:
    'Full-stack developer specializing in building exceptional digital experiences with React, Next.js, and TypeScript.',
  keywords: [
    'web developer',
    'full-stack developer',
    'react',
    'next.js',
    'typescript',
    'portfolio',
  ],
  authors: [{ name: 'Munna Shah' }],
  creator: 'Munna Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.vercel.app',
    title: 'Portfolio | Full-Stack Developer',
    description:
      'Full-stack developer specializing in building exceptional digital experiences.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full-Stack Developer',
    description:
      'Full-stack developer specializing in building exceptional digital experiences.',
    creator: '@munnashah13',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (mode === 'dark' || (!mode && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased font-sans">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
