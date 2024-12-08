import React from 'react';
import styled from "styled-components";

type PropsPositionWorkOrStydy = {
    name: string;
    deadline: string;

}

export const PositionWorkOrStudy = (props:PropsPositionWorkOrStydy) => {
    return (
        <StyledPositionWorkOrStudy>
            <Position>{props.name}</Position>
            <Deadlines>{props.deadline}</Deadlines>
            </StyledPositionWorkOrStudy>
    );
};

const StyledPositionWorkOrStudy = styled.div`
display: flex;
    justify-content: space-between;

`

const Position = styled.span`

`

const Deadlines = styled.span`

`