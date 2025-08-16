import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/lib/projects';
import type { Project } from '@/lib/projects';

type Params = { params: { slug: string } };

export function generateStaticParams() {
    const internal = projects.filter((p) => (p as Project).type === 'internal') as Extract<Project, { type: 'internal' }>[];
    return internal.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Params) {
    const project = projects.find((p) => p.type === 'internal' && p.slug === params.slug) as Extract<Project, { type: 'internal' }> | undefined;

    if (!project) return notFound();

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h1>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300">{project.description}</p>
                    <p className="mt-4 text-neutral-700 dark:text-neutral-300">{project.details.longDescription}</p>
                    {project.details.features && project.details.features.length > 0 && (
                        <ul className="mt-6 list-disc space-y-2 pl-5 text-neutral-700 marker:text-brand-600 dark:text-neutral-300">
                            {project.details.features.map((f) => (
                                <li key={f.title}>
                                    <span className="font-medium">{f.title}:</span> {f.description}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {project.details.gallery.map((src) => (
                        <div key={src} className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5">
                            <Image src={src} alt={project.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

