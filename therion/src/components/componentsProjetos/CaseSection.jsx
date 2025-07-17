// CasesSection.jsx
import React, { useRef, useEffect } from 'react';
import {animate, motion} from 'framer-motion';
import styles from './caseSection.module.css'; // Ajuste o nome do arquivo CSS conforme o seu

// Importe suas imagens de cases (verifique os caminhos!)
import imagemTetris from '../../assets/tetris.png';
import imagemArcseed from '../../assets/SiteArcseed.png';
import imagemGol from '../../assets/SiteGol.png';
import imagemSuporte from '../../assets/suporte.jpg';

function CasesSection() {
  {/*Variantes das animações*/}
  const ImgVariant ={
    hidden: {
      opacity: 0,
      x: -20
    },

    animate: {
      opacity: 1,
      x: 0,
      transition: {duration: 1}
    }
  }

  const caixaVariant = {
    hidden: {
      opacity: 0,
      y: 20
    },
   
    animate:{
      opacity: 1,
      transition: {duration: 1.5},
      y: 0
    }
  }
  
  {/*JSX*/}
  return (
    <section className={styles.fundoRosa} >
      <h1 className={styles.tituloCases}>Ações de Impacto</h1>
      
      <div className={styles.containerCases}>
        <section className={styles.casesColuna}>

            <div className={styles.casesEsquerda}>

              {/* Case Esquerda - Tetris */}
                <motion.div className={`${styles.caseImagemWrapperEsquerda} ${styles.caseImagemWrapper}`}
                  variants={ImgVariant}
                  initial="hidden"
                  whileInView="animate"
                >
                  <img 
                    src={imagemTetris} 
                    alt="Projeto Tetris EJ" 
                    className={styles.imagemContainerEsquerda}/>
                <motion.div className={`${styles.caixaTextoEsquerda} ${styles.caixaTextoEstilo}`}
                  variants={caixaVariant}
                  initial="hidden"
                  whileInView="animate"
                  >

                  <h2 className={styles.tituloCasesCaixa}>Tetris EJ</h2>
                  <p className={styles.texto}>
                    Na Tetris EJ, unimos criatividade e técnica para oferecer projetos personalizados em arquitetura, interiores, instalações 
                    e modelagem. Cada detalhe é pensado para entregar funcionalidade, inovação e sustentabilidade.
                  </p>
                  </motion.div>
                </motion.div>  

              {/* Case Esquerda - Gol FC */}
              <motion.div className={`${styles.caseImagemWrapperEsquerda} ${styles.caseImagemWrapper}`}
                variants={ImgVariant}
                initial="hidden"
                whileInView="animate"
              >
                <img 
                  src={imagemGol} 
                  alt="Projeto Gol FC" 
                  className={styles.imagemContainerEsquerda}
                  />
                <motion.div className={`${styles.caixaTextoEsquerda} ${styles.caixaTextoEstilo}`}
                  variants={caixaVariant}
                  initial="hidden"
                  whileInView="animate"
                >
                  <h2 className={styles.tituloCasesCaixa}>Gol FC</h2>
                  <p className={styles.texto}>
                    Já imaginou ter em mãos a bola que decidiu uma partida? No Gol FC, você participa de leilões exclusivos de bolas de 
                    futebol autografadas pelos craques que marcaram gols com elas. Cada peça é única, carregada de emoção e autenticidade.
                  </p>
                </motion.div>{/*caixaTextoEsquerda*/}
              </motion.div>{/*caseImagemWrapperEsquerda*/}
            </div>{/*casesEsquerda*/}

            <div className={styles.casesDireita}>
              {/* Case Direita - Arcseed */}
              <motion.div className={`${styles.caseImagemWrapperDireita} ${styles.caseImagemWrapper}`}
                variants={ImgVariant}
                initial="hidden"
                whileInView="animate"
              >
                <img 
                  src={imagemArcseed} 
                  alt="Projeto Arcseed" 
                  className={styles.imagemContainerDireita}/>
                <motion.div className={`${styles.caixaTextoDireita} ${styles.caixaTextoEstilo}`}
                  variants={caixaVariant}
                  initial="hidden"
                  whileInView="animate"
                >
                  <h2 className={styles.tituloCasesCaixa}>Arcseed</h2>
                  <p className={styles.texto}>
                  O Arcseed é uma plataforma que transforma descrições textuais em imagens realistas com o poder da inteligência 
                  artificial. Criado para arquitetos, designers e engenheiros, ele acelera o processo de visualização, permitindo 
                  explorar conceitos de forma ágil, criativa e acessível.
                  </p>
                </motion.div>
              </motion.div>
            
              {/* Case Direita - Suporte*/}
              <motion.div className={`${styles.caseImagemWrapperDireita} ${styles.caseImagemWrapper}`}
                variants={ImgVariant}
                initial="hidden"
                whileInView="animate"
              >
                <img 
                  src={imagemSuporte} 
                  alt="Projeto Suporte" 
                  className={styles.imagemContainerDireita}/>
                <motion.div className={`${styles.caixaTextoDireita} ${styles.caixaTextoEstilo}`}
                  variants={caixaVariant}
                  initial="hidden"
                  whileInView="animate"
                >
                  <h2 className={styles.tituloCasesCaixa}>Suporte</h2>
                  <p className={styles.texto}>
                    Transformamos uma ideia criativa em um suporte de celular único, impresso em 3D com design de dragão. Mais do 
                    que um acessório, é uma peça de destaque que oferece estabilidade e um toque de fantasia para seu dia a dia. 
                    Perfeito para quem busca funcionalidade e originalidade, mantendo seu aparelho seguro e sempre à vista.
                  </p>
                </motion.div>
              </motion.div>
            </div>
        </section>{/*casesColuna*/}
      </div>{/*containerCases*/}
    </section>
  );
};

export default CasesSection;