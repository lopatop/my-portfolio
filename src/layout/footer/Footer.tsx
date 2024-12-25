import React from 'react';
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu";
import {Logo} from "../../components/logo/Logo";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';


const itemsFooter = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Technologies",
        href: "technologies"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.IconContacts>
                    <Logo logo={"logoFooter"}/>
                    <InfoContacts/>
                </S.IconContacts>
                <FlexWrapper justify={"space-between"} wrap="wrap" gap="55px" align="center">
                    <DesktopMenu menuItems={itemsFooter}/>
                    <S.DecorationText> <span>Designed and built by</span> lopatop <span>with</span> Love <span>&</span>Coffee</S.DecorationText>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
