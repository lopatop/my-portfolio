import React from 'react';
import {AboutTitle} from "../../../../components/AboutTitle";
import { S } from '../About_Styles';

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe>
            <AboutTitle>About Me</AboutTitle>
            <S.AboutMeInfo>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</S.AboutMeInfo>
        </S.AboutMe>
    );
};

