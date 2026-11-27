const areas = [
    {
        titulo: "Front-end",
        descricao: "Interfaces rápidas e responsivas",
        itens: [
            { nome: "HTML, CSS e JavaScript", descricao: "Estrutura, estilo e interatividade" },
            { nome: "React", descricao: "Componentes e interfaces dinâmicas" },
            { nome: "TypeScript", descricao: "Código tipado e mais seguro" },
            { nome: "Tailwind CSS", descricao: "Estilo responsivo e tema claro/escuro" },
            { nome: "React Router", descricao: "Navegação entre páginas" },
            { nome: "TanStack Query e Socket.IO", descricao: "Dados do servidor e tempo real" },
            { nome: "Flutter e Dart", descricao: "Noções de apps mobile" },
        ],
    },
    {
        titulo: "Back-end e dados",
        descricao: "APIs, regras de negócio e banco de dados",
        itens: [
            { nome: "Node.js e Express", descricao: "APIs e rotas do servidor" },
            { nome: "PostgreSQL e Prisma", descricao: "Banco de dados e modelagem" },
            { nome: "APIs REST", descricao: "Comunicação entre sistemas" },
            { nome: "Zod", descricao: "Validação de dados" },
            { nome: "Python", descricao: "Automações" },
        ],
    },
    {
        titulo: "IA e integrações",
        descricao: "Atendimento automático e conexão entre sistemas",
        itens: [
            { nome: "Gemini API", descricao: "Atendente que entende pedidos em texto livre" },
            { nome: "WhatsApp Cloud API", descricao: "Receber e enviar mensagens" },
        ],
    },
    {
        titulo: "Ferramentas",
        descricao: "Versionamento, testes e publicação",
        itens: [
            { nome: "Git e GitHub", descricao: "Versionamento do código" },
            { nome: "Vercel e Render", descricao: "Publicação de sites e APIs" },
            { nome: "Playwright", descricao: "Testes de ponta a ponta" },
        ],
    },
];

export function Tecnologias() {
    return (
        <div className="max-w-4xl mx-4 sm:mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading text-center mt-16">
                Tecnologias
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {areas.map((area) => (
                    <div
                        key={area.titulo}
                        className="p-6 sm:p-8 rounded-xl border border-border bg-surface"
                    >
                        <h3 className="font-display text-xl font-semibold text-heading">
                            {area.titulo}
                        </h3>
                        <p className="font-body text-sm text-text-tertiary mt-1">
                            {area.descricao}
                        </p>

                        <ul className="mt-5 divide-y divide-border">
                            {area.itens.map((item) => (
                                <li
                                    key={item.nome}
                                    className="py-2.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4"
                                >
                                    <span className="font-body text-base text-heading">
                                        {item.nome}
                                    </span>
                                    <span className="font-body text-sm text-text-tertiary sm:text-right">
                                        {item.descricao}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}