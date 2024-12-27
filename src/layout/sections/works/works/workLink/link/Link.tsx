import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import {S} from '../../../Works_Styles';

type LinkPropsType = {
    iconId: string;
    href?: string;
    text: string;
    viewBox?: string

}

export const Link: React.FC<LinkPropsType> = (props: LinkPropsType) => {
    return (
        <S.Link>
            <Icon iconId={props.iconId} width={"25"} height={"25"} viewBox={props.viewBox}></Icon>
            <S.Links href={props.href}>{props.text}</S.Links>
        </S.Link>
    );
};

