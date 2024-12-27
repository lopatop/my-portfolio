import React from 'react';
import { S } from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";

type MenuItem = {
    title: string;
    href: string;
};


export const DesktopMenu: React.FC<{menuItems: MenuItem[]}> = ({menuItems}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};

