import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const InfoContacts = () => {
    return (
        <StyledInfoContacts>
            <li>
                <a href=""><Icon iconId={'instagram'} width={'30'} height={'30'} viewBox={'0 0 45 45'}/></a>
            </li>
            <li>
                <a href=""><Icon iconId={'telegram'} width={'30'} height={'30'} viewBox={'0 0 32 32'}/></a>
            </li>
            <li>
                <a href=""><Icon iconId={'githubMenu'} width={'30'} height={'30'} viewBox={'0 0 95 95'}/></a>
            </li>
        </StyledInfoContacts>
    );
};

const StyledInfoContacts = styled.ul`
    display: flex;
    gap: 20px;
    
    li{
        transition: transform 0.3s ease;
        &:hover{
            transform: translateY(-4px);
        }
    }
   
    
`
