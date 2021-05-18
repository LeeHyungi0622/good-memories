import { combineReducers } from 'redux';
import postReducer from './post/post.reducers';

export default combineReducers({
    posts: postReducer
});