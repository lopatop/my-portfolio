import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {Experience} from "../experience";



export const MyWorks = () => {
    return (
        <StyledMyWorks>
            <AboutTitle>Education</AboutTitle>
            <Experience name={"Junior Web Developer"}
                        time={"Sep 2021 - Dec 2021"}
                        place={"Dr.Rajkumars Learning App"}
                        company={"Bengaluru"}
                        deadline={"Full Time" }/>
            <Experience name={"Junior Web Developer"}
                        time={"Sep 2021 - Dec 2021"}
                        place={"Dr.Rajkumars Learning App"}
                        company={"Bengaluru"}
                        deadline={"Full Time" }/>
            <Experience name={"Junior Web Developer"}
                        time={"Sep 2021 - Dec 2021"}
                        place={"Dr.Rajkumars Learning App"}
                        company={"Bengaluru"}
                        deadline={"Full Time" }/>
        </StyledMyWorks>
    );
};

const StyledMyWorks = styled.div`

`