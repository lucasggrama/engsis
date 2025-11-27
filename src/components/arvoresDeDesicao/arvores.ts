import type { QuestaoArray } from "../questao/questao";

/* IMAGENS CORRETAS POR TEMA */
import c_falha from "../../assets/ciberseguranca/falha.jpg";
import c_medio from "../../assets/ciberseguranca/medio.jpg";
import c_sucesso from "../../assets/ciberseguranca/sucesso.jpg";

import es_falha from "../../assets/energiaSustentavel/falha.jpg";
import es_medio from "../../assets/energiaSustentavel/medio.jpg";
import es_sucesso from "../../assets/energiaSustentavel/sucesso.jpg";

import t_falha from "../../assets/transito/falha.jpg";
import t_medio from "../../assets/transito/medio.jpg";
import t_sucesso from "../../assets/transito/sucesso.jpg";

/* ========================================================
   TRANSPORTE PÚBLICO
======================================================== */
export const transportePublico: QuestaoArray = {
  titulo: "Transporte Público",
  enunciado:
    "O trânsito da cidade de Belo Horizonte está caótico! Qual sua primeira ação para resolver isso?",
  respostas: [
    {
      titulo: "a",
      conteudo: "Adicionar semáforos inteligentes",
      proximaQuestao: {
        titulo: "Semáforos Inteligentes",
        enunciado:
          "Os semáforos agora se adaptam ao fluxo de carros, mas o sistema começa a travar. O que você faz?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Analisa os dados e descobre a causa do problema",
            resposta:
              "Parabéns! Você descobriu a raiz do problema e pôde consertá-lo, pensando como um verdadeiro engenheiro de sistemas!",
            imagem: t_sucesso,
            status: "Sucesso!",
          },
          {
            titulo: "b",
            conteudo: "Contrata técnicos para resolver o problema",
            resposta:
              "Boa tentativa! Você resolveu o problema local, mas sem enxergar o sistema completo.",
            imagem: t_medio,
            status: "Solução Incompleta",
          },
          {
            titulo: "c",
            conteudo:
              "Prioriza o tráfego de ônibus nos semáforos para melhorar a mobilidade urbana",
            resposta:
              "A ideia melhora o transporte público, mas o sistema geral continua travando. Falta visão sistêmica!",
            imagem: t_falha,
            status: "Você falhou :(",
          },
        ],
      },
    },

    {
      titulo: "b",
      conteudo: "Criar um aplicativo para transporte público",
      proximaQuestao: {
        titulo: "Aplicativo de Transporte",
        enunciado:
          "O aplicativo ajuda os usuários a ver horários e rotas, mas começa a ter reclamações de lentidão e dados incorretos. O que você faz?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Integra o app com sensores em tempo real dos ônibus",
            imagem: t_sucesso,
            resposta:
              "O sistema fica preciso e melhora a confiança dos usuários. Parabéns, você usou integração e automação!",
            status: "Sucesso!",
          },
          {
            titulo: "b",
            conteudo: "Contrata mais pessoas para atualizar manualmente",
            imagem: t_medio,
            resposta:
              "Boa tentativa, mas faltou automatização. Um sistema não deve depender só de pessoas.",
            status: "Solução Incompleta",
          },
          {
            titulo: "c",
            conteudo:
              "Implementa um sistema de cache para acelerar as consultas",
            imagem: t_medio,
            resposta:
              "O app fica mais rápido, mas continua exibindo dados atrasados. O problema era na origem dos dados!",
            status: "Solução Incompleta",
          },
        ],
      },
    },

    {
      titulo: "c",
      conteudo: "Aumentar a frota de ônibus",
      proximaQuestao: {
        titulo: "Aumento da Frota",
        enunciado:
          "O número de ônibus cresce, mas o congestionamento piora. O que você faz?",
        respostas: [
          {
            titulo: "a",
            conteudo:
              "Mantém o mesmo número de rotas, só que com mais veículos",
            imagem: t_falha,
            resposta:
              "Seu sistema fica caro e ineficiente. Mais recursos nem sempre significam melhoria.",
            status: "Você falhou :(",
          },
          {
            titulo: "b",
            conteudo: "Analisa o fluxo e ajusta rotas com base em dados",
            imagem: t_sucesso,
            resposta:
              "Você aplicou análise de sistemas e reduziu custos e tempo de viagem.",
            status: "Sucesso!",
          },
          {
            titulo: "c",
            conteudo:
              "Redistribui horários para evitar picos simultâneos de ônibus",
            imagem: t_medio,
            resposta:
              "Ajudou um pouco, mas não resolve o problema geral sem análise completa do fluxo urbano.",
            status: "Solução Incompleta",
          },
        ],
      },
    },
  ],
};

