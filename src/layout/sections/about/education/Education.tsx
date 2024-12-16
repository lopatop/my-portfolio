import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {Experience} from "../experience";

export const Education = () => {
    return (
        <StyledEducation>
            <AboutTitle>Education</AboutTitle>
            <Experience name={"Bachelor in Electronic"}
                        time={"Aug 2015 - Dec 2020"}
                        place={"Bangalore Instutute"}
                        company={"Bengaluru"}
                        deadline={"Full Time"}/>
            <Experience name={"Bachelor in Electronic"}
                        time={"Aug 2015 - Dec 2020"}
                        place={"Bangalore Instutute"}
                        company={"Bengaluru"}
                        deadline={"Full Time"}/>
            <Experience name={"Bachelor in Electronic"}
                        time={"Aug 2015 - Dec 2020"}
                        place={"Bangalore Instutute"}
                        company={"Bengaluru"}
                        deadline={"Full Time"}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`
display: flex;
flex-direction: column;
    gap: 30px;
`