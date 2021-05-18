import { postActionTypes } from './post.types';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case postActionTypes.GET_ALL_POST:
            return action.payload;

        case postActionTypes.CREATE_NEW_POST:
            return [...posts, action.payload];
        default:
            return posts;
    }
};

export default postReducer;