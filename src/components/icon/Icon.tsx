import React from 'react';
import iconeSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconeSprite}#${props.iconId}`}/>
        </svg>
    );
};

