import styles from './projetosSection.module.css'
import { motion } from 'framer-motion'
import React from 'react';

const cardsVariants ={
  initial: {opacity: 0, x: 50},
  inView: {opacity: 1, x: 0}
}

const containerVariants = {
  initial: {},
  inView: {transition: {staggerChildren: 0.5}}
}

function ProjetosSection() {
  return (
    <motion.section className={styles.projetosContainer}
      variants={containerVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}>
      {/* Linha 1 */}
      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Desenvolvimento Web e Mobile</h3>
        <div className={styles.imagemTextoWrapper}>
          <img src="/projetos/cards/Desenvolvimento_Web_e_Mobile.png" alt="Ícone de ajuda"/>
          <p>
            Criamos sites e aplicativos modernos, responsivos e seguros, utilizando tecnologias como JavaScript,
            React, CSS, HTML e WordPress. Desenvolvemos interfaces intuitivas, integramos bancos de dados,
            aplicamos SEO e otimizamos a performance. Para mobile, incluímos recursos como notificações push e 
            autenticação segura, garantindo uma presença digital forte, envolvente e alinhada à sua marca.
          </p>
        </div>
      </motion.div>

      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Automação com Microcontroladores</h3>
        <div className={styles.imagemTextoWrapper}>
          <img src="/projetos/cards/Automação_com_Microcontroladores.png" alt="Ícone de ajuda"/>
          <p>
            Oferecemos soluções de automação que integram sensores e sistemas inteligentes para monitorar
            e controlar processos em tempo real. Ideal para quem busca mais eficiência, redução de erros e
            aumento da produtividade em ambientes industriais e residenciais.
          </p>
        </div>
      </motion.div>

      {/* Linha 2 */}
      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Power BI</h3>
        <div className={styles.imagemTextoWrapper}>
          <img src="/projetos/cards/Power_BI.png" alt="Ícone de ajuda"/>
          <p>
            Oferecemos um serviço completo de Power BI: começamos coletando e integrando seus dados de planilhas,
            bancos de dados e APIs, em seguida realizamos limpeza e padronização para garantir qualidade. Além disso,
            criamos dashboards interativos de alta performance, que permitem visualizar KPIs de forma clara e explorar
            insights em tempo real, acelerando a tomada de decisões estratégicas.
          </p>
        </div>
      </motion.div>

      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Desenvolvimento de ChatBots</h3>
        <div className={styles.imagemTextoWrapper}>
          <img src="/projetos/cards/Desenvolvimento_de_Chatbots.png" alt="Ícone de ajuda"/>
          <p>
            Desenvolvemos chatbots inteligentes que automatizam o atendimento ao cliente,
            oferecendo respostas rápidas e precisas em sites, redes sociais e aplicativos.
            Com funcionamento 24h por dia, a solução reduz custos, melhora a experiência do usuário e aumenta a captação de leads.
          </p>
        </div>
      </motion.div>

      {/* Linha 3 */}
      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Formatação e Manutenção de Computadores</h3>
        <div className={styles.imagemTextoWrapper}>
          <img
              src="/projetos/cards/Formatação_e_Manutenção_de_Computadores.png"
              alt="Ícone de ajuda"
          /> 
          <p>
            Realizamos serviços de formatação, reinstalação de sistemas e atualização de componentes para melhorar o desempenho dos 
            dispositivos. Com manutenção preventiva, evitamos falhas, aumentamos a vida útil do hardware e garantimos uma experiência 
            segura e eficiente para empresas e usuários individuais.
          </p>
        </div>
      </motion.div>

      <motion.div className={styles.caixaTexto} variants={cardsVariants}>
        <h3>Consultoria em redes de computadores</h3>
        <div className={styles.imagemTextoWrapper}>
        <img src="/projetos/cards/Consultoria_em_redes_de_computadores.png" alt="Ícone de ajuda"/>
          <p>
            Oferecemos consultoria especializada em redes de computadores, com foco na instalação de infraestrutura robusta,
            diagnóstico de falhas e melhoria da conectividade. Nosso serviço garante redes seguras, estáveis e otimizadas, 
            essenciais para a produtividade e comunicação eficiente das equipes de trabalho.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ProjetosSection;