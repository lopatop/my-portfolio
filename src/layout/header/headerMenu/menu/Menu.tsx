import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((items, index,) => {
                    return (
                        <S.MenuItem key={index}>
                            <S.LinkItem href={`#${items.toLowerCase()}`}>{items}</S.LinkItem>
                        </S.MenuItem>
                    )
                }
            )}
        </ul>
    );
};

