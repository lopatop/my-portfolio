import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type PropsCompanyPlaceTime = {
    company: string;
    place:string;
    time:string;

}


export const CompanyPlaceTime = (props:PropsCompanyPlaceTime) => {
    return (
        <StyleCompanyPlaceTime>
            <WrapperCompanyPlace>
                <StyleCompany>
                    <Icon iconId={"office"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                    <DataCompany>{props.company}</DataCompany>
                </StyleCompany>
                <StylePlace>
                    <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                    <DataPlace>{props.place}</DataPlace>
                </StylePlace>
            </WrapperCompanyPlace>
            <StyleTime>
                <Icon iconId={"time"} width={"12px"} height={"12px"} viewBox={"0 0 12px 12px"} />
                <DataTime>{props.time}</DataTime>
            </StyleTime>
        </StyleCompanyPlaceTime>
    );
};

const StyleCompanyPlaceTime = styled.div`
    display: flex;
    justify-content: space-between;

`
const WrapperCompanyPlace = styled.div`
    display: flex;
    justify-content: space-between;
max-width: 50%;
`

const StyleCompany = styled.div`
display: flex;
    align-items: center;

`
const StylePlace = styled.div`
    display: flex;

    align-items: center;

`
const StyleTime = styled.div`
    display: flex;
    align-items: center;
`
const DataCompany = styled.p`

`

const DataPlace = styled.p`

`

const DataTime = styled.p`

`