'use client';

import { useEffect, useState } from 'react';

function getInitialTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme());

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
        try {
            document.cookie = `theme=${encodeURIComponent(theme)}; path=/; max-age=${60 * 60 * 24 * 365}`;
        } catch { }
    }, [theme]);

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
    );
}

