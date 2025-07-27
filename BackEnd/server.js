const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true
}));

// Configuração do transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Disponibilizar o transporter para as rotas
app.set('emailTransporter', transporter);

// Verificar conexão com o servidor de email
transporter.verify(function (error, success) {
  if (error) {
    console.error('Erro na configuração do email:', error);
  } else {
    console.log('Servidor pronto para enviar emails');
  }
});

// Importar rotas
const emailRoutes = require('./routes/email');

// Registrar rotas
app.use(emailRoutes);

// Rota de teste
app.get('/teste', (req, res) => {
  res.json({ message: 'API funcionando corretamente!' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});