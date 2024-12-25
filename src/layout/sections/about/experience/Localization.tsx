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
                    <Icon iconId={"office"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"}/>
                    <S.DataCompany>{props.company}</S.DataCompany>
                </FlexWrapper>
                <FlexWrapper align="center" gap="8px">
                    <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"}/>
                    <S.DataPlace>{props.place}</S.DataPlace>
                </FlexWrapper>
            </S.WrapperLocalization>
            <FlexWrapper align="center" gap="8px">
                <Icon iconId={"time"} width={"14px"} height={"12px"} viewBox={"4 4 16px 16px"}/>
                <S.DataTime>{props.time}</S.DataTime>
            </FlexWrapper>
        </S.Localization>
    );
};
