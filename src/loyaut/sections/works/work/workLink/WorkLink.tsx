import React from 'react';

import styled from "styled-components";
import {Link} from "./link/Link";

export const WorkLink = () => {
    return (
        <StyledLink>
            <Link iconId={'react'} href={'#'} text={'Live Preview'}/>
            <Link iconId={'html'} href={'#'} text={'View Code'}/>
        </StyledLink>

    );
};

const StyledLink = styled.div`
display: flex;
justify-content: space-between;    
`