import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});
const Post = mongoose.model('post', postSchema);
export { Post };
