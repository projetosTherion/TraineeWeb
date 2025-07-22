import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from '../components/componentsContato/containerContato.module.css';
import panteraInicial from '../assets/panteraInicial.png';

const schema = z.object({
  nome: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z
    .string()
    .min(14, 'Telefone incompleto')
    .regex(/\(\d{2}\) \d{4,5}-\d{4}/, 'Formato de telefone inválido'),
  mensagem: z.string().nonempty('Mensagem é obrigatória'),
});

function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const formatarTelefone = (valor) => {
    const numero = valor.replace(/\D/g, '').slice(0, 11);
    const parte1 = numero.slice(0, 2);
    const parte2 = numero.length > 6 ? numero.slice(2, 7) : numero.slice(2, 6);
    const parte3 = numero.length > 6 ? numero.slice(7, 11) : numero.slice(6, 10);

    if (numero.length <= 2) return `(${parte1}`;
    if (numero.length <= 6) return `(${parte1}) ${parte2}`;
    return `(${parte1}) ${parte2}-${parte3}`;
  };

  const handleTelefoneChange = (e) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setValue('telefone', valorFormatado);
  };

  const onSubmit = async (data) => {
  console.log('Dados enviados:', data);

  try {
    // Enviar dados para o backend Node.js
    const response = await fetch('http://localhost:3000/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        mensagem: data.mensagem,
        assunto: `Novo contato de ${data.nome}`
      })
    });

    const result = await response.json();
    console.log('Resposta do servidor:', result);

    if (response.ok && result.success) {
      alert('Formulário enviado com sucesso!');
      reset(); // Limpar formulário
    } else {
      throw new Error(result.message || result.error || 'Erro ao enviar formulário');
    }

  } catch (err) {
    alert(`Erro ao enviar: ${err.message}`);
    console.error('Erro ao enviar:', err);
  }
};

  return (
    <>
      {/* SEÇÃO 1 : TÍTULO E SUBTÍTULO */}
      <section className={styles.pinkSectionInicial}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.tituloInicial}>Vamos conversar?</h1>
            <p className={styles.subtituloInicial}>
              Para perguntas sobre produtos, suporte <br />
              técnico e outras dúvidas, você pode entrar <br />
              em contato com a Therion por qualquer uma <br />
              das seguintes maneiras.
            </p>
          </div>
          <img src={panteraInicial} alt="Pantera" className={styles.panteraInicial} />
        </div>
      </section>

      {/* SEÇÃO 2 : FORMULÁRIO */}
      <div className={styles.container}>
        <form className={styles.formulario} onSubmit={handleSubmit(onSubmit)}>
          <label>Nome:</label>
          <input type="text" {...register('nome')} />
          {errors.nome && <small style={{ color: 'red' }}>{errors.nome.message}</small>}

          <label>E-mail:</label>
          <input type="email" {...register('email')} />
          {errors.email && <small style={{ color: 'red' }}>{errors.email.message}</small>}

          <label>Telefone:</label>
          <input type="text" {...register('telefone')} onChange={handleTelefoneChange} />
          {errors.telefone && <small style={{ color: 'red' }}>{errors.telefone.message}</small>}

          <label>Mensagem:</label>
          <textarea rows="4" {...register('mensagem')} />
          {errors.mensagem && <small style={{ color: 'red' }}>{errors.mensagem.message}</small>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'ENVIAR'}
          </button>
        </form>

        {/* REDES SOCIAIS E CONTATO */}
        <div className={styles.infoContato}>
          <h4>Acesse nossas redes sociais!</h4>
          <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/therion.ej/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/FF5991" alt="Instagram" width="32" height="32" />
          </a>
          <a href="https://www.linkedin.com/company/therion/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="#FF5991" xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.849-3.037-1.85 0-2.134 1.445-2.134 2.938v5.668H9.042V9h3.112v1.561h.045c.433-.82 1.49-1.684 3.066-1.684 3.278 0 3.882 2.157 3.882 4.966v6.609zM5.337 7.433a1.812 1.812 0 11-.001-3.624 1.812 1.812 0 01.001 3.624zM6.856 20.452H3.817V9h3.039v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.978 0 1.778-.773 1.778-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/therionej" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/facebook/FF5991" alt="Facebook" width="32" height="32" />
          </a>
          </div>

         <div className={styles.infoContato}>
          <h4>Informações de Contato</h4>
          <p>
            <strong><span className={styles.label} style={{ color: '#FF5991', fontSize: '1.5rem' }} >E-mail: </span></strong> 
            <a href="mailto:contato@therionej.com.br">contato@therionej.com.br</a>
          </p>
          <p>
            <strong><span className={styles.label} style={{ color: '#FF5991', fontSize: '1.5rem' }} >Telefone: </span></strong> 
            <a href="tel:+5512996353758">(12) 99635-3758</a>
          </p>
          <p>
            <strong><span className={styles.label} style={{ color: '#FF5991', fontSize: '1.5rem' }} >WhatsApp: </span></strong> 
            <a href="https://wa.me/5512996353758" target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
          </p>
        </div>
        </div>
      </div>
      
      
  {/* SEÇÃO 3 : INFORMAÇÕES DE CONTATO E LOCALIZAÇÃO */}
          <section
            className={`${styles.SectionInformacoes} ${styles.pinkSectionInicial}`}
            style={{ paddingBlock: '2.9rem',  marginTop: '2rem'}}
          >
            <div className={styles.mapaContainer}>
              <h2>Onde estamos localizados?</h2>
              <iframe
                title="Localização UTFPR Apucarana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4760502190184!2d-51.43123292467017!3d-23.551340178806807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec9c0034018819%3A0xf3bb3a2513e7817c!2sUTFPR%20Apucarana!5e0!3m2!1spt-BR!2sbr!4v1747597180463!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

    </>
  );
}

export default Contato;
