import { useEffect, useState } from "react";
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

export function Hero() {
  const texto = "Desenvolvedor";
  const [textoDigitado, setTextoDigitado] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalo = setInterval(() => {
      setTextoDigitado(texto.slice(0, index + 1));
      index++;
      if (index === texto.length) clearInterval(intervalo);
    }, 200);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="inicio"
      className="flex flex-col sm:flex-row items-center gap-8 sm:gap-24 pt-28 sm:pt-0 min-h-screen px-6 sm:px-12 bg-surface text-center sm:text-left"
    >
      <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full overflow-hidden shrink-0">
        <img
          src={minhaFoto}
          alt="Foto de Maicon Casagranda"
          className="w-full h-full object-cover"
        />
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=maiconcasag@gmail.com"
            target="_blank"
            rel="noreferrer"
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
