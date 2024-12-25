import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

type LogoPropsType ={
    logo?:string
}



export const Logo = (props:LogoPropsType) => {
    return (
        <a onClick ={() =>{scroll.scrollToTop()}}>
            <Icon iconId ={props.logo ||'logo'} height={'60'} width={'150'} viewBox={'35 -17 50 50'}/>
        </a>
    );
};
