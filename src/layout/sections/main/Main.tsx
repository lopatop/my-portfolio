import React from 'react';
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import decorationSvg from "../../../assets/images/icons.svg";
import { S } from './Main_Styles';


export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <S.MyGreet>
                        <S.Greetings>Hi 👋,</S.Greetings>
                        <S.MyNameIs>My name is</S.MyNameIs>
                        <S.MyName>Pavel</S.MyName>
                        <S.MyTitle>A Frontend Developer</S.MyTitle>
                    </S.MyGreet>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt='my-photo'/>
                            <S.DecorationSvg src={decorationSvg} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
