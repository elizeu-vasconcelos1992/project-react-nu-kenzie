import "./style.css";
import logo from "../../assets/KenzieDark.svg";
import design from "../../assets/design.svg";

function InicialPage({ swapPage }) {
  return (
    <div className="page">
      <div className="page__inicial">
        <img src={logo} alt="logo Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <h4>de forma rápida e segura</h4>
        <button onClick={() => swapPage(false)}>Iniciar</button>
      </div>
      <div className="page__design">
        <img className="design" src={design} alt="design" />
      </div>
    </div>
  );
}

export default InicialPage;
