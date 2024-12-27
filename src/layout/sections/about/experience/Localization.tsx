import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Experience_Styles';

type PropsLocalization = {
    company: string;
    place: string;
    time: string;

}


export const Localization: React.FC<PropsLocalization> = (props: PropsLocalization) => {
    return (
        <S.Localization>
            <S.WrapperLocalization>
                <FlexWrapper align="center" gap="8px">
                    <Icon iconId={"office"} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                    <S.DataCompany>{props.company}</S.DataCompany>
                </FlexWrapper>
                <FlexWrapper align="center" gap="8px">
                    <Icon iconId={"location"} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                    <S.DataPlace>{props.place}</S.DataPlace>
                </FlexWrapper>
            </S.WrapperLocalization>
            <FlexWrapper align="center" gap="8px">
                <Icon iconId={"time"} width={"14"} height={"12"} viewBox={"0 0 16 16"}/>
                <S.DataTime>{props.time}</S.DataTime>
            </FlexWrapper>
        </S.Localization>
    );
};
