import styled from "styled-components";

interface RespostaProps {
  respondido: boolean;
  clicado: boolean;
}
export const RespostaContainer = styled.div<RespostaProps>`
  cursor: pointer;
  border: 2px solid #f7eee9;
  border-radius: 8px;
  display: flex;
  &:active {
    top: 10px;
  }
  padding: 0 8px;
  margin: 16px 0;
  background-color: ${(props) =>
    props.respondido ? (props.clicado ? "#8ace00" : "#e32636") : "#f7eee9"};
`;
export const ConteudoResposta = styled.p`
  font-size: 18px;
  color: #2c2c2c;
  margin: 0;
  font-family: "open sans", sans-serif;
  font-weight: 400;
  padding: 16px 0;
`;
