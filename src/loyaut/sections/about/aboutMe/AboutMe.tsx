import React from 'react';
import styled from "styled-components";
import {AboutTitle} from "../../../../components/AboutTitle";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <AboutTitle>About Me</AboutTitle>
            <AboutMeInfo>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutMeInfo>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`

`

const AboutMeInfo = styled.p`

`