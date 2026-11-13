import { useCallback, useEffect, useRef, useState } from "react";
import { projetos } from "./projects.data";
import { CardProjeto } from "./CardProjeto";

const classeSeta =
  "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full border border-border bg-background/90 backdrop-blur shadow-lg text-text-secondary transition-colors hover:border-primary hover:text-primary disabled:opacity-0 disabled:pointer-events-none cursor-pointer";

function Projects() {
  const faixa = useRef<HTMLDivElement>(null);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);

  const atualizar = useCallback(() => {
    const el = faixa.current;
    if (!el) return;
    setNoInicio(el.scrollLeft <= 4);
    setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [atualizar]);

  function rolar(direcao: 1 | -1) {
    const el = faixa.current;
    if (!el) return;
    el.scrollBy({ left: direcao * el.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <section id="projetos" className="scroll-mt-20 sm:scroll-mt-24 pb-20">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading text-center mt-16">
        Projetos
      </h2>

      <div className="relative max-w-7xl mx-auto mt-10">
        <button
          type="button"
          aria-label="Projetos anteriores"
          onClick={() => rolar(-1)}
          disabled={noInicio}
          className={`${classeSeta} left-2`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Próximos projetos"
          onClick={() => rolar(1)}
          disabled={noFim}
          className={`${classeSeta} right-2`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div
          ref={faixa}
          onScroll={atualizar}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-6 px-6 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.titulo} {...projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
