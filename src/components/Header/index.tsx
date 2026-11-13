const classeLink =
    "px-2 py-1 text-text-secondary hover:text-primary transition-colors";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="flex justify-center gap-4 sm:gap-10 py-4 sm:py-5 font-body text-base sm:text-lg">
                <a href="#inicio" className={classeLink}>
                    Início
                </a>
                <a href="#skills" className={classeLink}>
                    Skills
                </a>
                <a href="#projetos" className={classeLink}>
                    Projetos
                </a>
            </nav>
        </header>
    )
}

export default Header;
