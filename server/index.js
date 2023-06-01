import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connectDB from './db.js';
import { Post } from './model/post.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Маршрут для главной страницы

// Middleware для перенаправления на соответствующую страницу при изменении языка
app.use((req, res, next) => {
  const { lang } = req.query;

  if (lang && lang === 'ua') {
    // Перенаправление на украинскую версию страницы
    return res.redirect(`/${lang}${req.originalUrl}`);
  } else if (req.path === '/') {
    // Перенаправление на английскую версию главной страницы
    return res.redirect('/en');
  }

  next();
});

// Маршрут для главной страницы на английском языке
app.get('/en', (req, res) => {
  const filePath = path.join(__dirname, '..', 'dist', 'index.html');
  res.sendFile(filePath);
});

// Маршрут для главной страницы на украинском языке
app.get('/ua', (req, res) => {
  const filePath = path.join(__dirname, '..', 'dist', 'index.html');
  res.sendFile(filePath);
});

// Маршрут для страницы контактов
app.get('/:lang/contacts', (req, res) => {
  const { lang } = req.params;

  if (lang === 'ua') {
    const filePath = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(filePath);
  } else {
    const filePath = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(filePath);
  }
});

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
// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, '..', 'dist', 'index.html');

//   res.sendFile(filePath);
// });

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
