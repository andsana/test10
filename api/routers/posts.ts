import { PostWithoutId } from '../types';
import fileDb from '../fileDb';
import { Router } from 'express';
import { imagesUpload } from '../multer';

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
  const posts = await fileDb.getItems();
  res.send(posts);
});

postsRouter.post('/', imagesUpload.single('image'), async (req, res) => {

  const contentText = req.body.content;

  if (!contentText) {
    return res.status(400).send('Post is required.');
  }

  const post: PostWithoutId = {
    title: req.body.title || 'Anonymous',
    content: contentText,
    image: req.file ? req.file.filename : null,
    dateTime: (new Date()).toISOString(),
  };

  const newPost = await fileDb.addItem(post);
  res.send(newPost);
});

export default postsRouter;