import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Установка соединения с базой данных MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log('Успешное подключение к MongoDB');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
