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
import 'swiper/css/autoplay'; // esta linha é opcional, mas boa prática
import { Autoplay } from 'swiper/modules';



function Impressao3D() {
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
          Confira nosso portfólio e conheça as peças que já desenvolvemos com impressão 3D!
        </p>

       
      <Swiper
        style={{ 
          maxWidth: '1200px', 
          height: '500px',
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
        loop={true} // importante para autoplay contínuo
      >
        {[ // array de cards
          {
            img: chaveiroImg,
            titulo: "Chaveiro",
            desc: "Modelos personalizados com nomes, logotipos ou formatos criativos."
          },
          {
            img: trofeuImg,
            titulo: "Troféu",
            desc: "Design único para premiações e eventos, com personalização."
          },
          {
            img: suporteImg,
            titulo: "Suporte",
            desc: "Acessório projetado para estabilidade e visual personalizado."
          },
           {
            img: roboImg,
            titulo: "Robô",
            desc: "Protótipo funcional impresso em 3D, unindo eletrônica e automação."
          },
           {
            img: celularImg,
            titulo: "Suporte de Celular",
            desc: "Design ergonômico e divertido impresso em 3D, ideal para mesas de trabalho ou estudo."
          },
        ].map((item, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide} >
            <div className={styles.card}>
              <img src={item.img} alt={item.titulo} className={styles.imagemSlide} />
              <h3 className={styles.subtitulo} style={{ marginTop: '15px', marginBottom: '1px', marginLeft: '10px' }}>{item.titulo}</h3>
              <p className={styles.subtitulo} style={{ fontSize: '20px',marginTop: '10px', marginBottom: '1px', marginLeft: '15px', marginRight: '15px' }}>{item.desc}</p>
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