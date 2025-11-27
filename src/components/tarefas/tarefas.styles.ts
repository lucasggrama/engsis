import styled from "styled-components";

export const TarefasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerResultado = styled.div`
background: rgba(58, 73, 96);
  border-radius: 10px;
  padding: 14px 12px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  margin: 0;
  margin-left: initial; 
  // Mantém as outras propriedades de layout e tamanho
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
  align-items: flex-start;
  `;
export const TituloResultado = styled.h2`
  font-family: "comic sans ms";
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
`;
export const ConteudoResultado = styled.p`
  font-size: 18px;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  font-family: "open sans", sans-serif;
  font-weight: 400;
  padding: 16px 0;
`;
