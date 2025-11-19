import styles from '../components/componentsImpressão/containerImpressao.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // esta linha é opcional, mas boa prática
import { Autoplay } from 'swiper/modules';
import {motion} from 'framer-motion'

const cardVariants = {
  initial: {opacity: 0, y: 100},
  inView: {opacity: 1, y: 0, transition: {duration: 0.5}},
}

const containerVariants = {
  initial: {},
  inView: {transition: {staggerChildren: 0.2}},
}

const containerVantagens = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.5}}
}

const conteudoVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {duration: 0.8}}
}

const conteudoVariantsDireita = {
  hidden: {opacity: 0, x: 50},
  visible: {opacity: 1, x: 0, transition: {duration: 0.8}}
}

const conteudoVariantsEsquerda = {
  hidden: {opacity: 0, x: -50},
  visible: {opacity: 1, x: 0, transition: {duration: 0.8}}
}

const bordaVariants = {
  hidden: {pathLength: 0},
  visible: {
    pathLength: 1,
    transition: {durantion: 8, delay: 1.5}
  }
}


function Impressao3D() {
  return (
    <>
      {/* SEÇÃO 1 : TÍTULO E SUBTITULO */}
      <section className={styles.pinkSectionTopo}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1>Impressão 3D</h1>
            <p>Transforme conceitos em realidade com agilidade, <br />
              precisão e alto nível de detalhamento.<br />
            </p>
          </div>
          <img src="/Impressao3D/bambulab.png" alt="Impressora 3D" />
        </div>
      </section>

      {/* SEÇÃO 2 : PORTFÓLIO */}
      <section className={styles.container}>
        <h1 className={styles.titulo}>Nossos Projetos</h1>
        <h2>
          Confira nosso portfólio e conheça as peças que já desenvolvemos com impressão 3D!
        </h2>


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
              img: "/Impressao3D/projetos/chaveiro.jpg",
              titulo: "Chaveiro",
              desc: "Modelos personalizados com nomes, logotipos ou formatos criativos."
            },
            {
              img: "/Impressao3D/projetos/trofeu.jpeg",
              titulo: "Troféu",
              desc: "Design único para premiações e eventos, com personalização."
            },
            {
              img: "/Impressao3D/projetos/suporte.jpg",
              titulo: "Suporte",
              desc: "Acessório projetado para estabilidade e visual personalizado."
            },
            {
              img: "/Impressao3D/projetos/robo.png",
              titulo: "Robô",
              desc: "Protótipo funcional impresso em 3D, unindo eletrônica e automação."
            },
            {
              img: "/Impressao3D/projetos/celular.png",
              titulo: "Suporte de Celular",
              desc: "Design ergonômico e divertido impresso em 3D, ideal para mesas de trabalho ou estudo."
            },
          ].map((item, idx) => (
            <SwiperSlide key={idx} className={styles.swiperSlide} >
              <div className={styles.card}>
                <img src={item.img} alt={item.titulo} className={styles.imagemSlide} />
                <h3 style={{ marginTop: '15px', marginBottom: '1px', marginLeft: '10px' }}>{item.titulo}</h3>
                <p style={{ fontSize: '20px', marginTop: '10px', marginBottom: '1px', marginLeft: '15px', marginRight: '15px' }}>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button>Comprar Impressões</button>

        <motion.div className={styles.pinkSection}
          initial={{ backgroundColor: "#FFFFFF" }}
          whileInView={{ backgroundColor: "#F5CBD9" }}
          transition={{ duration: 2}}
          viewport={{ once: true }}>
          <div className={styles.videoWrapper}>
            <video controls className={styles.video}>
              <source src="/Impressao3D/impressao.mp4" type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3 : METODOLOGIA */}
      <section className={styles.containerPai}>
        <h1>Metodologia</h1>

        <motion.div className={styles.metodologiaGrid} 
        variants={containerVariants}
        initial="initial"
        whileInView="inView"
        viewport={{once: true, amount: 0.3}}>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/ideia.jpg" alt="Ícone ideia"/>
            <p>O primeiro passo é ouvir você. Coletamos todas as informações sobre o que deseja criar. Seja um objeto funcional, decorativo ou protótipo — projeto 100% personalizado.</p>
          </motion.div>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/cubo-3d.jpg" alt="Ícone engrenagem"/>
            <p>Avaliamos se o projeto é viável tecnicamente. Consideramos fatores como tipo de material, escala de impressão, nível de detalhe e limitações da tecnologia.</p>
          </motion.div>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/modelagem-3d.jpg" alt="Ícone modelagem"/>
            <p>Nossa equipe irá desenvolver ou modelar o arquivo 3D. Criamos ou adaptamos o arquivo otimizado para garantir compatibilidade e qualidade.</p>
          </motion.div>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/orcamento.jpg" alt="Ícone orçamento"/>
            <p>Enviamos uma proposta com orçamento. Tipo de material, tempo de impressão, acabamento e envio. Números combinados e acordados previamente.</p>
          </motion.div>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/aprovado.jpg" alt="Ícone aprovação"/>
            <p>Após sua aprovação, iniciamos o processo. Monitoramos o processo de impressão e mantemos você informado sobre cada etapa.</p>
          </motion.div>

          <motion.div className={styles.metodologiaCard} variants={cardVariants}>
            <img src="/Impressao3D/grid/entrega-rapida.jpg" alt="Ícone entrega"/>
            <p>Enviamos a peça com toda proteção necessária. Garantimos qualidade no transporte e incluímos instruções para melhor uso e cuidado futuro.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SEÇÃO 4 : VANTAGENS */}
      <section className={styles.containerVantagens}>
        <div className={styles.pinkSection}>

          <h1 style={{ marginBottom: '40px' }}>
            Vantagens da Impressão 3D
          </h1>

          <motion.div className={styles.caixa}
            variants={containerVantagens}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}>

            <motion.div className={styles.colunaVantagens} variants={conteudoVariantsEsquerda}>
              <p>Redução de Custos</p>
              <p>Personalização Total</p>
              <p>Integração com Projetos de Engenharia e Eletrônica</p>
            </motion.div>

            <motion.div variants={conteudoVariants}>
              <img src="/Impressao3D/panteraFilamento.png" alt="Pantherion segurando filamentos" className={styles.imagemPanterion} />
            </motion.div>

            <motion.div className={styles.colunaVantagens} variants={conteudoVariantsDireita}>
              <p>Agilidade no Desenvolvimento </p>
              <p>Liberdade de Design</p>
              <p>Validação Rápida de Ideias</p>
            </motion.div>
              
            <motion.svg
              variants={bordaVariants}
              width="100%"
              height="100%"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <motion.rect
                x="0%" y="0%"
                width="100%" height="100%"
                rx="16" /* border-radius */
                stroke="#ff5991"
                strokeWidth="5px"
                fill="none"
                variants={bordaVariants}/>
            </motion.svg>
                
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Impressao3D;