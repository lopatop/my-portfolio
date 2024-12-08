import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {InfoWorkOrEducation} from "../InfoWorkOrEducation";

export const Education = () => {
    return (
        <StyledEducation>
            <AboutTitle>Work Experience</AboutTitle>
            <InfoWorkOrEducation name={"Bachelor in Electronic"}
                                 time={"Full Time"}
                                 place={"Bangalore Instutute"}
                                 company={"Bengaluru"}
                                 deadline={"Aug 2015 - Dec 2020"}/>
            <InfoWorkOrEducation name={"Bachelor in Electronic"}
                                 time={"Full Time"}
                                 place={"Bangalore Instutute"}
                                 company={"Bengaluru"}
                                 deadline={"Aug 2015 - Dec 2020"}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`


`