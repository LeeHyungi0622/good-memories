import { postActionTypes } from './post.types';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case postActionTypes.GET_ALL_POST:
            return action.payload;

        case postActionTypes.CREATE_NEW_POST:
            return [...posts, action.payload];

        case postActionTypes.UPDATE_POST_DATA:
            return posts.map((post) =>
                post._id === action.payload._id ?
                action.payload : post
            );
        case postActionTypes.DELETE_POST_DATA:
            return posts.filter((post) => post._id !== action.payload);
        case postActionTypes.UPDATE_POST_LIKE:
            return posts.map((post) =>
                post._id === action.payload._id ?
                action.payload : post
            );
        case postActionTypes.UPDATE_POST_DISLIKE:
            return posts.map((post) =>
                post._id === action.payload._id ?
                action.payload : post
            );
        default:
            return posts;
    }
};

export default postReducer;