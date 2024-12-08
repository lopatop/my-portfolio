import React from 'react';
import styled from "styled-components";
import {PositionWorkOrStudy} from "../../../components/positionWorkOrStudy/PositionWorkOrStudy";
import {CompanyPlaceTime} from "../../../components/companyPlaceTime/CompanyPlaceTime";

type PropsInfoWorkOrEducation = {
    name:string;
    deadline:string;
    company:string;
    place:string;
    time:string;

}


export const InfoWorkOrEducation = (props:PropsInfoWorkOrEducation) => {
    return (
        <StyledInfoWorkOrEducation>
            <PositionWorkOrStudy name={props.name} deadline={props.deadline}/>
            <CompanyPlaceTime company={props.company} place={props.place} time={props.time}/>
        </StyledInfoWorkOrEducation>
    );
};

const StyledInfoWorkOrEducation = styled.div`

`