import React from 'react';
import styled from "styled-components";
import {MyWorks} from "./myWork/MyWorks";
import {Education} from "./education/Education";
import {AboutMe} from "./aboutMe/AboutMe";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyleAbout>
            <Container>
                <AboutWrapper>
            <FlexWrapper direction={"column"} justify={'flex-start'} gap={"38px"}>
                    <AboutMe/>
                    <MyWorks/>
                    <Education/>
            </FlexWrapper>
                </AboutWrapper>
            </Container>
        </StyleAbout>
    );
};

const StyleAbout = styled.section`

`
const AboutWrapper = styled.div`
    border: 1px solid blue;
    min-height: 50vh;
    max-width: 710px;
`

