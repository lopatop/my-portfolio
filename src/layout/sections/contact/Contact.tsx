import React, {ElementRef, useRef} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles';
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
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={"name"} name={'user_name'}/>
                        <S.Field type={'email'} placeholder={"email"} name={'email'}/>
                        <S.Field required placeholder={"subject"} name={'subject'}/>
                        <S.Field required placeholder={"message"} as={"textarea"} name={'message'}/>
                        <S.ButtonForm type={"submit"}>Submit</S.ButtonForm>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};

