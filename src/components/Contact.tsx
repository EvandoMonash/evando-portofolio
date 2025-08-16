import Reveal from '@/components/Reveal';

type ContactCard = {
    title: string;
    content: string;
    href?: string;
};

const cards: ContactCard[] = [
    { title: 'Email', content: 'evando.gozali@gmail.com', href: 'mailto:evando.gozali@gmail.com' },
    { title: 'Phone', content: '+61 480 495 562', href: 'tel:+61480495562' },
    { title: 'Location', content: 'Melbourne, VIC' },
];

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 py-16 md:py-24">
            <div className="container mx-auto">
                <Reveal as="h2" className="text-2xl font-semibold tracking-tight md:text-3xl">Get in touch</Reveal>
                <Reveal as="p" className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300" delayMs={60}>
                    Prefer email, a quick call, or meeting in person? Reach me through any of the options below.
                </Reveal>
                <Reveal as="p" className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300" delayMs={100}>
                    I’m open to any opportunity or project — feel free to contact me.
                </Reveal>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <Reveal
                            key={card.title}
                            className="rounded-xl border border-neutral-200 bg-white p-5 text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                            delayMs={index * 80}
                        >
                            <h3 className="text-base font-medium">{card.title}</h3>
                            {card.href ? (
                                <a href={card.href} className="mt-2 inline-block text-sm text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
                                    {card.content}
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{card.content}</p>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

