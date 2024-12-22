import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {InfoContacts} from "../../components/infoContacts/InfoContacts";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Common";

const itemsFooter = ["Home", "About", "Technologies", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledIconContacts>
                    <Logo logo={"logoFooter"}/>
                        <InfoContacts/>
                </StyledIconContacts>
                <FlexWrapper justify={"space-between"} wrap="wrap" gap="55px" align="center">
                    <Menu menuItems={itemsFooter}/>
                    <DecorationText> <span>Designed and built by</span> lopatop <span>with</span> Love <span>&</span>Coffee</DecorationText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 140px 0 60px;
    display: flex;
    justify-content: space-between;
    ${font({weight:400, Fmax:18, Fmin:10})}
    line-height: 1.44444;
    
    ${FlexWrapper} {
        align-items: center;
    }
    
    @media ${theme.media.mobile} {
        padding: 0 0 30px;
        ${FlexWrapper} {
            flex-direction: column;
            justify-content: center;
            gap:30px;
        }
    }

`
const StyledIconContacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 75px;
    
    
    position: relative;

    ::before {
        content: "";
        display: block;
        width: calc(100% - 10px);
        height: 2px;
        background: #42446e;
        position: absolute;
        top: 93px;
        left: 10px;
        
    }
    @media ${theme.media.mobile} {
        padding-bottom: 40px;
        ::before{
            top:70px;
        }
    }

`
const DecorationText = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span{
        background: none;
        -webkit-text-fill-color: ${theme.colors.menuFont} ;
    }
`

