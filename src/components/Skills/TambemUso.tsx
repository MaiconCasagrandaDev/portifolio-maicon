import { tambemUso } from "./Skills.data";

const etiqueta =
    "px-3 py-1 rounded-lg border border-border bg-surface font-mono text-sm text-text-secondary transition-colors hover:border-primary hover:text-primary cursor-default";

export function TambemUso() {
    return (
        <div className="max-w-2xl mt-12 mx-4 sm:mx-auto text-center">
            <p className="font-body text-sm text-text-tertiary">Também uso nos meus projetos</p>

            <div className="mt-5 p-6 sm:p-8 rounded-xl border border-border bg-surface space-y-4">
                {tambemUso.map((grupo) => (
                    <div
                        key={grupo.titulo}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                    >
                        <span className="sm:w-36 sm:text-right shrink-0 font-body text-sm text-text-tertiary">
                            {grupo.titulo}
                        </span>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            {grupo.itens.map((item) => (
                                <span key={item} className={etiqueta}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TambemUso;
