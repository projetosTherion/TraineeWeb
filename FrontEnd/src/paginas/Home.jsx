import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

      <section className="max-w-500 mx-auto py-[clamp(80px,15vw,120px)] flex flex-col justify-center items-center gap-25">
        {/* Sobre nós */}
        <motion.div 
          className="relative w-full max-w-375 min-h-112.5 md:min-h-auto flex flex-col justify-center bg-white border-[5px] border-[#ff5991] rounded-[30px] p-[clamp(10px,6vw,40px)]" 
          variants={cardVariant} 
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true}}>
          <h2 className="absolute top-[clamp(-98px,-8vw,-110px)] md:top-[-30px] md:left-1/2 md:-translate-x-1/2 left-[clamp(5px,2vw,20px)] bg-white text-[#ff5991] text-[clamp(2rem,6vw,4rem)] md:text-[clamp(1.8rem,6vw,3rem)] font-bold px-[clamp(5px,2vw,20px)]">
            Sobre nós
          </h2>
          <div className="flex justify-between items-center gap-[clamp(20px,6vw,60px)] md:gap-[clamp(10px,4vw,40px)] min-h-auto grow md:flex-col">
            <div className="max-w-[50%] md:max-w-full flex flex-col justify-center h-full md:items-center md:text-center">
              <p className="flex-1 text-[clamp(1rem,2vw,1.5rem)] font-bold leading-[1.8] text-[#333333] md:text-center">
                Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana.
                Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados
                — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.
              </p>
              <button 
                onClick={() => handleNavigate("/sobre")}
                className="mt-[clamp(30px,8vw,80px)] md:mt-[30px] md:w-[80%] bg-[#ff5991] text-white py-[clamp(4px,2vw,10px)] px-[clamp(5px,4vw,20px)] border-none rounded-[20px] cursor-pointer text-[clamp(1.2rem,4vw,2.5rem)] md:text-[clamp(1rem,4vw,2rem)] hover:bg-[#e04d7f]">
                Sobre nós
              </button>
            </div>
            <div className="flex-1 relative flex flex-col items-center justify-center w-full md:w-full max-h-none">
              <img
                src={sobreNosImages[sobreIndex]}
                alt="Carrossel"
                className="w-full max-w-[clamp(220px,50vw,500px)] md:max-w-[90%] md:max-h-auto rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"/>
              <div className="flex justify-center items-center gap-3 mt-4.5 max-h-95">
                {sobreNosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-4 h-4 rounded-full border-none transition-all duration-200 cursor-pointer p-0 outline-none ${
                      sobreIndex === idx 
                        ? 'bg-[#ff5991] shadow-[0_0_0_2px_#ff5991]' 
                        : 'bg-[#ffd6e8]'
                    } focus:shadow-[0_0_0_3px_#ff5991]`}
                    onClick={() => setSobreIndex(idx)}
                    aria-label={`Selecionar imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div 
          className="relative w-full max-w-375 min-h-112.5 md:min-h-auto flex flex-col justify-center bg-white border-[5px] border-[#ff5991] rounded-[30px] p-[clamp(10px,6vw,40px)]" 
          variants={cardVariant} 
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true}}>
          <h2 className="absolute top-[clamp(-98px,-8vw,-110px)] md:top-[-30px] md:left-1/2 md:-translate-x-1/2 left-[clamp(5px,2vw,20px)] bg-white text-[#ff5991] text-[clamp(2rem,6vw,4rem)] md:text-[clamp(1.8rem,6vw,3rem)] font-bold px-[clamp(5px,2vw,20px)]">
            Serviços
          </h2>
          <div className="flex justify-between items-center gap-[clamp(20px,6vw,60px)] md:gap-[clamp(10px,4vw,40px)] min-h-auto grow md:flex-col">
            <div className="flex-1 relative flex flex-col items-center justify-center w-full md:w-full max-h-none">
              <img
                src={servicosImages[servicoIndex]}
                alt="Serviço"
                className="w-full max-w-[clamp(220px,50vw,500px)] md:max-w-[90%] md:max-h-auto rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"/>
              <div className="flex justify-center items-center gap-3 mt-4.5 max-h-95">
                {servicosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-4 h-4 rounded-full border-none transition-all duration-200 cursor-pointer p-0 outline-none ${
                      servicoIndex === idx 
                        ? 'bg-[#ff5991] shadow-[0_0_0_2px_#ff5991]' 
                        : 'bg-[#ffd6e8]'
                    } focus:shadow-[0_0_0_3px_#ff5991]`}
                    onClick={() => setServicoIndex(idx)}
                    aria-label={`Selecionar serviço ${idx + 1}`}
                    />
                ))}
              </div>
            </div>
            <div className="max-w-[50%] md:max-w-full flex flex-col justify-center h-full md:items-center md:text-center">
              <p className="flex-1 text-[clamp(1rem,2vw,1.5rem)] font-bold leading-[1.8] text-[#333333] md:text-center">
                Criamos sites, aplicativos, modelagens 3D e realizamos impressões 3D sob demanda.
                Soluções tecnológicas personalizadas, feitas por estudantes que vivem a engenharia na prática
                — com visão jovem e mente inquieta.
              </p>
              <button 
                onClick={() => handleNavigate("/impressao3d")}
                className="mt-[clamp(30px,8vw,80px)] md:mt-[30px] md:w-[80%] bg-[#ff5991] text-white py-[clamp(4px,2vw,10px)] px-[clamp(5px,4vw,20px)] border-none rounded-[20px] cursor-pointer text-[clamp(1.2rem,4vw,2.5rem)] md:text-[clamp(1rem,4vw,2rem)] hover:bg-[#e04d7f]">
                Conheça mais
              </button>
            </div>
          </div>
        </motion.div>

        {/* projetos-home */}
        <motion.div 
          className="relative w-full max-w-375 min-h-112.5 md:min-h-auto flex flex-col justify-center bg-white border-[5px] border-[#ff5991] rounded-[30px] p-[clamp(10px,6vw,40px)]" 
          variants={cardVariant} 
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true}}>
          <h2 className="absolute top-[clamp(-98px,-8vw,-110px)] md:top-[-30px] md:left-1/2 md:-translate-x-1/2 left-[clamp(5px,2vw,20px)] bg-white text-[#ff5991] text-[clamp(2rem,6vw,4rem)] md:text-[clamp(1.8rem,6vw,3rem)] font-bold px-[clamp(5px,2vw,20px)]">
            Projetos
          </h2>
          <div className="flex justify-between items-center gap-[clamp(20px,6vw,60px)] md:gap-[clamp(10px,4vw,40px)] min-h-auto grow md:flex-col">
            <div className="max-w-[50%] md:max-w-full flex flex-col justify-center h-full md:items-center md:text-center">
              <p className="flex-1 text-[clamp(1rem,2vw,1.5rem)] font-bold leading-[1.8] text-[#333333] md:text-center">
                Desenvolvemos projetos incríveis, com soluções criativas e inovadoras para atender às necessidades
                dos nossos clientes. Desde protótipos funcionais até produtos finais, garantimos qualidade e excelência.
              </p>
              <button 
                onClick={() => handleNavigate("/projetos")}
                className="mt-[clamp(30px,8vw,80px)] md:mt-[30px] md:w-[80%] bg-[#ff5991] text-white py-[clamp(4px,2vw,10px)] px-[clamp(5px,4vw,20px)] border-none rounded-[20px] cursor-pointer text-[clamp(1.2rem,4vw,2.5rem)] md:text-[clamp(1rem,4vw,2rem)] hover:bg-[#e04d7f]">
                Veja nossos projetos
              </button>
            </div>
            <div className="flex-1 relative flex flex-col items-center justify-center w-full md:w-full max-h-none">
              <img
                src={projetosImages[projetoIndex]}
                alt="Projeto"
                className="w-full max-w-[clamp(220px,50vw,500px)] md:max-w-[90%] md:max-h-auto rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"/>
              <div className="flex justify-center items-center gap-3 mt-4.5 max-h-95">
                {projetosImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-4 h-4 rounded-full border-none transition-all duration-200 cursor-pointer p-0 outline-none ${
                      projetoIndex === idx 
                        ? 'bg-[#ff5991] shadow-[0_0_0_2px_#ff5991]' 
                        : 'bg-[#ffd6e8]'
                    } focus:shadow-[0_0_0_3px_#ff5991]`}
                    onClick={() => setProjetoIndex(idx)}
                    aria-label={`Selecionar projeto ${idx + 1}`}
                    />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gostou do nosso trabalho */}
        <motion.div 
          className="relative w-full max-w-375 min-h-112.5 md:min-h-auto flex flex-col justify-center bg-white border-[5px] border-[#ff5991] rounded-[30px] p-[clamp(10px,6vw,40px)]" 
          variants={cardVariant} 
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true}}>
          <h2 className="absolute top-[clamp(-98px,-8vw,-110px)] md:top-[-30px] md:left-1/2 md:-translate-x-1/2 left-[clamp(5px,2vw,20px)] bg-white text-[#ff5991] text-[clamp(2rem,6vw,4rem)] md:text-[clamp(1.8rem,6vw,3rem)] font-bold px-[clamp(5px,2vw,20px)]">
            Gostou do nosso trabalho?
          </h2>
          <div className="flex justify-between items-center gap-[clamp(20px,6vw,60px)] md:gap-[clamp(10px,4vw,40px)] min-h-auto grow md:flex-col">
            <div className="flex flex-col w-full md:w-full">
              <img
                src="/home/PanteraContato.png"
                alt="Mascote Pantera Cor-de-Rosa"
                className="max-w-80 md:max-w-62.5 mx-auto w-full md:w-full"
              />
              <h3 className="text-[#ff5991] font-bold text-[clamp(1rem,4vw,2rem)] md:text-[clamp(0.9rem,3.5vw,1.5rem)] mt-[clamp(10px,4vw,30px)] text-center tracking-[1px] leading-[clamp(1.2rem,4vw,2.4rem)]">
                VENHA SER ROSA CHOQUE POR RESULTADO!
              </h3>
            </div>
            <div className="max-w-[50%] md:max-w-full flex flex-col justify-center h-full md:items-center md:text-center">
              <p className="flex-1 text-[clamp(1rem,2vw,1.5rem)] font-bold leading-[1.8] text-[#333333] md:text-center">
                Entre em contato com a nossa equipe e descubra como podemos contribuir para o sucesso do seu negócio.
              </p>
              <button 
                onClick={() => handleNavigate("/contato")}
                className="mt-[clamp(30px,8vw,80px)] md:mt-[30px] md:w-[80%] bg-[#ff5991] text-white py-[clamp(4px,2vw,10px)] px-[clamp(5px,4vw,20px)] border-none rounded-[20px] cursor-pointer text-[clamp(1.2rem,4vw,2.5rem)] md:text-[clamp(1rem,4vw,2rem)] hover:bg-[#e04d7f]">
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