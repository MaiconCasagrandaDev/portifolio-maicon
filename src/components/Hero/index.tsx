import minhaFoto from "../../assets/images/minha-foto.jpeg"

export function Hero() {
    return (
        <section id="inicio" className="flex items-center gap-38 min-h-screen px-12 bg-surface">
            <div className="w-64 h-64 rounded-full overflow-hidden shrink-0">
                <img src={minhaFoto} alt="Foto de Maicon Casagranda" className="w-full h-full object-cover" />
            </div>

            <div>
                <h1 className="font-display text-5xl font-semibold text-heading">
                    Maicon Casagranda
                </h1>
                <p className="font-body text-xl text-text-secondary mt-2">
                    Desenvolvedor
                </p>

                <div className="flex gap-3 mt-6 font-body text-sm">
                    <a
                        href="https://github.com/seu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:seuemail@email.com"
                        className="px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors"
                    >
                        E-mail
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Hero;