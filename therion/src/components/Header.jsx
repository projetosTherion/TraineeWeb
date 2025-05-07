import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: ' #FF5991', padding: '10px', color: '#fff' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li>
            <Link to="/" style={{ color: '#fff' }}>Home</Link>
          </li>
          <li><Link to="/sobre" style={{ color: '#fff' }}>Sobre Nós</Link></li>
          <li><Link to="/projetos" style={{ color: '#fff' }}>Projetos</Link></li>
          <li><Link to="/impressao3d" style={{ color: '#fff' }}>Impressão 3D</Link></li>
          <li><Link to="/contato" style={{ color: '#fff' }}>Contato</Link></li>
        </ul>
      </nav>
      <nav>
        e
        <ul style={{listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li>
            <Link to="/" style={{ color: '#fff' }}> Cadastro </Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
