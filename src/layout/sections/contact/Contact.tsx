import React, {ElementRef, useRef} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles';
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {SectionInfo} from "../../../components/sectionInfo/SectionInfo";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs.sendForm('service_uv7ctt5', 'template_uh7zcua', form.current, {
                publicKey: 'aCyJERkWMJ-RBmIuR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contact id="contact">
            <Container>
                <SectionInfo title={"Contacts"}
                             description={"For any questions please mail me:"}
                             padding={"25px 0 135px"}/>
                {/*<S.MyMail href={"mailto:pavellopato327@gmail.com"}>pavellopato327@gmail.com</S.MyMail>*/}

                <FlexWrapper direction={"column"} align={"center"} gap={"10px"} justify={"center"}>


                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <Field required placeholder={"name"} name={'user_name'}/>
                        <Field type={'email'} placeholder={"email"} name={'email'}/>
                        <Field required placeholder={"subject"} name={'subject'}/>
                        <Field required placeholder={"message"} as={"textarea"} name={'message'}/>
                        <ButtonForm type={"submit"}>Submit</ButtonForm>
                    </StyledForm>

                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};

const StyledForm = styled.form`
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
    background-color: ${theme.colors.fieldBg};
    border-radius: 5px;
    padding: 7px 15px;
    max-width: 540px;
    width: 100%;
    border: 1px solid ${theme.colors.borderBlock};
    color: ${theme.colors.placeholder};
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(220, 86, 236, 0.82);
        transition: transform 0.3s ease;
        transform: translateY(-4px);
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`