// import { useRef } from "react";
import { useState } from "react";

function FormLogin() {
  //const emailRef = useRef();
  //const senhaRef = useRef();

  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState(''); 

  {
    /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", emailRef.current.value);
    console.log("Senha:", senhaRef.current.value);
    // Processar o login
  };
*/}

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes('@')) {
      setErroEmail('Email inválido');
    } else {
      setErroEmail('');
    }
  };

  return (
    <>
      <label>
        Email: <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      {erroEmail && <p>{erroEmail}</p>}
      <br />


      {/* 
      <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <label>
        Senha:
        <input type="password" ref={senhaRef} />
      </label>
      <button type="submit">Entrar</button>
    </form>
    */}
    </>
  );
}

export default FormLogin;
