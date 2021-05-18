import React, { useState ,useCallback } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/post/post.actions';

const Form = () => {
    const [creator, onChangeCreator] = useInput('');
    const [title, onChangeTitle] = useInput('');
    const [message, onChangeMessage] = useInput('');
    const [tags, onChangeTags] = useInput('');
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();

    const onChangeSelectedFile = ({base64}
        ) => {
        setSelectedFile(base64);
    };

    const classes = useStyles();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const newPost = {
            title,
            creator,
            message,
            tags,
            selectedFile
        }
        dispatch(createPost(newPost));
    },[title, creator, message, tags, selectedFile, dispatch]);

    const clear = useCallback((e) => {

    },[]);

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">추억 기록하기</Typography>
                <TextField className={classes.textfield} name="creator" variant="outlined" label="작성자" fullWidth value={creator} onChange={onChangeCreator} />
                <TextField className={classes.textfield} name="title" variant="outlined" label="제목" fullWidth value={title} onChange={onChangeTitle} />
                <TextField className={classes.textfield} name="message" variant="outlined" label="메시지" fullWidth value={message} onChange={onChangeMessage} />
                <TextField className={classes.textfield} name="tags" variant="outlined" label="태그" fullWidth value={tags} onChange={onChangeTags} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={onChangeSelectedFile}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>등록하기</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>내용 초기화</Button>
            </form>
        </Paper>
    );
};

export default Form;