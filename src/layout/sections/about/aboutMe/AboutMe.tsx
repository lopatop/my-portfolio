import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";
import {theme} from "../../../../styles/Theme";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <AboutTitle>About Me</AboutTitle>
            <AboutMeInfo>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutMeInfo>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
display: flex;
    flex-direction: column;
    gap: 38px
    
`

const AboutMeInfo = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${theme.colors.menuFont}
`