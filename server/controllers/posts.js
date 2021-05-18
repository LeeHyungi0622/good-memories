import PostMessage from '../models/postMessage';
import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';

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

export const updatePost = async(req, res) => {
    // mongoose id : _id
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('해당 id의 Post가 존재하지 않습니다.');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}

export const deletePost = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('해당 id의 Post가 존재하지 않습니다.');
    await PostMessage.findByIdAndRemove(_id);
    res.json({ message: 'Post deleted successfully' });
}

export const likePost = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('해당 id의 Post가 존재하지 않습니다.');
    const post = await PostMessage.findByIdAndUpdate(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 10 }, { new: true });
    res.json(updatedPost);
}

export const dislikePost = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('해당 id의 Post가 존재하지 않습니다.');
    const post = await PostMessage.findByIdAndUpdate(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount - 10 }, { new: true });
    res.json(updatedPost);
}