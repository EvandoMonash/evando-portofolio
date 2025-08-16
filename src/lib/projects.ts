type ProjectBase = {
    title: string;
    description: string;
    image: string; // path under /public
    tags: string[];
};

type ExternalProject = ProjectBase & {
    type: 'external';
    link: string;
};

type ProjectFeature = {
    title: string;
    description: string;
};

type InternalProject = ProjectBase & {
    type: 'internal';
    slug: string;
    details: {
        longDescription: string;
        gallery: string[]; // array of image paths under /public
        features?: ProjectFeature[]; // bullet points with brief explanations
    };
};

export type Project = ExternalProject | InternalProject;

const projects: Project[] = [
    {
        type: 'external',
        title: 'Review Analyzer',
        description: 'Upload a CSV or enter a Google Place; it scrapes Google Reviews, analyses and categorises them, and visualises insights with charts.',
        image: '/images/review-analyser2.png',
        tags: ['Next.js', 'React', 'CMS', 'Supabase', 'Tailwind', 'TypeScript', 'OpenAI', 'Scraping', 'CSV', 'Chart.js'],
        link: 'https://evandoportofolio.netlify.app/',
    },
    {
        type: 'internal',
        slug: 'fitness-project',
        title: 'Fitness Booking App',
        description: 'Booking platform for fitness coaches and clients with calendar scheduling and auth.',
        image: '/images/somatic_hero.jpg',
        tags: ['CakePHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'FullCalendar', 'Authentication', 'Apache', 'CMS'],
        details: {
            longDescription:
                'A fitness coaching booking platform. Backend is built with CakePHP and served via Apache. The frontend uses HTML, CSS, Bootstrap, and vanilla JavaScript. Coaches manage availability and sessions using FullCalendar for intuitive scheduling, while clients book time slots and manage reservations. Once a time slot is booked, it is automatically blocked out and reflected on the calendar to prevent double‑booking. User authentication secures coach and client areas. A lightweight CMS lets the owner update content such as services and pricing without developer help. The system significantly reduces time compared to manual booking and improves reliability and clarity of schedules.',
            gallery: [
                '/images/somatic_hero.jpg',
                '/images/somatic_booking.jpg',
                '/images/somatic_calendar.jpg',
                '/images/somatic_cms.jpg',
            ],
            features: [
                {
                    title: 'CakePHP Backend on Apache',
                    description: 'Robust MVC backend with routing, ORM, and controller logic deployed via Apache for stability and compatibility.',
                },
                {
                    title: 'FullCalendar Scheduling',
                    description: 'Coaches manage availability and bookings visually; drag‑and‑drop and range selections reduce scheduling friction.',
                },
                {
                    title: 'Authentication',
                    description: 'Secure coach and client areas with role‑based access to calendars, bookings, and account settings.',
                },
                {
                    title: 'Bootstrap Frontend',
                    description: 'Responsive UI built with HTML, CSS, Bootstrap, and JavaScript for quick iteration and consistent UX.',
                },
                {
                    title: 'Saved Hours vs Manual',
                    description: 'Automated scheduling and confirmations significantly reduce time spent coordinating via chat or spreadsheets.',
                },
                {
                    title: 'Content Management System',
                    description: 'Owner-friendly editing of services, pricing, and page content via a lightweight CMS panel.',
                },
            ],
        },
    },
];

export default projects;

