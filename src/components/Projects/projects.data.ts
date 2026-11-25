import agendaServicos from "../../assets/images/agendamento-manicure.webp";
import agendaAdmin from "../../assets/images/agendamento-admin.webp";
import ghibliLista from "../../assets/images/visualizador-filmes-ghibli.webp";
import ghibliDetalhes from "../../assets/images/visualizador-filmes-ghibli-detalhes.webp";
import githubBusca from "../../assets/images/visualizador-perfil-github.webp";
import githubResultado from "../../assets/images/visualizador-perfil-github-resultado.webp";
import brickInicial from "../../assets/images/brick-breaker-tela-inicial.webp";
import brickJogo from "../../assets/images/brick-breaker-jogo.webp";
import atendenteCardapio from "../../assets/images/cardapio.webp";
import atendenteConversa from "../../assets/images/conversa.webp";

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
      "Atendente virtual com IA para lanchonetes. O cliente conversa com a IA, que mostra o cardápio, calcula o total e salva o pedido, com avisos de cada etapa. Teste a conversa no simulador. O envio pelo WhatsApp oficial aguarda liberação da Meta.",
    tecnologias: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Gemini API", "WhatsApp API"],
    imagens: [atendenteCardapio, atendenteConversa],
    status: "online",
    links: [
      { rotulo: "Testar conversa", url: "https://atendente-digital.onrender.com/simulador", destaque: true },
      { rotulo: "Cardápio", url: "https://atendente-digital.onrender.com/cardapio" },
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