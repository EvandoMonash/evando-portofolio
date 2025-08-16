import Reveal from '@/components/Reveal';

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 py-16 md:py-24">
            <div className="container mx-auto">
                <Reveal as="h2" className="text-2xl font-semibold tracking-tight md:text-3xl">About</Reveal>
                <Reveal as="p" className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300">
                    I’m a full‑stack developer with years of experience delivering production‑ready web apps and
                    automations. I specialize in AI automations—connecting APIs, orchestrating workflows, and
                    integrating LLM tooling—to remove manual work and accelerate product teams.
                </Reveal>
                <Reveal as="p" className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300" delayMs={60}>
                    My core stack includes Next.js/React/TypeScript, Node.js/Express/CakePHP, PostgreSQL/MySQL/MongoDB,
                    and deployments on Vercel, Google Cloud, and cPanel. I care about performance, accessibility,
                    and clean design—shipping iteratively and refining based on real user feedback.
                </Reveal>
                <Reveal as="ul" className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-neutral-700 marker:text-brand-600 dark:text-neutral-300" delayMs={120}>
                    <li>AI automations and API integrations that save time and reduce errors</li>
                    <li>Clean, accessible UIs with Tailwind CSS and Bootstrap when appropriate</li>
                    <li>Well‑structured backends, data modeling, and secure deployments</li>
                    <li>Clear communication, fast iterations, and measurable outcomes</li>
                </Reveal>
            </div>
        </section>
    );
}

