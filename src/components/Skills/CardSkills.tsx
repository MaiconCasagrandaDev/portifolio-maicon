import type { CSSProperties, ReactNode } from "react";

export function CardSkill({ nome, cor, icone }: { nome: string; cor: string; icone: ReactNode }) {
    return (
        <div
        style={{ "--cor": cor } as CSSProperties}
        className="flex flex-col items-center gap-3 w-28 sm:w-32 py-5 rounded-xl border border-border bg-surface font-mono text-sm text-text transition-all duration-300 hover:-translate-y-1 hover:border-(--cor) hover:text-(--cor) cursor-default"
        >
        {icone}
        {nome}
        </div>
    );
}