import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log('post :', posts);
    return ( 
        <Post>
            <h1>Posts</h1> 
            <Post/>
            <Post/>
        </Post>
    );
};

export default Posts;