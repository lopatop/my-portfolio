import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import decorationSvg from "../../../assets/images/icons.svg";




export const Main = () => {
    return (
        <StyledMain id="home">
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <MyGreet>
                        <Greetings>Hi 👋,</Greetings>
                        <MyNameIs>My name is</MyNameIs>
                        <MyName>Pavel</MyName>
                        <MyTitle>A Frontend Developer</MyTitle>
                    </MyGreet>
                    <PhotoWrapper>
                        <Photo src={photo} alt='my-photo'/>
                        <div>
                            <img src={decorationSvg} alt=""/>
                        </div>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
`


const MyTitle = styled.h1`
    font-weight: 700;
    font-size: 58px;
`
const MyName = styled.h2`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;

`
const MyGreet = styled.div`
    color: ${theme.colors.titleFont};
    
`
const Greetings = styled.span`
    font-weight: 700;
    font-size: 58px;
    
`

const MyNameIs = styled.h2`
    font-weight: 700;
    font-size: 58px;
`

const Photo = styled.img`
   
    width: 349px; 
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    
    
`

const PhotoWrapper = styled.div`
position: relative;
    width: 367px;
    height: 367px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(360deg, #13b0f5 2.6%, #e70faa 100%);
    
    &::before {
        content:"";
        width: 367px;
        height: 367px;
        border-radius: 50%;
        
        
        
    }
    
`