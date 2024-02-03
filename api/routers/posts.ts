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

postsRouter.get('/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await fileDb.getItemById(postId);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).send('Internal Server Error');
  }
});

postsRouter.delete('/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    await fileDb.deleteItem(postId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting post');
  }
});

export default postsRouter;