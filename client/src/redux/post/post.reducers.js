import { postActionTypes } from './post.types';

export const postReducer = (posts = [], action) => {
    switch (action.type) {
        case postActionTypes.FETCH_ALL:
            {
                return posts;
            }
        case postActionTypes.CREATE:
            {
                return posts;
            }
        default:
            return posts
    };
};

export default postReducer;