import agendaServicos from "../../assets/images/agendamento-manicure.png";
import agendaAdmin from "../../assets/images/agendamento-admin.png";
import ghibliLista from "../../assets/images/visualizador-filmes-ghibli.png";
import ghibliDetalhes from "../../assets/images/visualizador-filmes-ghibli-detalhes.png";
import githubBusca from "../../assets/images/visualizador-perfil-github.png";
import githubResultado from "../../assets/images/visualizador-perfil-github-resultado.png";
import brickInicial from "../../assets/images/brick-breaker-tela-inicial.png";
import brickJogo from "../../assets/images/brick-breaker-jogo.png";
import atendenteCardapio from "../../assets/images/cardapio.png";
import atendenteConversa from "../../assets/images/conversa.png";

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagens?: string[];
  status?: "online" | "desenvolvimento";
  links: { rotulo: string; url: string; destaque?: boolean }[];
};

export const projetos: Projeto[] = [
  {
    titulo: "Atendente Digital",
    descricao:
      "Atendente virtual com IA para lanchonetes: entende o pedido em texto livre, consulta o cardápio real no banco e salva o pedido. Inclui cardápio digital e simulador de conversa. O envio pelo WhatsApp está em integração.",
    tecnologias: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Gemini API", "WhatsApp API"],
    imagens: [atendenteConversa, atendenteCardapio],
    status: "desenvolvimento",
    links: [
      { rotulo: "Código", url: "https://github.com/MaiconCasagrandaDev/atendente-digital" },
    ],
  },
  {
    titulo: "Agenda Manicure",
    descricao:
      "Agendamento online para um estúdio de manicure. A cliente escolhe serviços e horários livres pelo celular, e a profissional aprova pedidos, vê a agenda e bloqueia horários num painel.",
    tecnologias: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    imagens: [agendaServicos, agendaAdmin],
    status: "desenvolvimento",
    links: [
      { rotulo: "Front-end", url: "https://github.com/MaiconCasagrandaDev/agenda-manicure-web" },
      { rotulo: "API", url: "https://github.com/MaiconCasagrandaDev/agenda-manicure-api" },
    ],
  },
  {
    titulo: "Brick Breaker",
    descricao:
      "Jogo mobile para Android desenvolvido em equipe com colegas da faculdade.",
    tecnologias: ["Flutter", "Dart"],
    imagens: [brickInicial, brickJogo],
    links: [
      { rotulo: "Código", url: "https://github.com/julia-maia/brick-breaker" },
    ],
  },
  {
    titulo: "Visualizador de Filmes Ghibli",
    descricao:
      "Catálogo dos filmes do Studio Ghibli com busca por título, ordenação e página de detalhes de cada filme, consumindo uma API pública.",
    tecnologias: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    imagens: [ghibliLista, ghibliDetalhes],
    status: "online",
    links: [
      {
        rotulo: "Ver online",
        url: "https://maiconcasagrandadev.github.io/visualizador-filmes-ghibli/",
        destaque: true,
      },
      { rotulo: "Código", url: "https://github.com/MaiconCasagrandaDev/visualizador-filmes-ghibli" },
    ],
  },
  {
    titulo: "Visualizador de Perfil do GitHub",
    descricao:
      "Busca um usuário do GitHub e mostra seus dados e repositórios, consumindo a API oficial do GitHub.",
    tecnologias: ["JavaScript", "API do GitHub"],
    imagens: [githubBusca, githubResultado],
    links: [
      { rotulo: "Código", url: "https://github.com/MaiconCasagrandaDev/visualizador-perfil-github" },
    ],
  },
];