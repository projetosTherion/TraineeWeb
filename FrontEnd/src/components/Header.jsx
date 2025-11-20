import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img 
            src="/images/logoBranca.webp" 
            alt="Logo Therion" 
            className="header-logo" 
          />
        </Link>

        {/* Menu de navegação */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Sobre Nós</Link>
            </li>
            <li className="nav-item">
              <Link to="/projetos" className="nav-link">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link to="/impressao3d" className="nav-link">Impressão 3D</Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;