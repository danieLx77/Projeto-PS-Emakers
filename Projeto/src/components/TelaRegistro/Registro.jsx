import React from 'react'
import { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import "./Registro.css"

//teste commit

const Registro = () => {


    //Armazenar entradas do usuário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    //Função que chama quando o formulário é enviado
    const handleSubmit = (event) => {
        //Impedir da página recarregar
        event.preventDefault();
    }
  return (
    <div className="container">
        <div className="blocoRegistro">
        <h1 className="tituloRegistro">Registrar</h1>
        <form onSubmit={handleSubmit}>
        <div className="conjuntoInputs">
            <div className="inputNome">
            <input 
                type="text" 
                placeholder="Nome de Usuário"
                required
                value = {nome}
                onChange = {(e) => setNome(e.target.value)}
            />
            </div>
            <div className="inputEmail">
            <input 
                type="email" 
                placeholder="E-mail"
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="inputCpf">
            <input 
                type="text" 
                placeholder="CPF"
                required
                value = {cpf}
                onChange = {(e) => setCpf(e.target.value)}
            />
            </div>
            <div className="inputSenha">
            <input 
                type="password" 
                placeholder="Senha"
                required
                value = {senha}
                onChange = {(e) => setSenha(e.target.value)}
            />
            </div>
            <div className="inputConfirmaSenha">
            <input 
                type="password" 
                placeholder="Confirmar Senha"
                required
                value = {confirmaSenha}
                onChange = {(e) => setConfirmaSenha(e.target.value)}
            />
            </div>
            <div className="botaoSeta">
                <button className ="button" type = "submit"><EastIcon></EastIcon></button>
            </div>
            <div className="irParaLogin">
                 <a href ="#">Fazer Login</a>

        </div>
            </div>
                </form>
                    </div>
                        <div className="blocoImagem">  </div>
                             </div>
  )
}

export default Registro