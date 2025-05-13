
import styles from './container.module.css';

function Sobre() {

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo1}>Sobre Nós</h1> 

      <section>
      <h2 className={styles.titulo2}>Nossa História:</h2>
      <p className={styles.paragrafo}>
          A Therion é a Empresa Júnior de Engenharia de Computação da UTFPR - Câmpus Apucarana. Fundada por alunos motivados a transformar conhecimento acadêmico em soluções reais de tecnologia, a Therion surgiu como um espaço de aprendizado prático e empreendedorismo. Desde sua criação, a empresa tem se destacado em projetos de desenvolvimento web, automação e consultoria e projetos de Modelagem 3D.
        </p>
      </section>

      <section>
      <h2 className={styles.titulo2}>Missão, Visão e Valores:</h2>
        <p className={styles.paragrafo}><strong>Missão:</strong> Promover o desenvolvimento de soluções tecnológicas que gerem valor para clientes e aprendizado prático para os membros.</p>
        <p className={styles.paragrafo}><strong>Visão:</strong> Ser reconhecida como uma empresa júnior referência em inovação, qualidade e impacto social na área de tecnologia.</p>
        <p className={styles.paragrafo}><strong>Valores:</strong> Proatividade, colaboração, ética, responsabilidade, inovação e espírito de equipe.</p>
      </section>

      <img
        src="/equipe.jpg"
        alt="Equipe Therion"
        className={styles.image}
      />

      <section>
      <h2 className={styles.titulo2}>O que dizem sobre nós?</h2>
        <blockquote>
          <p>"Relatar a experiência do usuário"</p>
          <footer>- Fulano </footer>
        </blockquote>
      </section>

      
    </section>
  );
}

export default Sobre;