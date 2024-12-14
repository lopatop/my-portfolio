import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const items = ["Home","About","TechStack","Projects","Contact"];



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <InfoWrapper>
                        <Menu menuItems={items}/>
                        <InfoContacts/>
                    </InfoWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: transparent;
    padding-top: 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 55px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
`