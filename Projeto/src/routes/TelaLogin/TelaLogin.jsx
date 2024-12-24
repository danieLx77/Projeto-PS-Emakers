import React, { useState } from "react";
import Formularios from "../../components/Formularios/Formularios";  
import ButtonSeta from "../../components/ButtonSeta/ButtonSeta";  
import LinkTelasEntrada from "../../components/LinkTelasEntrada/LinkTelasEntrada";  
import ImagemTelasInic from "../../components/ImagemTelasInic/ImagemTelasInic";  
import imagemHeroina from "../../assets/imagem2.png";  
import "./TelaLogin.css";  

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className="containerLogin">
      <div className="blocoLogin">
        <h1 className="tituloLogin">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="conjuntoInputsLogin">
            <Formularios
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Formularios
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <ButtonSeta />
            <div className="link">
            <LinkTelasEntrada
              links={[
                { href: "/registro", text: "Criar conta" },
                { href: "/esqueci-senha", text: "Esqueceu a Senha?" },
              ]}
            />
            </div>
          </div>
        </form>
      </div>
      <ImagemTelasInic image={imagemHeroina} />
    </div>
  );
};

export default TelaLogin;