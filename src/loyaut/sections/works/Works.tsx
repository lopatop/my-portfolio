import React from 'react';
import styled from "styled-components";
import {SectionInfo} from "../../../components/SectionInfo";
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/photo.webp";


export const Works = () => {
    return (
        <StyledWorks>
            <SectionInfo title={"Projects"}
                         description={"Things I’ve built so far"}/>
            <Wrapper>
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
                    <Work src={socialImg}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>
            </FlexWrapper>
            </Wrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: rgba(140, 136, 161, 0.79);

`
const Wrapper = styled.div`

`