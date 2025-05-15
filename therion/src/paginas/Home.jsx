import React, { useState } from "react";
import "./Home.css";

const carouselImages = [
  require("../assets/membros.jpg"),
  require("../assets/pantera.png"),
  require("../assets/pantherion_banner.png"),
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home">
      {/* banner-home */}
      <section className="banner-home">
        <div className="banner-home-overlay">
          <img src={require('../assets/membros.jpg')} alt="Foto dos membros" className="banner-home-background" />
          <div className="banner-home-pink-overlay"></div>
        </div>
        <div className="banner-home-content">
          <div className="logo-text">
            <img src={require('../assets/LogoBranca.png')} alt="Logo T" className="banner-home-logo" />
            <h1 className="banner-home-title">THERION</h1>
            <p className="banner-home-slogan">Rosa choque por resultados!</p>
          </div>
          <img src={require('../assets/pantherion_banner.png')} alt="Mascote Pantera Cor-de-Rosa" className="banner-home-mascot" />
        </div>
      </section>

      {/* Quem Somos */}
      <section className="quem-somos">
        <div className="quem-somos-container">
          <h2 className="quem-somos-title">Quem somos</h2>
          <div className="quem-somos-content">
            <div className="quem-somos-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem" }}>
                Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana.
                Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados
                — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.
              </p>
              <button className="quem-somos-button">Sobre nós</button>
            </div>
            <div className="quem-somos-carousel">
              <button className="carousel-button prev" onClick={handlePrev}>
                {"<"}
              </button>
              <img
                src={carouselImages[currentImage]}
                alt="Carrossel"
                className="carousel-image"
              />
              <button className="carousel-button next" onClick={handleNext}>
                {">"}
              </button>
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
              <button className="carousel-button prev" onClick={handlePrev}>
                {"<"}
              </button>
              <img
                src={carouselImages[currentImage]}
                alt="Carrossel"
                className="carousel-image"
              />
              <button className="carousel-button next" onClick={handleNext}>
                {">"}
              </button>
            </div>
            <div className="servicos-home-text">
              <p style={{ fontSize: "2rem", lineHeight: "2rem" }}>
                Criamos sites, aplicativos, modelagens 3D e realizamos impressões 3D sob demanda.
                Soluções tecnológicas personalizadas, feitas por estudantes que vivem a engenharia na prática
                — com visão jovem e mente inquieta.
              </p>
              <button className="quem-somos-button">Conheça mais</button>
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
                Desenvolvemos projetos-home incríveis, com soluções criativas e inovadoras para atender às necessidades
                dos nossos clientes. Desde protótipos funcionais até produtos finais, garantimos qualidade e excelência.
              </p>
              <button className="quem-somos-button">Veja nossos projetos-home</button>
            </div>
            <div className="projetos-home-carousel">
              <button className="carousel-button prev" onClick={handlePrev}>
                {"<"}
              </button>
              <img
                src={carouselImages[currentImage]}
                alt="Carrossel"
                className="carousel-image"
              />
              <button className="carousel-button next" onClick={handleNext}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gostou do nosso trabalho */}
      <section className="contato-home">
        <div className="contato-home-container">
          <h2 className="contato-home-title">Gostou do nosso trabalho?</h2>
          <div className="contato-home-content">
            {/* Imagem e slogan */}
            <div className="contato-home-image">
              <img
                src={require("../assets/pantherion_contato.png")}
                alt="Mascote Pantera Cor-de-Rosa"
              />
              <p className="contato-home-slogan">VENHA SER ROSA CHOQUE POR RESULTADOS!</p>
            </div>

            {/* Texto e botão */}
            <div className="contato-home-text">
              <p style={{ fontSize: "2.5rem", lineHeight: "5rem" }}>
               Não espere muito tempo!
              </p>
              <p style={{ fontSize: "2.5rem", lineHeight: "5rem" }}>
               Nos contate imediatamente
              </p>
              <button className="contato-home-button">contato-home</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
  