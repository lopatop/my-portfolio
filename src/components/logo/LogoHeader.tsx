import React from 'react';
import logoHeader from "../../assets/images/logoHeader.svg";
import {animateScroll as scroll} from "react-scroll/modules";
import styled from "styled-components";

export const LogoHeader = () => {
    return (
        <StyledLogoHeader onClick ={() =>{scroll.scrollToTop()}}>
            <img src={logoHeader} alt={"logo"}/>
        </StyledLogoHeader>
    );
};

const StyledLogoHeader = styled.a`
    
`