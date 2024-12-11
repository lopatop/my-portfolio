import React from 'react';

import styled from "styled-components";
import {Link} from "./link/Link";

export const WorkLink = () => {
    return (
        <StyledLink>
            <Link iconId={'link'} viewBox={'0 0 25 25'}  href={'#'} text={'Live Preview'}/>
            <Link iconId={'github'} href={'#'} text={'View Code'}/>
        </StyledLink>

    );
};

const StyledLink = styled.div`
display: flex;
justify-content: space-between;    
`