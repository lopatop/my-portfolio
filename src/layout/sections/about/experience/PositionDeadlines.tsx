import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Experience_Styles';


type PropsPosition = {
    name: string;
    deadline: string;
}

export const PositionDeadlines: React.FC<PropsPosition> = (props: PropsPosition) => {
    return (
        <S.PositionDeadlines>
            <FlexWrapper justify="space-between">
                <S.Position>{props.name}</S.Position>
                <S.Deadlines>{props.deadline}</S.Deadlines>
            </FlexWrapper>
        </S.PositionDeadlines>
    );
};

