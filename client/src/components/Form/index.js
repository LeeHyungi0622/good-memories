import React, { useState ,useCallback, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/post/post.actions';

const Form = ({ currentId, setCurrentId }) => {

    const INITIAL_POST_STATE = {
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    }
    const [postData, setPostData] = useState(INITIAL_POST_STATE);

    const onChangeFormData = useCallback((e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        })
    },[postData]);

    const post = useSelector((state) => currentId ? 
                                        state.posts.find((p) => p._id === currentId) :
                                        null);
    useEffect(() => {
        if(post) setPostData(post)
    }, [post]);

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
    },[currentId, postData, dispatch]);

    const clear = useCallback((e) => {

    },[]);

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">추억 기록하기</Typography>
                <TextField className={classes.textfield} name="creator" variant="outlined" label="작성자" fullWidth value={postData.creator} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="title" variant="outlined" label="제목" fullWidth value={postData.title} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="message" variant="outlined" label="메시지" fullWidth value={postData.message} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="tags" variant="outlined" label="태그" fullWidth value={postData.tags} onChange={onChangeFormData} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        name="selectedFile"
                        multiple={false}
                        onDone={onChangeFormData}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>등록하기</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>내용 초기화</Button>
            </form>
        </Paper>
    );
};

export default Form;