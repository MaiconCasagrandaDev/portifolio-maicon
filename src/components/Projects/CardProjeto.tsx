import type { Projeto } from "./projects.data";

const etiquetas = {
  online: { texto: "Online", classe: "border-emerald-500/40 text-emerald-400" },
  desenvolvimento: { texto: "Em desenvolvimento", classe: "border-amber-500/40 text-amber-400" },
};

export function CardProjeto({
  titulo,
  descricao,
  tecnologias,
  imagem,
  ajuste = "cover",
  status,
  links,
}: Projeto) {
  return (
    <article className="flex flex-col w-full max-w-sm rounded-xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      {imagem ? (
        <img
          src={imagem}
          alt={`Tela do projeto ${titulo}`}
          className={`aspect-video w-full bg-background ${
            ajuste === "contain" ? "object-contain" : "object-cover object-top"
          }`}
        />
      ) : (
        <div className="aspect-video w-full flex items-center justify-center bg-background font-mono text-3xl text-primary">
          {"</>"}
        </div>
      )}

      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-heading">{titulo}</h3>
          {status && (
            <span
              className={`shrink-0 px-2 py-0.5 rounded-full border font-mono text-xs ${etiquetas[status].classe}`}
            >
              {etiquetas[status].texto}
            </span>
          )}
        </div>

        <p className="font-body text-sm text-text-secondary leading-relaxed">{descricao}</p>

        <div className="flex flex-wrap gap-2">
          {tecnologias.map((tec) => (
            <span
              key={tec}
              className="px-2 py-0.5 rounded border border-border font-mono text-xs text-text-secondary"
            >
              {tec}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`px-3 py-1.5 rounded-lg border font-body text-sm transition-colors ${
                  link.destaque
                    ? "border-primary bg-primary text-white hover:opacity-90"
                    : "border-border text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {link.rotulo}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}