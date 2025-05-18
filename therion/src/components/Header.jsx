import { Link } from 'react-router-dom';
import LogoBranca from '../assets/LogoBranca.png';

function Header() {
  return (
    <header style={{ background: '#FF5991', padding: '10px 10px', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        
        {/* Logo no canto esquerdo */}
        <div style={{ flex: '1', textAlign: 'left' }}>
          <img 
            src={LogoBranca} 
            alt="Logo" 
            style={{ height: '47px' }} 
          />
        </div>

        {/* Navegação centralizada */}
        <nav style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, fontSize: '27px'}}>
            <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
            <li><Link to="/sobre" style={{ color: '#fff' }}>Sobre Nós</Link></li>
            <li><Link to="/projetos" style={{ color: '#fff' }}>Projetos</Link></li>
            <li><Link to="/impressao3d" style={{ color: '#fff' }}>Impressão 3D</Link></li>
            <li><Link to="/contato" style={{ color: '#fff' }}>Contato</Link></li>
          </ul>
        </nav>


      </div>
    </header>
  );
}

export default Header;
