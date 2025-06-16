import styles from '../components/componentsProjetos/containerProjetos.module.css'; // Importa o arquivo CSS do containerProjetos
import imagemTetris from '../assets/tetris.png';
import imagemArcseed from '../assets/SiteArcseed.png';
import React, { useState } from "react";

/*imagem serviços */
import imagemAutomação_com_Microcontroladores from '../assets/Automação_com_Microcontroladores.png';
import imagemConsultoria_em_redes_de_computadores from '../assets/Consultoria_em_redes_de_computadores.png';
import imagemDesenvolvimento_de_Chatbots from '../assets/Desenvolvimento_de_Chatbots.png';
import imagemFormatação_e_Manutenção_de_Computadores from '../assets/Formatação_e_Manutenção_de_Computadores.png';
import imagemPower_Bl from '../assets/Power_BI.png';
import imagemDesenvolvimento_Web_e_Mobile from '../assets/Desenvolvimento_Web_e_Mobile.png';
import imagemGol from '../assets/SiteGol.png';

function Projetos() {
   
  return ( //retorna oq vai aparecer na pagina 
    
  <main>
    {/*barra topo da pagina */}
    <section className={styles.pinkSectionTop}>
      <header className="header-container">
        <titulo className={styles.textocontainer}>
          <p className={styles.tituloTopo}>Nossos Projetos</p>
              {/* O restante do seu header, se houver (por exemplo, navegação) */}
              <nav className={styles.subtitulo}>
                Explore os projetos que transformam ideias em soluções e mostram a força da inovação na Therion.
              </nav>
        </titulo>
      </header>
    </section>

    <section className={styles.projetosContainer}>

      <div className={styles.containerEsquerda}>

        {/*Primeiro Card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Desenvolvimento Web e Mobile</h3>
            <div className={styles.imagemTextoWrapper}>
              <img src={imagemDesenvolvimento_Web_e_Mobile} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>
                Criamos sites e aplicativos modernos, responsivos e seguros, utilizando tecnologias como JavaScript,
                React, CSS, HTML e WordPress. Desenvolvemos interfaces intuitivas, integramos bancos de dados,
                aplicamos SEO e otimizamos a performance. Para mobile, incluímos recursos como notificações push e 
                autenticação segura, garantindo uma presença digital forte, envolvente e alinhada à sua marca.
              </p>
            </div>
        </div>

        {/*Segundo Card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Power BI</h3>
            <div className={styles.imagemTextoWrapper}>
              <img src={imagemPower_Bl} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>
                Oferecemos um serviço completo de Power BI: começamos coletando e integrando seus dados de planilhas,
                bancos de dados e APIs, em seguida realizamos limpeza e padronização para garantir qualidade. Além disso,
                criamos dashboards interativos de alta performance, que permitem visualizar KPIs de forma clara e explorar
                insights em tempo real, acelerando a tomada de decisões estratégicas.
              </p>
            </div>
        </div>

        {/*Terceiro Card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Formatação e Manutenção de Computadores</h3>
            <div className={styles.imagemTextoWrapper}>
              <img src={imagemFormatação_e_Manutenção_de_Computadores} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>
                Realizamos serviços de formatação, reinstalação de sistemas e atualização de componentes para melhorar o desempenho dos 
                dispositivos. Com manutenção preventiva, evitamos falhas, aumentamos a vida útil do hardware e garantimos uma experiência 
                segura e eficiente para empresas e usuários individuais.
              </p>
            </div>
        </div>
      </div>

      {/*Containers da Direita*/}
      <div className={styles.containerDireita}>

        {/*Primeiro card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Automação com Microcontroladores</h3>
            <div className={styles.imagemTextoWrapper}>
              <img src={imagemAutomação_com_Microcontroladores} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>
                Oferecemos soluções de automação que integram sensores e sistemas inteligentes para monitorar
                e controlar processos em tempo real. Ideal para quem busca mais eficiência, redução de erros e
                aumento da produtividade em ambientes industriais e residenciais.
              </p>
            </div>
        </div>

        {/*Segundo Card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Desenvolvimento de ChatBots</h3>
            <div className={styles.imagemTextoWrapper}>
            <img src={imagemDesenvolvimento_de_Chatbots} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>
                Desenvolvemos chatbots inteligentes que automatizam o atendimento ao cliente,
                oferecendo respostas rápidas e precisas em sites, redes sociais e aplicativos.
                Com funcionamento 24h por dia, a solução reduz custos, melhora a experiência do usuário e aumenta a captação de leads.
              </p>
            </div>
        </div>

        {/*Terceiro Card*/}
        <div className={styles.caixaTexto}>
          <h3 className={styles.titulo}>Consultoria em redes de computadores</h3>
            <div className={styles.imagemTextoWrapper}>
              <img src={imagemConsultoria_em_redes_de_computadores} alt="Ícone de ajuda" className={styles.icon}/>
              <p className={styles.texto}>

                Oferecemos consultoria especializada em redes de computadores, com foco na instalação de infraestrutura robusta,
                diagnóstico de falhas e melhoria da conectividade. Nosso serviço garante redes seguras, estáveis e otimizadas, 
                essenciais para a produtividade e comunicação eficiente das equipes de trabalho.
              </p>
            </div>
        </div>
      </div>
    </section>{/*Seção dos Projetos*/}
    {/*Fim da seção de cards*/}

    {/*Seção dos Cases de Sucesso*/}
      <section className={styles.fundoRosa}>
          <h1 className={styles.tituloCases}>Ações de Impacto</h1>
          <section className={styles.containerCases}>

            {/*Imagem a esquerda*/}
            <div className={styles.caseImagemWrapperEsquerda}>
              <img src={imagemTetris} alt="Ícone de ajuda" className={styles.imagemContainerEsquerda}/>
              <div className={styles.caixaTextoCasesEsquerda}>
                <h2 className={styles.tituloCasesCaixa}>Tetris EJ</h2>
                <p className={styles.texto}>
                  Na Tetris EJ, unimos criatividade e técnica para oferecer projetos personalizados em arquitetura, interiores, instalações 
                  e modelagem.
                  Cada detalhe é pensado para entregar funcionalidade, inovação e sustentabilidade.
                </p>
              </div>
            </div>

            {/*Imagem a direita */}
            <div className={styles.caseImagemWrapperDireita}>
              <img src={imagemArcseed} alt="Ícone de ajuda" className={styles.imagemContainerDireita}/>
              <div className={styles.caixaTextoCasesDireita}>
                <h2 className={styles.tituloCasesCaixa}>Arcseed</h2>
                <p className={styles.texto}>
                  O Arcseed é uma plataforma que transforma descrições textuais em imagens realistas com o poder da inteligência 
                  artificial. Criado para arquitetos, designers e engenheiros, ele acelera o processo de visualização, permitindo 
                  explorar conceitos de forma ágil, criativa e acessível.
                </p>
              </div>
            </div>

            {/*Imagem Central*/}
            <div className={styles.caseImagemWrapperCentro}>
              <img src={imagemGol} alt="Ícone de ajuda" className={styles.imagemContainerCentro}/>
              <div className={styles.caixaTextoCasesCentro}>
                <h2 className={styles.tituloCasesCaixa}>Gol FC</h2>
                <p className={styles.texto}>
                  Já imaginou ter em mãos a bola que decidiu uma partida? No Gol FC, você participa de leilões exclusivos de bolas de 
                  futebol autografadas pelos craques que marcaram gols com elas. Cada peça é única, carregada de emoção e autenticidade.
                </p>
              </div>
            </div>
          </section>{/*Seção do containerCases */}
      </section>{/*Seção com o fundo rosa na segunda parte da pagina */}    
  </main>
    );
  }
  
  export default Projetos;
  
