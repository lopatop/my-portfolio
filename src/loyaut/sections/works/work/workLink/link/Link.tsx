import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../../components/icon/Icon";

type LinkPropsType = {
    iconId: string;
    href?: string;
    text:string;

}

export const Link = (props:LinkPropsType) => {
    return (
        <StyledLink>
            <Icon iconId={props.iconId} width={"25"} height={"25"}></Icon>
            <Links href={props.href}>{props.text}</Links>
        </StyledLink>
    );
};

const StyledLink = styled.div`
display: flex;
    gap: 3px
`
const Links = styled.a`

`