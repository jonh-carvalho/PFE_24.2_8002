import styled from "styled-components";

const BotaoEstilizado = styled.button`
  
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function About() {
  return (
    <>
      <h1>Meu App com Styled Components</h1>
      <BotaoEstilizado>About</BotaoEstilizado>
      <h1>Meu App com Styled Components</h1>
      <BotaoEstilizado>About</BotaoEstilizado>
    </>
  );
}

export default About;
