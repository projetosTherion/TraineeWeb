import styles from '../components/componentsProjetos/containerProjetos.module.css'; // Importa o arquivo CSS do containerProjetos
import imagemilustrativa from '../assets/ideia.jpg';
import imagemTetris from '../assets/tetris.png';
import imagemArcseed from '../assets/arcseed.png';
import React, { useState } from "react";


//onde fica os slides do carrossel
const slides = [

  //slide (Projetos WordPress)
  <section className={styles.container} key="Projetos WordPress">
      <h2 className={styles.titulo}>Projetos WordPress</h2>         {/*titulo do slide */}
    <img src={imagemTetris} className={styles.imagemContainer} />    {/*imagem do meio do slide */}
    <p className={styles.textoDescricao}>                                       
    Criamos o site institucional da EJ Tetris, unindo design
    moderno com funcionalidade para destacar sua presença online.    {/*texto do slide */}
    </p>
  </section>,

  //slide (Desenvolvimento Web)
  <section className={styles.container} key=" Desenvolvimento Web"> 
      <h2 className={styles.titulo}> Desenvolvimento Web</h2>            {/*titulo do slide */}
    <img src={imagemArcseed} className={styles.imagemContainer} />   {/*imagem do meio do slide */}
    <p className={styles.textoDescricao}>        
    Site desenvolvido pela nossa Empresa Júnior que usa IA para gerar imagens realistas a partir de descrições. 
    Voltado para arquitetos que buscam criar referências visuais de forma rápida e personalizada.                 {/*texto do slide */}
    </p>
  </section>,

  
  //slide (Desenvolvimento de Software)
  <section className={styles.container} key="Desenvolvimento de Software"> 
      <h2 className={styles.titulo}> Desenvolvimento de Software</h2>     {/*titulo do slide */}
    <img src={imagemilustrativa} className={styles.imagemContainer} />    {/*imagem do meio do slide */}
    <p className={styles.textoDescricao}>
    Projetos de desenvolvimento de software pela Therion!                 {/*texto do slide */}
    </p>
  </section>,

];


export function Carrossel() {

  const [currentIndex, setCurrentIndex] = useState(0); // controla qual slide mostrar que estao dentro de(const slides)

  function handleNext() {  //funçao que  avança o slide quando aperto o botao da direita
    setCurrentIndex((prev) => (prev + 1) % slides.length); 
  }

  function handlePrev() {  //funçao que volta o slide quando aperto o botao da esquerda
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); 
  }


  // Aqui é o retorno do JSX, o que aparece na tela(os botões)
  return (
    <div className={styles.carrosselContainer}>
       <button onClick={handlePrev} className={styles.botaoCarrossel}>{"<"}</button>{/* botão para esquerda */}
      {slides[currentIndex]}                                                        {/* slide atual, conforme índice */}
      <button onClick={handleNext} className={styles.botaoCarrossel}>{">"}</button> {/* botão para direita */}
    </div>
  );
}


function Projetos() {
   
  return ( //retorna oq vai aparecer na pagina 
      <main>

          {/*barra topo da pagina */}
            <section className={styles.pinkSectionTop}>
              <h1 className={styles.titulo}>Nossos Projetos</h1> {/*titulo */}
              <p className={styles.subtitulo}>
              Explore os projetos que transformam ideias em soluções e mostram a força da inovação na Therion.  {/*subtitulo */}
              </p>
            </section>

          {/* foto equipe */}
            <img
              src="equipe.jpg"
              className={styles.equipe}
            />

          {/*chama a funçao carrossel */}
              <Carrossel/>

      </main>
    );
  }
  
  export default Projetos;
  
