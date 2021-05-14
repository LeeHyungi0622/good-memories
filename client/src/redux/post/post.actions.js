import { postActionTypes } from './post.types';
import * as api from '../../api';

export const getPosts = () = async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: postActionTypes.FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const addPosts = (data) => {
    return {
        type: postActionTypes.CREATE,
        payload: data
    }
}