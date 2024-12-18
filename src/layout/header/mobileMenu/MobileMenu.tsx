import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {InfoContacts} from "../../../components/infoContacts/InfoContacts";


type MenuPropsType = {
    menuItems: Array<string>;
}

export const MobileMenu = (props: MenuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                    <MenuWrapper>
                    <ul>
                        {props.menuItems.map((items, index,) => {
                                return (
                                    <ListItem key={index}>
                                        <LinkItem href={`#${items.toLowerCase()}`}>{items}</LinkItem>
                                    </ListItem>
                                )
                            }
                        )}
                    </ul>
                    </MenuWrapper>
                <InfoContacts/>
            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    @media ${theme.media.desktop}{
        display: none;
    }
    


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
        gap: 20px;

    `}

`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-direction: column;
    ul{
        display: flex;
        flex-direction: column;
        gap:20px
    }

`


const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        color: ${theme.colors.menuFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            color: rgba(255,255,255,0);
    `}
        
        
        &::before{
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            color: ${theme.colors.menuFont};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
    `}
            
        } 
        &::after {
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            color: ${theme.colors.menuFont};
            position: absolute;
            transform: translateY(10px);
            
            ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
    `}
        }
    }
`

const ListItem = styled.li`
    transition: transform 0.3s ease;
    :hover{
        transform: translateY(-4px);
    }

`

const LinkItem = styled.a`
    color: ${theme.colors.menuFont};

 
`