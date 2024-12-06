import React from 'react';
import styled from "styled-components";

type SectionInfoProps = {
    title: string;
    description: string;

}

export const SectionInfo = (props:SectionInfoProps) => {
    return (
        <TitleWrapper>
            <SectionTitle>{props.title}</SectionTitle>
            <TitleInfo>{props.description}</TitleInfo>
        </TitleWrapper>
    );
};



const TitleWrapper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`
const SectionTitle = styled.h2`

`
const TitleInfo = styled.h3`

`


