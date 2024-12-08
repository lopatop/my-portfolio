import React from 'react';
import styled from "styled-components";
import {WorkLink} from "./workLink/WorkLink";

type WorkPropsType = {
    title: string;
    descriptionText: string;
    descriptionStack: string;
    src: string;


}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""  />
            <Title>{props.title}</Title>
            <Text>{props.descriptionText}</Text>
            <TextStack>{`Tech stack : ${props.descriptionStack}`}</TextStack>
            <WorkLink/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: silver;
    max-width:375px;
    width: 100%;
    
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

`

const Title = styled.h3`

`
const TextStack = styled.p`

`
const Text = styled.p`

`