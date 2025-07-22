import styles from './projetosSection.module.css'
import React, { useRef, useEffect } from 'react';

import imagemDesenvolvimento_Web_e_Mobile from '../../assets/Desenvolvimento_Web_e_Mobile.png';
import imagemPower_Bl from '../../assets/Power_BI.png';
import imagemFormatação_e_Manutenção_de_Computadores from '../../assets/Formatação_e_Manutenção_de_Computadores.png';
import imagemAutomação_com_Microcontroladores from '../../assets/Automação_com_Microcontroladores.png';
import imagemDesenvolvimento_de_Chatbots from '../../assets/Desenvolvimento_de_Chatbots.png';
import imagemConsultoria_em_redes_de_computadores from '../../assets/Consultoria_em_redes_de_computadores.png';

function ProjetosSection() {
     return(
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
    </section>
     )
}

export default ProjetosSection;