import express from 'express';
import { getPost, createPost } from '../controllers/posts';

const postRouter = express.Router();

postRouter.get('/', getPost);
postRouter.post('/', createPost);

export default postRouter;