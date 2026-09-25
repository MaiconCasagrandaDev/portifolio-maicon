import { useEffect, useRef, useState } from "react";

function Skills() {

    const secaoRef = useRef<HTMLElement>(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisivel(true);
                } else {
                    setVisivel(false);
                }
            },
            { threshold: 0.2 }
        );

        if (secaoRef.current) observer.observe(secaoRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={secaoRef}
            id="skills"
            className={`scroll-mt-20 sm:scroll-mt-24 transition-all duration-1000 ${visivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >

            <div className="flex flex-col items-center text-center p-6 sm:p-10 rounded-xl border border-border bg-surface max-w-md mt-12 mx-4 sm:mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary sm:w-12 sm:h-12"
                    >
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>

                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary sm:w-10 sm:h-10"
                    >
                        <path d="M12 2c-2.7 0-5.4.4-8 1.2v16.5c2.6-.8 5.3-1.2 8-1.2s5.4.4 8 1.2V3.2C17.4 2.4 14.7 2 12 2zm-1 15.5c-2 0-4 .3-6 1V5.3c2-.7 4-1 6-1v13.2zm8 1c-2-.7-4-1-6-1s-.7 0-1 0V4.3c.3 0 .7 0 1 0 2 0 4 .3 6 1v13.2z" />
                    </svg>
                </div>

                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-center mt-12 px-6">
                    Análise e Desenvolvimento de Sistemas pela Universidade de Caxias do Sul (UCS)
                </p>
            </div>

            <div>
                <p className="font-body text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-center mt-12 px-6">
                    Olá, eu sou o Maicon! Atualmente estou cursando Análise e Desenvolvimento
                    de Sistemas pela UCS, e a cada dia que passa fico mais apaixonado por
                    tecnologia. Gosto de aprender coisas novas, sair da zona de conforto e
                    evoluir meus conhecimentos como desenvolvedor — sempre buscando entender
                    não só o "como", mas o "porquê" das coisas.
                </p>
            </div>

            <div className="mt-10 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Tecnologias que já domino</p>

                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto px-6">

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text hover:border-[#E44D26] hover:text-[#E44D26] cursor-default">HTML</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#2965F1] hover:text-[#2965F1] cursor-default">CSS</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#F7DF1E] hover:text-[#F7DF1E] cursor-default">JavaScript</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#3178C6] hover:text-[#3178C6] cursor-default">TypeScript</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#61DAFB] hover:text-[#61DAFB] cursor-default">React</div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Estudando Atualmente</p>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#339933] hover:text-[#339933] cursor-default">Node.js</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#3776AB] hover:text-[#3776AB] cursor-default">Python</div>
                </div>
            </div>

        </section>
    )
}

export default Skills;