/* ========================================================
   CIBERSEGURANÇA
======================================================== */
export const ciberseguranca: QuestaoArray = {
  titulo: "Cibersegurança",
  enunciado:
    "Você está fazendo compras online mas percebe que muitos anúncios são golpes. O que você faz?",
  respostas: [
    {
      titulo: "a",
      conteudo: "Desenvolve um sistema de detecção automática de fraudes",
      proximaQuestao: {
        titulo: "Sistema de Detecção",
        enunciado:
          "O sistema começa a bloquear até anúncios verdadeiros. O que você faz?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Adiciona regras extras para refinamento rápido",
            resposta:
              "Regras demais deixam o sistema rígido e impreciso. Faltou análise sistêmica!",
            imagem: c_medio,
            status: "Solução Incompleta",
          },
          {
            titulo: "b",
            conteudo: "Cria lista de exceções para anúncios confiáveis",
            resposta:
              "Funciona no início, mas vira um sistema difícil de manter.",
            imagem: c_falha,
            status: "Você falhou :(",
          },
          {
            titulo: "c",
            conteudo:
              "Reprograma o algoritmo para distinguir falsos e legítimos",
            resposta:
              "Você aplicou aprendizado de máquina e visão sistêmica.",
            imagem: c_sucesso,
            status: "Sucesso!",
          },
        ],
      },
    },

    {
      titulo: "b",
      conteudo: "Criar uma campanha de conscientização",
      proximaQuestao: {
        titulo: "Campanha de Conscientização",
        enunciado: "Posts e palestras têm pouco engajamento. O que você faz?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Parceria com influenciadores e escolas",
            resposta: "A campanha viraliza e reduz fraudes em 20%.",
            imagem: c_sucesso,
            status: "Sucesso!",
          },
          {
            titulo: "b",
            conteudo: "Muda o design dos posts",
            resposta: "A estética melhora, mas o impacto continua baixo.",
            imagem: c_medio,
            status: "Solução Incompleta",
          },
          {
            titulo: "c",
            conteudo: "Faz conteúdos mais longos e técnicos",
            resposta:
              "Os posts ficam difíceis de entender e o engajamento cai.",
            imagem: c_falha,
            status: "Você falhou :(",
          },
        ],
      },
    },

    {
      titulo: "c",
      conteudo: "Criar um antivírus para o site",
      proximaQuestao: {
        titulo: "Antivírus do Site",
        enunciado:
          "O antivírus bloqueia arquivos suspeitos, mas atrapalha os usuários.",
        respostas: [
          {
            titulo: "a",
            conteudo: "Ajusta a sensibilidade do antivírus",
            resposta: "Você equilibrou segurança e desempenho.",
            imagem: c_sucesso,
            status: "Sucesso!",
          },
          {
            titulo: "b",
            conteudo: "Adiciona verificações extras para mais proteção",
            resposta:
              "O site fica seguro… e muito lento. Equilíbrio é essencial.",
            imagem: c_medio,
            status: "Solução Incompleta",
          },
          {
            titulo: "c",
            conteudo: 'Permite escolher entre "modo seguro" e "modo rápido"',
            resposta:
              "Parece democrático, mas usuários escolhem modo rápido e criam brechas.",
            imagem: c_falha,
            status: "Você falhou :(",
          },
        ],
      },
    },
  ],
};

/* ========================================================
   ENERGIAS SUSTENTÁVEIS
======================================================== */
export const energiasSustentaveis: QuestaoArray = {
  titulo: "Energias Sustentáveis",
  enunciado:
    "Você trabalha em uma hidrelétrica e percebe que a estrutura afeta o ecossistema. O que você faz?",
  respostas: [
    {
      titulo: "a",
      conteudo: "Planeja sistema híbrido com energia solar e eólica",
      proximaQuestao: {
        titulo: "Sistema Híbrido",
        enunciado: "Os custos aumentam e o projeto corre risco. O que fazer?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Corta partes do projeto para economizar",
            imagem: es_medio,
            resposta: "Parcial: custo cai, mas eficiência também cai.",
            status: "Solução Incompleta",
          },
          {
            titulo: "b",
            conteudo: "Cria simulações mostrando retorno a longo prazo",
            imagem: es_sucesso,
            resposta:
              "O governo apoia o projeto e ele vira referência.",
            status: "Sucesso!",
          },
          {
            titulo: "c",
            conteudo: "Foca só na hidrelétrica para tentar compensar custos",
            imagem: es_falha,
            resposta:
              "Foca só na hidrelétrica e ignora o impacto ambiental geral.",
            status: "Você falhou :(",
          },
        ],
      },
    },

    {
      titulo: "b",
      conteudo: "Implementar sistema de monitoramento ambiental",
      proximaQuestao: {
        titulo: "Monitoramento Ambiental",
        enunciado: "Sensores começam a dar leituras inesperadas. O que fazer?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Aumenta frequência de coleta de dados",
            imagem: es_medio,
            resposta: "Mais dados não corrigem erro de origem.",
            status: "Solução Incompleta",
          },
          {
            titulo: "b",
            conteudo: "Revisa calibração dos sensores e fluxo de dados",
            imagem: es_sucesso,
            resposta: "O sistema gera alertas precisos.",
            status: "Sucesso!",
          },
          {
            titulo: "c",
            conteudo: "Assume que o clima mudou e ajusta previsões",
            imagem: es_falha,
            resposta: "Sem validar dados, decisões se tornam imprecisas.",
            status: "Você falhou :(",
          },
        ],
      },
    },

    {
      titulo: "c",
      conteudo: "Criar campanhas de consumo consciente",
      proximaQuestao: {
        titulo: "Campanhas de Consumo",
        enunciado: "Pessoas acham as campanhas chatas. O que fazer?",
        respostas: [
          {
            titulo: "a",
            conteudo: "Cria app gamificado que recompensa economia de energia",
            resposta:
              "Parabéns! O consumo cai e o projeto vira sucesso nacional.",
            imagem: es_sucesso,
            status: "Sucesso!",
          },
          {
            titulo: "b",
            conteudo: "Muda estética mas mantém conteúdo igual",
            imagem: es_medio,
            resposta: "Visual melhora, mas engajamento não.",
            status: "Solução Incompleta",
          },
          {
            titulo: "c",
            conteudo: "Segmenta por idade e manda campanhas diferentes",
            imagem: es_falha,
            resposta: "Segmentar não resolve se o conteúdo não conecta.",
            status: "Você falhou :(",
          },
        ],
      },
    },
  ],
};
