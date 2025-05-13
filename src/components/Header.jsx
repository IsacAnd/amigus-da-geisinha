import "../styles/header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        {/* <img id="logo-img" src="" alt="" /> */}
        <h3>Amigus da Geisinha</h3>
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
