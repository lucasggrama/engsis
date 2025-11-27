import { useState } from "react";
import {
  AppContainer,
  Botao,
  BotaoContainer,
  TextoBotao,
  TituloContainer,
  TituloTexto,
} from "./App.styles";
import Tarefas from "./components/tarefas/tarefas";
import type { QuestaoArray } from "./components/questao/questao";
import { useImageStore } from "../src/hooks/imagem/useImagem";
import { ciberseguranca, energiasSustentaveis, transportePublico } from "./components/arvoresDeDesicao/arvores";


function App() {
  const [arvoreAtiva, setArvoreAtiva] = useState<QuestaoArray | null>(null);
  const imageUrl = useImageStore((s) => s.imageUrl);

  function selecionarArvore(arvore: QuestaoArray) {
    setArvoreAtiva(arvore);
  }

  return (
    
    <AppContainer bg={imageUrl}>
      {!arvoreAtiva ? (
        <>
          <TituloContainer>
            <TituloTexto>Escolha um tema para começar:</TituloTexto>
          </TituloContainer>
          <BotaoContainer>
            <Botao onClick={() => selecionarArvore(transportePublico)}>
              <TextoBotao>Transporte Público</TextoBotao>
            </Botao>
            <Botao onClick={() => selecionarArvore(ciberseguranca)}>
              <TextoBotao>Cibersegurança</TextoBotao>
            </Botao>
            <Botao onClick={() => selecionarArvore(energiasSustentaveis)}>
              <TextoBotao>Energias Sustentáveis</TextoBotao>
            </Botao>
          </BotaoContainer>
        </>
      ) : (
        <>
          <Tarefas questaoInicial={arvoreAtiva} />
        </>
      )}
    </AppContainer>
  );
}

export default App;
