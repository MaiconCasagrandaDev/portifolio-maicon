import { useState } from "react";

const classeLink =
  "px-2 py-1 text-text-secondary hover:text-primary transition-colors";

type Tema = "dark" | "light";

function Header() {
    const [tema, setTema] = useState<Tema>(() =>
        document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
    );

    function alternarTema() {
        const novo: Tema = tema === "dark" ? "light" : "dark";
        setTema(novo);
        document.documentElement.setAttribute("data-theme", novo);
        try {
            localStorage.setItem("tema", novo);
        } catch {}
    }

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

            <button
                type="button"
                onClick={alternarTema}
                aria-label={tema === "dark" ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary cursor-pointer"
            >
                {tema === "dark" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </button>
        </header>
    )
}

export default Header;