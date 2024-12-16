import React from 'react';
import styled from "styled-components";
import {SectionInfo} from "../../../components/SectionInfo";
import {Work} from "./works/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";

import Img1 from "../../../assets/images/image1.webp";
import Img2 from "../../../assets/images/image2.webp";
import Img3 from "../../../assets/images/image3.webp";
import {Container} from "../../../components/Container";


export const Works = () => {
    return (
        <StyledWorks id="projects">
            <Container>
            <SectionInfo title={"Projects"}
                         description={"Things I’ve built so far"}
                         padding={"50px 0 115px"}/>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <Work src={Img1}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>
                    <Work src={Img2}
                          title={'Project Tile goes here'}
                          descriptionText={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          descriptionStack={'HTML , JavaScript, SASS, React'}/>
                    <Work src={Img3}
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

`
