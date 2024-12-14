import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterInfo} from "./footerInfo/FooterInfo";

const itemsFooter = ["Home", "About", "Technologies", "Projects", "Contact"];
const itemsContact =["+91 12345 09876","info@example.com"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledIconContacts>
                    <Logo/>
                    <div>
                        <FooterInfo menuItems={itemsContact}/>
                        <InfoContacts/>
                    </div>
                </StyledIconContacts>
                <FlexWrapper justify={"space-between"}>
                    <Menu menuItems={itemsFooter}/>
                    <DecorationText> Designed and built by Lopatop with Love & Coffee</DecorationText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 200px 0 60px;
    display: flex;
    justify-content: space-between;
    
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
 

`
const StyledIconContacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 93px;
    div{
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
    position: relative;

    ::before {
        content: "";
        display: block;
        width: 1200px;
        height: 2px;
        background: #42446e;
        position: absolute;
        top: 93px;
        left: 10px;
    }


`
const DecorationText = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const SmallText = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    text-align: center;
    color: ${theme.colors.menuFont} !important;
`
