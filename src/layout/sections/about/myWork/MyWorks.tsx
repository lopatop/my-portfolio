import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {Experience} from "../experience";
import {FlexWrapper} from "../../../../components/FlexWrapper";



export const MyWorks = () => {
    return (
        <StyledMyWorks>
            <FlexWrapper direction="column" justify="space-between" gap="30px">
            <AboutTitle>Work Experience</AboutTitle>
                <Experience name={"Junior Web Developer"}
                            time={"Sep 2021 - Dec 2021"}
                            place={"Bengaluru"}
                            company={"Dr.Rajkumars Learning App"}
                            deadline={"Full Time" }/>
                <Experience name={"Junior Web Developer"}
                            time={"Sep 2021 - Dec 2021"}
                            place={"Bengaluru"}
                            company={"Dr.Rajkumars Learning App"}
                            deadline={"Full Time" }/>
                <Experience name={"Junior Web Developer"}
                            time={"Sep 2021 - Dec 2021"}
                            place={"Bengaluru"}
                            company={"Dr.Rajkumars Learning App"}
                            deadline={"Full Time" }/>

            </FlexWrapper>
        </StyledMyWorks>
    );
};

const StyledMyWorks = styled.div`

`