import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import connectDB from './db.js';
import { Post } from './model/post.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/blog', async (req, res) => {
  try {
    // Подключение к базе данных MongoDB
    await connectDB();

    // Получение всех постов
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {

    console.error('Error retrieving posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Маршрут для отправки электронной почты
app.post('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lisi4e4ka.nastya@gmail.com',
      pass: 'qhaetdppuwbefpit',
    },
    cookies: {
      sameSite: 'None',
      secure: true,
    },
  });
  // Определите значения для полей формы
  const email = req.body.email;
  const subject = req.body.subject;
  const name = req.body.name;
  const message = req.body.message;

  // Формирование subject с пробелами
  const formattedSubject = `${email} ${subject} ${name}`;

  // Формирование html 
  const html = `
  <h1>Детали письма:</h1>
  <p>Email: ${email}</p>
  <p>Subject: ${subject}</p>
  <p>Name: ${name}</p>
  <p>Message: ${message}</p>
`;

  // Параметры текста письма
  const mailOptions = {
    to: 'lisi4e4ka.nastya@gmail.com',
    subject: formattedSubject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email:' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email successfully sent:' });
    }
  });
});



// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Маршрут для about страницы
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Маршрут для страницы контактов
app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Обработка всех остальных маршрутов
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
