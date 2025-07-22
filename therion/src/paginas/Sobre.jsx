import { useEffect, useState } from 'react';
import styles from '../components/componentsSobre/containerSobre.module.css';
import imagemHistoria from '../assets/utfpr.jpg';
import imagemMissao from '../assets/panteraSobre.png';
import imagemPalco from '../assets/membrosPalco.jpg';

function Sobre() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: " Parabéns gente, arrasaram demais, tanto no atendimento, tanto na qualidade do produto, me senti segura durante todo processo, mesmo tendo aquele problema das argolas, vocês resolveram na hora, não sei como vocês tinham isso no evento, mas deu tudo certo, obrigada por tudo!",
      author: "Núcleo das empresas juniores de Londrina (NEJLON)",
    },
    {
      text: "Ótimo atendimento",
      author: "Leonardo Monteiro da Silva",
    },
    {
      text: "Qualidade, produto bem feito, uma ótima impressão e modelagem",
      author: "Núcleo das empresas juniores de Londrina (NEJLON)",
    },
    {
      text: "Atendimento excelente, tiveram muita paciência durante todo o processo de decisão final do produto.",
      author: "Núcleo das empresas juniores de Londrina (NEJLON)",
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-play a cada 5 segundos

    return () => clearInterval(timer);
  }, [currentTestimonial]);

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
          src={imagemPalco}
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
        <div className={styles.mvvContainer}>
          <div className={styles.mvvColumn}>
            <h3>
              <span role="img" aria-label="target">🎯</span>
              Missão
            </h3>
            <p>Promover o desenvolvimento de soluções tecnológicas que gerem valor para clientes e aprendizado prático para os membros.</p>
          </div>
          <div className={styles.mvvColumn}>
            <h3>
              <span role="img" aria-label="vision">🔭</span>
              Visão
            </h3>
            <p>Ser reconhecida como uma empresa júnior referência em inovação, qualidade e impacto social na área de tecnologia.</p>
          </div>
          <div className={styles.mvvColumn}>
            <h3>
              <span role="img" aria-label="values">⭐</span>
              Valores
            </h3>
            <ul>
              <li>Proatividade</li>
              <li>Colaboração</li>
              <li>Ética</li>
              <li>Responsabilidade</li>
              <li>Inovação</li>
              <li>Espírito de equipe</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DEPOIMENTO */}
      <section className={styles.pinkSectionBottom}>
        <h2 className={styles.titulo}>O que dizem sobre nós?</h2>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialCarousel}>
            <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevTestimonial}>
              <span>❮</span>
            </button>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p>{testimonials[currentTestimonial].text}</p>
                <footer>
                  <strong>{testimonials[currentTestimonial].author}</strong>
                  <span className={styles.divider}></span>
                  <em>{testimonials[currentTestimonial].role}</em>
                </footer>
              </div>
            </div>
            <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextTestimonial}>
              <span>❯</span>
            </button>
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentTestimonial === index ? styles.activeDot : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Sobre;