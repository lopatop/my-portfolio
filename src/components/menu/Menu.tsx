import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
    <StyledMenu>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">TechStack</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>

    </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 20px;
    }
    
`
