import React, { useState } from 'react';

import styles from './container.module.css';
import Slide from '../components/componentsSobre/SliderSobre/Slider';
import Form from '../components/componentsSobre/FormSobre/Form';
import SectionWrapper from '../components/componentsSobre/SectionWrapper/SectionWrapper';
import containerSobre from '../components/componentsSobre/containerSobre.module.css';

function Sobre() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.container}>
      <h1>Sobre Nós</h1>

      {/* Seção: Nossa História */}
      <SectionWrapper title="Nossa História">
        <Slide /> {/* Componente de slide */}
        <p>Conte aqui a história da empresa, como ela começou e os marcos importantes.</p>
      </SectionWrapper>

      {/* Seção: Missão, Visão e Valores */}
      <SectionWrapper title="Missão, Visão e Valores">
        <div className={containerSobre.card}>
         <p><strong>Missão:</strong> [Descreva a missão].</p>
        </div>
        
        <div className={containerSobre.card}>
          <p><strong>Visão:</strong> [Descreva a visão].</p>
        </div>

        <div className={containerSobre.card}>
         <p><strong>Valores:</strong> [Descreva os valores].</p>
        </div>
      </SectionWrapper>

      {/* Seção: Depoimentos */}
      <SectionWrapper title="O que dizem sobre nós">
        <blockquote>
          <p>"[Depoimento de um cliente satisfeito]."</p>
          <footer>- Nome do Cliente</footer>
        </blockquote>
      </SectionWrapper>

      {/* Seção: Formulário de Contato */}
      <SectionWrapper title="Entre em Contato">
        <p>Gostaríamos de ouvir de você! Entre em contato conosco para mais informações.</p>
        {!showForm ? (
          <button onClick={() => setShowForm(true)}>Abrir Formulário</button>
        ) : (
          <div>
            <h3>Preencha o Formulário</h3>
            <Form /> {/* Componente de formulário */}
            <button onClick={() => setShowForm(false)}>Fechar</button>
          </div>
        )}
      </SectionWrapper>
    </section>
  );
}

export default Sobre;
