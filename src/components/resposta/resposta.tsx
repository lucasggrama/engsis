import type { QuestaoArray } from "../questao/questao";
import { ConteudoResposta, RespostaContainer } from "./resposta.styles";

export interface RespostaArray {
  titulo: string;
  conteudo: string;
  proximaQuestao?: QuestaoArray;
  resposta?: string;
  status?: string;
  categoria?: string;
  imagem?: string;
}

interface RespostaProps {
  resposta: RespostaArray;
  clicado: boolean;
  respondido: boolean;
  onClick: () => void;
}
function Resposta({ resposta, clicado, respondido, onClick }: RespostaProps) {

  return (
    <RespostaContainer
      clicado={clicado}
      respondido={respondido}
      onClick={onClick}
    >
      <ConteudoResposta>
        {resposta.titulo} - {resposta.conteudo}
      </ConteudoResposta>
    </RespostaContainer>
  );
}

export default Resposta;
