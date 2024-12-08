import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {InfoWorkOrEducation} from "../InfoWorkOrEducation";

export const MyWork = () => {
    return (
        <StyledMyWork>
            <AboutTitle>Education</AboutTitle>
            <InfoWorkOrEducation name={"Junior Web Developer"}
                                 time={"Full Time"}
                                 place={"Dr.Rajkumars Learning App"}
                                 company={"Bengaluru"}
                                 deadline={"Sep 2021 - Dec 2021"}/>
            <InfoWorkOrEducation name={"Junior Web Developer"}
                                 time={"Full Time"}
                                 place={"Dr.Rajkumars Learning App"}
                                 company={"Bengaluru"}
                                 deadline={"Sep 2021 - Dec 2021"}/>
            <InfoWorkOrEducation name={"Junior Web Developer"}
                                 time={"Full Time"}
                                 place={"Dr.Rajkumars Learning App"}
                                 company={"Bengaluru"}
                                 deadline={"Sep 2021 - Dec 2021"}/>
        </StyledMyWork>
    );
};

const StyledMyWork = styled.div`

`