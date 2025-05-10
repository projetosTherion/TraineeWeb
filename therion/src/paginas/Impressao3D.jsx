//import styles from './container.module.css';
import styles from '../components/componentsImpressão/containerImpressao.module.css';
import chaveiroImg from '../assets/chaveiro.jpg';
import suporteImg from '../assets/suporte.jpg';
import trofeuImg from '../assets/trofeu.jpeg';
import impressaoVideo from '../assets/impressao.mp4';
import panterionFilamento from '../assets/panteraFilamento.png';

import ideiaImg from '../assets/ideia.jpg';
import orcamentoImg from '../assets/orcamento.jpg';
import cuboImg from '../assets/cubo-3d.jpg';
import modelagemImg from '../assets/modelagem-3d.jpg';
import aprovadoImg from '../assets/aprovado.jpg';
import entregaImg from '../assets/entrega-rapida.jpg';


function Impressao3D() {
  return (
    <>
      {/* SEÇÃO 1 : TÍTULO E SUBTITULO */}
      <section style={{ textAlign: 'center' }}>
        <h1 style={{
          color: '#FF5991', fontFamily: 'League Spartan', fontSize: '2.0rem',
          marginTop: '0.5rem', fontWeight: 'bold'
        }}>
          DÊ VIDA ÀS SUAS IDEIAS COM IMPRESSÃO 3D SOB MEDIDA
        </h1>
        <p style={{
          textAlign: 'justify', color: '#000000', fontFamily: 'League Spartan',
          maxWidth: '400px', fontSize: '1.25rem', marginTop: '0.25rem',
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          Transforme conceitos em realidade com agilidade, precisão e alto nível de detalhamento. Oferecemos serviços de impressão 3D e prototipagem personalizados, ideais para projetos de engenharia, design, educação e inovação tecnológica.
        </p>
      </section>

      {/* SEÇÃO 2 : PORTFÓLIO */}
      <section className={styles.container}>
        <h2 className={styles.titulo}>Nossos Projetos</h2>
        <p className={styles.subtitulo}>
          Confira nosso portfólio e conheça as peças que já desenvolvemos com impressão 3D!
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={chaveiroImg} alt="Chaveiro" className={styles.imagem} />
            <h3 className={styles.nome}>Chaveiro</h3>
            <p className={styles.descricao}>
              Modelos personalizados com nomes, logotipos ou formatos criativos, perfeitos para brindes e lembranças.
            </p>
          </div>

          <div className={styles.card}>
            <img src={trofeuImg} alt="Troféu" className={styles.imagem} />
            <h3 className={styles.nome}>Troféu</h3>
            <p className={styles.descricao}>
              Design único para premiações e eventos, com acabamento profissional e possibilidade de personalização.
            </p>
          </div>

          <div className={styles.card}>
            <img src={suporteImg} alt="Suporte" className={styles.imagem} />
            <h3 className={styles.nome}>Suporte</h3>
            <p className={styles.descricao}>
              Um suporte para Alexa é um acessório projetado para acomodar seu dispositivo oferecendo estabilidade e um visual mais personalizado.
            </p>
          </div>
        </div>

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
      <section className={styles.metodologiaSection}>
        <h2 className={styles.titulo}>Metodologia</h2>
        <p className={styles.subtitulo}>
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
      <section className={styles.containerVantagens}>
       <div className={styles.pinkSection}>
        <p className={styles.tituloVantagens}>
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