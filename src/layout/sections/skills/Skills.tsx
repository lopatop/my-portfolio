import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionInfo} from "../../../components/SectionInfo";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import { S } from './Skills_Styles';


const skillData = [
    {
        iconId: "html",
        viewBox:"0 0 120 120"
    },
    {
        iconId: "css",
        viewBox:"0 0 120 120"
    },
    {
        iconId: "js",
        viewBox:"0 0 120 120"
    },
    {
        iconId: "ts",
        viewBox: "-8 -7.5 120 120"
    },
    {
        iconId: "react",
        viewBox: "-4 -7.5 120 120"
    },
    {
        iconId: "styled-components",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "webstorm",
        viewBox: "0 0 240 240"
    },
    {
        iconId: "github",
        viewBox: "-4 -7.5 95 95"
    },

]

export const Skills = () => {
    return (
        <S.Skills id="technologies">
            <Container>
            <SectionInfo title={"My Tech Stack"}
                         description={"Technologies I’ve been working with recently"}
                         padding={"25px 0 135px"}/>
                {/*<Zoom damping={0.2} duration={2000}>*/}
            <FlexWrapper align={"space-around"} wrap={"wrap"}>
                {skillData.map((s,index) => {
                    return <Skill iconId={s.iconId} viewBox={s.viewBox} height={'120'} width={'120'} key={index}/>
                })}

            </FlexWrapper>
                {/*</Zoom>*/}
            </Container>
        </S.Skills>

    );
};


