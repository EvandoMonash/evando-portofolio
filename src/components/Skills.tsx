import Reveal from '@/components/Reveal';
type SkillCategory = {
    name: string;
    items: string[];
};

const skillsByCategory: SkillCategory[] = [
    {
        name: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        name: 'Backend',
        items: ['Node.js', 'Express', 'CakePHP', 'RESTful APIs'],
    },
    {
        name: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
    },
    {
        name: 'Cloud & DevOps',
        items: ['Vercel', 'Google Cloud', 'cPanel'],
    },
    {
        name: 'Languages',
        items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        name: 'Tools',
        items: ['Git', 'Postman'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-24 py-16 md:py-24">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {skillsByCategory.map((category, index) => (
                        <Reveal
                            key={category.name}
                            as="div"
                            className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
                            delayMs={index * 60}
                        >
                            <h3 className="text-base font-medium text-neutral-900 dark:text-white">{category.name}</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

