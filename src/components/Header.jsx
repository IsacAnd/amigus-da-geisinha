import "../styles/header.css";
import logo from "../img/logo3.png";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img id="logo-img" src={logo} alt="" />
        <h2>Amigus da Geisinha</h2>
      </div>
      <nav className="navigation-container">
        <ul id="navigation-options">
          <li className="nav-option">Quem somos?</li>
          <li className="nav-option">Nossos produtos</li>
          <li className="nav-option">Encomendas</li>
          <li className="nav-option">Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
