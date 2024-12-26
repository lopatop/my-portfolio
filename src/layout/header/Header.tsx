import React, {useEffect, useState} from 'react';
import {Logo} from "../../components/logo/Logo";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import logoHeader from "../../assets/images/logoHeader.svg"
import {LogoHeader} from "../../components/logo/LogoHeader";


export const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Tech Stack",
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

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1100;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const [showBackGround, setShowBackGround] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            (window.scrollY > 100)? setShowBackGround(true): setShowBackGround(false)
            }
        );
    })



        return (
            <S.Header className={showBackGround ? 'backGround' : ''}>
                <Container >
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <LogoHeader/>
                        {width < breakpoint ? (
                            <MobileMenu menuItems={items}/>
                        ) : (
                            <S.InfoWrapper>
                                <DesktopMenu menuItems={items}/>
                                <InfoContacts/>
                            </S.InfoWrapper>
                        )
                        }
                    </FlexWrapper>
                </Container>
            </S.Header>
    );
};

