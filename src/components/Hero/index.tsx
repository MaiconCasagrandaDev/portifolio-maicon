import minhaFoto from "../../assets/images/minha-foto.jpeg"

export function Hero() {
    return (
        <section id="inicio" className="flex flex-col sm:flex-row items-center gap-8 sm:gap-24 pt-28 sm:pt-0 min-h-screen px-6 sm:px-12 bg-surface text-center sm:text-left">
            <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full overflow-hidden shrink-0">
                <img src={minhaFoto} alt="Foto de Maicon Casagranda" className="w-full h-full object-cover" />
            </div>

            <div>
                <h1 className="font-display text-3xl sm:text-5xl font-semibold text-heading">
                    Maicon Casagranda
                </h1>
                <p className="font-body text-lg sm:text-xl text-text-secondary mt-2">
                    Desenvolvedor
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6 font-body text-sm">
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