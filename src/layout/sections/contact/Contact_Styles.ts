import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Contact = styled.section`
    padding-top: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.mobile} {
        padding-top: 60px;
    }

`
const QuestionsMail = styled.span`
    ${font({family: '"DM Sans",sans-serif', weight: 700, Fmax: 58, Fmin: 20})}

    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.textFont}
`
const MyMail = styled.a`
    ${font({weight: 400, Fmax: 32, Fmin: 20})};
    text-align: center;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`



export const S = {
    Contact,
    QuestionsMail,
    MyMail,
}