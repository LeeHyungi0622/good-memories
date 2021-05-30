import React, { useState ,useCallback, useEffect, useMemo } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/post/post.actions';

const Form = ({ currentId, setCurrentId }) => {
    const INITIAL_POST_STATE = useMemo(() => {
        return {
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        }
    },[]);
    const [postData, setPostData] = useState(INITIAL_POST_STATE);
    const dispatch = useDispatch();
    const classes = useStyles();
    const post = useSelector((state) => currentId ? 
                                        state.posts.find((p) => p._id === currentId) :
                                        null);
    useEffect(() => {
        if(post) setPostData(post)
    }, [post]);
    
    const onChangeFormData = useCallback((e) => {
            const { name, value } = e.target;
            setPostData({
                ...postData,
                [name]: value
            })
    },[postData]);

    const onChangeFileData = useCallback(({base64}) => {
        setPostData({
            ...postData,
            'selectedFile': base64
        })
    }, [postData]);

    const onChangeTags = useCallback((e) => {
        const { value } = e.target;
        setPostData({
            ...postData,
            tags: value.split(',')
        });
    },[postData, setPostData]);

    const clear = useCallback(() => {
        setCurrentId(null);
        setPostData(INITIAL_POST_STATE);
    },[setCurrentId, INITIAL_POST_STATE]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        // currentId가 null인 경우, 새로운 Post를 추가한다.
        if(currentId === null){
            dispatch(createPost(postData));
            clear();
        // currentId가 null이 아닌경우, 
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    },[postData, dispatch, clear, currentId]);

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">추억 기록하기</Typography>
                <TextField className={classes.textfield} name="creator" variant="outlined" label="작성자" fullWidth value={postData.creator} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="title" variant="outlined" label="제목" fullWidth value={postData.title} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="message" variant="outlined" label="메시지" fullWidth value={postData.message} onChange={onChangeFormData} />
                <TextField className={classes.textfield} name="tags" variant="outlined" label="태그" fullWidth value={postData.tags} onChange={onChangeTags} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={onChangeFileData}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>등록하기</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>내용 초기화</Button>
            </form>
        </Paper>
    );
};

export default Form;