import styled from "styled-components";
import  { useState } from 'react';
import  { useRef } from 'react';

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

  const [contador, setContador] = useState(0);
  const inputRef = useRef(null);

  const incrementar = () => {
    setContador(contador + 1);
  };

   const focarInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Meu App com Styled Components</h1>
      <BotaoEstilizado>About</BotaoEstilizado>
      <h1>Meu App com Styled Components</h1>
      <BotaoEstilizado>About</BotaoEstilizado>

      
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>Clique aqui</button>
<br /><br />
      <input ref={inputRef} type="text" placeholder="Clique para focar" />
      <button onClick={focarInput}>Focar no input</button>

    
    </>
  );
}

export default About;
