import styles from '../components/componentsProjetos/containerProjetos.module.css'; // Importa o arquivo CSS do containerProjetos
import imagemTetris from '../assets/tetris.png';
import imagemArcseed from '../assets/SiteArcseed.png';
import React, { useState } from "react";

/*imagem serviços */
import imagemAutomação_com_Microcontroladores from '../assets/Automação_com_Microcontroladores.jpeg';
import imagemConsultoria_em_redes_de_computadores from '../assets/Consultoria_em_redes_de_computadores.jpeg';
import imagemDesenvolvimento_de_Chatbots from '../assets/Desenvolvimento_de_Chatbots.jpeg';
import imagemFormatação_e_Manutenção_de_Computadores from '../assets/Formatação_e_Manutenção_de_Computadores.jpeg';
import imagemPower_Bl from '../assets/Power_Bl.jpeg';
import imagemDesenvolvimento_Web_e_Mobile from '../assets/Desenvolvimento_Web_e_Mobile.jpeg';


//onde fica os slides do carrossel
const slides = [

  //slide (Projetos WordPress)
  <section className={styles.container} key="Projetos WordPress">
      <h2 className={styles.titulo}>Projetos WordPress</h2>         {/*titulo do slide */}
    <img src={imagemTetris} alt="Tetris" className={styles.imagemContainer} />    {/*imagem do meio do slide */}
    <p className={styles.textoDescricao}>                                       
    Desenvolvemos o Tetris, um site institucional, com o objetivo de facilitar a apresentação de empresas juniores de forma moderna, organizada e personalizada.
O projeto permite que qualquer EJ tenha uma presença digital sólida, com páginas para mostrar sua história, projetos, equipe, valores e formas de contato.
Além disso, o site é responsivo, fácil de atualizar e pensado para destacar a identidade única de cada empresa júnior.    {/*texto do slide */}
    </p>
  </section>,

  //slide (Desenvolvimento Web)
  <section className={styles.container} key=" Desenvolvimento Web"> 
      <h2 className={styles.titulo}> Desenvolvimento Web</h2>            {/*titulo do slide */}
    <img src={imagemArcseed} alt="Arcseed" className={styles.imagemContainer} />   {/*imagem do meio do slide */}
    <p className={styles.textoDescricao}>        
    A Therion desenvolveu o Arcseed, uma plataforma inovadora que permite a criação de imagens realistas geradas por inteligência artificial a partir de descrições textuais.
    O objetivo é tornar o processo de visualização mais acessível e rápido para profissionais da arquitetura, design e áreas criativas.
    Com o Arcseed, basta digitar uma descrição e a IA gera imagens realistas em poucos segundos, economizando tempo e ampliando as possibilidades de experimentação visual.
     É uma solução eficiente para transformar ideias em imagens com agilidade e qualidade.                 {/*texto do slide */}
    </p>
  </section>,
];

//passa o carrossel
export function Carrossel() {

  const [currentIndex, setCurrentIndex] = useState(0); // controla qual slide mostrar que estao dentro de(const slides)

  function handleNext() {  //funçao que  avança o slide quando aperto o botao da direita
    setCurrentIndex((prev) => (prev + 1) % slides.length); 
  }

  function handlePrev() {  //funçao que volta o slide quando aperto o botao da esquerda
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); 
  }


  // Aqui é o retorno o que aparece na tela(os botões)
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
              <h1 className={styles.tituloTopo}>Nossos Projetos</h1> {/*titulo */}
              <p className={styles.subtitulo}>
              Explore os projetos que transformam ideias em soluções e mostram a força da inovação na Therion.  {/*subtitulo */}
              </p>
            </section>

<div className={styles.containerGeral}>

      {/* Coluna da esquerda */}
      <div className={styles.containerEsquerda}>

              {/* primeiro */}
            <div className={styles.caixaTexto}>
            <img src={imagemDesenvolvimento_Web_e_Mobile} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Desenvolvimento Web e Mobile</h3>
              <p className={styles.texto}>
              Criamos sites e aplicativos modernos, responsivos e seguros, utilizando tecnologias como JavaScript,
              React, CSS, HTML e WordPress. Desenvolvemos interfaces intuitivas, integramos bancos de dados,
              aplicamos SEO e otimizamos a performance. Para mobile, incluímos recursos como notificações push e 
              autenticação segura, garantindo uma presença digital forte, envolvente e alinhada à sua marca.
              </p>
            </div>
          </div>

            {/* segundo */}
          <div className={styles.caixaTexto}>
            <img src={imagemPower_Bl} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Power Bl</h3>
              <p className={styles.texto}>
              Oferecemos um serviço completo de Power BI: começamos coletando e integrando seus dados de planilhas,
              bancos de dados e APIs, em seguida realizamos limpeza e padronização para garantir qualidade. Além disso,
              criamos dashboards interativos de alta performance, que permitem visualizar KPIs de forma clara e explorar
              insights em tempo real, acelerando a tomada de decisões estratégicas.
              </p>
            </div>
          </div>
              {/* terceiro */}
              <div className={styles.caixaTexto}>
            <img src={imagemFormatação_e_Manutenção_de_Computadores} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Formatação e Manutenção de Computadores</h3>
              <p className={styles.texto}>
              Realizamos serviços de formatação, reinstalação de sistemas e atualização de componentes para melhorar o desempenho dos 
              dispositivos. Com manutenção preventiva, evitamos falhas, aumentamos a vida útil do hardware e garantimos uma experiência 
              segura e eficiente para empresas e usuários individuais.
              </p>
            </div>
          </div>

      </div>


      {/* Coluna da direita */}
      <div className={styles.containerDireita}>

          {/* primeiro */}
              <div className={styles.caixaTexto}>
            <img src={imagemAutomação_com_Microcontroladores} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Automação com Microcontroladores</h3>
              <p className={styles.texto}>
              Oferecemos soluções de automação que integram sensores e sistemas inteligentes para monitorar
              e controlar processos em tempo real. Ideal para quem busca mais eficiência, redução de erros e
              aumento da produtividade em ambientes industriais e residenciais.
              </p>
            </div>
          </div>

          {/* segundo */}
              <div className={styles.caixaTexto}>
            <img src={imagemDesenvolvimento_de_Chatbots} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Desenvolvimento de Chatbots</h3>
              <p className={styles.texto}>
              Desenvolvemos chatbots inteligentes que automatizam o atendimento ao cliente,
              oferecendo respostas rápidas e precisas em sites, redes sociais e aplicativos.
              Com funcionamento 24h por dia, a solução reduz custos, melhora a experiência do usuário e aumenta a captação de leads.
              </p>
            </div>
          </div>


          {/* terceiro */}
              <div className={styles.caixaTexto}>
            <img src={imagemConsultoria_em_redes_de_computadores} alt="Ícone de ajuda" className={styles.icon} />
            <div className={styles.textoContainer}>
              <h3 className={styles.titulo}>Consultoria em redes de computadores </h3>
              <p className={styles.texto}>
              Oferecemos consultoria especializada em redes de computadores, com foco na instalação de infraestrutura robusta,
              diagnóstico de falhas e melhoria da conectividade. Nosso serviço garante redes seguras, estáveis e otimizadas, 
              essenciais para a produtividade e comunicação eficiente das equipes de trabalho.
              </p>
            </div>
          </div>

      </div>
</div>

<h3 className={styles.chamadacarrossel}>Cases de Sucesso</h3>   
 
          {/*chama a funçao carrossel */}   
              <Carrossel/>

      </main>
    );
  }
  
  export default Projetos;
  
