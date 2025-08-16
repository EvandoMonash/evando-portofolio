import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Evando — Full-Stack Developer Portfolio',
    description: 'Full‑stack developer specializing in AI automations, crafting fast, accessible web apps with Next.js, React, and TypeScript.',
    keywords: ['Evando', 'Full-Stack Developer', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Portfolio', 'AI Automations'],
    authors: [{ name: 'Evando' }],
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${inter.className} min-h-screen antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
            >
                {/* Prevent theme flash: set initial theme before paint */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
  (function(){
    try {
      var stored = localStorage.getItem('theme');
      var cookieMatch = (document.cookie.match(/(?:^|; )theme=([^;]*)/) || [])[1];
      var cookieTheme = cookieMatch ? decodeURIComponent(cookieMatch) : null;
      var theme = stored || cookieTheme;
      if (theme !== 'light' && theme !== 'dark') {
        var m = window.matchMedia('(prefers-color-scheme: dark)');
        theme = m.matches ? 'dark' : 'light';
      }
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
                        `,
                    }}
                />
                <Header />
                <main className="container mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

