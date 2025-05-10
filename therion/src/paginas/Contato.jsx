import React, { useState } from 'react';
import styles from '../components/componentsContato/containerContato.module.css';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});
  const [enviando, setEnviando] = useState(false);

  const formatarTelefone = (valor) => {
    const numero = valor.replace(/\D/g, '').slice(0, 11);
    const parte1 = numero.slice(0, 2);
    const parte2 = numero.slice(2, 7);
    const parte3 = numero.slice(7, 11);

    if (numero.length <= 2) return `(${parte1}`;
    if (numero.length <= 7) return `(${parte1}) ${parte2}`;
    return `(${parte1}) ${parte2}-${parte3}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setFormData({ ...formData, [name]: formatarTelefone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validar = () => {
    const novosErros = {};
    if (!formData.nome.trim()) novosErros.nome = 'Nome é obrigatório';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) novosErros.email = 'Email inválido';
    if (formData.telefone.replace(/\D/g, '').length < 10) novosErros.telefone = 'Telefone incompleto';
    if (!formData.mensagem.trim()) novosErros.mensagem = 'Mensagem é obrigatória';
    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;

    setEnviando(true);

    try {
      await addDoc(collection(db, 'contatos'), {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        mensagem: formData.mensagem,
        timestamp: serverTimestamp()
      });

      alert('Formulário enviado com sucesso!');
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      setErrors({});
    } catch (err) {
      alert('Erro ao enviar formulário.');
      console.error('Erro ao gravar no Firestore:', err); // Veja o log do erro
    }

    setEnviando(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        {errors.nome && <small style={{ color: 'red' }}>{errors.nome}</small>}

        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        {errors.telefone && <small style={{ color: 'red' }}>{errors.telefone}</small>}

        <label>Mensagem:</label>
        <textarea
          name="mensagem"
          rows="4"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        {errors.mensagem && <small style={{ color: 'red' }}>{errors.mensagem}</small>}

        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'ENVIAR'}
        </button>
      </form>
    </div>
  );
}

export default Contato;
