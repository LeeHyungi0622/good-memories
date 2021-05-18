import PostMessage from '../models/postMessage';
import 'regenerator-runtime/runtime';

export const getPost = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async(req, res) => {
    try {
        const newPost = await PostMessage.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};