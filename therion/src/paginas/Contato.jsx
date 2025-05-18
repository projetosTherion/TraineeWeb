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
      await addDoc(collection(db, 'contatos'), {
        ...data,
        timestamp: serverTimestamp(),
      });
      alert('Formulário enviado com sucesso!');
      reset();
    } catch (err) {
      alert('Erro ao enviar formulário.');
      console.error('Erro ao gravar no Firestore:', err);
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
      </div>
      
  {/* SEÇÃO 3 : INFORMAÇÕES DE CONTATO E LOCALIZAÇÃO */}
 <section className={styles.SectionInformacoes}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoContato}>
            <h2>Informações de Contato</h2>
            <p><strong>E-mail:</strong> <a href="mailto:contato@therionej.com.br">contato@therionej.com.br</a></p>
            <p><strong>Telefone:</strong> <a href="tel:+5512996353758">(12) 99635-3758</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/5512996353758" target="_blank" rel="noopener noreferrer">Enviar mensagem</a></p>
          </div>

          <div className={styles.mapaContainer}>
            <h2>Onde estamos localizados?</h2>
            <iframe
              title="Localização UTFPR Apucarana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.745582631465!2d-51.47843798534921!3d-23.541436765344107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd13b88f79371%3A0x6e02d7fc42f2967!2sUTFPR%20-%20C%C3%A2mpus%20Apucarana!5e0!3m2!1spt-BR!2sbr!4v1715979582557!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
