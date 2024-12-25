import React from 'react';
import {S} from './SectionInfo_Styles';

type SectionInfoProps = {
    title: string
    description?: string
    padding?: string

}

export const SectionInfo: React.FC<SectionInfoProps> = (props: SectionInfoProps) => {
    return (
        <S.TitleWrapper>
            <S.SectionTitle>{props.title}</S.SectionTitle>
            <S.TitleInfo padding={props.padding}>{props.description}</S.TitleInfo>
        </S.TitleWrapper>
    );
};






