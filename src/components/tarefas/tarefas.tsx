import { useState } from "react";
import Questao from "../questao/questao";
import type { QuestaoArray } from "../questao/questao";
import {
  ContainerResultado,
  ConteudoResultado,
  TituloResultado,
} from "./tarefas.styles";

import { useImageStore } from "../../hooks/imagem/useImagem";

interface TarefasProps {
  questaoInicial: QuestaoArray;
}

function Tarefas({ questaoInicial }: TarefasProps) {
  const [questaoAtual, setQuestaoAtual] = useState<QuestaoArray | null>(
    questaoInicial
  );
  const [resultadoFinal, setResultadoFinal] = useState<string | null>(null);
  const [respostaClicada, setRespostaClicada] = useState<number | null>(null);
  const [status, setStatus] = useState<String>("");
  const { setImageUrl } = useImageStore();

  function handleResponder(index: number) {
    if (!questaoAtual) return;

    const respostaSelecionada = questaoAtual.respostas[index];
    setRespostaClicada(index);

    if (respostaSelecionada.resposta) {
      setResultadoFinal(respostaSelecionada.resposta);
      if (respostaSelecionada.status) setStatus(respostaSelecionada.status);
      if (respostaSelecionada.imagem) {
        setImageUrl(respostaSelecionada.imagem);
      }

      setQuestaoAtual(null);
    } else if (respostaSelecionada.proximaQuestao) {
      setQuestaoAtual(respostaSelecionada.proximaQuestao);
      setRespostaClicada(null);
    }
  }

  return (
    <>
      {questaoAtual && (
        <Questao
          questao={questaoAtual}
          respondida={false}
          respostaClicada={respostaClicada}
          onResponder={handleResponder}
        />
      )}

      {resultadoFinal && (
        <ContainerResultado>
          <TituloResultado>{status}</TituloResultado>
          <ConteudoResultado>{resultadoFinal}</ConteudoResultado>
        </ContainerResultado>
      )}
    </>
  );
}

export default Tarefas;
