import React from 'react';
import styled from "styled-components";
import {SectionInfo} from "../../../components/SectionInfo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";

import {InfoContacts} from "../../../components/infoContacts/InfoContacts";


export const Contact = () => {
    return (
        <StyleContact>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionInfo title={"For any questions please mail me:"}/>
                <MyMail href={"pavellopato327@gmail.com"}>pavellopato327@gmail.com</MyMail>
            </FlexWrapper>
                <StyledIconContacts>
                    <Logo/>
                    <InfoContacts/>
                </StyledIconContacts>


        </StyleContact>
    );
};

const StyleContact = styled.section`
    min-height: 30vh;
    background-color: rgba(181, 163, 163, 0.78);

`
const MyMail = styled.a`

`

const StyledIconContacts = styled.div`
    display: flex;
    justify-content: space-between;
    
`