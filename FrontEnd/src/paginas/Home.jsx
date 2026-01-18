import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

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

const cardsData = [
  {
    id: 'sobre',
    titulo: "Sobre nós",
    descricao: "Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana. Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.",
    textoBotao: "Sobre nós",
    rota: "/sobre",
    imagens: [
      "/home/sobreNos/membros.jpg",
      "/home/sobreNos/utfpr.jpg",
    ],
    imagemPrimeira: false, // false = imagem à direita
  },
  {
    id: 'servicos',
    titulo: "Serviços",
    descricao: "Criamos sites, aplicativos, modelagens 3D e realizamos impressões 3D sob demanda. Soluções tecnológicas personalizadas, feitas por estudantes que vivem a engenharia na prática — com visão jovem e mente inquieta.",
    textoBotao: "Conheça mais",
    rota: "/impressao3d",
    imagens: [
      "/home/servicos/IconeModelagem.png",
      "/home/servicos/IconeDesWeb.png",
      "/home/servicos/IconeMicrocontrolados.png",
    ],
    imagemPrimeira: true, // true = imagem à esquerda
  },
  {
    id: 'projetos',
    titulo: "Projetos",
    descricao: "Desenvolvemos projetos incríveis, com soluções criativas e inovadoras para atender às necessidades dos nossos clientes. Desde protótipos funcionais até produtos finais, garantimos qualidade e excelência.",
    textoBotao: "Veja nossos projetos",
    rota: "/projetos",
    imagens: [
      "/home/projetos/Microcontrolados.png",
      "/home/projetos/DesWeb.png",
      "/home/projetos/Modelagem.png",
    ],
    imagemPrimeira: false,
  },
  {
    id: 'contato',
    titulo: "Gostou do nosso trabalho?",
    descricao: "Entre em contato com a nossa equipe e descubra como podemos contribuir para o sucesso do seu negócio.",
    textoBotao: "Fale conosco",
    rota: "/contato",
    imagens: ["/home/PanteraContato.png"],
    imagemPrimeira: true,
    subtitulo: "VENHA SER ROSA CHOQUE POR RESULTADOS!",
  },
];

function Home() {
  const [carouselIndexes, setCarouselIndexes] = useState(
    cardsData.reduce((acc, card) => ({ ...acc, [card.id]: 0 }), {})
  );
  const navigate = useNavigate();

  // Função para navegar e ir ao topo
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Função para atualizar índice do carrossel
  const updateCarouselIndex = (cardId, index) => {
    setCarouselIndexes(prev => ({ ...prev, [cardId]: index }));
  };

  return (
    <main>
      {/* banner-home */}
      <section 
        className="w-full h-screen bg-top bg-no-repeat bg-cover flex items-center justify-center relative"
        style={{backgroundImage: `url(/home/TimeTherion.jpg)`}}>
        <div className="absolute inset-0 bg-[#EFA2BB] opacity-45"></div>
        <motion.div 
          variants={containerBanner}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
          className="flex flex-col items-center justify-center absolute inset-0 m-auto w-fit h-fit z-3">
          <motion.img 
            src="/images/logoBranca.webp" 
            alt="Logo T" 
            variants={bannerVariants}
            className="w-[clamp(100px,20vw,250px)] mb-2.5"/>
          <motion.h1 
            variants={bannerVariants}
            className="text-[clamp(2rem,8vw,8rem)] font-bold text-white m-0">
            THERION
          </motion.h1>
          <motion.p 
            variants={bannerVariants}
            className="text-[clamp(1rem,3vw,2rem)] text-white mt-2.5">
            Rosa choque por resultados!
          </motion.p>
        </motion.div>
      </section>

      <section className="max-w-500 mx-auto py-8 flex flex-col justify-center items-center gap-12">
        {cardsData.map((card) => (
          <motion.div 
            key={card.id}
            className="relative w-[95%] max-w-375 min-h-112.5 md:min-h-auto max-h-[80vh] flex justify-center bg-white border-[8px] border-[#ff5991] rounded-[30px] p-6" 
            variants={cardVariant} 
            initial="hidden"
            whileInView="inView"
            viewport={{ once: true}}>
            <h2 className="absolute -top-1 -translate-y-1/2 md:left-12 left-[clamp(5px,2vw,20px)] bg-white text-[#ff5991] text-[clamp(2rem,6vw,4rem)] md:text-[clamp(1.8rem,6vw,3rem)] font-bold px-[clamp(5px,2vw,20px)]">
              {card.titulo}
            </h2>
            <div className={`flex justify-between items-center gap-[clamp(20px,6vw,60px)] md:gap-[clamp(10px,4vw,40px)] ${card.imagemPrimeira ? 'flex-row-reverse md:flex-col' : ''}`}>
              {/* Conteúdo de texto */}
              <div className="w-[30%] flex flex-col justify-center h-full py-6 md:items-center">
                <p className="flex-1 text-lg font-bold leading-[1.8] text-[#333333]">
                  {card.descricao}
                </p>
                <button 
                  onClick={() => handleNavigate(card.rota)}
                  className="mt-[clamp(30px,8vw,80px)] md:mt-[30px] md:w-[80%] bg-[#ff5991] text-white py-[clamp(4px,2vw,10px)] px-[clamp(5px,4vw,20px)] border-none rounded-[20px] cursor-pointer text-[clamp(1.2rem,4vw,2.5rem)] md:text-[clamp(1rem,4vw,2rem)] hover:bg-[#e04d7f]">
                  {card.textoBotao}
                </button>
              </div>

              {/* Conteúdo de imagem */}
              <div className="flex-1 relative flex flex-col items-center justify-center w-full md:w-full max-h-none">
                {card.id === 'contato' ? (
                  <>
                    <img
                      src={card.imagens[0]}
                      alt="Mascote Pantera Cor-de-Rosa"
                      className="max-w-80 md:max-w-62.5 mx-auto w-full md:w-full"
                    />
                    {card.subtitulo && (
                      <h3 className="text-[#ff5991] font-bold text-[clamp(1rem,4vw,2rem)] md:text-[clamp(0.9rem,3.5vw,1.5rem)] mt-[clamp(10px,4vw,30px)] text-center tracking-[1px] leading-[clamp(1.2rem,4vw,2.4rem)]">
                        {card.subtitulo}
                      </h3>
                    )}
                  </>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={card.imagens[carouselIndexes[card.id]]}
                      alt={`${card.titulo} - Imagem ${carouselIndexes[card.id] + 1}`}
                      className="w-full object-cover rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"/>
                      {card.imagens.length > 1 && (
                        <div className="absolute flex w-full justify-center items-center gap-5 bottom-6 max-h-95">
                          {card.imagens.map((_, idx) => (
                            <div
                              key={idx}
                              className={`size-4 bg-[#ff5991] rounded-full border-none transition-all ease-in-out duration-300 cursor-pointer p-0 outline-none ${
                                carouselIndexes[card.id] === idx 
                                  && 'scale-150'
                              }`}
                              onClick={() => updateCarouselIndex(card.id, idx)}
                              aria-label={`Selecionar imagem ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

export default Home;