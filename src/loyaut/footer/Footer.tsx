import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {items} from "../header/Header";

export const Footer = () => {
    return (
        <StyledFooter>
            <Menu menuItems={items}/>
            <Small>Designed and built by lopatop with Love & Coffee</Small>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: rgba(66, 62, 62, 0.43);
    min-height: 10vh;
    display: flex;
    justify-content: space-between;

`
const Small = styled.small`

`