import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles';


export const Contact: React.FC = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                    <S.QuestionsMail>For any questions please mail me:</S.QuestionsMail>
                    <S.MyMail href={"mailto:pavellopato327@gmail.com"}>pavellopato327@gmail.com</S.MyMail>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};

