import { postActionTypes } from './post.types';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case postActionTypes.GET_ALL_POST:
            return action.payload;

        case postActionTypes.CREATE_NEW_POST:
            return [action.payload, ...posts];

        case postActionTypes.UPDATE_POST_DATA:
            return posts.map((post) =>
                post._id === action.payload._id ?
                action.payload : post
            );
        default:
            return posts;
    }
};

export default postReducer;