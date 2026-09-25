function Skills() {
    return (
        <section id="skills" className="scroll-mt-20 sm:scroll-mt-24 ...">

            <div className="flex flex-col items-center text-center  p-6 sm:p-10 rounded-xl border border-border bg-surface max-w-md mt-12 mx-4 sm:mx-auto">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary mb-0 sm:w-12 sm:h-12"
                >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>

                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-center mt-12 px-6">
                    Análise e Desenvolvimento de Sistemas pela Universidade de Caxias do Sul (UCS)
                </p>
            </div>

            <div>
                <p className="font-body text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-center mt-12 px-6">
                    Oi, eu sou o Maicon! Atualmente estou cursando Análise e Desenvolvimento
                    de Sistemas pela UCS, e a cada dia que passa fico mais apaixonado por
                    tecnologia. Gosto de aprender coisas novas, sair da zona de conforto e
                    evoluir meus conhecimentos como desenvolvedor — sempre buscando entender
                    não só o "como", mas o "porquê" das coisas.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mt-12 px-6">
                <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text hover:border-[#E44D26] hover:text-[#E44D26] cursor-default">HTML</div>

                <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#2965F1] hover:text-[#2965F1] cursor-default">CSS</div>

                <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#F7DF1E] hover:text-[#F7DF1E] cursor-default">JavaScript</div>

                <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#3178C6] hover:text-[#3178C6] cursor-default">TypeScript</div>

                <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#61DAFB] hover:text-[#61DAFB] cursor-default">React</div>
            </div>

            <div className="mt-8 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Estudando Atualmente</p>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#339933] hover:text-[#339933] cursor-default">Node.js</div>

                    <div className="px-5 py-3 rounded-lg border border-border bg-surface font-mono text-sm text-text transition-colors hover:border-[#3776AB] hover:text-[#3776AB] cursor-default">Python</div>
                </div>
            </div>

        </section>
    )
}

export default Skills;