import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";


export const Contact = () => {
    return (
        <StyleContact id="contact">
            <Container>
            <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                <QuestionsMail>For any questions please mail me:</QuestionsMail>
                <MyMail href={"mailto:pavellopato327@gmail.com"}>pavellopato327@gmail.com</MyMail>
            </FlexWrapper>
            </Container>
        </StyleContact>
    );
};

const StyleContact = styled.section`
  padding-top: 110px;

    @media ${theme.media.mobile} {
        padding-top: 60px;
    }

`
const QuestionsMail = styled.span`
    ${font({family:'"DM Sans",sans-serif', weight:700, Fmax:58, Fmin:20})}
 
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.textFont}
`

const MyMail = styled.a`
    ${font({family:'"DM Sans",sans-serif', weight:700, Fmax:58, Fmin:20})}

    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

