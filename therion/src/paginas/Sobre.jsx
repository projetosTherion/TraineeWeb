import { useEffect } from 'react';
import styles from '../components/componentsSobre/containerSobre.module.css';
import imagemHistoria from '../assets/utfpr.jpg';
import imagemMissao from '../assets/panteraSobre.png';

function Sobre() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add(styles.fadeInVisible);
        } else {
          el.classList.remove(styles.fadeInVisible);
        }
      });
    });

    const elements = document.querySelectorAll(`.${CSS.escape(styles.fadeIn)}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SEÇÃO 1: TÍTULO E INTRODUÇÃO */}
      <section className={styles.pinkSectionTop}>
        <h1 className={styles.titulo}>Sobre Nós</h1>
        <p className={styles.subtitulo}>
          Conheça mais sobre a história, missão e valores que moldam a Therion.
        </p>
      </section>

      {/* SEÇÃO 1.1: IMAGEM */}
        <img
          src="equipe.jpg"
          className={`${styles.equipe} ${styles.fadeIn}`}
        />

      {/* SEÇÃO 2: HISTÓRIA */}
      <section className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.tituloComFundo}>
          <h2 className={styles.titulo}>Nossa História</h2>
        </div>
        <img src={imagemHistoria} className={styles.imagemContainer} />
        <p className={styles.historia}>
          A Therion é a Empresa Júnior de Engenharia de Computação da UTFPR - Câmpus Apucarana. Fundada por alunos motivados a transformar conhecimento acadêmico em soluções reais de tecnologia, a Therion surgiu como um espaço de aprendizado prático e empreendedorismo. Desde sua criação, a empresa tem se destacado em projetos de desenvolvimento web, automação e consultoria e projetos de Modelagem 3D.
        </p>
      </section>

      {/* SEÇÃO 3: MISSÃO, VISÃO, VALORES */}
      <section className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.tituloComFundo}>
          <h2 className={styles.titulo}>Missão, Visão e Valores</h2>
        </div>
        <img src={imagemMissao} className={styles.imagemContainer} />
        <p className={styles.historia}>
          <strong>Missão:</strong> Promover o desenvolvimento de soluções tecnológicas que gerem valor para clientes e aprendizado prático para os membros.<br /><br />
          <strong>Visão:</strong> Ser reconhecida como uma empresa júnior referência em inovação, qualidade e impacto social na área de tecnologia.<br /><br />
          <strong>Valores:</strong> Proatividade, colaboração, ética, responsabilidade, inovação e espírito de equipe.
        </p>
      </section>

      {/* SEÇÃO 4: DEPOIMENTO */}
      <section className={styles.pinkSectionBottom}>
        <h2 className={styles.titulo}>O que dizem sobre nós?</h2>
        <blockquote className={styles.subtitulo} style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '20px' }}>
          <p>"Relatar a experiência do usuário"</p>
          <footer style={{ marginTop: '10px' }}>- Fulano</footer>
        </blockquote>
      </section>
    </>
  );
}
export default Sobre;