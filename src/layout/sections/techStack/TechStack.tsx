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
                <Skill iconId={"html"} height={"120"} width={"120"} viewBox={"0 0 120 120"} />
                <Skill iconId={"css"} height={"120px"} width={"120px"} viewBox={"0px 0px 40px 40px"}/>
                <Skill iconId={"js"} height={"120px"} width={"120px"} viewBox={"0px 0px 40px 40px"}/>
                <Skill iconId={"ts"} height={"120px"} width={"120px"} viewBox={"0px 0px 40px 40px"}/>
                <Skill iconId={"react"} height={"120px"} width={"120px"} viewBox={"0px 0px 40px 40px"}/>
                <Skill iconId={"styled-components"} height={"120"} width={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"vscode"} height={"120px"} width={"120px"} viewBox={"0px 0px 40px 40px"}/>
                {/*<Skill iconId={"webstorm"}/>*/}
                <Skill iconId={"github"} height={"120px"} width={"120px"} viewBox={"0px 0px 100px 100px"}/>

            </FlexWrapper>
        </StyledTechStack>

    );
};


const StyledTechStack = styled.section`
    min-height: 50vh;

`