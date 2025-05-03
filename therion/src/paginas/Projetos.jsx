import styles from './container.module.css'; // Importa o arquivo CSS


function Projetos() {
    return (
      <main>
        <div className={styles.titulo1}>
          Projetos
        </div>

        <div className={styles.paragrafo}>
          Exposição dos principais projetos desenvolvidos pela empresa.
        </div>

        <div className={styles.card}>
          <div className={styles.titulo2}>
            Modelagem e Impressão 3D
          </div>
          <div className={styles.paragrafo}>
            Todos os projetos de impressão e modelagem 3D feitos pela Therion!
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.titulo2}>
            Desenvolvimento Web
          </div>
          <div className={styles.paragrafo}>
            Projetos de desenvolvimento web feitos pela Therion!
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.titulo2}>
            Desenvolvimento de Software
          </div>
          <div className={styles.paragrafo}>
            <>Projetos de desenvolvimento de software pela Therion!</>
          </div>
        </div>
      </main>
    );
  }
  
  export default Projetos;
  
