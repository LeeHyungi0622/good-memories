import express from 'express';
import { getPost, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts';
import cors from 'cors';

const postRouter = express.Router();

postRouter.get('/', getPost);
postRouter.post('/', createPost);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);
postRouter.put('/:id/like', likePost);
postRouter.put('/:id/dislike', dislikePost);

export default postRouter;