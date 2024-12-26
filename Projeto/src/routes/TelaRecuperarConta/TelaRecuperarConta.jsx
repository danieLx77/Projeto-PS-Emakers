import React, { useState } from "react";
import Formularios from "../../components/Formularios/Formularios";  
import ButtonSeta from "../../components/ButtonSeta/ButtonSeta";  
import LinkTelasEntrada from "../../components/LinkTelasEntrada/LinkTelasEntrada";  
import ImagemTelasInic from "../../components/ImagemTelasInic/ImagemTelasInic";  
import imagemHeroina from "../../assets/imagem2.png";  
import "./TelaRecuperarConta.css";  

const TelaRecuperarConta = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className="containerRecConta">
      <div className="blocoRecConta">
        <h1 className="tituloRecConta">Recuperar Conta</h1>
        <form onSubmit={handleSubmit}>
          <div className="conjuntoInputsRecConta">
            <Formularios
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonSeta />
            <div className="linksTelaRecConta">
            <LinkTelasEntrada
              links={[
                { href: "/Registrar", text: "Criar conta" },
                { href: "/Login", text: "Fazer Login" },
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

export default TelaRecuperarConta;