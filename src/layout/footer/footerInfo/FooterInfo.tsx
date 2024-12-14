import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


type MenuPropsType = {
    menuItems: Array<string>;
}

export const FooterInfo = (props: MenuPropsType) => {
    return (
        <StyledFooterInfo>
            <ul>
                {props.menuItems.map((items, index,) => {
                        return (
                            <ListItem key={index}>
                                <LinkItem href={"#"}>{items}</LinkItem>
                            </ListItem>
                        )
                    }
                )}
            </ul>

        </StyledFooterInfo>
    );
};

const StyledFooterInfo = styled.nav`
    display: flex;
    
    ul {
        display: flex;
        gap: 60px
    }
`
const ListItem = styled.li`

`

const LinkItem = styled.a`
    color: ${theme.colors.menuFont};
`