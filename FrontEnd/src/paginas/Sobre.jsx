import { useEffect, useState } from 'react';
import styles from '../components/componentsSobre/containerSobre.module.css';
import imagemHistoria from '../assets/utfpr.jpg';
import imagemMissao from '../assets/panteraSobre.png';
import imagemPalco from '../assets/membrosPalco.jpg';

function Sobre() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('right');
  const [animating, setAnimating] = useState(false);

  const testimonials = [
    {
      text: "A Therion fez um trabalho excepcional no desenvolvimento do meu site. Profissionalismo e qualidade do início ao fim!",
      author: "Maria Silva",
      role: "Empresária"
    },
    {
      text: "Impressionante como a equipe é dedicada e comprometida com os prazos. O sistema que desenvolveram superou minhas expectativas.",
      author: "João Santos",
      role: "Gerente de Projetos"
    },
    {
      text: "A automação implementada pela Therion revolucionou nossos processos internos. Resultado extraordinário!",
      author: "Ana Oliveira",
      role: "Diretora de Operações"
    }
  ];

  const nextTestimonial = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 500);
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
  }, [currentTestimonial, animating]);

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
      <div className={styles.equipeBorda}>
        <img
          src={imagemPalco}
          className={`${styles.equipe} ${styles.fadeIn}`}
        />
      </div>

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
            <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevTestimonial} disabled={animating}>
              <span>❮</span>
            </button>
            <div className={styles.testimonialContent}>
              <div className={
                `${styles.testimonialCard} ` +
                (animating
                  ? direction === 'right'
                    ? styles.slideOutLeft
                    : styles.slideOutRight
                  : direction === 'right'
                    ? styles.slideInRight
                    : styles.slideInLeft
                )
              }>
                <div className={styles.quoteIcon}>"</div>
                <p>{testimonials[currentTestimonial].text}</p>
                <footer>
                  <strong>{testimonials[currentTestimonial].author}</strong>
                  <span className={styles.divider}></span>
                  <em>{testimonials[currentTestimonial].role}</em>
                </footer>
              </div>
            </div>
            <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextTestimonial} disabled={animating}>
              <span>❯</span>
            </button>
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentTestimonial === index ? styles.activeDot : ''}`}
                onClick={() => {
                  if (index !== currentTestimonial && !animating) {
                    setDirection(index > currentTestimonial ? 'right' : 'left');
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setAnimating(false);
                    }, 500);
                  }
                }}
                aria-label={`Depoimento ${index + 1}`}
                disabled={animating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Sobre;