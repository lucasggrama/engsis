import type { RespostaArray } from "../resposta/resposta";
import Resposta from "../resposta/resposta";
import {
  EnunciadoQuestao,
  QuestaoContainer,
  RepostasContainer,
  TituloQuestao,
} from "./questao.styles";

import imagem from "../../assets/perguntas.jpg";
import { useImageStore } from "../../hooks/imagem/useImagem";  // ⬅️ mover pra cima
import { useEffect } from "react";

export type QuestaoArray = {
  titulo: string;
  enunciado: string;
  respostas: RespostaArray[];
};

interface QuestaoProps {
  questao: QuestaoArray;
  respondida: boolean;
  respostaClicada: number | null;
  onResponder: (index: number) => void;
}

function Questao({
  questao,
  respondida,
  respostaClicada,
  onResponder,
}: QuestaoProps) {

  const { setImageUrl } = useImageStore();   // ⬅️ AGORA SIM: dentro do componente

  useEffect(() => {
    setImageUrl(imagem);
  }, [setImageUrl]);

  return (
    <>
      <QuestaoContainer>
        <TituloQuestao>{questao.titulo}</TituloQuestao>
        <EnunciadoQuestao>{questao.enunciado}</EnunciadoQuestao>
      </QuestaoContainer>
      <RepostasContainer>
        {questao.respostas.map((resposta, index) => (
          <Resposta
            key={index}
            resposta={resposta}
            clicado={respostaClicada === index}
            respondido={respondida}
            onClick={() => onResponder(index)}
          />
        ))}
      </RepostasContainer>
    </>
  );
}

export default Questao;
