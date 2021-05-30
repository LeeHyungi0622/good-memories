import React, { useCallback, useState } from 'react';
import { Card, CardContent, CardMedia, Button, Typography, CardActions } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, updatePostLike, updatePostDislike } from '../../../redux/post/post.actions';

const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    
    const moreButtonClick = useCallback(() => {
        setCurrentId(post._id);
    }, [post, setCurrentId]);

    const onClickDelete = useCallback(() => {
        dispatch(deletePost(post._id));
    }, [dispatch, post._id]);

    const onClickUpdateLike = useCallback(() => {
        console.log('like updated');
        dispatch(updatePostLike(post._id));
    },[dispatch, post._id]);

    const onClickUpdateDislike = useCallback(() => {
        console.log('dislike update');
        dispatch(updatePostDislike(post._id));
    }, []);

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={moreButtonClick}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterButton>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={onClickUpdateLike}>
                    <EmojiEmotionsIcon color="primary" fontSize="large"/>
                </Button>
                <Typography variant="body1" color="textPrimary" className={classes.score}>{post.likeCount}</Typography>
                <Button size="small" color="primary" onClick={onClickUpdateDislike}>
                    <SentimentVeryDissatisfiedIcon color="secondary" fontSize="large"/>
                </Button>
                <Button size="small" style={{ color: 'green'}} onClick={onClickDelete}>
                    <DeleteIcon fontSize="large"/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;