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
        console.log(error);
    }
}