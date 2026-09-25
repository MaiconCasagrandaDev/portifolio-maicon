import { useState } from "react";
import githubImg from "../../assets/images/github.png"
import ghibliImg from "../../assets/images/studio-ghibli.png"
import breackerImg from "../../assets/images/brick-breaker.png"

const projetos = [
    {
        titulo: "Visualizador de Perfil GitHub",
        descricao: "Busca e exibe informações de perfis do GitHub usando a API oficial.",
        tecnologias: ["JavaScript", "API GitHub"],
        link: "https://github.com/seu-usuario/repo-1",
        imagem: githubImg,
    },
    {
        titulo: "Visualizador de Filmes Ghibli",
        descricao: "Explora o catálogo de filmes do Studio Ghibli usando a API pública.",
        tecnologias: ["React", "TypeScript"],
        link: "https://github.com/seu-usuario/repo-2",
        imagem: ghibliImg,
    },
    {
        titulo: "Breacker-Brecker",
        descricao: "Jogo mobile feito em grupo durante a faculdade.",
        tecnologias: ["Dart"],
        link: "https://github.com/seu-usuario/repo-3",
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
                    <div key={projeto.titulo} onClick={() => setCardAtivo(index)} className="relative overflow-hidden rounded-lg cursor-pointer bg-surface p-4 flex items-center justify-center">
                        <img
                            src={projeto.imagem} alt={`Tela inicial do projeto ${projeto.titulo}`}
                            className="w-full h-full object-containt"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;