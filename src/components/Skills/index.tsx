import { useEffect, useRef, useState } from "react";

const dominadas = [
    {
        nome: "HTML",
        cor: "#E44D26",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E44D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 6 2 12 8 18" />
            <polyline points="16 6 22 12 16 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
        ),
    },
    {
        nome: "CSS",
        cor: "#2965F1",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2965F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3C6 3 5 4 5 6v3c0 1.5-1 3-3 3 2 0 3 1.5 3 3v3c0 2 1 3 3 3" />
            <path d="M16 3c2 0 3 1 3 3v3c0 1.5 1 3 3 3-2 0-3 1.5-3 3v3c0 2-1 3-3 3" />
        </svg>
        ),
    },
    {
        nome: "JavaScript",
        cor: "#F7DF1E",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
            <text x="12" y="17.5" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="11" fill="#12141a">JS</text>
        </svg>
        ),
    },
    {
        nome: "TypeScript",
        cor: "#3178C6",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
            <text x="12" y="17.5" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="11" fill="#fff">TS</text>
        </svg>
        ),
    },
    {
        nome: "React",
        cor: "#61DAFB",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.6" fill="#61DAFB" stroke="none" />
        </svg>
        ),
    },
];

const estudando = [
    {
        nome: "Node.js",
        cor: "#339933",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinejoin="round">
            <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
            <path d="M9 9v6M9 9l5 6M14 9v6" strokeLinecap="round" strokeWidth="1.6" />
        </svg>
        ),
    },
    {
        nome: "Python",
        cor: "#3776AB",
        icone: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3H9a3 3 0 0 0-3 3v4h8v1" stroke="#3776AB" />
            <path d="M6 10H5a2 2 0 0 0-2 2v2a3 3 0 0 0 3 3h2" stroke="#3776AB" />
            <path d="M12 21h3a3 3 0 0 0 3-3v-4h-8v-1" stroke="#FFD43B" />
            <path d="M18 14h1a2 2 0 0 0 2-2v-2a3 3 0 0 0-3-3h-2" stroke="#FFD43B" />
        </svg>
        ),
    },
];

function CardSkill({ nome, cor, icone }: { nome: string; cor: string; icone: React.ReactNode }) {
    return (
        <div
        style={{ "--cor": cor } as React.CSSProperties}
        className="flex flex-col items-center gap-3 w-28 sm:w-32 py-5 rounded-xl border border-border bg-surface font-mono text-sm text-text transition-all duration-300 hover:-translate-y-1 hover:border-(--cor) hover:text-(--cor) cursor-default"
        >
        {icone}
        {nome}
        </div>
    );
}

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
                    {dominadas.map((skill) => (
                        <CardSkill key={skill.nome} {...skill} />
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Estudando Atualmente</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {estudando.map((skill) => (
                        <CardSkill key={skill.nome} {...skill} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;