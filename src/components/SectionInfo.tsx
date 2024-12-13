import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionInfoProps = {
    title: string
    description?: string
    padding?: string

}

export const SectionInfo = (props:SectionInfoProps) => {
    return (
        <TitleWrapper>
            <SectionTitle>{props.title}</SectionTitle>
            <TitleInfo padding={props.padding}>{props.description}</TitleInfo>
        </TitleWrapper>
    );
};



const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 0.54167;
    color: ${theme.colors.textFont};
    

`
const TitleInfo = styled.h3<{padding?: string}>`
    padding: ${props => props.padding || "0px"} ;
    font-weight: 400;
    font-size: 32px;
    line-height: 0.8125;
    color: ${theme.colors.menuFont};
    
`


