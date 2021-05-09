import PostMessage from '../models/postMessage';
import 'regenerator-runtime/runtime';

export const getPost = async(req, res) => {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);

};

export const createPost = async(req, res) => {
    const newPost = PostMessage.create(req.body);
    res.status(201).json(newPost);
};