import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";

type PropsLocalization = {
    company: string;
    place:string;
    time:string;

}


export const Localization = (props:PropsLocalization) => {
    return (
        <StyleLocalization>
            <WrapperLocalization>
                <FlexWrapper align="center" gap="8px" >
                    <Icon iconId={"office"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                    <DataCompany>{props.company}</DataCompany>
                </FlexWrapper>
                <FlexWrapper align="center" gap="8px">
                    <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                    <DataPlace>{props.place}</DataPlace>
                </FlexWrapper>
            </WrapperLocalization>
            <FlexWrapper align="center" gap="8px">
                <Icon iconId={"time"} width={"16px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                <DataTime>{props.time}</DataTime>
            </FlexWrapper>
        </StyleLocalization>
    );
};

const StyleLocalization = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
    color: ${theme.colors.menuFont}
    

`
const WrapperLocalization = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 50%;
`

const DataCompany = styled.p`
    

`

const DataPlace = styled.p`

`

const DataTime = styled.p`

`