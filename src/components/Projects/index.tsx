import { useState } from "react";
import githubImg from "../../assets/images/github.png"
import ghibliImg from "../../assets/images/studio-ghibli.png"
import breackerImg from "../../assets/images/brick-breaker.png"

const projetos = [
    {
        titulo: "Visualizador de Perfil GitHub",
        descricao: "Busca e exibe informações de perfis do GitHub usando a API oficial.",
        tecnologias: ["JavaScript", "API GitHub"],
        link: "https://github.com/MaiconCasagrandaDev/visualizador-perfil-github",
        imagem: githubImg,
    },
    {
        titulo: "Visualizador de Filmes Ghibli",
        descricao: "Explora o catálogo de filmes do Studio Ghibli usando a API pública.",
        tecnologias: ["React", "TypeScript"],
        link: "https://github.com/MaiconCasagrandaDev/visualizador-filmes-ghibli",
        imagem: ghibliImg,
    },
    {
        titulo: "Breaker-Breaker",
        descricao: "Jogo mobile feito em grupo durante a faculdade.",
        tecnologias: ["Dart"],
        link: "https://github.com/julia-maia/brick-breaker",
        imagem: breackerImg,
    },
];

function Projects() {

    const [cardAtivo, setCardAtivo] = useState<number | null>(null);

    return (
        <section id="projetos">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading text-center mt-16">Projetos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-6">
                {projetos.map((projeto, index) => (

                    <div
                        key={projeto.titulo}
                        onClick={() => setCardAtivo(cardAtivo === index ? null : index)}
                        className="relative overflow-hidden rounded-lg cursor-pointer bg-surface p-6 flex items-center justify-center"
                    >
                        <img
                            src={projeto.imagem}
                            alt={`Tela inicial do projeto ${projeto.titulo}`}
                            className="w-full h-full object-cover"
                        />

                        <div
                            className={`absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center bg-background/90 transition-opacity duration-300 ${cardAtivo === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <h3 className="font-display text-xl font-semibold text-heading">
                                {projeto.titulo}
                            </h3>
                            <p className="font-body text-sm text-text-secondary">
                                {projeto.descricao}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {projeto.tecnologias.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full border border-border font-mono text-xs text-text"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;