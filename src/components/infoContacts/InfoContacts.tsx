import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type InfoContactsProps = {
    width?: string
    height?: string
    viewBox?: string
}


export const InfoContacts:React.FC<InfoContactsProps> = (props: InfoContactsProps) => {
    return (
        <StyledInfoContacts>
            <li>
                <a href="https://www.instagram.com/lopatop/" target="_blank">
                    <Icon iconId={'instagram'} width={props.width} height={props.height} viewBox={'0 0 45 45'}/>
                </a>
            </li>
            <li>
                <a href="https://t.me/lopatop" target="_blank"><Icon iconId={'telegram'} width={props.width} height={props.height} viewBox={'0 0 32 32'}/></a>
            </li>
            <li>
                <a href="https://github.com/lopatop" target="_blank"><Icon iconId={'githubMenu'} width={props.width} height={props.height} viewBox={'0 0 95 95'}/></a>
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
