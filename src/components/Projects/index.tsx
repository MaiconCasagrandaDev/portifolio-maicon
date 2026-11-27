import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { projetos } from "./projects.data";
import { CardProjeto } from "./CardProjeto";

const classeSeta =
  "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full border border-border bg-background/90 backdrop-blur shadow-lg text-text-secondary transition-colors hover:border-primary hover:text-primary cursor-pointer";

// Distância entre o primeiro card de um conjunto e o primeiro card do conjunto seguinte
function larguraDoConjunto(faixa: HTMLElement, total: number) {
  const cards = faixa.querySelectorAll<HTMLElement>("article");
  if (cards.length <= total) return 0;
  return cards[total].offsetLeft - cards[0].offsetLeft;
}

function Projects() {
  const faixa = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const irParaOMeio = useCallback(() => {
    const el = faixa.current;
    if (!el) return;
    const largura = larguraDoConjunto(el, projetos.length);
    if (largura) el.scrollTo({ left: largura, behavior: "instant" });
  }, []);

  // Começa no conjunto do meio, antes de a tela ser pintada
  useLayoutEffect(() => {
    irParaOMeio();
  }, [irParaOMeio]);

  const larguraJanela = useRef(0);

  useEffect(() => {
    larguraJanela.current = window.innerWidth;

    function aoRedimensionar() {
      // Barra de endereço aparecendo ou sumindo muda só a altura: ignora
      if (window.innerWidth === larguraJanela.current) return;
      larguraJanela.current = window.innerWidth;
      irParaOMeio();
    }

    window.addEventListener("resize", aoRedimensionar);
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, [irParaOMeio]);

  // Quando a rolagem para, volta para o conjunto do meio sem que se note
  function corrigirPosicao() {
    const el = faixa.current;
    if (!el) return;
    const largura = larguraDoConjunto(el, projetos.length);
    if (!largura) return;

    if (el.scrollLeft < largura - 4) {
      el.scrollTo({ left: el.scrollLeft + largura, behavior: "instant" });
    } else if (el.scrollLeft >= largura * 2 - 4) {
      el.scrollTo({ left: el.scrollLeft - largura, behavior: "instant" });
    }
  }

  function aoRolar() {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(corrigirPosicao, 120);
  }

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
          className={`${classeSeta} right-2`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div
          ref={faixa}
          onScroll={aoRolar}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-6 px-6 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[0, 1, 2].map((copia) => (
            <div key={copia} className="contents" aria-hidden={copia !== 1}>
              {projetos.map((projeto) => (
                <CardProjeto key={projeto.titulo} {...projeto} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
