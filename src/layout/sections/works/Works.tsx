import React from 'react';
import styled from "styled-components";
import {SectionInfo} from "../../../components/SectionInfo";
import {Work} from "./works/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/photo.webp";
import {Container} from "../../../components/Container";


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionInfo title={"Projects"}
                         description={"Things I’ve built so far"}
                         padding={"50px 0 115px"}/>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <Work src={socialImg}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>
                    <Work src={socialImg}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>
                    <Work src={socialImg}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>

            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding-top: 200px;
    min-height: 100vh;

`
