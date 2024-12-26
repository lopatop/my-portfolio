import React from 'react';
import {S} from '../HeaderMenu_Styles'

type MenuItem = {
    title: string;
    href: string;
};

type MenuProps = {
    menuItems: MenuItem[];
    onMenuItemClick?: () => void; // Новый проп
};

export const Menu: React.FC<MenuProps> = ({menuItems, onMenuItemClick}) => {
    return (
        <ul >
            {menuItems.map((items, index,) => {
                    return (
                        <S.MenuItem key={index} >
                            <S.LinkItem
                                to={items.href}
                                smooth={true}
                                spy={true}
                                offset={-50}
                                onClick={onMenuItemClick}
                            >
                                {items.title}
                            </S.LinkItem>
                        </S.MenuItem>
                    )
                }
            )}
        </ul>
    );
};

