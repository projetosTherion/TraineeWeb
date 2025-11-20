import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { motion } from 'framer-motion'

const sobreNosImages = [
  "/home/sobreNos/membros.jpg",
  "/home/sobreNos/utfpr.jpg",
];

const servicosImages = [
  "/home/servicos/IconeModelagem.png",
  "/home/servicos/IconeDesWeb.png",
  "/home/servicos/IconeMicrocontrolados.png",
];

const projetosImages = [
  "/home/projetos/Microcontrolados.png",
  "/home/projetos/DesWeb.png",
  "/home/projetos/Modelagem.png",
];

const bannerVariants = {
  initial: {opacity: 0, y: 50},
  inView: {opacity: 1, y: 0},
  ease: "easeInOut"
}

const containerBanner = {
  initial: {},
  inView: {transition: {staggerChildren: 0.75}}
}

const cardVariant = {
  hidden: {opacity: 0, y: 50},
  inView: {
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1]
    }
  },
}

function Home() {
  const [sobreIndex, setSobreIndex] = useState(0);
  const [servicoIndex, setServicoIndex] = useState(0);
  const [projetoIndex, setProjetoIndex] = useState(0);
  const navigate = useNavigate();


  // Função para navegar e ir ao topo
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <main>

      {/* banner-home */}
      <section className="bannerHome"
      style={{backgroundImage: `url(/home/TimeTherion.jpg)`}}>

        <motion.div variants={containerBanner}
        initial="initial"
        whileInView="inView"
        viewport={{once: true}}>
          <motion.img src="/images/logoBranca.webp" alt="Logo T" variants={bannerVariants}/>
          <motion.h1 variants={bannerVariants}>THERION</motion.h1>
          <motion.p variants={bannerVariants}>Rosa choque por resultados!</motion.p>
        </motion.div>

      </section>

      <section className="quemSomos">
        {/* Sobre nós */}
        <motion.div className="card" 
        variants={cardVariant} 
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true}}>
          <h2>Sobre nós</h2>
          <div className="quemSomosContent">
            <div className="textoButtonWrapper">
              <p>
                Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana.
                Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados
                — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.
              </p>
              <button onClick={() => handleNavigate("/sobre")}>
                Sobre nós
              </button>
            </div>
            <div className="quemSomosCarousel">
              <img
                src={sobreNosImages[sobreIndex]}
                alt="Carrossel"/>
              <div className="carousel-dots">
                {sobreNosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot${sobreIndex === idx ? " active" : ""}`}
                    onClick={() => setSobreIndex(idx)}
                    aria-label={`Selecionar imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div className="card" 
        variants={cardVariant} 
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true}}>
          <h2>Serviços</h2>
          <div className="quemSomosContent">
            <div className="quemSomosCarousel">
              <img
                src={servicosImages[servicoIndex]}
                alt="Serviço"/>
              <div className="carousel-dots">
                {servicosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot${servicoIndex === idx ? " active" : ""}`}
                    onClick={() => setServicoIndex(idx)}
                    aria-label={`Selecionar serviço ${idx + 1}`}
                    />
                ))}
              </div>
            </div>
            <div className="textoButtonWrapper">
              <p>
                Criamos sites, aplicativos, modelagens 3D e realizamos impressões 3D sob demanda.
                Soluções tecnológicas personalizadas, feitas por estudantes que vivem a engenharia na prática
                — com visão jovem e mente inquieta.
              </p>
              <button onClick={() => handleNavigate("/impressao3d")}>
                Conheça mais
              </button>
            </div>
          </div>
        </motion.div>

        {/* projetos-home */}
        <motion.div className="card" 
        variants={cardVariant} 
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true}}>
          <h2>Projetos</h2>
          <div className="quemSomosContent">
            <div className="textoButtonWrapper">
              <p>
                Desenvolvemos projetos incríveis, com soluções criativas e inovadoras para atender às necessidades
                dos nossos clientes. Desde protótipos funcionais até produtos finais, garantimos qualidade e excelência.
              </p>
              <button onClick={() => handleNavigate("/projetos")}>
                Veja nossos projetos
              </button>
            </div>
            <div className="projetos-home-carousel">
              <img
                src={projetosImages[projetoIndex]}
                alt="Projeto"/>
              <div className="carousel-dots">
                {projetosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot${projetoIndex === idx ? " active" : ""}`}
                    onClick={() => setProjetoIndex(idx)}
                    aria-label={`Selecionar projeto ${idx + 1}`}
                    />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gostou do nosso trabalho */}
        <motion.div className="card" 
        variants={cardVariant} 
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true}}>
          <h2>Gostou do nosso trabalho?</h2>
          <div className="quemSomosContent">
            <div className="contatoContainer">
              <img
                src="/home/PanteraContato.png"
                alt="Mascote Pantera Cor-de-Rosa"
                style={{ maxWidth: "320px", margin: "0 auto" }}
              />
              <h3>
                VENHA SER ROSA CHOQUE POR RESULTADO!
              </h3>
            </div>
            <div className="textoButtonWrapper">
              <p>
                Entre em contato com a nossa equipe e descubra como podemos contribuir para o sucesso do seu negócio.
              </p>
              <button onClick={() => handleNavigate("/contato")}>
                Fale conosco
              </button>
            </div>
          </div>
        </motion.div>
        </section>
    </main>
  );
}

export default Home;