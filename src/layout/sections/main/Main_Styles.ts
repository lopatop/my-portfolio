import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";



const Main = styled.div`
    padding-top: 75px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    ${font({ weight: 700, Fmin: 36, Fmax: 58 })};
    
    
    //!!!!!!!!!!!! @media${theme.media.desktop}{
    //     ${FlexWrapper}{
    //         flex-direction: column;
    //     }
    //    
    // }
    
`

const MyTitle = styled.h1`
    ${font({ weight: 700, Fmin: 36, Fmax: 58 })};
`
const MyName = styled.h2`
    ${font({ weight: 700, Fmin: 36, Fmax: 58 })};
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;

`
const MyGreet = styled.div`
    color: ${theme.colors.titleFont};
    
`
const Greetings = styled.span`
    ${font({ weight: 700, Fmax: 58, Fmin: 36 })};
    
`
const MyNameIs = styled.h2`
    ${font({ weight: 700, Fmax: 58, Fmin: 36 })};
   
`
const Photo = styled.img`
   
    width: 349px; 
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    
    @media ${theme.media.mobile}{
        width: 280px;
        height: 280px;
        
    }
    
    
`
const DecorationSvg = styled.img`

    @media ${theme.media.desktop}{
       display:none;
    }
    

    @media ${theme.media.mobile} {
       width: 380px;
        height: auto;
    }
`;

const PhotoWrapper = styled.div`
position: relative;
    width: 367px;
    height: 367px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(360deg, #13b0f5 2.6%, #e70faa 100%);
    
    @media ${theme.media.mobile}{
        margin-top: 50px;
        width: 298px;
        height: 298px;
        

    }
    
    &::before {
        content:"";
        width: 367px;
        height: 367px;
        border-radius: 50%;
        
    }
    
`
export const S = {
    Main,
    MyTitle,
    MyName,
    MyGreet,
    Greetings,
    MyNameIs,
    Photo,
    DecorationSvg,
    PhotoWrapper,
}