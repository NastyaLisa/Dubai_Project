import cloudinary from 'cloudinary';

// Configuration
cloudinary.config({
  cloud_name: 'dgj2v5vn3',
  api_key: '199718542776134',
  api_secret: 'Ai39I0bkpiR0e_eDGtyq1OyDi1k',
});

// Upload

const uploadImages = async () => {
  try {
    const uploads = [];

    for (let i = 1; i <= 12; i++) {
      const imagePath = `../src/assets/images/Blog/blog${i}.webp`;

      const upload = cloudinary.uploader.upload(imagePath, {
        folder: '', // Имя папки на Cloudinary, куда будут загружены изображения
        public_id: `image_${i}`,
      });

      uploads.push(upload);
    }

    const results = await Promise.all(uploads);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

uploadImages();