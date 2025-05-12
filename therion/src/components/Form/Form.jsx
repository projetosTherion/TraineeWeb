import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Seu email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensagem: </label>
        <textarea id="message" name="message" placeholder="Sua mensagem" rows="5" required></textarea>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default Form;