import React from 'react';
import styled from "styled-components";
import {InfoContacts} from "../infoContacts/InfoContacts";

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
        <InfoContacts/>
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
