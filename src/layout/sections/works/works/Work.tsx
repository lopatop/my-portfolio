import React from 'react';
import {WorkLink} from "./workLink/WorkLink";
import { S } from '../Works_Styles';

type WorkPropsType = {
    title: string
    descriptionText: string
    descriptionStack: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt=""/>
            <S.CardContainer>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.descriptionText}</S.Text>
                <S.Paragraph>
                    <S.TextStack>Tech stack: </S.TextStack>
                    <S.Technologies>{props.descriptionStack}</S.Technologies>
                </S.Paragraph>
                <WorkLink/>
            </S.CardContainer>
        </S.Work>
    );
};

