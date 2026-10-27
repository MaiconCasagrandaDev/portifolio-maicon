import { projetos } from "./projects.data";
import { CardProjeto } from "./CardProjeto";

function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 sm:scroll-mt-24 pb-20">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading text-center mt-16">
        Projetos
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mt-12 px-6">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.titulo} {...projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;