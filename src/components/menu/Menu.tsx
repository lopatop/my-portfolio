import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";



type MenuPropsType ={
    menuItems: Array<string>;
}

export const Menu = (props: MenuPropsType) => {
    return (
    <StyledMenu>
        <ul>
            {props.menuItems.map((items, index,) => {
                return (
                    <ListItem key={index}>
                        <LinkItem href={`/${items}`}>{items}</LinkItem>
                    </ListItem>
            )}
            )}
        </ul>

    </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    gap: 20px;
    ul{
        display: flex;
        gap: 55px;
    }
`
const ListItem = styled.li`

`

const LinkItem = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: ${theme.colors.menuFont};
`