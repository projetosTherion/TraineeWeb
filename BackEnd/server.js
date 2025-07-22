import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Configurar __dirname para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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


// Configuração correta do transporte de email com Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificar conexão com o servidor de email
transporter.verify(function (error, success) {
  if (error) {
    console.error('Erro na configuração do email:', error);
  } else {
    console.log('Servidor pronto para enviar emails');
  }
});

// Rota para envio de email
app.post('/enviar-email', async (req, res) => {
  const { nome, email, telefone, mensagem, assunto } = req.body;

  try {
    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios'
      });
    }

    // Configurar email com dados do Gmail, não do Ethereal
    const mailOptions = {
      from: `"Formulário de Contato" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      replyTo: email,
      subject: assunto || `Novo contato do site - ${nome}`,
      html: `
        <h2>Novo contato recebido do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${mensagem.replace(/\n/g, '<br>')}
        </div>
      `
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado com sucesso:', info.messageId);
    
    res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar email', 
      error: error.message
    });
  }
});

// Rota de teste
app.get('/teste', (req, res) => {
  res.json({ message: 'API funcionando corretamente!' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});