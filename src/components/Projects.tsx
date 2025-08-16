import Image from 'next/image';
import Link from 'next/link';
import projects from '@/lib/projects';
import type { Project } from '@/lib/projects';
import Reveal from '@/components/Reveal';

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 py-16 md:py-24">
            <div className="container mx-auto">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Featured projects</h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Selected work</span>
                </div>
                <ul className="grid gap-6 md:grid-cols-2">
                    {projects.map((project: Project, index: number) => (
                        <Reveal as="li" key={project.title} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow dark:border-white/10 dark:bg-white/5" delayMs={index * 60}>
                            <Link
                                href={project.type === 'internal' ? `/projects/${project.slug}` : project.link}
                                {...(project.type === 'external' ? { target: '_blank', rel: 'noreferrer' } : {})}
                                className="block"
                            >
                                <div className="relative aspect-[16/9] w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-neutral-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

