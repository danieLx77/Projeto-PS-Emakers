import React from "react";
import "./TelaConta.css";
import SearchIcon from '@mui/icons-material/Search';
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Jogo1 from "../../assets/bobEsponja.png";
import Jogo2 from "../../assets/deathStranding.png";
import Jogo3 from "../../assets/deliverUsMars.png";
import Jogo4 from "../../assets/godOfWar.png";


const TelaConta = () => (
  <div className="container">
    <header className="NavBar">
        <div className="logo">
            <img src = {ImagemPerfil} alt="Logo" />
        </div>
      <nav className = "linksNav">
        <a href="/lancamentos">Lançamentos</a><span className="pipe">|</span>
        <a href="/populares">Populares</a><span className="pipe">|</span>
        <a href="/generos">Gêneros</a><span className="pipe">|</span>
        <a href="/promocoes">Promoções</a><span className="pipe">|</span>
        <a href="/conta">Conta</a>
      </nav>
      <div className="BarraPesquisa">
        <button className="lupa">
            <SearchIcon />
        </button>
        <input type="search" placeholder="" className="search-bar" />
      </div>
    </header>

    <div className="Principal">
      <div className="blocoInfoUsuario">
      <div className="user-info">
        <h2 className = "tituloUsuario"> Olá, Nome do Usuário </h2>
        <p>Seu email é nomeusuario@email.com</p>
        <p>Seu CPF é 123.456.789-00</p>
        <button className = "buttonAlterar">Alterar Dados
        <EditIcon />
        </button>
        <button className = "buttonExcluir">Excluir Conta
        <DeleteIcon />
        </button>
        <button className = "buttonTelaAdmin">Tela do admin</button>
      </div>
      </div>

      <div className="blocoListaJogos">
      <div className="games-list">
        <h2 className="tituloListJogos">Jogos adquiridos:</h2>
        <div className="game">
          <img src={Jogo1} alt="Jogo 1" />
          <p>100/100</p>
        </div>
        <div className="game">
          <img src={Jogo2} alt="Jogo 2" />
          <p>95/100</p>
        </div>
        <div className="game">
          <img src={Jogo3} alt="Jogo 3" />
          <p>75/100</p>
        </div>
        <div className="game">
          <img src={Jogo4} alt="Adicionar Avaliação" />
          <p>Adicionar Avaliação</p>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default TelaConta;
