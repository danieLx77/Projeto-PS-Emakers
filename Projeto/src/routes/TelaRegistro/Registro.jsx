import React, { useState } from "react";
import Formularios from "../../components/Formularios/Formularios";
import ButtonSeta from "../../components/ButtonSeta/ButtonSeta";
import LinkTelasEntrada from "../../components/LinkTelasEntrada/LinkTelasEntrada";
import ImagemTelasInic from "../../components/ImagemTelasInic/ImagemTelasInic";
import "./Registro.css";
import imagemHeroina from "../../assets/imagem2.png"

const Registro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, email, cpf, senha, confirmaSenha });
  };

  return (
    <div className="container">
      <div className="blocoRegistro">
        <h1 className="tituloRegistro">Registrar</h1>
        <form onSubmit={handleSubmit}>
          <div className="conjuntoInputs">
            <Formularios
              type="text"
              placeholder="Nome de Usuário"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Formularios
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Formularios
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Formularios
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Formularios
              type="password"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
            <ButtonSeta />
            <LinkTelasEntrada
              links={[
                { href: "/Login", text: "Fazer Login" },
              ]}
            />
          </div>
        </form>
      </div>
      <ImagemTelasInic image={imagemHeroina} />
    </div>
  );
};

export default Registro;