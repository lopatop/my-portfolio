import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PositionDeadlines} from "./PositionDeadlines";
import {S} from './Experience_Styles';
import {Localization} from "./Localization";



type PropsInfoWorkOrEducation = {
    name: string;
    deadline: string;
    company: string;
    place: string;
    time: string;
}


export const Experience: React.FC<PropsInfoWorkOrEducation> = (props: PropsInfoWorkOrEducation) => {
    return (
        <S.Experience>
            <FlexWrapper direction="column" wrap="wrap">
                <PositionDeadlines name={props.name} deadline={props.deadline}/>
                <Localization company={props.company} place={props.place} time={props.time}/>
            </FlexWrapper>
        </S.Experience>
    );
};


