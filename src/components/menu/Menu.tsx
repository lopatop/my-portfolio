import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type MenuPropsType = {
    menuItems: Array<string>;
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
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

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;

    ul {
        display: flex;
        gap: 55px;
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