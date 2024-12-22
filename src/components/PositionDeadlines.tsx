import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


type PropsPosition = {
    name: string;
    deadline: string;

}

export const PositionDeadlines = (props:PropsPosition) => {
    return (
        <StyledPositionDeadlines>
            <FlexWrapper justify="space-between" >
                <Position>{props.name}</Position>
                <Deadlines>{props.deadline}</Deadlines>
            </FlexWrapper>
        </StyledPositionDeadlines>
    );
};

const StyledPositionDeadlines = styled.div`
    height: 30px;


`

const Position = styled.span`
    ${font({ weight: 400, Fmin: 18, Fmax: 20 })};
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${theme.colors.textFont};
`

const Deadlines = styled.div`
    font-weight: 600;
    font-size: 9px;
    line-height: 2.88889;
    text-align: center;
    color: #018c0f;
    border-radius: 100px;
    width: 84px;
    height: 24px;
    background: #d7ffe0;
    
`