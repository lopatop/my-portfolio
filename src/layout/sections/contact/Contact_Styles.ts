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
const Form = styled.form`
    position: relative;
max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:16px;
    margin: 0 auto;
    textarea{
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
width: 100%;
    background-color: ${theme.colors.fieldBg};
    border: 1px solid ${theme.colors.borderBlock};
    border-radius: 5px;
    padding: 7px 15px;
    ${font({weight: 400, Fmax: 12, Fmin: 12})};
    color: ${theme.colors.textFont};
    &:hover, :focus-visible {
        border: 1px solid ${theme.colors.fieldBorder};
    }
    
    &::placeholder {
        color: ${theme.colors.placeholder};
        text-transform: capitalize;
    }
`

const ButtonForm = styled.button`
    ${font({weight: 400, Fmax: 12, Fmin: 12})};
    border-radius: 5px;
    padding: 7px 15px;
    max-width: 540px;
    width: 100%;
    border: 1px solid rgba(220, 86, 236, 0.82);
    color: black;
    cursor: pointer;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);

    &:hover {
        border: 1px solid rgba(220, 86, 236, 0.82);
        transition: transform 0.3s ease;
        transform: translateY(-4px);
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`


export const S = {
    Contact,
    MyMail,
    Form,
    Field,
    ButtonForm,
}