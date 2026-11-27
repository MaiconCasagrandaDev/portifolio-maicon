const iconeProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const fatos = [
    {
        rotulo: "Local",
        valor: "Bento Gonçalves, RS",
        icone: (
            <svg {...iconeProps}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        rotulo: "Formação",
        valor: "Análise e Desenvolvimento de Sistemas, UCS",
        icone: (
            <svg {...iconeProps}>
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
            </svg>
        ),
    },
    {
        rotulo: "Disponibilidade",
        valor: "Aberto a oportunidades na área de TI e a novos projetos",
        icone: (
            <svg {...iconeProps}>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
        ),
    },
];

export function Sobre() {
    return (
        <div className="max-w-4xl mx-4 sm:mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading text-center mt-16">
                Sobre mim
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-[3fr_2fr] items-start">
                <div className="space-y-4">
                    <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                        Oi, eu sou o Maicon, de Bento Gonçalves (RS). Vim da indústria, onde
                        passei mais de quatro anos. Foi lá que aprendi a me comunicar, me organizar e
                        resolver problemas, e é isso que levo para o desenvolvimento.
                    </p>

                    <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                        Construo interfaces com React e TypeScript e também desenvolvo APIs com
                        Node.js, Express, Prisma e PostgreSQL, como nos meus projetos de
                        agendamento e de atendimento pelo WhatsApp. Fiz ainda um jogo mobile em
                        Flutter, em equipe, na faculdade. Também pratico Python e automações.
                    </p>
                </div>

                <ul className="space-y-3">
                    {fatos.map((fato) => (
                        <li
                            key={fato.rotulo}
                            className="flex items-start gap-4 p-4 rounded-xl border border-border bg-surface"
                        >
                            <span className="text-primary mt-0.5 shrink-0">{fato.icone}</span>
                            <div>
                                <p className="font-body text-sm text-text-tertiary">{fato.rotulo}</p>
                                <p className="font-body text-base text-heading">{fato.valor}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}