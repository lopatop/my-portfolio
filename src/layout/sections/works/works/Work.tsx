import React from 'react';
import styled from "styled-components";
import {WorkLink} from "./workLink/WorkLink";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    descriptionText: string
    descriptionStack: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <CardContainer>
                <Title>{props.title}</Title>
                <Text>{props.descriptionText}</Text>
                <Paragraph>
                    <TextStack>Tech stack: </TextStack>
                    <Technologies>{props.descriptionStack}</Technologies>
                </Paragraph>

                <WorkLink/>
            </CardContainer>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background: ${theme.colors.projectFont};
    border-radius: 20px 20px 20px 20px;
    max-width: 375px;
    
    width: 100%;
    
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    
`
const CardContainer = styled.div`
    padding: 28px 28px 25px;
    
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    color: ${theme.colors.textFont};

`
const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${theme.colors.textFont};
    padding-top: 26px;
    
`
const Paragraph = styled.p`

`


const TextStack = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: ${theme.colors.textFont};
    padding-top: 12px;


`

const Technologies = styled.span`
    font-weight: 300;
    font-size: 14px;
    line-height: 1.625;
    color: ${theme.colors.textFont};
`

