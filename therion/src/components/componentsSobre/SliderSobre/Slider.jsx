import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const SlideSobre = () => {
  const equipe = [
    { nome: 'João Silva', foto: '/images/joao.jpg', cargo: 'Desenvolvedor Frontend' },
    { nome: 'Maria Oliveira', foto: '/images/maria.jpg', cargo: 'Designer UX/UI' },
    { nome: 'Carlos Santos', foto: '/images/carlos.jpg', cargo: 'Gerente de Projetos' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideContainer">
      <Slider {...settings}>
        {equipe.map((membro, index) => (
          <div key={index} className="slide">
            <img src={membro.foto} alt={membro.nome} className="foto" />
            <h3>{membro.nome}</h3>
            <p>{membro.cargo}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideSobre;