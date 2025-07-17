import styles from '../components/componentsProjetos/containerProjetos.module.css'; // Importa o arquivo CSS do containerProjetos
import CasesSection from '../components/componentsProjetos/CaseSection';
import ProjetosSection from '../components/componentsProjetos/projetosSection';


function Projetos() {
   
  return ( //retorna oq vai aparecer na pagina 
    
  <main>
    {/*barra topo da pagina */}
    <section className={styles.pinkSectionTop}>
      <header className="header-container">
        <titulo className={styles.textocontainer}>
          <p className={styles.tituloTopo}>Nossos Projetos</p>
              {/* O restante do seu header, se houver (por exemplo, navegação) */}
              <nav className={styles.subtitulo}>
                Convidamos você a explorar a diversidade de nossos projetos, cada um representando uma jornada única 
                onde desafios foram convertidos em soluções personalizadas, impulsionadas pela expertise e criatividade 
                de nossa equipe.
              </nav>
        </titulo>
      </header>
    </section>

    <ProjetosSection/>
    <CasesSection/>  

  </main>
    );
  }
  
  export default Projetos;