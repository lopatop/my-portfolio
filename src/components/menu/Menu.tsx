import React from 'react';
import styled from "styled-components";



type MenuPropsType ={
    menuItems: Array<string>;
}

export const Menu = (props: MenuPropsType) => {
    return (
    <StyledMenu>
        <ul>
            {props.menuItems.map((items, index,) => {
                return (
                    <li key={index}>
                        <a href={`/${items}`}>{items}</a>
                    </li>
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
        gap: 20px;
    }
`
