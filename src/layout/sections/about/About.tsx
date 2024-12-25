import React from 'react';
import {MyWorks} from "./myWork/MyWorks";
import {Education} from "./education/Education";
import {AboutMe} from "./aboutMe/AboutMe";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './About_Styles';

export const About: React.FC = () => {
    return (
        <S.About id="about">
            <Container>
                <S.AboutWrapper>
                    <FlexWrapper direction={"column"} justify={'flex-start'} gap={"38px"}>
                        <AboutMe/>
                        <MyWorks/>
                        <Education/>
                    </FlexWrapper>
                </S.AboutWrapper>
            </Container>
        </S.About>
    );
};

