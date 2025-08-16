export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400">
            <div className="container mx-auto">
                <p>
                    © {new Date().getFullYear()} Evando
                </p>
            </div>
        </footer>
    );
}

