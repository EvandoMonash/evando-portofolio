import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Chatbot />
        </>
    );
}

