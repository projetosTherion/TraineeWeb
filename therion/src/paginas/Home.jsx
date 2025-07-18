import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const sobreNosImages = [
  require("../assets/membros.jpg"),
  require("../assets/utfpr.jpg"),
];

const servicosImages = [
  require("../assets/IconeModelagem.png"),
  require("../assets/IconeDesWeb.png"),
  require("../assets/IconeMicrocontrolados.png"),
];

const projetosImages = [
  require("../assets/Microcontrolados.png"),
  require("../assets/DesWeb.png"),
  require("../assets/Modelagem.png"),
];

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
    <div className="home">
      {/* banner-home */}
      <section className="banner-home">
        <div className="banner-home-overlay">
          <img src={require('../assets/TimeTherion.jpg')} alt="Foto dos membros" className="banner-home-background" />
          <div className="banner-home-pink-overlay"></div>
        </div>
        <div className="banner-home-content">
          <div className="logo-text">
            <img src={require('../assets/LogoBranca.png')} alt="Logo T" className="banner-home-logo" />
            <h1 className="banner-home-title">THERION</h1>
            <p className="banner-home-slogan">Rosa choque por resultados!</p>
          </div>
        </div>
        <img
          src={require('../assets/pantherion_banner.png')}
          alt="Mascote Pantera Cor-de-Rosa"
          className="banner-home-mascot"
        />
      </section>

      {/* Sobre nós */}
      <section className="quem-somos">
        <div className="quem-somos-container">
          <h2 className="quem-somos-title">Sobre nós</h2>
          <div className="quem-somos-content">
            <div className="quem-somos-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem" }}>
                Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana.
                Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados
                — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.
              </p>
              <button
                className="quem-somos-button"
                onClick={() => handleNavigate("/sobre")}
              >
                Sobre nós
              </button>
            </div>
            <div className="quem-somos-carousel">
              <img
                src={sobreNosImages[sobreIndex]}
                alt="Carrossel"
                className="carousel-image"
              />
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
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos-home">
        <div className="servicos-home-container">
          <h2 className="servicos-home-title">Serviços</h2>
          <div className="servicos-home-content">
            <div className="servicos-home-carousel">
              <img
                src={servicosImages[servicoIndex]}
                alt="Serviço"
                className="carousel-image"
              />
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
            <div className="servicos-home-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem" }}>
                Criamos sites, aplicativos, modelagens 3D e realizamos impressões 3D sob demanda.
                Soluções tecnológicas personalizadas, feitas por estudantes que vivem a engenharia na prática
                — com visão jovem e mente inquieta.
              </p>
              <button
                className="quem-somos-button"
                onClick={() => handleNavigate("/impressao3d")}
              >
                Conheça mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* projetos-home */}
      <section className="projetos-home">
        <div className="projetos-home-container">
          <h2 className="projetos-home-title">Projetos</h2>
          <div className="projetos-home-content">
            <div className="projetos-home-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem" }}>
                Desenvolvemos projetos incríveis, com soluções criativas e inovadoras para atender às necessidades
                dos nossos clientes. Desde protótipos funcionais até produtos finais, garantimos qualidade e excelência.
              </p>
              <button
                className="quem-somos-button"
                onClick={() => handleNavigate("/projetos")}
              >
                Veja nossos projetos
              </button>
            </div>
            <div className="projetos-home-carousel">
              <img
                src={projetosImages[projetoIndex]}
                alt="Projeto"
                className="carousel-image"
              />
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
        </div>
      </section>

      {/* Gostou do nosso trabalho */}
      <section className="contato-home">
        <div className="contato-home-container">
          <h2 className="contato-home-title-moldura">Gostou do nosso trabalho?</h2>
          <div className="contato-home-content">
            <div className="contato-home-image">
              <img
                src={require("../assets/PanteraContato.png")}
                alt="Mascote Pantera Cor-de-Rosa"
                style={{ maxWidth: "320px", margin: "0 auto" }}
              />
              <div className="contato-home-slogan">
                VENHA SER ROSA CHOQUE POR RESULTADO!
              </div>
            </div>
            <div className="contato-home-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem", fontWeight: "bold" }}>
                Entre em contato com a nossa equipe e descubra como podemos contribuir para o sucesso do seu negócio.
              </p>
              <button
                className="quem-somos-button"
                onClick={() => handleNavigate("/contato")}
              >
                Fale conosco
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;