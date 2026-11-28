import { useDigitando } from "../../hooks/useDigitando";
import minhaFoto from "../../assets/images/minha-foto.jpeg";
import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconWhatsapp,
  IconMail,
} from "./icons";

const mensagem = "Olá Maicon! Vi seu portfólio e gostaria de conversar.";
const whatsappUrl = `https://wa.me/5554996229897?text=${encodeURIComponent(mensagem)}`;
const classeBotao =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors";

const frases = [
  "Desenvolvedor web",
  "Criador de sites e sistemas",
  "Atendentes virtuais com IA",
  "Automações para o seu negócio",
];

export function Hero() {
  const textoDigitado = useDigitando(frases);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden flex flex-col sm:flex-row items-center gap-8 sm:gap-24 pt-48 sm:pt-0 min-h-screen px-6 sm:px-12 bg-surface text-center sm:text-left"
    >
      <div aria-hidden="true" className="manchas pointer-events-none absolute inset-0 -z-10">
        <div className="mancha-a absolute -top-16 -left-16 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-primary/30 blur-3xl" />
        <div className="mancha-b absolute -bottom-20 -right-10 w-72 h-72 sm:w-[30rem] sm:h-[30rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="mancha-c absolute top-1/3 right-1/3 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative w-40 h-40 sm:w-64 sm:h-64 shrink-0">
        <div aria-hidden="true" className="anel-luz absolute -inset-1 rounded-full" />
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
            src={minhaFoto}
            alt="Foto de Maicon Casagranda"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-heading">
          Maicon Casagranda
        </h1>
        <p className="font-body text-lg sm:text-xl text-text-secondary mt-2">
          {textoDigitado}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6 font-body text-sm">
          <a
            href="https://github.com/MaiconCasagrandaDev"
            target="_blank"
            rel="noreferrer"
            className={classeBotao}
          >
            <IconGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/maicon-casagranda-774922303/"
            target="_blank"
            rel="noreferrer"
            className={classeBotao}
          >
            <IconLinkedin /> LinkedIn
          </a>

          <a
            href={`mailto:maiconcasag@gmail.com?subject=${encodeURIComponent("Contato pelo portfólio")}`}
            className={classeBotao}
          >
            <IconMail /> E-mail
          </a>

          <a
            href="https://instagram.com/maicon_casagranda"
            target="_blank"
            rel="noreferrer"
            className={classeBotao}
          >
            <IconInstagram /> Instagram
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={classeBotao}
          >
            <IconWhatsapp /> WhatsApp 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
