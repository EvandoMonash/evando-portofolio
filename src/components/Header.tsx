import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('@/components/Clock'), { ssr: false });

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-950/70 dark:supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    Evando
                </Link>
                <nav className="hidden gap-6 text-sm text-neutral-700 md:flex dark:text-neutral-300">
                    <Link href="/#about" className="hover:text-neutral-900 dark:hover:text-white">About</Link>
                    <Link href="/#projects" className="hover:text-neutral-900 dark:hover:text-white">Projects</Link>
                    <Link href="/#skills" className="hover:text-neutral-900 dark:hover:text-white">Skills</Link>
                    <Link href="/#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <Clock />
                    <ThemeToggle />
                    <Link href="/#contact" className="rounded-md bg-brand-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-brand-600 active:bg-brand-700">
                        Contact me
                    </Link>
                </div>
            </div>
        </header>
    );
}

