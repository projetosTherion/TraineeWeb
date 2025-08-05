import styles from '../components/componentsProjetos/containerProjetos.module.css'; // Importa o arquivo CSS do containerProjetos
import CasesSection from '../components/componentsProjetos/CaseSection';
import ProjetosSection from '../components/componentsProjetos/projetosSection';


function Projetos() {
   
  return ( //retorna oq vai aparecer na pagina 
    
  <main>
    {/*barra topo da pagina */}
    <section className={styles.pinkSectionTop}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.tituloTopo}>Nossos Projetos</h1>
          <p className={styles.subtitulo}>
            Convidamos você a explorar a diversidade de nossos projetos, cada um representando uma jornada única 
            onde desafios foram convertidos em soluções personalizadas, impulsionadas pela expertise e criatividade 
            de nossa equipe.
          </p>
        </div>
      </div>
    </section>

    <ProjetosSection/>
    <CasesSection/>  

  </main>
    );
  }
  
  export default Projetos;