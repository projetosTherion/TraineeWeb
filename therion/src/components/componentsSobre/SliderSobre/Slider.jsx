import React, { useState } from 'react';
import styles from './Slider.css';

const SlideSobre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const equipe = [
    { nome: 'João Silva', foto: '/images/joao.jpg', cargo: 'Desenvolvedor Frontend' },
    { nome: 'Maria Oliveira', foto: '/images/maria.jpg', cargo: 'Designer UX/UI' },
    { nome: 'Carlos Santos', foto: '/images/carlos.jpg', cargo: 'Gerente de Projetos' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % equipe.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + equipe.length) % equipe.length);
  };

  return (
    <div className={styles.slideContainer}>
      <button className={styles.navButton} onClick={prevSlide}>
        &#8249;
      </button>
      <div className={styles.slide}>
        <img src={equipe[currentIndex].foto} alt={equipe[currentIndex].nome} className={styles.foto} />
        <h3>{equipe[currentIndex].nome}</h3>
        <p>{equipe[currentIndex].cargo}</p>
      </div>
      <button className={styles.navButton} onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default SlideSobre;