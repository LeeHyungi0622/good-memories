import { postActionTypes } from './post.types';
import * as api from '../../api';

export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.getPosts();
        dispatch({ type: postActionTypes.GET_ALL_POST, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: postActionTypes.CREATE_NEW_POST, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (currentId, postData) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(currentId, postData);
        dispatch({ type: postActionTypes.UPDATE_POST_DATA, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (currentId) => async(dispatch) => {
    try {
        await api.deletePost(currentId);
        dispatch({ type: postActionTypes.DELETE_POST_DATA, payload: currentId });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePostLike = (currentId) => async(dispatch) => {
    try {
        const { data } = await api.updateLikePost(currentId);
        dispatch({ type: postActionTypes.UPDATE_POST_LIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePostDislike = (currentId) => async(dispatch) => {
    try {
        const { data } = await api.updateDislikePost(currentId);
        dispatch({ type: postActionTypes.UPDATE_POST_DISLIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};