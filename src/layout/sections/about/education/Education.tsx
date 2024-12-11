import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {Experience} from "../experience";

export const Education = () => {
    return (
        <StyledEducation>
            <AboutTitle>Work Experience</AboutTitle>
            <Experience name={"Bachelor in Electronic"}
                        time={"Full Time"}
                        place={"Bangalore Instutute"}
                        company={"Bengaluru"}
                        deadline={"Aug 2015 - Dec 2020"}/>
            <Experience name={"Bachelor in Electronic"}
                        time={"Full Time"}
                        place={"Bangalore Instutute"}
                        company={"Bengaluru"}
                        deadline={"Aug 2015 - Dec 2020"}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`


`