import React from 'react';
import styled from 'styled-components';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import GlobalStyles from './GlobalStyles';

const Container = styled.div`
    border: 1px solid black;
    background-color: blue;
`;

const Header = styled.header`
    border: 1px solid black;
    background-color: yellow;
`;

const Logo = styled.img`
    border: 1px solid black;
    background-color: green;
`;

const Title = styled.h2`
    border: 1px solid black;
    background-color: pink;
    text-align: center;
`;

const ContentsContainer = styled.main`
    display: flex;
    border: 1px solid black;
    background-color: mintcream;
    height: 100vh;
`;

const PostsContainer = styled.aside`
    width: 50vw;
    border: 1px solid black;
    background-color: coral;

`;

const FormContainer = styled.div`
    width: 50vw;
    border: 1px solid black;
    background-color: lightcyan;
`;

const App = () => {
    return (
        <>
            <Container>
                <Header>
                    <Logo src="" alt=""/>
                    <Title>Good memories</Title>
                </Header>
                <ContentsContainer>
                    <PostsContainer>
                        PostContainer
                        <Posts />
                    </PostsContainer>
                    <FormContainer>
                        FormContainer
                        <Form />
                    </FormContainer>
                </ContentsContainer>
            </Container>
            <GlobalStyles />
        </>
    );
};

export default App;