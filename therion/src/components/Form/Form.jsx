import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form-container">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default Form;