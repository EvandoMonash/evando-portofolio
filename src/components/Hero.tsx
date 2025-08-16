import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="pointer-events-none absolute -top-16 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-indigo-400 blur-3xl" />
            </div>
            <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
                <Reveal as="div">
                    <span className="mb-4 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-neutral-300">
                        Available for work and projects
                    </span>
                    <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                        <span className="bg-gradient-to-r from-brand-400 to-indigo-300 bg-clip-text text-transparent">Evando</span>
                        <br /> Engineering fast, accessible web experiences.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base text-neutral-700 md:text-lg dark:text-neutral-300">
                        Full‑stack engineer with years of hands‑on experience across Node.js, PHP, and Next.js.
                        I care about fast performance, accessibility, and clean, maintainable design.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="#projects" className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-brand-700">
                            View projects
                        </a>
                        <a href="#contact" className="rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5">
                            Contact me
                        </a>
                    </div>
                </Reveal>
                <Reveal as="div" className="relative mx-auto h-56 w-56 md:h-72 md:w-72" delayMs={120}>
                    <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-tr from-brand-600/30 to-indigo-400/30 blur-2xl" />
                    <div className="relative h-full w-full overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 p-2 shadow-xl dark:border-white/10 dark:bg-neutral-900/40">
                        <img
                            src={site.profileImage}
                            alt={`${site.name} profile photo`}
                            className="h-full w-full object-cover object-[42%_76%] scale-125"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

