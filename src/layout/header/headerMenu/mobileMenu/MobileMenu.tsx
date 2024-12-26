import React, {useState} from 'react';
import {InfoContacts} from "../../../../components/infoContacts/InfoContacts";
import { S } from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";

type MenuItem = {
    title: string;
    href: string;
};


export const MobileMenu: React.FC<{menuItems: MenuItem[]}> = ({menuItems}) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    const onMenuItemClick = () => {setmenuIsOpen(false);
    };
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=>{setmenuIsOpen(false)}}>
                    <S.MenuWrapper >
                    <Menu menuItems={menuItems} onMenuItemClick={onMenuItemClick}/>
                    </S.MenuWrapper>
                <InfoContacts width={'50'} height={'50'}  />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

