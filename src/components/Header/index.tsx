function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="flex justify-center gap-6 sm:gap-10 py-3 sm:py-4 font-body text-sm sm:text-base">
                <a
                    href="#inicio"
                    className="text-text-secondary hover:text-primary transition-colors"
                >
                    Hero
                </a>
                <a
                    href="#skills"
                    className="text-text-secondary hover:text-primary transition-colors"
                >
                    Skills
                </a>
                <a
                    href="#projetos"
                    className="text-text-secondary hover:text-primary transition-colors"
                >
                    Projetos
                </a>
            </nav>
        </header>
    )
}

export default Header;