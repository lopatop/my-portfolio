import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";

export const items = ["Home","About","TechStack","Projects","Contact"];



export const Header = () => {
    return (
        <StyledHeder>
            <Logo/>
            <Menu menuItems={items}/>
            <InfoContacts/>
        </StyledHeder>
    );
};


const StyledHeder = styled.header`
    background-color: rgba(147, 145, 145, 0.3);
    display: flex;
    justify-content: space-between;

`