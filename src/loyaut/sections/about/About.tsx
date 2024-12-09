import React from 'react';
import styled from "styled-components";
import {MyWork} from "./myWork/MyWork";
import {Education} from "./edycation/Education";
import {AboutMe} from "./aboutMe/AboutMe";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyleAbout>
            <FlexWrapper direction="column">
                <AboutMe/>
                <MyWork/>
                <Education/>
            </FlexWrapper>
        </StyleAbout>
    );
};

const StyleAbout = styled.section`
    border: 1px solid red;
    min-height: 50vh;
    max-width: 770px;
    display: flex;
    justify-content: flex-start;
`

