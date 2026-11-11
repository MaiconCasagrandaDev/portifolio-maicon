import { IconGithub, IconLinkedin, IconInstagram, IconWhatsapp, IconMail } from "../Hero/icons";

const email = "maiconcasag@gmail.com";
const mensagem = "Olá Maicon! Vi seu portfólio e gostaria de conversar.";
const whatsappUrl = `https://wa.me/5554996229897?text=${encodeURIComponent(mensagem)}`;

const classeLink =
  "inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors";

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-border bg-surface px-6 py-10 text-center font-body"
    >
      <p className="font-display text-xl font-semibold text-heading">Vamos conversar?</p>
      <p className="mt-2 text-sm text-text-secondary max-w-xl mx-auto">
        Desenvolvo sites, sistemas e atendentes virtuais com IA para pequenos negócios.
        Aberto a oportunidades na área de TI e a novos projetos.
      </p>

      <a
        href={`mailto:${email}`}
        className="inline-block mt-4 font-mono text-sm text-text hover:text-primary transition-colors"
      >
        {email}
      </a>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-5 text-sm">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={classeLink}>
          <IconWhatsapp /> WhatsApp
        </a>
        <a href="https://github.com/MaiconCasagrandaDev" target="_blank" rel="noreferrer" className={classeLink}>
          <IconGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/maicon-casagranda-774922303/" target="_blank" rel="noreferrer" className={classeLink}>
          <IconLinkedin /> LinkedIn
        </a>
        <a href="https://instagram.com/maicon_casagranda" target="_blank" rel="noreferrer" className={classeLink}>
          <IconInstagram /> Instagram
        </a>
        <a href={`mailto:${email}`} className={classeLink}>
          <IconMail /> E-mail
        </a>
      </div>

      <p className="mt-8 text-xs text-text-tertiary">
        © {new Date().getFullYear()} Maicon Casagranda · Bento Gonçalves, RS
      </p>
    </footer>
  );
}

export default Footer;
