import express from 'express';
import { getPost, createPost, updatePost } from '../controllers/posts';
import cors from 'cors';

const postRouter = express.Router();

postRouter.get('/', getPost);
postRouter.post('/', createPost);
postRouter.put('/:id', updatePost);

export default postRouter;