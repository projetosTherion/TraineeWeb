import React, {useState} from 'react'; // Importa o React
import styles from './container.module.css'; // Importa o arquivo CSS
import Slide from '../components/componentsSobre/SliderSobre/Slider'; // Importa o componente de slide
import Form from '../components/componentsSobre/FormSobre/Form';

function Sobre() {
    const [showForm, setShowForm] = useState(false); // Adicione esta linha

    return (
      <section className={styles.container}>
        <h1>Sobre Nós</h1>
        <section>
          <h2>Nossa História</h2>
          <Slide/> {/* Adiciona o slide de img ao componente Sobre, foto da equipe por ex */}
          <p>Conte aqui a história da empresa, como ela começou e os marcos importantes.</p>
        </section>
        <section>
          <h2>Missão, Visão e Valores</h2>
          <p><strong>Missão:</strong> [Descreva a missão].</p>
          <p><strong>Visão:</strong> [Descreva a visão].</p>
          <p><strong>Valores:</strong> [Liste os valores].</p>
        </section>
      
        <p>Adicione imagens para ilustrar a história ou a foto do time .</p>
        <section>
          <h2>O que dizem sobre nós</h2>
          <blockquote>
            <p>"[Depoimento de um cliente satisfeito]."</p>
            <footer>- Nome do Cliente</footer>
        
 </blockquote>
      
  </section>

        <section>
          <h2>Entre em Contato</h2>
          <p>Gostaríamos de ouvir de você! Entre em contato conosco para mais informações.</p>
          
          {!showForm && (
            <button onClick={() => setShowForm(true)}>Abrir Formulário</button> // Botão para abrir o formulário
          )}

          {showForm && (
            <div>
              <h3>Preencha o Formulário</h3>
              <Form /> {/* Exibe o componente Form, atualizar o conteudo em components, form */}
              <button onClick={() => setShowForm(false)}>Fechar</button>
            </div>
          )}
        </section>
      </section>
    );
  }
  
  export default Sobre;
