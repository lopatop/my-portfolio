import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";




export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <MyGreet>
                    <span>Hi 👋,</span>
                    <h2>My name is</h2>
                    <MyName>Pavel Lapata</MyName>
                    <MyTitle>A Frontend Developer</MyTitle>
                </MyGreet>
                <Photo src={photo} alt='my-photo'/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: silver;
`

const Photo = styled.img`
    border-radius: 230px;
    width: 350px;
    height: 350px;
    object-fit: cover;
    
`
const MyTitle = styled.h1`

`
const MyName = styled.h2`

`
const MyGreet = styled.div`

`