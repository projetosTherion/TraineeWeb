import { Link } from 'react-router-dom';
import LogoBranca from '../assets/LogoBranca.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img 
            src={LogoBranca} 
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

        <div className="cart-icon-wrapper">
          <a 
            href="/carrinho" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Carrinho de compras"
            className="cart-link"
          >
            <svg className="cart-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;