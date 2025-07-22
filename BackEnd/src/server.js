const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do transporter do Nodemailer
const transporter = nodemailer.createTransporter({
  service: 'gmail', // ou outro provedor
  auth: {
    user: 'teste@gmail.com', // puxar email do front
  }
});

// Rota para processar o formulário
app.post('/enviar-email', async (req, res) => {
  try {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos os campos obrigatórios devem ser preenchidos' 
      });
    }

    // Salvar dados localmente (opcional)
    try {
      const dadosContato = {
        nome,
        email,
        telefone,
        assunto,
        mensagem,
        timestamp: new Date().toISOString()
      };

      const arquivoContatos = path.join(__dirname, 'contatos.json');
      let contatos = [];

      // Ler contatos existentes
      try {
        const dados = await fs.readFile(arquivoContatos, 'utf8');
        contatos = JSON.parse(dados);
      } catch (err) {
        // Arquivo não existe ainda, criar array vazio
        contatos = [];
      }

      // Adicionar novo contato
      contatos.push(dadosContato);

      // Salvar de volta no arquivo
      await fs.writeFile(arquivoContatos, JSON.stringify(contatos, null, 2));
      console.log('Contato salvo localmente');
    } catch (saveError) {
      console.error('Erro ao salvar localmente:', saveError);
      // Não interrompe o processo se falhar ao salvar
    }

    // Configuração do email
    const mailOptions = {
      from: 'teste@gmail.com',
      to: process.env.EMAIL_DESTINO,
      subject: assunto || `Nova mensagem de ${nome}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${assunto || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small>
      `,
      replyTo: email
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email enviado com sucesso!' 
    });

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor' 
    });
  }
});

// Rota de teste
app.get('/test', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

// Rota para listar contatos (opcional)
app.get('/contatos', async (req, res) => {
  try {
    const arquivoContatos = path.join(__dirname, 'contatos.json');
    const dados = await fs.readFile(arquivoContatos, 'utf8');
    const contatos = JSON.parse(dados);
    
    res.json({ 
      success: true, 
      contatos: contatos.reverse() // mais recentes primeiro
    });
  } catch (error) {
    res.json({ 
      success: true, 
      contatos: [] 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;