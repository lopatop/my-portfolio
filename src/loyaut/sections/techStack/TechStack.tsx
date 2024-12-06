import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionInfo} from "../../../components/SectionInfo";
import styled from "styled-components";
import {Skill} from "./skill/Skill";

export const TechStack = () => {
    return (
        <StyledTechStack>
            <SectionInfo title={"My Tech Stack"}
                         description={"Technologies I’ve been working with recently"} />
            <FlexWrapper wrap={"wrap"}
                         justify={'space-around'}>
                <Skill iconId={"html"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"ts"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"redux"}/>
                <Skill iconId={"bootstrap"}/>
                <Skill iconId={"styled-components"}/>
                <Skill iconId={"github"}/>
                <Skill iconId={"git"}/>
                <Skill iconId={"vscode"}/>
                <Skill iconId={"bootstrap"}/>
            </FlexWrapper>
        </StyledTechStack>

    );
};


const StyledTechStack = styled.div`
    min-height: 100vh;
    background-color: #8a8989;

`