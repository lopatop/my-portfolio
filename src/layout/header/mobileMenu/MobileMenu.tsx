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
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                    <MenuWrapper>
                    <ul>
                        {props.menuItems.map((items, index,) => {
                                return (
                                    <ListItemMobile key={index}>
                                        <LinkItemMobile href={`#${items.toLowerCase()}`}>{items}</LinkItemMobile>
                                    </ListItemMobile>
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
    
    
    
 display: none;

    @media ${theme.media.desktop}{
        display: block;
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
            background-color: rgba(255,255,255,0);
    `}
        
        
        &::before{
            content:"";
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
            content:"";
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

const ListItemMobile = styled.li`
    transition: transform 0.3s ease;
    :hover{
        transform: translateY(-4px);
    }

`

const LinkItemMobile = styled.a`
    color: ${theme.colors.menuFont};

 
`