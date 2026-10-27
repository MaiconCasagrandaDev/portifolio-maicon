import brickBreaker from "../../assets/images/brick-breaker.png";
import github from "../../assets/images/github.png";
import ghibli from "../../assets/images/studio-ghibli.png";

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
  ajuste?: "cover" | "contain";
  status?: "online" | "desenvolvimento";
  links: { rotulo: string; url: string; destaque?: boolean }[];
};

export const projetos: Projeto[] = [
  {
    titulo: "Agenda Manicure",
    descricao:
      "Agendamento online para um estúdio de manicure. A cliente escolhe serviços e horários livres pelo celular, e a profissional aprova pedidos, vê a agenda e bloqueia horários num painel.",
    tecnologias: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
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
    imagem: ghibli,
    ajuste: "contain",
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
    titulo: "Atendente Digital",
    descricao:
      "API de pedidos para um atendente virtual no WhatsApp. Já tem cardápio, carrinho por cliente e fluxo de status do pedido. A integração com o WhatsApp e a IA estão em andamento.",
    tecnologias: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    status: "desenvolvimento",
    links: [
      { rotulo: "Código", url: "https://github.com/MaiconCasagrandaDev/atendente-digital" },
    ],
  },
  {
    titulo: "Visualizador de Perfil do GitHub",
    descricao:
      "Busca um usuário do GitHub e mostra seus dados e repositórios, consumindo a API oficial do GitHub.",
    tecnologias: ["JavaScript", "API do GitHub"],
    imagem: github,
    ajuste: "contain",
    links: [
      { rotulo: "Código", url: "https://github.com/MaiconCasagrandaDev/visualizador-perfil-github" },
    ],
  },
  {
    titulo: "Brick Breaker",
    descricao:
      "Jogo mobile para Android desenvolvido em equipe com colegas da faculdade.",
    tecnologias: ["Flutter", "Dart"],
    imagem: brickBreaker,
    ajuste: "contain",
    links: [
      { rotulo: "Código", url: "https://github.com/julia-maia/brick-breaker" },
    ],
  },
];