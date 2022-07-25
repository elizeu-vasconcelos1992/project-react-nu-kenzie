import "./style.css";
import logo from "../../assets/kenzie.svg";

function Header({ swapPage }) {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <button onClick={() => swapPage(true)}>Início</button>
    </div>
  );
}

export default Header;
