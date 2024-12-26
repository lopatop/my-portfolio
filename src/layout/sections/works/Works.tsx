import React from 'react';
import {SectionInfo} from "../../../components/sectionInfo/SectionInfo";
import {Work} from "./works/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Img1 from "../../../assets/images/image1.webp";
import Img2 from "../../../assets/images/image2.webp";
import Img3 from "../../../assets/images/image3.webp";
import {Container} from "../../../components/Container";
import { S } from './Works_Styles';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const workData = [
    {
        src: Img1,
        title:'Project Tile goes here',
        descriptionText:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        descriptionStack:'HTML , JavaScript, SASS, React'
    },
    {
        src: Img2,
        title:'Project Tile goes here',
        descriptionText:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        descriptionStack:'HTML , JavaScript, SASS, React'
    },
    {
        src: Img3,
        title:'Project Tile goes here',
        descriptionText:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        descriptionStack:'HTML , JavaScript, SASS, React'
    },

]


export const Works: React.FC = () => {
    return (
        <S.Works id="projects">
            <Container>
                <SectionInfo title={"Projects"}
                             description={"Things I’ve built so far"}
                             padding={"25px 0 110px"}/>
                <GridContainer>

                    {workData.map((w, index) => {
                        return <Work src={w.src}
                                     title={w.title}
                                     descriptionText={w.descriptionText}
                                     descriptionStack={w.descriptionStack}
                                     key={index}/>
                    })}
                </GridContainer>
            </Container>
        </S.Works>
    );
};


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    row-gap: 60px;
    column-gap: 35px;
    justify-self: center;
    
    @media ${theme.media.desktop}{
        grid-template-columns: repeat(2, 1fr);
};
    @media ${theme.media.tablet}{
        grid-template-columns: repeat(2, 1fr);
        row-gap: 35px;
    }
    @media ${theme.media.mobile}{
        grid-template-columns: repeat(1, 1fr);
        
    }
`