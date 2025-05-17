import styles from './container.module.css'; // Importa o arquivo CSS
import tetris from '../assets/tetris.png';
import arcseed from '../assets/arcseed.png';

function Projetos() {
  // Estilos
  const mainStyle = {
    paddingBottom: '40px' // torna a página mais longa
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',   // empilha os cards verticalmente
    alignItems: 'center',      // centraliza os cards horizontalmente
    gap: '30px',               // espaçamento entre cards
    marginTop: '20px'
  };

const cardStyle = {
    backgroundColor: '#ffe6f0',
    border: '2px solid #ff99cc',
    padding: '24px',
    width: '1000px',
    height: '500px',
    borderRadius: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardHoverStyle = {
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      border: '2px solid #ff66b2'
    }
  };

  const titulo2Style = {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '30px',
    color: '#ff4d94',
    transition: 'color 0.3s ease'
  };

  const paragrafoStyle = {
    fontSize: '20px',
    marginBottom: '12px',
    lineHeight: '1.6',
    color: '#666',
    transition: 'opacity 0.3s ease'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    maxHeight: '350px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.02)'
    }
  };

  const titulo1Style = {
    fontSize: '40px',
    fontWeight: 'bold'
  };

   const introParagrafoStyle = {
    fontSize: '35px',        // aumentado de 20px para 28px
    marginTop: '8px',
    textAlign: 'center',     // centraliza o texto
    fontWeight: 'bold'       // adiciona o negrito
  };      // centraliza o texto
  
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    e.currentTarget.style.border = '2px solid #ff66b2';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    e.currentTarget.style.border = '2px solid #ff99cc';
  };

  return (



    <main style={mainStyle}>
      <div className={styles.titulo1} style={titulo1Style}>
        Projetos
      </div>

      <div className={styles.paragrafo} style={introParagrafoStyle}>
        Projetos que viraram realidade.
      </div>

   <div style={cardContainerStyle}>
      <div 
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <div style={titulo2Style}>Projetos WordPress</div>
          <div style={paragrafoStyle}>
            Criamos o site institucional da EJ Tetris, unindo design moderno com funcionalidade para destacar sua presença online.
          </div>
        </div>
        <img src={tetris} alt="Projetos Web" style={imageStyle} />
      </div>

      <div 
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <div style={titulo2Style}>Desenvolvimento Web</div>
          <div style={paragrafoStyle}>
           Site desenvolvido pela nossa Empresa Júnior que usa IA para gerar imagens realistas a partir de descrições. Voltado para arquitetos que buscam criar referências visuais de forma rápida e personalizada.
          </div>
        </div>
        <img src={arcseed} alt="Projetos Web" style={imageStyle} />
      </div>
    </div>
    </main>



  );
}

export default Projetos;