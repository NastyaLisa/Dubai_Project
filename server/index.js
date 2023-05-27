import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
// import mongoose from 'mongoose';
import connectDB from './db.js';
import { Post } from './model/post.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', function (req, res) {
  res.send('home');
});
app.get('/about', function (req, res) {
  res.send('about');
});
// Подключение к базе данных MongoDB
connectDB()
  .then(() => {
    // Маршрут для получения всех постов
    app.get('/blog', async (req, res) => {
      try {
        // Получение всех постов из базы данных
        const posts = await Post.find();
        res.json(posts);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
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

      const mailOptions = {
        to: 'lisi4e4ka.nastya@gmail.com',
        subject: `${req.body.email}${req.body.subject}${req.body.name}`,
        html: `<b>${req.body.message}</b>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res
            .status(500)
            .json({ message: 'Ошибка при отправке электронной почты' });
        } else {
          console.log('Email sent: ' + info.response);
          res
            .status(200)
            .json({ message: 'Электронная почта успешно отправлена' });
        }
      });
    });

    
  

    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Ошибка при подключении к базе данных:', error);
  });
