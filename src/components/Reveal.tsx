'use client';

import { useEffect, useRef } from 'react';
import type { ElementType, ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    className?: string;
    delayMs?: number;
    as?: ElementType;
};

export default function Reveal({ children, className, delayMs = 0, as: Tag = 'div' }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-inview', 'true');
                        observer.unobserve(entry.target);
                    }
                }
            },
            { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref as any}
            className={`reveal ${className ?? ''}`}
            style={{ transitionDelay: `${Math.max(0, delayMs)}ms` }}
        >
            {children}
        </Tag>
    );
}

