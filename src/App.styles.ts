import styled from "styled-components";

export const AppContainer = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  overflow: hidden; // bloqueia scroll dentro do container
`;

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
`;
export const TituloContainer = styled.div` padding: 0px 16px;`;
export const TituloTexto = styled.h1`
  text-align: center;
  background: rgba(58, 73, 96);
  border-radius: 18px;
  padding: 25px 10px;
  color: #fff;
  font-family: "comic sans ms", cursive, sans-serif;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
  margin-bottom: 40px;
`;
export const Botao = styled.button`
  border: none;
  color: #fff;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 30px;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  &:active {
    top: 10px;
  }
`;
export const TextoBotao = styled.span`
  font-family: "comic sans ms";
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  text-wrap: wrap;
  text-overflow: ellipsis;
`;
