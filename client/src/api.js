import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (postId, postData) => axios.put(`${url}/${postId}`, postData);
export const deletePost = (postId) => axios.delete(`${url}/${postId}`);
export const updateLikePost = (postId) => axios.put(`${url}/${postId}/like`);
export const updateDislikePost = (postId) => axios.put(`${url}/${postId}/dislike`);