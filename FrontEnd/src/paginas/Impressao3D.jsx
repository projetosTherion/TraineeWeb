import React from 'react';
import { useCarrinho } from '../contexts/CarrinhoContext';
import styles from '../components/componentsImpressão/containerImpressao.module.css';
import chaveiroImg from '../assets/chaveiro.jpg';
import suporteImg from '../assets/suporte.jpg';
import trofeuImg from '../assets/trofeu.jpeg';
import roboImg from '../assets/robo.png';
import celularImg from '../assets/celular.png';
import impressaoVideo from '../assets/impressao.mp4';
import bambulabImage from '../assets/bambulab.png';
import panterionFilamento from '../assets/panteraFilamento.png';

import ideiaImg from '../assets/ideia.jpg';
import orcamentoImg from '../assets/orcamento.jpg';
import cuboImg from '../assets/cubo-3d.jpg';
import modelagemImg from '../assets/modelagem-3d.jpg';
import aprovadoImg from '../assets/aprovado.jpg';
import entregaImg from '../assets/entrega-rapida.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


function Impressao3D() {
  const { adicionarAoCarrinho } = useCarrinho();
  
  // Array de produtos
  const produtos = [
    {
      id: 1,
      nome: "Chaveiro Personalizado",
      desc: "Modelos personalizados com nomes, logotipos ou formatos criativos.",
      preco: 19.90,
      imagem: chaveiroImg,
      categoria: "impressao3d"
    },
    {
      id: 2,
      nome: "Troféu Personalizado",
      desc: "Design único para premiações e eventos, com personalização.",
      preco: 129.90,
      imagem: trofeuImg,
      categoria: "impressao3d"
    },
    {
      id: 3,
      nome: "Suporte Personalizado",
      desc: "Acessório projetado para estabilidade e visual personalizado.",
      preco: 59.90,
      imagem: suporteImg,
      categoria: "impressao3d"
    },
    {
      id: 4,
      nome: "Kit Robô Educacional",
      desc: "Protótipo funcional impresso em 3D, unindo eletrônica e automação.",
      preco: 349.50,
      imagem: roboImg,
      categoria: "impressao3d"
    },
    {
      id: 5,
      nome: "Suporte de Celular",
      desc: "Design ergonômico e divertido impresso em 3D, ideal para mesas.",
      preco: 29.90,
      imagem: celularImg,
      categoria: "impressao3d"
    }
  ];

  // Função para adicionar ao carrinho com feedback
  const handleAdicionarAoCarrinho = (produto) => {
    adicionarAoCarrinho(produto);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  return (
    <>
      {/* SEÇÃO 1 : TÍTULO E SUBTITULO */}
      <section className={styles.pinkSectionTopo}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.titulotopo}>
              Impressão 3D
            </h1>
            <p className={styles.subtitulotopo}>
              Transforme conceitos em realidade <br />
              com agilidade, precisão e alto nível <br />
              de detalhamento.
            </p>
          </div>

          <img
            src={bambulabImage}
            alt="Bambulab"
            className={styles.bambulabImage}
          />
        </div>
      </section>

      {/* SEÇÃO 2 : PORTFÓLIO */}
      <section className={styles.container}>
        <h2 className={styles.titulo}>Nossos Projetos</h2>
        <p className={styles.subtitulo}>
          Confira nosso portfólio e adicione ao carrinho os produtos que desejar!
        </p>

       
<Swiper
  style={{ 
    maxWidth: '1200px', 
    height: '600px',
    margin: '50px auto 0',
    padding: '15px 0 0'
  }}
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  centeredSlides={true}
  navigation
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
>
  {produtos.map((produto, idx) => (
    <SwiperSlide key={idx} className={styles.swiperSlide}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
        border: '2px solid #ff5991',
        borderRadius: '15px',
        overflow: 'hidden',
        padding: '0 0 15px'
      }}>
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover'
          }}
        />
        <h3 style={{ 
          margin: '15px 0 5px 0',
          color: '#333',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          {produto.nome.includes(" ") ? produto.nome.split(" ")[0] : produto.nome}
        </h3>
        <p style={{ 
          margin: '0 15px 10px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'center'
        }}>
          {produto.desc}
        </p>
        <p style={{ 
          margin: '10px 0',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#ff5991',
          textAlign: 'center'
        }}>
          R$ {produto.preco.toFixed(2)}
        </p>
        <button 
          style={{
            backgroundColor: '#ff5991',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 15px',
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: '10px auto 0',
            display: 'block',
            width: '80%',
            maxWidth: '180px',
            transition: 'background-color 0.2s'
          }}
          onClick={() => handleAdicionarAoCarrinho(produto)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        <div className={styles.pinkSection}>
          <p className={styles.subtitulo}>
            Projetos que unem precisão, técnica e experiência prática para garantir o melhor da impressão 3D.
          </p>
          <div className={styles.videoWrapper}>
            <video controls className={styles.video}>
              <source src={impressaoVideo} type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* O restante do componente permanece igual */}
      {/* SEÇÃO 3 : METODOLOGIA */}
      <section className={styles.container}>
        <h2 className={styles.titulo}>Metodologia</h2>
        <p className={styles.subtitulo} style={{ marginBottom: '20px' }}>
          Confira nosso portfólio e conheça as peças que já desenvolvemos com impressão 3D!
        </p>

        <div className={styles.metodologiaGrid}>
          <div className={styles.metodologiaCard}>
            <img src={ideiaImg} alt="Ícone ideia" className={styles.metodologiaIcon} />
            <p>O primeiro passo é ouvir você. Coletamos todas as informações sobre o que deseja criar. Seja um objeto funcional, decorativo ou protótipo — projeto 100% personalizado.</p>
          </div>

          <div className={styles.metodologiaCard}>
            <img src={cuboImg} alt="Ícone engrenagem" className={styles.metodologiaIcon} />
            <p>Avaliamos se o projeto é viável tecnicamente. Consideramos fatores como tipo de material, escala de impressão, nível de detalhe e limitações da tecnologia.</p>
          </div>

          <div className={styles.metodologiaCard}>
            <img src={modelagemImg} alt="Ícone modelagem" className={styles.metodologiaIcon} />
            <p>Nossa equipe irá desenvolver ou modelar o arquivo 3D. Criamos ou adaptamos o arquivo otimizado para garantir compatibilidade e qualidade.</p>
          </div>

          <div className={styles.metodologiaCard}>
            <img src={orcamentoImg} alt="Ícone orçamento" className={styles.metodologiaIcon} />
            <p>Enviamos uma proposta com orçamento. Tipo de material, tempo de impressão, acabamento e envio. Números combinados e acordados previamente.</p>
          </div>

          <div className={styles.metodologiaCard}>
            <img src={aprovadoImg} alt="Ícone aprovação" className={styles.metodologiaIcon} />
            <p>Após sua aprovação, iniciamos o processo. Monitoramos o processo de impressão e mantemos você informado sobre cada etapa.</p>
          </div>

          <div className={styles.metodologiaCard}>
            <img src={entregaImg} alt="Ícone entrega" className={styles.metodologiaIcon} />
            <p>Enviamos a peça com toda proteção necessária. Garantimos qualidade no transporte e incluímos instruções para melhor uso e cuidado futuro.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 : VANTAGENS */}
      <section className={styles.container}>
       <div className={styles.pinkSection}>
        <p className={styles.titulo} style={{ marginBottom: '40px' }}>
          Vantagens da Impressão 3D
        </p>
        
        <div className={styles.caixa}>

          <div className={styles.colunaVantagens}>
            <p>Redução de Custos</p>
            <p>Personalização Total</p>
            <p>Integração com Projetos de Engenharia e Eletrônica</p>
          </div>

          <img src={panterionFilamento} alt="Pantherion segurando filamentos" className={styles.imagemPanterion} />

          <div className={styles.colunaVantagens}>
            <p>Agilidade no Desenvolvimento </p>
            <p>Liberdade de Design</p>
            <p>Validação Rápida de Ideias</p>
          </div>

        </div>
      </div>
      </section>
    </>
  );
}

export default Impressao3D;