import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Posts from './components/Posts/Posts';
import Form from './components/Form';
import GlobalStyles from './GlobalStyles';
import mainLogo from './images/good_memories.jpeg';
import { getPosts } from './redux/post/post.actions';
import { useDispatch } from 'react-redux';


const SAppBar = styled(AppBar)`
    position: static;
    display: flex;
    background: white;
    width: 100%;
    color: inherit;
    border-radius: 15;
    & > img {
        display: inline-block;
        height: 200px;
        margin: 0 auto;
        text-align: center;
    }
`;

const Title = styled(Typography)`
    text-align: center;
    font-weight: 700;
    font-size: 30px;
`;

const MainWrapper = styled(Container)`
    margin: 25px 0 0 0;
`;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);
    
    return (
        <>
            <Container maxWidth="lg">
                <SAppBar>
                    <img src={mainLogo} alt="메인 로고 이미지"/>
                    <Title>당신의 소중한 추억을 기록하세요.</Title>
                </SAppBar>
                <Grow in>
                    <MainWrapper>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                        </Grid>
                    </MainWrapper>
                </Grow>
            </Container>
            <GlobalStyles />
        </>
    );
};

export default App;