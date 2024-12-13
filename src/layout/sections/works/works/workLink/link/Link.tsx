import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../../components/icon/Icon";
import {theme} from "../../../../../../styles/Theme";

type LinkPropsType = {
    iconId: string;
    href?: string;
    text:string;
    viewBox?:string

}

export const Link = (props:LinkPropsType) => {
    return (
        <StyledLink>
            <Icon iconId={props.iconId} width={"25"} height={"25"} viewBox={props.viewBox}></Icon>
            <Links href={props.href}>{props.text}</Links>
        </StyledLink>
    );
};

const StyledLink = styled.div`
display: flex;
    gap: 3px
`
const Links = styled.a`
    font-weight: 400;
    font-size: 16px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.titleFont};
    
`