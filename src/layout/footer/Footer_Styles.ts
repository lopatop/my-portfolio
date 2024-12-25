import styled from "styled-components";
import {font} from "../../styles/Common";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    padding: 140px 0 60px;
    display: flex;
    justify-content: space-between;
    ${font({weight: 400, Fmax: 18, Fmin: 10})}
    line-height: 1.44444;

    ${FlexWrapper} {
        align-items: center;
    }

    @media ${theme.media.mobile} {
        padding: 0 0 30px;
        ${FlexWrapper} {
            flex-direction: column;
            justify-content: center;
            gap: 30px;
        }
    }

`
const IconContacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 75px;


    position: relative;

    ::before {
        content: "";
        display: block;
        width: calc(100% - 10px);
        height: 2px;
        background: #42446e;
        position: absolute;
        top: 93px;
        left: 10px;

    }

    @media ${theme.media.mobile} {
        padding-bottom: 40px;
        ::before {
            top: 70px;
        }
    }

`
const DecorationText = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
        background: none;
        -webkit-text-fill-color: ${theme.colors.menuFont};
    }
`

export const S = {
    Footer,
    IconContacts,
    DecorationText,
}