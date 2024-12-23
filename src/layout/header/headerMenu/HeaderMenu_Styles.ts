import {font} from "../../../styles/Common";
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


//menu
const MenuItem = styled.li`
    transition: transform 0.3s ease;

    :hover {
        transform: translateY(-4px);
    }

    ${font({family: '"DM Sans", sans-serif', weight: 500, Fmax: 20, Fmin: 14})}
`

const LinkItem = styled.a`
    color: ${theme.colors.menuFont};

`


//mobileMenu


const MobileMenu = styled.nav`
    
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css <{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        font-size: 3em;
        line-height: 1.3;


    `}



`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-direction: column;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px
    }

`


const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -80px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.menuFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.menuFont};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}

        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.menuFont};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

//desktopMenu

const DesktopMenu = styled.nav`
    display: flex;

    ul {
        display: flex;
        gap: 60px;

        @media ${theme.media.mobile} {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

        }
    }
`

export const S = {
    LinkItem,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    MenuWrapper,
    BurgerButton,
    DesktopMenu

}