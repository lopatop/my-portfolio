import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionInfo} from "../../../components/SectionInfo";
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const TechStack = () => {
    return (
        <StyledTechStack id="technologies">
            <Container>
            <SectionInfo title={"My Tech Stack"}
                         description={"Technologies I’ve been working with recently"}
                         padding={"50px 0 125px"}/>
            <FlexWrapper align={"space-around"} wrap={"wrap"}>
                <Skill iconId={"html"} height={"120"} width={"120"} viewBox={"0 0 120 120"} />
                <Skill iconId={"css"} height={"120"} width={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"js"} height={"120"} width={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"ts"} height={"120"} width={"120"} viewBox={"-8 -7.5 120 120"}/>
                <Skill iconId={"react"} height={"120"} width={"120"} viewBox={"-4 -7.5 120 120"}/>
                <Skill iconId={"styled-components"} height={"120"} width={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"webstorm"} height={"120"} width={"120"} viewBox={"0 0 240 240"}/>
                <Skill iconId={"github"} height={"120"} width={"120"} viewBox={"-4 -7.5 95 95"}/>
            </FlexWrapper>
            </Container>
        </StyledTechStack>

    );
};


const StyledTechStack = styled.section`
    padding-top: 200px;
`