'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const update = () => {
            try {
                const formatted = new Intl.DateTimeFormat(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                }).format(new Date());
                setTime(formatted);
            } catch {
                setTime(new Date().toLocaleTimeString());
            }
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    if (!time) return null;

    return (
        <span
            aria-label="Current time"
            className="font-mono text-xs text-neutral-700 tabular-nums dark:text-neutral-300"
        >
            {time}
        </span>
    );
}

