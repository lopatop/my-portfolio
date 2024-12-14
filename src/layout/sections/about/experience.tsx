import React from 'react';
import styled from "styled-components";
import {PositionDeadlines} from "../../../components/positionDeadlines/PositionDeadlines";
import {Localization} from "../../../components/localization/Localization";
import {FlexWrapper} from "../../../components/FlexWrapper";


type PropsInfoWorkOrEducation = {
    name:string;
    deadline:string;
    company:string;
    place:string;
    time:string;

}


export const Experience = (props:PropsInfoWorkOrEducation) => {
    return (
        <StyledExperience>
            <FlexWrapper direction="column" wrap="wrap">
                <PositionDeadlines name={props.name} deadline={props.deadline}/>
                <Localization company={props.company} place={props.place} time={props.time}/>
            </FlexWrapper>

        </StyledExperience>
    );
};

const  StyledExperience = styled.div`
    padding: 0 8px 0 2px;
    position: relative;
    
    ::before {
        content: "";
        display: block;
        width: 696px;
        height: 1px;
        background: #ebeaed;
        position: absolute;
        bottom: 0;
        left: 2px;
    }
`
